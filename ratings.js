// ratings.js
// Fetches a simple key=value ratings file and renders stars into
// elements with class "rating" and a `data-hall` attribute.

(function () {
  'use strict';

  // Try a few relative paths so this works whether the page is in /html/
  // or served from a different base.
  const tryPaths = ['../ratings.txt', '/ratings.txt', 'ratings.txt'];

  function parseRatings(text) {
    const map = Object.create(null);
    const lines = text.split(/\r?\n/);
    for (const raw of lines) {
      const line = raw.trim();
      if (!line || line.startsWith('#')) continue;
      const parts = line.split('=');
      if (parts.length !== 2) continue;
      const key = parts[0].trim();
      const val = parseInt(parts[1].trim(), 10);
      if (!Number.isFinite(val)) continue;
      // clamp to 0..5
      map[key] = Math.max(0, Math.min(5, val));
    }
    return map;
  }

  function renderStars(container, rating) {
    const max = 5;
    container.textContent = '';
    // Use the same star glyph for filled and empty, and style via classes
    for (let i = 1; i <= max; i++) {
      const span = document.createElement('span');
      span.className = i <= rating ? 'star filled' : 'star empty';
      span.textContent = '★';
      container.appendChild(span);
    }
    container.setAttribute('aria-label', `${rating} of ${max} stars`);
    container.title = `${rating} of ${max} stars`;
  }

  async function loadAndRender() {
    let text = null;
    for (const p of tryPaths) {
      try {
        const res = await fetch(p, { cache: 'no-cache' });
        if (!res.ok) continue;
        text = await res.text();
        break;
      } catch (e) {
        // try next path
      }
    }

    if (text == null) {
      // nothing found — still try to render default 0s
      console.warn('ratings.js: could not fetch ratings.txt from', tryPaths);
    }

    const ratings = text ? parseRatings(text) : {};

    const els = document.querySelectorAll('.rating[data-hall]');
    els.forEach(el => {
      const hall = (el.getAttribute('data-hall') || '').trim();
      const r = Number.isFinite(ratings[hall]) ? ratings[hall] : 0;
      renderStars(el, r);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndRender);
  } else {
    loadAndRender();
  }

})();
