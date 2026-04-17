// STRICT: relative path only – no network ever.
// Gate 2I Daily Indicator - Local JSON only, no external calls

(function() {
  'use strict';

  // Status to emoji mapping (fallback that works without CSS)
  const STATUS_EMOJI = {
    'OK': '🟢',
    'ATTENTION': '🟠',
    'ERROR': '🔴',
    'PAUSED': '⚪'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Fetch daily status from local JSON file ONLY
  function loadDailyStatus() {
    const indicatorContainer = document.getElementById('daily-indicator');
    if (!indicatorContainer) {
      return; // No container, exit gracefully
    }

    // STRICT: Same-origin relative path only
    fetch('/data/publish/3i-atlas/daily-status.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load daily status');
        }
        return response.json();
      })
      .then(data => {
        renderIndicator(indicatorContainer, data);
      })
      .catch(error => {
        console.warn('Daily indicator could not load:', error);
        // Fallback is already visible in HTML (direct JSON link)
      });
  }

  // Render the daily indicator
  function renderIndicator(container, data) {
    const emoji = STATUS_EMOJI[data.status] || '⚪';
    const timestamp = data.as_of_utc;
    
    container.innerHTML = `
      <div class="daily-indicator-content">
        <div class="indicator-badge">
          <span class="indicator-emoji" aria-hidden="true">${escapeHtml(emoji)}</span>
          <span class="indicator-status">${escapeHtml(data.status)}</span>
        </div>
        <div class="indicator-details">
          <p class="indicator-designation"><strong>${escapeHtml(data.designation)}</strong> (${escapeHtml(data.event_id)})</p>
          <p class="indicator-summary">${escapeHtml(data.summary)}</p>
          <p class="indicator-timestamp">
            <small>As of: ${escapeHtml(timestamp)}</small>
          </p>
          <div class="indicator-meta">
            <span class="meta-tag">Gate: ${escapeHtml(data.gate)}</span>
            <span class="meta-tag">Type: ${escapeHtml(data.proof_type)}</span>
          </div>
          <div class="indicator-links">
            <a href="${escapeHtml(data.links.latest)}" class="indicator-link">Latest Data</a>
            <a href="${escapeHtml(data.links.manifest)}" class="indicator-link">Manifest</a>
            <a href="${escapeHtml(data.links.crate)}" class="indicator-link">RO-Crate</a>
          </div>
        </div>
      </div>
    `;
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDailyStatus);
  } else {
    loadDailyStatus();
  }
})();
