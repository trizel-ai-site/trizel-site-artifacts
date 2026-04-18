/**
 * Layer-2 Locale & Navigation Enhancer
 * Presentation-only client-side refinements for localized pages.
 */
(function () {
  'use strict';

  var LOCALES = ['en', 'fr', 'de', 'ru', 'zh', 'ar'];
  var TRANSLATIONS = {
    en: {
      skip: 'Skip to main content',
      artifacts: 'Artifacts',
      accessibility: 'Accessibility',
      home: 'Home',
      backHome: 'Back to home',
      backParent: 'Back to parent page',
      breadcrumb: 'Breadcrumb'
    },
    fr: {
      skip: 'Aller au contenu principal',
      artifacts: 'Artefacts',
      accessibility: 'Accessibilité',
      home: 'Accueil',
      backHome: "Retour à l'accueil",
      backParent: 'Retour à la page parente',
      breadcrumb: 'Fil d’Ariane'
    },
    de: {
      skip: 'Zum Hauptinhalt springen',
      artifacts: 'Artefakte',
      accessibility: 'Barrierefreiheit',
      home: 'Startseite',
      backHome: 'Zur Startseite',
      backParent: 'Zur übergeordneten Seite',
      breadcrumb: 'Brotkrumen-Navigation'
    },
    ru: {
      skip: 'Перейти к основному содержанию',
      artifacts: 'Артефакты',
      accessibility: 'Доступность',
      home: 'Главная',
      backHome: 'Назад на главную',
      backParent: 'Назад к родительской странице',
      breadcrumb: 'Навигационная цепочка'
    },
    zh: {
      skip: '跳转到主要内容',
      artifacts: '成果',
      accessibility: '无障碍',
      home: '首页',
      backHome: '返回首页',
      backParent: '返回上级页面',
      breadcrumb: '面包屑导航'
    },
    ar: {
      skip: 'انتقل إلى المحتوى الرئيسي',
      artifacts: 'النتائج',
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

  function getLocaleFromPath() {
    var parts = window.location.pathname.split('/').filter(Boolean);
    return LOCALES.indexOf(parts[0]) >= 0 ? parts[0] : null;
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

    document.querySelectorAll('a[href="/accessibility.html"]').forEach(function (link) {
      link.textContent = t(locale, 'accessibility');
    });

    document.querySelectorAll('a[href="/artifacts/"]').forEach(function (link) {
      link.textContent = t(locale, 'artifacts');
    });

    document.querySelectorAll('.breadcrumb').forEach(function (crumb) {
      crumb.setAttribute('aria-label', t(locale, 'breadcrumb'));
    });

    var breadcrumbHome = document.querySelector('.breadcrumb a[href="/index.html"], .breadcrumb a[href="/"]');
    if (breadcrumbHome) {
      breadcrumbHome.href = '/' + locale + '/';
      breadcrumbHome.textContent = t(locale, 'home');
      breadcrumbHome.setAttribute('aria-label', t(locale, 'backHome'));
    }
  }

  function normalizeLocaleLinks(locale) {
    var localizedHome = '/' + locale + '/';

    document.querySelectorAll('a.brand-link[href="/"]').forEach(function (link) {
      link.href = localizedHome;
    });

    document.querySelectorAll('a[href="/goi/"]').forEach(function (link) {
      link.href = localizedHome + 'goi/';
    });

    var parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length === 0 || LOCALES.indexOf(parts[0]) < 0) return;

    var relParts = parts.slice(1);
    var hasTrailingSlash = window.location.pathname.endsWith('/');
    var relPath = relParts.join('/');

    document.querySelectorAll('.lang-switcher a.lang-link[lang]').forEach(function (a) {
      var targetLang = a.getAttribute('lang');
      if (LOCALES.indexOf(targetLang) < 0) return;
      var href = '/' + targetLang + (relPath ? '/' + relPath : '/');
      if (hasTrailingSlash && !href.endsWith('/')) href += '/';
      a.href = href;
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
      return { href: p.getAttribute('href'), label: t(locale, 'backParent') };
    }
    if (breadcrumbLinks.length === 1) {
      return { href: breadcrumbLinks[0].getAttribute('href'), label: t(locale, 'backHome') };
    }

    var parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length >= 3 && LOCALES.indexOf(parts[0]) >= 0) {
      return {
        href: '/' + parts.slice(0, parts.length - 1).join('/') + '/',
        label: t(locale, 'backParent')
      };
    }
    return { href: '/' + locale + '/', label: t(locale, 'backHome') };
  }

  function addReturnNavigation(locale) {
    var main = document.querySelector('main#main, main.container, main[role="main"]');
    if (!main || main.querySelector('.l2-return-nav')) return;

    var target = buildParentTarget(locale);
    if (!target || !target.href) return;

    var nav = document.createElement('nav');
    nav.className = 'l2-return-nav';
    nav.setAttribute('aria-label', t(locale, 'backParent'));

    var link = document.createElement('a');
    link.className = 'l2-return-link';
    link.href = target.href;
    link.textContent = '← ' + target.label;

    nav.appendChild(link);
    main.insertBefore(nav, main.firstChild);
  }

  function run() {
    var locale = getLocaleFromPath();
    if (!locale) return;
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
