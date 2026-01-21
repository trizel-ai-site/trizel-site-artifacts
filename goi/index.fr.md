# Index Mondial d'Observation et de Production

**Organisation publique :** trizel-ai-site  
**Référentiel public :** trizel-site-artifacts  
**Branche de base :** main  
**Branche de travail :** feature/goi-v1

---

## Objectif

L'Index Mondial d'Observation et de Production (GOI) est un registre scientifique fournissant des métadonnées statiques et vérifiables pour l'écosystème TRIZEL.

Cet index catalogue :
- **Observations :** Sources de données, archives et sorties de surveillance
- **Production :** Sorties scientifiques et résultats d'analyse
- **Référentiels :** Structure de l'écosystème et inventaire des composants
- **Instantanés :** Paquets de référence figés avec vérification d'intégrité

## Sections de l'Index

- **[Observations](pages/observations/index.fr.md)** — Registre des sources de données d'observation et métadonnées
- **[Production](pages/production/index.fr.md)** — Registre des sorties de production scientifique
- **[Référentiels](pages/repositories/index.fr.md)** — Inventaire et structure de l'écosystème
- **[Instantanés](pages/snapshots/index.fr.md)** — Registre des instantanés publiés

## Sélection de Langue

- [English (EN)](index.en.md)
- **Français (FR)** — Actuel
- [Deutsch (DE)](index.de.md)
- [Русский (RU)](index.ru.md)
- [中文 (ZH)](index.zh.md)
- [العربية (AR)](index.ar.md)

## Comment Vérifier

Toutes les données GOI sont statiques et vérifiables :

1. **Source de Données Statique :** `/goi/data/global-index.json`
2. **Historique des Commits :** Toutes les mises à jour sont suivies via les commits Git dans ce référentiel
3. **Validation de Schéma :** Toutes les données sont conformes aux schémas JSON publiés dans `/goi/schemas/`
4. **Aucune Exécution en Temps Réel :** Pas de JavaScript, pas d'API, pas de récupération dynamique de données

## Source de Vérité des Données

Le GOI traite `/goi/data/global-index.json` comme source unique de vérité. Ce fichier contient :
- Version du schéma
- Horodatage de génération
- Titres multilingues
- Registre des sources
- Registre des observations
- Registre de production
- Registre des instantanés

**État Actuel :** Structure d'espace réservé statique — population de données uniquement via mises à jour JSON validées.

## Classification Technique

- **Couche :** Couche-2 (Présentation Publique / Artefacts)
- **Type :** Index de référence statique
- **Autorité :** Aucune — affichage et référence uniquement
- **Exécution :** Zéro — tout le contenu est constitué de fichiers statiques pré-validés
- **Intégration :** Aucune — pas d'appels externes, pas de données en temps réel

---

**GOI v1.0.0** — Registre Scientifique de Qualité Référence — Statique — Vérifiable — Traçabilité de Provenance
