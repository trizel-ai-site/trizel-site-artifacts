# Observations — Registre

[← Retour à l'Accueil GOI](../../index.fr.md)

## Objectif

Le Registre des Observations catalogue les sources de données, archives et sorties de surveillance de l'écosystème TRIZEL. Cette section fournit des métadonnées statiques sur les référentiels d'observation, y compris leur rôle, domaines, couverture temporelle et sources officielles.

## Tableau du Registre

| Référentiel Source | Rôle | Domaines | Couverture | Inventaire | Sources Officielles |
|--------------------|------|----------|------------|------------|---------------------|
| TESS Secteur 1751 — Observation 3I/ATLAS | archive | exoplanètes, science-cométaire, objets-interstellaires, astronomie-temporelle | 2026-01-15 à 2026-01-19 (spécial) | FFIs (SPOC, TICA), mTPFs, LCFs, notebooks | [Mission TESS](https://tess.mit.edu/), [Archive MAST](https://archive.stsci.edu/tess/) |

## Source de Données

Cette page affiche les données de : `/goi/data/global-index.json`

**État Actuel :** Une entrée d'observation a été publiée pour TESS Secteur 1751 (observation spéciale 3I/ATLAS). Ce registre continuera d'être rempli lorsque les référentiels de Couche-1 produiront et valideront leurs fichiers de métadonnées dans `/goi/data/sources/`.

## Schéma

Toutes les métadonnées d'observation doivent être conformes à :
- **Schéma :** `/goi/schemas/observation.meta.schema.json`

## Vérification

Toutes les entrées d'observation sont vérifiables via :
1. Historique des commits Git dans ce référentiel
2. Validation du schéma JSON
3. Hachages d'intégrité (lorsque disponibles dans les métadonnées)
4. Citations de sources officielles incluses dans chaque entrée

## Classifications de Rôle de Référentiel

- **raw** — Collection et ingestion de données brutes
- **archive** — Préservation de données à long terme
- **analysis** — Analyse et traitement scientifique
- **monitor** — Surveillance continue et alertes
- **lab** — Espace de travail expérimental et de recherche
- **governance** — Définition de politiques et normes

## Sélection de Langue

- [English (EN)](index.en.md)
- **Français (FR)** — Actuel
- [Deutsch (DE)](index.de.md)
- [Русский (RU)](index.ru.md)
- [中文 (ZH)](index.zh.md)
- [العربية (AR)](index.ar.md)

---

**Registre Statique** — Pas de JavaScript — Pas d'Appels API — Référence Uniquement
