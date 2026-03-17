/**
 * TRIZEL Layer-2 — Data-Driven Dashboard
 * Fetches JSON pipeline outputs and populates the DOM.
 * No frameworks. Pure vanilla JS. GitHub Pages compatible.
 */

'use strict';

// ── Helpers ────────────────────────────────────────────────────

function el(id) { return document.getElementById(id); }

function setHtml(id, html) {
  var node = el(id);
  if (node) node.innerHTML = html;
}

function setText(id, text) {
  var node = el(id);
  if (node) node.textContent = text;
}

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
      timeZone: 'UTC', timeZoneName: 'short'
    });
  } catch (_) { return iso; }
}

function loadingHtml(text) {
  return '<span class="l2-loading">' + (text || 'Loading…') + '</span>';
}

function errorHtml(msg) {
  return '<span class="l2-error">⚠ ' + msg + '</span>';
}

/**
 * Fetch JSON with error handling. Returns parsed JSON or throws.
 */
async function fetchJSON(url) {
  var res = await fetch(url);
  if (!res.ok) throw new Error('HTTP ' + res.status + ' — ' + url);
  return res.json();
}

// ── Page: index.html ───────────────────────────────────────────

async function initDashboard() {
  // Show loading states
  var summaryIds = ['dash-total-days', 'dash-total-records', 'dash-latest-date'];
  summaryIds.forEach(function(id) { setHtml(id, loadingHtml()); });
  setHtml('dash-latest-link', loadingHtml());

  try {
    var summary = await fetchJSON('/public/summary.json');
    setText('dash-total-days', summary.total_days != null ? summary.total_days : '—');
    setText('dash-total-records', summary.total_records != null ? summary.total_records : '—');
    setText('dash-pipeline-version', summary.pipeline_version || '—');
    setText('dash-generated', formatDate(summary.generated_utc));
  } catch (e) {
    ['dash-total-days','dash-total-records','dash-pipeline-version','dash-generated']
      .forEach(function(id) { setHtml(id, errorHtml('Unavailable')); });
  }

  try {
    var latest = await fetchJSON('/public/latest.json');
    setText('dash-latest-date', latest.latest_day || '—');
    setText('dash-record-count', latest.record_count != null ? latest.record_count : '—');
    setHtml('dash-latest-link',
      '<a class="btn btn--outline" href="/public/' + latest.redirect + '">' +
      'Latest Dataset (' + (latest.latest_day || '') + ') →</a>');
  } catch (e) {
    setHtml('dash-latest-date', errorHtml('Unavailable'));
    setHtml('dash-latest-link', errorHtml('Dataset link unavailable'));
  }
}

// ── Page: observations.html ────────────────────────────────────

async function initObservations() {
  var latestSection = el('obs-latest');
  var listEl = el('obs-list');

  if (latestSection) latestSection.innerHTML = loadingHtml('Loading latest dataset…');
  if (listEl) listEl.innerHTML = loadingHtml('Loading observations…');

  // Load latest.json for the "Latest" section
  try {
    var latest = await fetchJSON('/public/latest.json');
    if (latestSection) {
      latestSection.innerHTML =
        '<div class="l2-card">' +
        '<div class="l2-card__label">Latest Dataset</div>' +
        '<div class="l2-card__value">' + (latest.latest_day || '—') + '</div>' +
        '<p class="l2-card__desc" style="margin-top:0.5rem">' +
        (latest.record_count || 0) + ' records · ' +
        (latest.observations ? latest.observations.length : 0) + ' sources' +
        '</p>' +
        '<div style="margin-top:1rem">' +
        '<a class="l2-link-btn" href="/public/' + latest.redirect + '">View JSON →</a>' +
        '</div>' +
        '</div>';
    }
  } catch (e) {
    if (latestSection) latestSection.innerHTML = errorHtml('Could not load latest.json');
  }

  // Load summary.json for the full list
  try {
    var summary = await fetchJSON('/public/summary.json');
    if (!listEl) return;

    if (!summary.days || summary.days.length === 0) {
      listEl.innerHTML = '<p class="l2-loading">No observations found.</p>';
      return;
    }

    // Sort descending (newest first)
    var days = summary.days.slice().sort(function(a, b) {
      return b.date.localeCompare(a.date);
    });

    var rows = days.map(function(d) {
      return '<tr>' +
        '<td>' + d.date + '</td>' +
        '<td>' + (d.record_count || 0) + '</td>' +
        '<td>' + (d.sources ? d.sources.join(', ') : '—') + '</td>' +
        '<td><a href="/public/' + d.path + '" class="l2-link-btn l2-link-btn--outline" style="font-size:0.8rem">JSON →</a></td>' +
        '</tr>';
    }).join('');

    listEl.innerHTML =
      '<div class="l2-table-wrap">' +
      '<table class="l2-table">' +
      '<thead><tr>' +
      '<th>Date</th><th>Records</th><th>Sources</th><th>Data</th>' +
      '</tr></thead>' +
      '<tbody>' + rows + '</tbody>' +
      '</table></div>';
  } catch (e) {
    if (listEl) listEl.innerHTML = errorHtml('Could not load summary.json — ' + e.message);
  }
}

// ── Page: status.html ──────────────────────────────────────────

async function initStatus() {
  setHtml('status-timestamp', loadingHtml());
  setHtml('status-total-datasets', loadingHtml());

  try {
    var summary = await fetchJSON('/public/summary.json');
    setText('status-timestamp', formatDate(summary.generated_utc));
    setText('status-total-datasets', summary.total_days != null ? summary.total_days : '—');
  } catch (e) {
    setHtml('status-timestamp', errorHtml('Unavailable'));
    setHtml('status-total-datasets', errorHtml('Unavailable'));
  }

  try {
    var latest = await fetchJSON('/public/latest.json');
    setText('status-latest-day', latest.latest_day || '—');
  } catch (e) {
    setHtml('status-latest-day', errorHtml('Unavailable'));
  }
}

// ── Router: auto-detect page ───────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  var path = window.location.pathname;

  if (el('dash-total-days')) {
    initDashboard();
  } else if (el('obs-list')) {
    initObservations();
  } else if (el('status-timestamp')) {
    initStatus();
  }
});
