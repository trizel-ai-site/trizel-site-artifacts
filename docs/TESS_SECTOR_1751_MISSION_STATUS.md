# TESS Sector 1751 — Mission Status and Data Availability

**Document Type:** Mission Status Record  
**Observatory:** NASA Transiting Exoplanet Survey Satellite (TESS)  
**Sector:** 1751 (Special Observation)  
**Target:** Interstellar Comet 3I/ATLAS  
**Last Updated:** 2026-02-19T00:27:22Z  
**Gate Status:** Gate-6 CLOSED

---

## MISSION STATUS

### Safe Mode Event — 2026-01-15

On **2026-01-15**, NASA's Transiting Exoplanet Survey Satellite (TESS) entered safe mode during the special Sector 1751 observation of interstellar comet **3I/ATLAS**.

**Key Details:**
- **Data Collection Completed:** Approximately 18 hours before safe mode entry
- **Data Gap Duration:** Estimated ~2.8 days within Sector 1751
- **Mission Impact:** This anomaly does not alter the planned timeline for resuming nominal sector operations
- **Official Communications:** Confirmed by NASA and TESS Science Support Center

**Timeline:**
- **2026-01-15 06:04:18 UTC** — Observation start
- **2026-01-15 ~23:54:18 UTC** — Approximately 18 hours of data collected
- **2026-01-15** — Safe mode entry
- **2026-01-18 to 2026-01-19** — Additional ~10-hour observation interval

---

## OBSERVATIONAL DATA AVAILABILITY

### 1. Full Frame Images (FFIs)

The first Sector 1751 Full Frame Images are **publicly available** via the Mikulski Archive for Space Telescopes (MAST).

**Coverage:**

**Interval 1:**
- **Duration:** Approximately 18 hours
- **Date:** 2026-01-15
- **Time Range:** 2026-01-15T06:04:18 UTC to 2026-01-15T23:54:18 UTC (approximately)

**Interval 2:**
- **Duration:** Approximately 10 hours
- **Date Range:** 2026-01-18 to 2026-01-19

**Data Products Available:**
- **SPOC-calibrated FFIs** — Science Processing Operations Center calibrated Full Frame Images
- **TICA quick-look FFIs** — TESS Image CAlibrator quick-look Full Frame Images

**Access:**
- Available through official bulk-download endpoints
- Referenced by the TESS Science Support Center
- Archived at MAST (Mikulski Archive for Space Telescopes)

---

### 2. High-Level Comet-Centered Products

High-level products derived from the Sector 1751 observations are being released by the mission team.

**Product Types:**
- **Moving Target Pixel Files (mTPFs)** — Pixel data centered on the moving comet
- **Extracted Light Curve Files (LCFs)** — Photometric light curves
- **Supporting Analysis Notebooks** — Computational analysis tools and examples

**Version 1.0 Coverage:**
- **Time Interval:** 2026-01-15T06:04:18 UTC to 2026-01-15T23:54:18 UTC
- **Duration:** Approximately 17 hours 50 minutes

**Distribution:**
- **Primary:** Zenodo (doi-referenced archival repository)
- **Notebooks:** GitHub (companion computational notebooks)

---

## PROVENANCE AND GOVERNANCE NOTE

### Document Classification

This document records **mission status and data availability only**. It introduces:
- ✅ No scientific interpretation
- ✅ No modification of published or immutable Zenodo records
- ✅ No analysis or conclusions

### Gate Status

**Gate-6:** CLOSED

This document is created under Gate-6 CLOSED constraints. No modifications to immutable published records are permitted.

### Data Retrieval Requirements

Any data retrieval associated with this verification layer **must log** the following in machine-readable form:

1. **Full URLs** — Complete access paths to data products
2. **UTC Timestamps** — ISO 8601 format timestamps for all access events
3. **HTTP Status Codes** — Response codes for all retrieval attempts
4. **Response Sizes** — Byte counts of retrieved payloads
5. **SHA-256 Payload Hashes** — Cryptographic verification hashes

### Institutional Authority

This document:
- Is NOT a scientific publication
- Contains NO citable research claims
- Produces NO scientific results
- Carries ZERO scientific authority
- Exists solely as a transparent institutional record

All scientific authority resides exclusively in:
- **Layer-0** (Governance)
- **Layer-1** (Laboratory, when opened via Gate-5)

---

## Official References

### TESS Mission
- **Organization:** NASA / MIT
- **Official Site:** https://tess.mit.edu/
- **MAST Archive:** https://archive.stsci.edu/tess/

### Data Access
- **MAST Portal:** https://mast.stsci.edu/portal/Mashup/Clients/Mast/Portal.html
- **Bulk Downloads:** Via TESS Science Support Center endpoints
- **Zenodo (High-Level Products):** Version-specific DOI (to be published by mission team)

### Official Communications
- NASA Official Statements
- TESS Science Support Center Communications
- MIT TESS Mission Updates

---

## Verification Checklist

For institutional compliance, any implementation of this document must verify:

- [ ] No scientific interpretation has been added
- [ ] All timestamps are in ISO 8601 UTC format
- [ ] All URLs reference official sources only
- [ ] SHA-256 hashes are computed for all retrieved payloads
- [ ] HTTP status codes are logged for all data access attempts
- [ ] Response sizes (in bytes) are recorded
- [ ] Gate-6 CLOSED status is maintained
- [ ] No modifications to published Zenodo records occur
- [ ] All data sources are properly attributed

---

**Document Status:** Reference Record  
**Layer:** Layer-2 (Presentation Only)  
**Authority:** NONE  
**Execution:** NONE  

**TRIZEL — Institutional Scientific Observatory**  
Layer-2 · Presentation-Only · Non-Executable · Governance-Controlled
