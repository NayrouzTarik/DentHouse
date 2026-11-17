import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
import {
  PRERENDER_ROUTES,
  NOINDEX_ROUTES,
  GLOBAL_SCHEMA_GRAPH,
  getRouteSEO,
} from './data/seoConfig';

export { PRERENDER_ROUTES, NOINDEX_ROUTES, GLOBAL_SCHEMA_GRAPH, getRouteSEO };

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}

