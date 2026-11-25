import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve(import.meta.dirname, '..');

const indexable = [
  { route: '/', file: 'dist/index.html', expectedCanonical: 'https://denthousemarrakech.com/' },
  { route: '/treatments', file: 'dist/treatments.html', expectedCanonical: 'https://denthousemarrakech.com/treatments' },
  { route: '/packages', file: 'dist/packages.html', expectedCanonical: 'https://denthousemarrakech.com/packages' },
  { route: '/stories', file: 'dist/stories.html', expectedCanonical: 'https://denthousemarrakech.com/stories' },
  { route: '/calculator', file: 'dist/calculator.html', expectedCanonical: 'https://denthousemarrakech.com/calculator' },
  { route: '/journey', file: 'dist/journey.html', expectedCanonical: 'https://denthousemarrakech.com/journey' },
  { route: '/aftercare', file: 'dist/aftercare.html', expectedCanonical: 'https://denthousemarrakech.com/aftercare' },
  { route: '/faqs', file: 'dist/faqs.html', expectedCanonical: 'https://denthousemarrakech.com/faqs' },
  { route: '/privacy', file: 'dist/privacy.html', expectedCanonical: 'https://denthousemarrakech.com/privacy' },
  { route: '/consultation', file: 'dist/consultation.html', expectedCanonical: 'https://denthousemarrakech.com/consultation' },
];

const noindex = [
  'dist/thank-you.html',
  'dist/conversion.html',
  'dist/whatsapp-conversion.html',
  'dist/confirmation.html',
];

const seenTitles = new Set();
const seenDescs = new Set();
const seenCanonicals = new Set();
let errors = 0;

function decode(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

for (const item of indexable) {
  const fullPath = path.join(rootDir, item.file);
  if (!fs.existsSync(fullPath)) {
    console.error('MISSING:', item.file);
    errors++;
    continue;
  }

  // Ensure legacy trailing-slash directory output does not exist for non-root routes
  if (item.route !== '/') {
    const folderIndex = path.join(rootDir, 'dist', item.route.replace(/^\//, ''), 'index.html');
    if (fs.existsSync(folderIndex)) {
      console.error('UNEXPECTED FOLDER INDEX (would trigger 307 redirect):', folderIndex);
      errors++;
    }
  }

  const html = fs.readFileSync(fullPath, 'utf8');
  const title = decode((html.match(/<title>([^<]+)<\/title>/i) || [])[1] || '');
  const desc = decode((html.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || [])[1] || '');
  const canonical = (html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i) || [])[1] || '';
  const robots = (html.match(/<meta\s+name="robots"\s+content="([^"]+)"/i) || [])[1] || '';
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    decode(m[1].replace(/<[^>]+>/g, '').trim())
  );
  const rootMatch = html.match(/<div id="root">([\s\S]*)<\/div>\s*<\/body>/i);
  const rootHtmlLen = rootMatch ? rootMatch[1].length : 0;
  const rootText = rootMatch ? rootMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
  const ldBlocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  const hreflangs = ['en-GB', 'en-IE', 'en', 'x-default'].map(
    (l) => (html.match(new RegExp(`<link\\s+rel="alternate"\\s+hreflang="${l}"\\s+href="([^"]+)"`, 'i')) || [])[1]
  );

  let ldValid = true;
  const ldTypes = [];
  for (const b of ldBlocks) {
    try {
      const parsed = JSON.parse(b[1]);
      if (parsed['@graph']) {
        ldTypes.push(...parsed['@graph'].map((g) => [].concat(g['@type']).join('/')));
      } else {
        ldTypes.push([].concat(parsed['@type']).join('/'));
      }
    } catch (e) {
      ldValid = false;
      console.error('INVALID JSON-LD in', item.file, e.message);
      errors++;
    }
  }

  const ok =
    title.length > 0 &&
    title.length <= 60 &&
    desc.length >= 140 &&
    desc.length <= 155 &&
    canonical === item.expectedCanonical &&
    hreflangs.every((h) => h === item.expectedCanonical) &&
    h1s.length === 1 &&
    rootHtmlLen > 10000 &&
    (item.route === '/' || item.route === '/consultation' ? rootText.length > 2500 : rootText.length > 3000) &&
    ldValid &&
    ldBlocks.length >= 2 &&
    html.includes('AW-18548397646') &&
    html.includes('QU1ZCMLJ568dEM6syIxF') &&
    html.includes('G-084Y9CMNQR') &&
    robots.includes('index') &&
    !seenTitles.has(title) &&
    !seenDescs.has(desc) &&
    !seenCanonicals.has(canonical);

  seenTitles.add(title);
  seenDescs.add(desc);
  seenCanonicals.add(canonical);
  if (!ok) errors++;

  console.log(
    ok ? 'PASS' : 'FAIL',
    item.file.padEnd(23),
    `| title(${title.length}): ${title}`,
    `| desc(${desc.length})`,
    `| h1(${h1s.length})`,
    `| chars: ${rootText.length}`,
    `| LD: [${ldTypes.join(', ')}]`
  );
  if (!ok) {
    console.log('   DEBUG:', {
      titleLen: title.length,
      descLen: desc.length,
      canonical,
      expected: item.expectedCanonical,
      hreflangs,
      h1s,
      rootHtmlLen,
      rootTextLen: rootText.length,
      robots,
    });
  }
}

for (const file of noindex) {
  const fullPath = path.join(rootDir, file);
  if (!fs.existsSync(fullPath)) {
    console.error('MISSING:', file);
    errors++;
    continue;
  }
  const html = fs.readFileSync(fullPath, 'utf8');
  const robots = (html.match(/<meta\s+name="robots"\s+content="([^"]+)"/i) || [])[1] || '';
  const ok = robots === 'noindex, nofollow';
  if (!ok) errors++;
  console.log(ok ? 'PASS' : 'FAIL', file.padEnd(32), '| robots:', robots);
}

// Verify FAQ 1-to-1 match on dist/faqs.html
const faqHtml = fs.readFileSync(path.join(rootDir, 'dist/faqs.html'), 'utf8');
const faqLd = JSON.parse(
  faqHtml.match(/<script id="page-specific-schema-ld"[^>]*>([\s\S]*?)<\/script>/i)[1]
);
const faqNode = faqLd['@graph'].find((n) => n['@type'] === 'FAQPage');
const decodedFaqHtml = decode(faqHtml);
const missingFaqs = faqNode.mainEntity.filter(
  (q) => !decodedFaqHtml.includes(q.name) || !decodedFaqHtml.includes(q.acceptedAnswer.text)
);
console.log(
  missingFaqs.length === 0 ? 'PASS' : 'FAIL',
  'FAQ 1-to-1 match:',
  faqNode.mainEntity.length,
  'questions & answers in BOTH JSON-LD & raw HTML DOM'
);
if (missingFaqs.length > 0) {
  console.error('Missing FAQs:', missingFaqs.map((m) => m.name));
  errors++;
}

process.exit(errors);

