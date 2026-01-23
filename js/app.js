/**
 * TRIZEL — Minimal App Entry Point (Phase H1-C)
 * Progressive enhancement: site works without this JS
 * NO external network calls, NO analytics, NO tracking
 */

(function() {
  'use strict';

  // Simple feature detection
  const supports = {
    localStorage: typeof Storage !== 'undefined',
    customElements: 'customElements' in window
  };

  // Simple console greeting (no telemetry)
  console.log('%cTRIZEL Phase H1-C', 'font-size: 20px; font-weight: bold; color: #0b5fb8;');
  console.log('Institutional Scientific Observatory');
  console.log('Progressive Enhancement Active');
  console.log('No Analytics • No Tracking • No External Calls');

  // Optional: Add smooth scroll behavior enhancement
  document.addEventListener('DOMContentLoaded', function() {
    // Enhance anchor links for smooth scrolling (if supported)
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Update URL without triggering navigation
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }
        }
      });
    });

    // Add loaded class to body for CSS hooks
    document.body.classList.add('js-loaded');
  });

  // Expose minimal API for components (no external calls)
  window.TRIZEL = {
    version: 'H1-C',
    supports: supports,
    // Utility: log without external calls
    log: function(message) {
      console.log('[TRIZEL]', message);
    }
  };

})();
