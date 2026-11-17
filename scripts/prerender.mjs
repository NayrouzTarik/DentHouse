import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const rootDir = path.resolve(import.meta.dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');
const templatePath = path.join(distDir, 'index.html');

function escapeHtmlAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function applySeoToTemplate(template, seo, appHtml) {
  let html = template;

  const escapedTitleText = escapeHtmlText(seo.title);
  const escapedTitleAttr = escapeHtmlAttr(seo.title);
  const escapedDescAttr = escapeHtmlAttr(seo.description);
  const escapedCanonical = escapeHtmlAttr(seo.canonicalUrl);
  const escapedRobots = escapeHtmlAttr(
    seo.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  );

  // 1. Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, () => `<title>${escapedTitleText}</title>`);

  // 2. Replace <meta name="description" ... />
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?\/>/i,
    () => `<meta name="description" content="${escapedDescAttr}" />`
  );

  // 3. Replace <meta name="robots" ... />
  html = html.replace(
    /<meta\s+name="robots"[\s\S]*?\/>/i,
    () => `<meta name="robots" content="${escapedRobots}" />`
  );

  // 4. Replace <link rel="canonical" ... />
  html = html.replace(
    /<link\s+rel="canonical"[\s\S]*?\/>/i,
    () => `<link rel="canonical" href="${escapedCanonical}" />`
  );

  // 5. Replace hreflang alternate links
  for (const lang of ['en-GB', 'en-IE', 'en', 'x-default']) {
    const pattern = new RegExp(`<link\\s+rel="alternate"\\s+hreflang="${lang}"[\\s\\S]*?\\/>`, 'i');
    html = html.replace(
      pattern,
      () => `<link rel="alternate" hreflang="${lang}" href="${escapedCanonical}" />`
    );
  }

  // 6. Replace OpenGraph & Twitter tags
  html = html.replace(
    /<meta\s+property="og:title"[\s\S]*?\/>/i,
    () => `<meta property="og:title" content="${escapedTitleAttr}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?\/>/i,
    () => `<meta property="og:description" content="${escapedDescAttr}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"[\s\S]*?\/>/i,
    () => `<meta property="og:url" content="${escapedCanonical}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"[\s\S]*?\/>/i,
    () => `<meta name="twitter:title" content="${escapedTitleAttr}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/>/i,
    () => `<meta name="twitter:description" content="${escapedDescAttr}" />`
  );

  // 7. Inject page-specific JSON-LD schema
  const pageSchemaTag = seo.schemaData
    ? `<script id="page-specific-schema-ld" type="application/ld+json">${JSON.stringify(seo.schemaData)}</script>`
    : '';
  html = html.replace(/<!--PAGE_SCHEMA_PLACEHOLDER-->/i, () => pageSchemaTag);

  // 8. Inject pre-rendered React markup into #root
  html = html.replace(
    /<div id="root"><\/div>/i,
    () => `<div id="root">${appHtml}</div>`
  );

  return html;
}

async function run() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Missing client build template at ${templatePath}. Run vite build first.`);
  }

  // Find the compiled SSR entry file (Vite may output .js or .mjs)
  const ssrCandidates = ['entry-server.js', 'entry-server.mjs'];
  const ssrEntryPath = ssrCandidates
    .map((name) => path.join(ssrDir, name))
    .find((p) => fs.existsSync(p));

  if (!ssrEntryPath) {
    throw new Error(`Missing SSR entry bundle in ${ssrDir}. Run vite build --ssr first.`);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const ssrModule = await import(pathToFileURL(ssrEntryPath).href);
  const { render, PRERENDER_ROUTES, NOINDEX_ROUTES, getRouteSEO } = ssrModule;

  const allRoutes = [...PRERENDER_ROUTES, ...NOINDEX_ROUTES];

  console.log(`[prerender] Pre-rendering ${allRoutes.length} routes into dist/...`);

  for (const route of allRoutes) {
    const appHtml = render(route);
    const seo = getRouteSEO(route);
    const fullHtml = applySeoToTemplate(template, seo, appHtml);

    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, `${route.replace(/^\//, '')}.html`);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, fullHtml, 'utf-8');

    const textLen = appHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length;
    console.log(
      `  ✓ ${route.padEnd(22)} -> ${path.relative(rootDir, outPath).padEnd(36)} (${textLen} visible chars)`
    );
  }

  // Clean up temporary SSR build output
  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log('[prerender] Completed cleanly and removed temporary dist-ssr/.');
}

run().catch((err) => {
  console.error('[prerender] Failed:', err);
  process.exit(1);
});

