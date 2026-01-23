/**
 * TRIZEL — Minimal Language Switcher
 * Layer-2 Presentation Repository
 * Strictly necessary JavaScript for language selection only
 * No analytics, no tracking, no dynamic logic beyond language selection
 */

(function() {
  'use strict';
  
  // Language configuration
  const LANGUAGES = {
    en: { name: 'English', dir: 'ltr' },
    fr: { name: 'Français', dir: 'ltr' },
    ar: { name: 'العربية', dir: 'rtl' },
    zh: { name: '中文', dir: 'ltr' },
    ru: { name: 'Русский', dir: 'ltr' }
  };
  
  /**
   * Initialize language switcher
   */
  function initLanguageSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    if (!switcher) return;
    
    // Get current language from path (e.g., /en/, /fr/)
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const currentLang = pathParts[0] && LANGUAGES[pathParts[0]] ? pathParts[0] : 'en';
    
    // Set current selection
    switcher.value = currentLang;
    
    // Handle language change
    switcher.addEventListener('change', function(e) {
      const newLang = e.target.value;
      if (newLang && LANGUAGES[newLang]) {
        switchLanguage(newLang);
      }
    });
  }
  
  /**
   * Switch to selected language
   */
  function switchLanguage(lang) {
    // Get current path parts
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    
    // Replace first part (language code) with new language
    if (pathParts[0] && LANGUAGES[pathParts[0]]) {
      pathParts[0] = lang;
    } else {
      pathParts.unshift(lang);
    }
    
    // Construct new path
    const newPath = '/' + pathParts.join('/') + '/';
    
    // Navigate to new language version
    window.location.href = newPath;
  }
  
  /**
   * Set document direction and lang attribute
   */
  function setDocumentLanguage() {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const currentLang = pathParts[0] && LANGUAGES[pathParts[0]] ? pathParts[0] : 'en';
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
      initLanguageSwitcher();
    });
  } else {
    setDocumentLanguage();
    initLanguageSwitcher();
  }
})();
