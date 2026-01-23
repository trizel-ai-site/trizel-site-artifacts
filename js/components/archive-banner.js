/**
 * TRIZEL — Archive Mode Banner Component (Phase H1-C)
 * Displays notice about static archive mode
 * NO external network calls
 */

(function() {
  'use strict';

  // Create and inject archive mode banner if not already present
  function initArchiveBanner() {
    // Check if banner already exists
    if (document.querySelector('.archive-mode-banner')) {
      return;
    }

    // Only show on non-artifact pages
    if (window.location.pathname.startsWith('/artifacts/')) {
      return;
    }

    const banner = document.createElement('div');
    banner.className = 'archive-mode-banner';
    banner.setAttribute('role', 'note');
    banner.setAttribute('aria-label', 'Archive Mode Notice');
    
    banner.innerHTML = `
      <div class="archive-mode-banner__content">
        <span class="archive-mode-banner__icon" aria-hidden="true">📦</span>
        <div class="archive-mode-banner__text">
          <strong>Archive Mode Available:</strong>
          View the static, immutable artifact archive
          <a href="/artifacts/" class="archive-mode-banner__link">Browse Artifacts →</a>
        </div>
      </div>
    `;

    // Insert at top of body, after skip link if it exists
    const skipLink = document.querySelector('.skip-to-content');
    if (skipLink) {
      // Insert after skip link
      if (skipLink.nextSibling) {
        skipLink.parentNode.insertBefore(banner, skipLink.nextSibling);
      } else {
        skipLink.parentNode.appendChild(banner);
      }
    } else {
      // No skip link, insert at beginning of body
      document.body.insertBefore(banner, document.body.firstChild);
    }

    // Add styles dynamically (inline to avoid external CSS dependency)
    const style = document.createElement('style');
    style.textContent = `
      .archive-mode-banner {
        background: #0f172a;
        color: #cbd5e1;
        padding: 0.75rem 1rem;
        border-bottom: 2px solid #0b5fb8;
        position: sticky;
        top: 0;
        z-index: 1000;
      }
      
      .archive-mode-banner__content {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      
      .archive-mode-banner__icon {
        font-size: 1.25rem;
      }
      
      .archive-mode-banner__text {
        flex: 1;
        font-size: 0.9375rem;
      }
      
      .archive-mode-banner__link {
        color: #60a5fa;
        font-weight: 600;
        margin-left: 0.5rem;
        text-decoration: none;
        border-bottom: 1px solid #60a5fa;
      }
      
      .archive-mode-banner__link:hover {
        color: #93c5fd;
        border-bottom-color: #93c5fd;
      }
      
      @media (max-width: 768px) {
        .archive-mode-banner__text {
          font-size: 0.875rem;
        }
        .archive-mode-banner__icon {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArchiveBanner);
  } else {
    initArchiveBanner();
  }

})();
