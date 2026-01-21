# Instantanés — Registre

[← Retour à l'Accueil GOI](../../index.fr.md)

## Objectif

Le Registre des Instantanés catalogue les paquets de référence figés avec vérification d'intégrité. Les instantanés sont des captures ponctuelles de données, d'analyses ou d'états de système qui servent d'artefacts de référence permanents.

## Tableau du Registre

| Snapshot_ID | Date_Figée | Portée | Contenu | Statut | Intégrité |
|-------------|------------|--------|---------|--------|-----------|
| *Aucune entrée publiée pour le moment* | — | — | — | — | — |

## Source de Données

Cette page affiche les données de : `/goi/data/global-index.json`

**État Actuel :** Aucun instantané n'a été publié pour le moment. Ce registre sera rempli lorsque des paquets de référence figés seront créés et que leurs métadonnées seront validées dans ce référentiel.

## Types d'Instantanés

Les instantanés peuvent inclure :
- **Instantanés de Données** — Ensembles de données figés à des moments spécifiques
- **Instantanés d'Analyse** — Résultats d'analyse préservés et méthodologies
- **Instantanés d'État Système** — Configurations et états système complets
- **Paquets d'Archives** — Collections organisées d'artefacts liés
- **Versions de Référence** — Produits de données de référence versionnés

## Vérification de l'Intégrité

Chaque entrée d'instantané inclut :
- **ID d'Instantané :** Identifiant unique pour l'instantané
- **Date Figée :** Horodatage de création de l'instantané
- **Portée :** Description de ce qui est inclus
- **Contenu :** Inventaire détaillé du contenu de l'instantané
- **Statut :** Statut actuel (figé, vérifié, archivé)
- **Intégrité :** Hash ou somme de contrôle pour vérification

## Méthodes de Vérification

Les instantanés peuvent être vérifiés via :
1. Historique des commits Git montrant quand les métadonnées ont été ajoutées
2. Hachages d'intégrité (SHA-256 ou équivalent)
3. Suivi de provenance via références sources
4. Enregistrements d'horodatage

## Sélection de Langue

- [English (EN)](index.en.md)
- **Français (FR)** — Actuel
- [Deutsch (DE)](index.de.md)
- [Русский (RU)](index.ru.md)
- [中文 (ZH)](index.zh.md)
- [العربية (AR)](index.ar.md)

---

**Registre Statique** — Pas de JavaScript — Pas d'Appels API — Référence Uniquement
