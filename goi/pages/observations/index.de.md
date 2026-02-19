# Beobachtungen — Register

[← Zurück zur GOI-Startseite](../../index.de.md)

## Zweck

Das Beobachtungsregister katalogisiert Datenquellen, Archive und Überwachungsausgaben aus dem TRIZEL-Ökosystem. Dieser Abschnitt bietet statische Metadaten zu Beobachtungs-Repositories, einschließlich ihrer Rolle, Domänen, zeitlichen Abdeckung und offiziellen Quellen.

## Registertabelle

| Quell-Repository | Rolle | Domänen | Abdeckung | Inventar | Offizielle Quellen |
|------------------|-------|---------|-----------|----------|-------------------|
| TESS Sektor 1751 — 3I/ATLAS Beobachtung | archive | Exoplaneten, Kometenforschung, interstellare-Objekte, zeitbereichs-Astronomie | 2026-01-15 bis 2026-01-19 (speziell) | FFIs (SPOC, TICA), mTPFs, LCFs, Notebooks | [TESS Mission](https://tess.mit.edu/), [MAST Archiv](https://archive.stsci.edu/tess/) |

## Datenquelle

Diese Seite zeigt Daten aus: `/goi/data/global-index.json`

**Aktueller Status:** Ein Beobachtungseintrag wurde für TESS Sektor 1751 (3I/ATLAS Spezialbeobachtung) veröffentlicht. Dieses Register wird weiterhin gefüllt, sobald Layer-1-Repositorien ihre Metadatendateien in `/goi/data/sources/` produzieren und übertragen.

## Schema

Alle Beobachtungsmetadaten müssen konform sein zu:
- **Schema:** `/goi/schemas/observation.meta.schema.json`

## Überprüfung

Alle Beobachtungseinträge sind überprüfbar durch:
1. Git-Commit-Historie in diesem Repository
2. JSON-Schema-Validierung
3. Integritäts-Hashes (wenn in Metadaten verfügbar)
4. Offizielle Quellenzitate in jedem Eintrag enthalten

## Repository-Rollenklassifizierungen

- **raw** — Rohdatensammlung und -aufnahme
- **archive** — Langzeitdatenbewahrung
- **analysis** — Wissenschaftliche Analyse und Verarbeitung
- **monitor** — Kontinuierliche Überwachung und Alarmierung
- **lab** — Experimenteller und Forschungsarbeitsbereich
- **governance** — Politik- und Standarddefinition

## Sprachauswahl

- [English (EN)](index.en.md)
- [Français (FR)](index.fr.md)
- **Deutsch (DE)** — Aktuell
- [Русский (RU)](index.ru.md)
- [中文 (ZH)](index.zh.md)
- [العربية (AR)](index.ar.md)

---

**Statisches Register** — Kein JavaScript — Keine API-Aufrufe — Nur Referenz
