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
  const STATUS_OK = 'OK';
  const STATUS_ATTENTION = 'ATTENTION';

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
        const normalizedData = normalizeDailyStatus(data);
        renderIndicator(indicatorContainer, normalizedData);
      })
      .catch(error => {
        console.warn('Daily indicator could not load:', error);
        renderLoadError(indicatorContainer);
      });
  }

  function normalizeDailyStatus(data) {
    const requiredFields = ['gate', 'proof_type', 'event_id', 'as_of_utc', 'classification', 'statement'];
    for (const field of requiredFields) {
      if (typeof data[field] !== 'string' || data[field].trim() === '') {
        throw new Error(`Invalid daily status schema: missing ${field}`);
      }
    }

    if (!data.integrity || typeof data.integrity !== 'object') {
      throw new Error('Invalid daily status schema: missing integrity');
    }

    if (typeof data.integrity.checksum_verified !== 'boolean') {
      throw new Error('Invalid daily status schema: missing integrity.checksum_verified');
    }
    if (typeof data.integrity.has_analysis !== 'boolean') {
      throw new Error('Invalid daily status schema: missing integrity.has_analysis');
    }
    if (typeof data.integrity.has_interpretation !== 'boolean') {
      throw new Error('Invalid daily status schema: missing integrity.has_interpretation');
    }

    return {
      status: data.integrity.checksum_verified ? STATUS_OK : STATUS_ATTENTION,
      gate: data.gate,
      proofType: data.proof_type,
      eventId: data.event_id,
      asOfUtc: data.as_of_utc,
      classification: data.classification,
      statement: data.statement,
      sourceRepository: data.source && typeof data.source.repository === 'string' ? data.source.repository : '',
      sourcePath: data.source && typeof data.source.path === 'string' ? data.source.path : '',
      sourceCommit: data.source && typeof data.source.commit === 'string' ? data.source.commit : '',
      hasAnalysis: data.integrity.has_analysis,
      hasInterpretation: data.integrity.has_interpretation,
      checksumVerified: data.integrity.checksum_verified
    };
  }

  function renderLoadError(container) {
    container.innerHTML = `
      <div class="daily-indicator-content">
        <p class="indicator-summary">Daily indicator unavailable. View raw data: <a href="/data/publish/3i-atlas/daily-status.json">daily-status.json</a></p>
      </div>
    `;
  }

  // Render the daily indicator
  function renderIndicator(container, data) {
    const emoji = STATUS_EMOJI[data.status] || '⚪';
    
    container.innerHTML = `
      <div class="daily-indicator-content">
        <div class="indicator-badge">
          <span class="indicator-emoji" aria-hidden="true">${emoji}</span>
          <span class="indicator-status">${escapeHtml(data.status)}</span>
        </div>
        <div class="indicator-details">
          <p class="indicator-designation"><strong>${escapeHtml(data.classification)}</strong> (${escapeHtml(data.eventId)})</p>
          <p class="indicator-summary">${escapeHtml(data.statement)}</p>
          <p class="indicator-timestamp">
            <small>As of: ${escapeHtml(data.asOfUtc)}</small>
          </p>
          <div class="indicator-meta">
            <span class="meta-tag">Gate: ${escapeHtml(data.gate)}</span>
            <span class="meta-tag">Type: ${escapeHtml(data.proofType)}</span>
            <span class="meta-tag">Checksum Verified: ${escapeHtml(String(data.checksumVerified))}</span>
          </div>
          <div class="indicator-meta">
            <span class="meta-tag">Analysis: ${escapeHtml(String(data.hasAnalysis))}</span>
            <span class="meta-tag">Interpretation: ${escapeHtml(String(data.hasInterpretation))}</span>
          </div>
          <div class="indicator-meta">
            <span class="meta-tag">Source Repo: ${escapeHtml(data.sourceRepository)}</span>
            <span class="meta-tag">Source Commit: ${escapeHtml(data.sourceCommit)}</span>
          </div>
          <div class="indicator-meta">
            <span class="meta-tag">Source Path: ${escapeHtml(data.sourcePath)}</span>
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
