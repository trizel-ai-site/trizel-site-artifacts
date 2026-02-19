# Beobachtungen — Register

[← Zurück zur GOI-Startseite](../../index.de.md)

## Zweck

Das Beobachtungsregister katalogisiert Datenquellen, Archive und Überwachungsausgaben aus dem TRIZEL-Ökosystem. Dieser Abschnitt bietet statische Metadaten zu Beobachtungs-Repositories, einschließlich ihrer Rolle, Domänen, zeitlichen Abdeckung und offiziellen Quellen.

## Registertabelle

| Quell-Repository | Rolle | Domänen | Abdeckung | Inventar | Offizielle Quellen |
|------------------|-------|---------|-----------|----------|-------------------|
| *Noch keine veröffentlichten Einträge* | — | — | — | — | — |

## Datenquelle

Diese Seite zeigt Daten aus: `/goi/data/global-index.json`

**Aktueller Status:** Es wurden noch keine Beobachtungsmetadaten veröffentlicht. Dieses Register wird gefüllt, wenn Schicht-1-Repositories ihre Metadatendateien in `/goi/data/sources/` erstellen und committen.

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
