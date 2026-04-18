/**
 * TRIZEL — Minimal Language Switcher
 * Layer-2 Presentation Repository
 * Strictly necessary JavaScript for language selection only
 * No analytics, no tracking, no dynamic logic beyond language selection
 */

(function() {
  'use strict';
  
  const LANGUAGES = {
    en: { name: 'English', dir: 'ltr' },
    fr: { name: 'Français', dir: 'ltr' },
    de: { name: 'Deutsch', dir: 'ltr' },
    ar: { name: 'العربية', dir: 'rtl' },
    zh: { name: '中文', dir: 'ltr' },
    ru: { name: 'Русский', dir: 'ltr' }
  };
  
  function normalizePath(path) {
    return ('/' + String(path || '').replace(/^\/+|\/+$/g, '')).replace(/\/+/g, '/');
  }

  function getCurrentLang(basePath) {
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (basePath) {
      const baseParts = normalizePath(basePath).split('/').filter(Boolean);
      const offset = baseParts.length;
      const candidate = parts[offset];
      return candidate && LANGUAGES[candidate] ? candidate : 'en';
    }
    return parts[0] && LANGUAGES[parts[0]] ? parts[0] : 'en';
  }

  function buildLocalizedPath(lang, basePath) {
    if (!LANGUAGES[lang]) return window.location.pathname;

    const pathname = window.location.pathname;
    const pathParts = pathname.split('/').filter(Boolean);
    const hasTrailingSlash = pathname.endsWith('/');

    if (basePath) {
      const base = normalizePath(basePath);
      const baseParts = base.split('/').filter(Boolean);
      const offset = baseParts.length;
      const suffixParts = pathParts.slice(offset);
      if (suffixParts[0] && LANGUAGES[suffixParts[0]]) {
        suffixParts[0] = lang;
      } else {
        suffixParts.unshift(lang);
      }
      let next = base + '/' + suffixParts.join('/');
      if (hasTrailingSlash || !suffixParts[suffixParts.length - 1] || suffixParts[suffixParts.length - 1] === lang) {
        next = next.replace(/\/?$/, '/');
      }
      return next;
    }

    if (pathParts[0] && LANGUAGES[pathParts[0]]) {
      pathParts[0] = lang;
    } else {
      pathParts.unshift(lang);
    }

    let nextPath = '/' + pathParts.join('/');
    if (hasTrailingSlash || nextPath.split('/').pop().indexOf('.') === -1) {
      nextPath = nextPath.replace(/\/?$/, '/');
    }
    return nextPath;
  }

  function isSafeInternalPath(path) {
    return typeof path === 'string' && /^\/(?!\/)/.test(path);
  }

  function switchLanguage(lang, basePath) {
    const target = buildLocalizedPath(lang, basePath);
    if (!isSafeInternalPath(target)) return;
    try {
      // Resolve against the current origin using the URL constructor.
      // This is a recognised URL-structure sanitiser: resolving a relative
      // path against an https:// origin makes javascript: / data: injection
      // structurally impossible.  The resulting URL object (not a raw string)
      // is passed to location.assign(), removing the taint flow.
      const safeUrl = new URL(target, window.location.origin);
      window.location.assign(safeUrl);
    } catch (_) {
      // URL construction failed — do nothing.
    }
  }

  function initSelectSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    if (!switcher) return;

    const basePath = switcher.getAttribute('data-base-path') || '';
    const currentLang = getCurrentLang(basePath);
    switcher.value = currentLang;

    switcher.addEventListener('change', function(e) {
      const newLang = e.target.value;
      if (newLang && LANGUAGES[newLang]) {
        switchLanguage(newLang, basePath);
      }
    });
  }

  function initAnchorSwitcher() {
    const links = document.querySelectorAll('.lang-switcher .lang-link[lang]');
    if (!links.length) return;

    const currentLang = getCurrentLang('');
    links.forEach(function(link) {
      const lang = link.getAttribute('lang');
      if (!LANGUAGES[lang]) return;
      link.setAttribute('href', buildLocalizedPath(lang, ''));
      if (lang === currentLang) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
  
  function setDocumentLanguage() {
    const switcher = document.getElementById('lang-switcher');
    const basePath = switcher ? (switcher.getAttribute('data-base-path') || '') : '';
    const currentLang = getCurrentLang(basePath);
    const langConfig = LANGUAGES[currentLang];
    
    if (langConfig) {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = langConfig.dir;
    }
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setDocumentLanguage();
      initSelectSwitcher();
      initAnchorSwitcher();
    });
  } else {
    setDocumentLanguage();
    initSelectSwitcher();
    initAnchorSwitcher();
  }
})();
