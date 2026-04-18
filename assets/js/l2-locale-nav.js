/**
 * Layer-2 Locale & Navigation Enhancer
 * Presentation-only client-side refinements for localized pages.
 */
(function () {
  'use strict';

  var LOCALES = ['en', 'fr', 'de', 'ru', 'zh', 'ar'];
  var LOCALE_STORAGE_KEY = 'trizel.activeLocale';
  var LOCALIZABLE_ROOT_SECTIONS = ['governance', 'status', 'projects', 'lab', 'map', 'overview', 'layer-map', 'phase-f-governance', 'goi'];
  var CANONICAL_ONLY_PATHS = ['/artifacts', '/artifacts/', '/accessibility.html'];
  var TRANSLATIONS = {
    en: {
      skip: 'Skip to main content',
      artifacts: 'Artifacts',
      artifactsCanonicalHint: 'Artifacts (EN canonical)',
      accessibility: 'Accessibility',
      home: 'Home',
      backHome: 'Back to home',
      backParent: 'Back to parent page',
      breadcrumb: 'Breadcrumb'
    },
    fr: {
      skip: 'Aller au contenu principal',
      artifacts: 'Artefacts',
      artifactsCanonicalHint: 'Artefacts (canonique EN)',
      accessibility: 'Accessibilité',
      home: 'Accueil',
      backHome: "Retour à l'accueil",
      backParent: 'Retour à la page parente',
      breadcrumb: 'Fil d’Ariane'
    },
    de: {
      skip: 'Zum Hauptinhalt springen',
      artifacts: 'Artefakte',
      artifactsCanonicalHint: 'Artefakte (EN-Kanonisch)',
      accessibility: 'Barrierefreiheit',
      home: 'Startseite',
      backHome: 'Zur Startseite',
      backParent: 'Zur übergeordneten Seite',
      breadcrumb: 'Brotkrumen-Navigation'
    },
    ru: {
      skip: 'Перейти к основному содержанию',
      artifacts: 'Артефакты',
      artifactsCanonicalHint: 'Артефакты (канон. EN)',
      accessibility: 'Доступность',
      home: 'Главная',
      backHome: 'Назад на главную',
      backParent: 'Назад к родительской странице',
      breadcrumb: 'Навигационная цепочка'
    },
    zh: {
      skip: '跳转到主要内容',
      artifacts: '成果',
      artifactsCanonicalHint: '成果（英文规范页）',
      accessibility: '无障碍',
      home: '首页',
      backHome: '返回首页',
      backParent: '返回上级页面',
      breadcrumb: '面包屑导航'
    },
    ar: {
      skip: 'انتقل إلى المحتوى الرئيسي',
      artifacts: 'النتائج',
      artifactsCanonicalHint: 'النتائج (المسار الأساسي EN)',
      accessibility: 'إمكانية الوصول',
      home: 'الرئيسية',
      backHome: 'العودة إلى الرئيسية',
      backParent: 'العودة إلى الصفحة الأصل',
      breadcrumb: 'مسار التنقل'
    }
  };

  function normPath(path) {
    return String(path || '').replace(/\/+$/, '') || '/';
  }

  function isLocale(value) {
    return LOCALES.indexOf(String(value || '').toLowerCase()) >= 0;
  }

  function extractLocaleFromPath(pathname) {
    var parts = String(pathname || '').split('/').filter(Boolean);
    return isLocale(parts[0]) ? parts[0] : null;
  }

  function getLocaleFromPath() {
    return extractLocaleFromPath(window.location.pathname);
  }

  function getLocaleFromQuery() {
    var params = new URLSearchParams(window.location.search || '');
    var candidate = params.get('locale') || params.get('lang') || params.get('l');
    return isLocale(candidate) ? candidate : null;
  }

  function getLocaleFromStorage() {
    try {
      var stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      return isLocale(stored) ? stored : null;
    } catch (_err) {
      return null;
    }
  }

  function setLocaleInStorage(locale) {
    if (!isLocale(locale)) return;
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch (_err) {
      /* noop */
    }
  }

  function getLocaleFromReferrer() {
    if (!document.referrer) return null;
    try {
      var url = new URL(document.referrer);
      if (url.origin !== window.location.origin) return null;
      return extractLocaleFromPath(url.pathname);
    } catch (_err) {
      return null;
    }
  }

  function detectLocale() {
    return (
      getLocaleFromPath() ||
      getLocaleFromQuery() ||
      getLocaleFromStorage() ||
      getLocaleFromReferrer() ||
      (isLocale(document.documentElement.lang) ? document.documentElement.lang.toLowerCase() : null)
    );
  }

  function parseInternalURL(href) {
    if (!href || href[0] === '#') return null;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return null;
    try {
      var url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return null;
      return url;
    } catch (_err) {
      return null;
    }
  }

  function safeInternalPath(pathname) {
    var value = String(pathname || '');
    if (!value || value[0] !== '/') return null;
    if (value.indexOf('\\') >= 0) return null;
    if (value.indexOf('//') === 0) return null;
    return value;
  }

  function safeInternalHref(pathname, search, hash) {
    var safePath = safeInternalPath(pathname);
    if (!safePath) return null;
    var safeSearch = typeof search === 'string' &&
      search.startsWith('?') &&
      search.indexOf('\\') < 0 &&
      search.indexOf('\n') < 0 &&
      search.indexOf('\r') < 0 ? search : '';
    var safeHash = typeof hash === 'string' &&
      hash.startsWith('#') &&
      hash.indexOf('\\') < 0 &&
      hash.indexOf('\n') < 0 &&
      hash.indexOf('\r') < 0 ? hash : '';
    return safePath + safeSearch + safeHash;
  }

  function setSafeHref(el, pathname, search, hash) {
    if (!el) return;
    var href = safeInternalHref(pathname, search, hash);
    if (!href) return;
    var normalized = parseInternalURL(href);
    if (!normalized) return;
    el.pathname = normalized.pathname;
    el.search = normalized.search;
    el.hash = normalized.hash;
  }

  function withLocalizedPrefix(pathname, locale) {
    var hadTrailingSlash = pathname.endsWith('/');
    var parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0) {
      return '/' + locale + '/';
    }
    if (isLocale(parts[0])) {
      parts[0] = locale;
    } else {
      parts.unshift(locale);
    }
    var rebuilt = '/' + parts.join('/');
    if (hadTrailingSlash && !rebuilt.endsWith('/')) rebuilt += '/';
    return rebuilt;
  }

  function applyLocaleToInternalPath(pathname, locale) {
    var cleanPath = normPath(pathname);
    var parts = cleanPath.split('/').filter(Boolean);
    var first = parts[0] || '';

    if (cleanPath === '/' || cleanPath === '/index.html') {
      return '/' + locale + '/';
    }

    if (cleanPath === '/goi') {
      return '/' + locale + '/goi/';
    }

    if (isLocale(first)) {
      return withLocalizedPrefix(pathname, locale);
    }

    if (LOCALIZABLE_ROOT_SECTIONS.indexOf(first) >= 0) {
      return withLocalizedPrefix(pathname, locale);
    }

    return pathname;
  }

  function setLocaleAwareCanonicalLinks(locale) {
    var returnPath = safeInternalHref(window.location.pathname, window.location.search, window.location.hash) || '/' + locale + '/';

    document.querySelectorAll('a[href="/accessibility.html"], a[href^="/accessibility.html?"]').forEach(function (link) {
      var url = new URL('/accessibility.html', window.location.origin);
      url.searchParams.set('locale', locale);
      url.searchParams.set('return', returnPath);
      link.setAttribute('href', url.pathname + url.search);
    });

    document.querySelectorAll('a[href="/artifacts/"], a[href^="/artifacts/?"]').forEach(function (link) {
      var url = new URL('/artifacts/', window.location.origin);
      url.searchParams.set('locale', locale);
      url.searchParams.set('return', returnPath);
      link.setAttribute('href', url.pathname + url.search);
    });
  }

  function normalizeInternalLinks(locale) {
    document.querySelectorAll('a[href]').forEach(function (anchor) {
      if (anchor.closest('.lang-switcher')) return;
      var url = parseInternalURL(anchor.getAttribute('href'));
      if (!url) return;
      if (CANONICAL_ONLY_PATHS.indexOf(normPath(url.pathname)) >= 0) return;
      var localizedPath = applyLocaleToInternalPath(url.pathname, locale);
      setSafeHref(anchor, localizedPath, url.search, url.hash);
    });
  }

  function t(locale, key) {
    return (TRANSLATIONS[locale] && TRANSLATIONS[locale][key]) || TRANSLATIONS.en[key] || key;
  }

  function setDocumentLanguage(locale) {
    if (!locale) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }

  function localizeSharedLabels(locale) {
    var skip = document.querySelector('.skip-link, .skip-to-content');
    if (skip) skip.textContent = t(locale, 'skip');

    document.querySelectorAll('a[href^="/accessibility.html"]').forEach(function (link) {
      link.textContent = t(locale, 'accessibility');
    });

    document.querySelectorAll('a[href^="/artifacts/"]').forEach(function (link) {
      link.textContent = locale === 'en' ? t(locale, 'artifacts') : t(locale, 'artifactsCanonicalHint');
    });

    document.querySelectorAll('.breadcrumb').forEach(function (crumb) {
      crumb.setAttribute('aria-label', t(locale, 'breadcrumb'));
    });

    var breadcrumbHome = document.querySelector('.breadcrumb a[href="/index.html"], .breadcrumb a[href="/"]');
    if (breadcrumbHome) {
      setSafeHref(breadcrumbHome, '/' + locale + '/');
      breadcrumbHome.textContent = t(locale, 'home');
      breadcrumbHome.setAttribute('aria-label', t(locale, 'backHome'));
    }
  }

  function normalizeLocaleLinks(locale) {
    var localizedHome = '/' + locale + '/';

    document.querySelectorAll('a.brand-link[href="/"]').forEach(function (link) {
      setSafeHref(link, localizedHome);
    });

    document.querySelectorAll('a[href="/goi/"], a[href="/goi"]').forEach(function (link) {
      setSafeHref(link, localizedHome + 'goi/');
    });

    normalizeInternalLinks(locale);
    setLocaleAwareCanonicalLinks(locale);

    var parts = window.location.pathname.split('/').filter(Boolean);
    var pathLocale = parts.length > 0 ? parts[0] : null;
    if (!isLocale(pathLocale)) {
      document.querySelectorAll('.lang-switcher a.lang-link[lang]').forEach(function (a) {
        var targetLang = a.getAttribute('lang');
        if (!isLocale(targetLang)) return;
        setSafeHref(a, '/' + targetLang + '/');
        if (targetLang === locale) {
          a.setAttribute('aria-current', 'page');
        } else {
          a.removeAttribute('aria-current');
        }
      });
      return;
    }

    var relParts = parts.slice(1);
    var hasTrailingSlash = window.location.pathname.endsWith('/');
    var relPath = relParts.join('/');

    document.querySelectorAll('.lang-switcher a.lang-link[lang]').forEach(function (a) {
      var targetLang = a.getAttribute('lang');
      if (!isLocale(targetLang)) return;
      var href = '/' + targetLang + (relPath ? '/' + relPath : '/');
      if (hasTrailingSlash && !href.endsWith('/')) href += '/';
      setSafeHref(a, href);
      if (targetLang === locale) {
        a.setAttribute('aria-current', 'page');
      } else {
        a.removeAttribute('aria-current');
      }
    });
  }

  function buildParentTarget(locale) {
    var breadcrumbLinks = document.querySelectorAll('.breadcrumb a[href]');
    if (breadcrumbLinks.length >= 2) {
      var p = breadcrumbLinks[breadcrumbLinks.length - 1];
      var parsedParent = parseInternalURL(p.getAttribute('href') || '');
      if (parsedParent) {
        return {
          pathname: applyLocaleToInternalPath(parsedParent.pathname, locale),
          search: parsedParent.search,
          hash: parsedParent.hash,
          label: t(locale, 'backParent')
        };
      }
    }
    if (breadcrumbLinks.length === 1) {
      var parsedHome = parseInternalURL(breadcrumbLinks[0].getAttribute('href') || '');
      if (parsedHome) {
        return {
          pathname: applyLocaleToInternalPath(parsedHome.pathname, locale),
          search: parsedHome.search,
          hash: parsedHome.hash,
          label: t(locale, 'backHome')
        };
      }
    }

    var parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length >= 3 && isLocale(parts[0])) {
      return {
        pathname: '/' + parts.slice(0, parts.length - 1).join('/') + '/',
        search: '',
        hash: '',
        label: t(locale, 'backParent')
      };
    }
    return { pathname: '/' + locale + '/', search: '', hash: '', label: t(locale, 'backHome') };
  }

  function addReturnNavigation(locale) {
    var main = document.querySelector('main#main, main.container, main[role="main"]');
    if (!main || main.querySelector('.l2-return-nav')) return;

    var target = buildParentTarget(locale);
    if (!target || !target.pathname) return;

    var nav = document.createElement('nav');
    nav.className = 'l2-return-nav';
    nav.setAttribute('aria-label', t(locale, 'backParent'));

    var link = document.createElement('a');
    link.className = 'l2-return-link';
    setSafeHref(link, target.pathname, target.search, target.hash);
    link.textContent = '← ' + target.label;

    nav.appendChild(link);
    main.insertBefore(nav, main.firstChild);
  }

  function run() {
    var locale = detectLocale();
    if (!locale) return;
    setLocaleInStorage(locale);
    setDocumentLanguage(locale);
    localizeSharedLabels(locale);
    normalizeLocaleLinks(locale);
    addReturnNavigation(locale);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
