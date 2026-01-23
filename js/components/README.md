# TRIZEL JS Components (Phase H1-C)

This directory contains optional JavaScript components for progressive enhancement.

## Constraints

- **NO external network calls** (no fetch, XHR, beacons, analytics)
- **NO tracking or telemetry**
- **NO external CDNs or remote assets**
- Site must work without JavaScript
- JS only enhances UX

## Components

- `archive-banner.js` - Displays archive mode notice on non-artifact pages

## Usage

Components are loaded after the main `app.js` file and self-initialize when the DOM is ready.
