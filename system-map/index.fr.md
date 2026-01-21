# TRIZEL — Carte du Système Public (Statique)

**Ce site est à présentation seule ; aucune exécution, aucune métrique en temps réel.**

---

## Aperçu

Cette page fournit une carte statique et en lecture seule de la structure du système TRIZEL. Elle montre comment les dépôts, les couches et les mécanismes de contrôle interagissent sous une gouvernance de séparation stricte.

**Objectif :** Orientation et référence pour les visiteurs  
**Autorité :** Aucune — Ceci est une carte descriptive uniquement  
**Statut :** Documentation statique (aucune donnée en direct)

---

## Diagramme du Système

![Carte du Système TRIZEL](trizel-system-map.svg)

*Figure : Architecture à trois couches TRIZEL avec plan de contrôle et passerelle de publication*

---

## Définitions des Couches

Le système TRIZEL fonctionne selon une **séparation stricte des couches** avec des frontières et des autorités claires :

### Couche-0 : Gouvernance / Autorité

**Dépôt :** [`trizel-ai/trizel-core`](https://github.com/trizel-ai/trizel-core)

**Rôle :** Établit les politiques, les normes et le cadre de gouvernance pour l'ensemble du système TRIZEL.

**Fonctions :**
- Définir les politiques et contraintes à l'échelle du système
- Établir les règles de séparation des couches
- Maintenir la documentation de gouvernance
- Fournir l'autorité décisionnelle finale

**Autorité :** **FINALE ET CONTRAIGNANTE**

---

### Couche-1 : Recherche et Exécution Internes

**Dépôts :**
- [`trizel-ai/trizel-lab`](https://github.com/trizel-ai/trizel-lab) (privé) — Documentation et provenance de la recherche
- `trizel-ai/*` moteurs — Systèmes de recherche internes
- `abdelkader-omran/AUTO-DZ-ACT-*` — Pipelines et automatisation de recherche

**Rôle :** Conduit la recherche interne, l'analyse et l'exécution technique sous la gouvernance de la Couche-0.

**Fonctions :**
- Exécuter des projets et des expériences de recherche
- Produire des résultats et des analyses scientifiques
- Maintenir la provenance de la recherche
- Effectuer validation et vérification
- Archiver les artefacts de recherche

**Autorité :** **EXÉCUTION SCIENTIFIQUE ET TECHNIQUE**

**Accès :** Opérations internes (non public)

---

### Couche-2 : Présentation / Artefacts Publics

**Dépôt :** [`trizel-ai-site/trizel-site-artifacts`](https://github.com/trizel-ai-site/trizel-site-artifacts) (ce dépôt)

**Rôle :** Présentation publique et orientation sans aucune autorité de recherche ou de gouvernance.

**Fonctions :**
- Afficher les informations structurelles sur TRIZEL
- Fournir une documentation et des cartes statiques
- Référencer les sources autoritaires de Couche-0 et Couche-1
- Maintenir l'identité visuelle institutionnelle

**Autorité :** **AUCUNE — PRÉSENTATION UNIQUEMENT**

**Contraintes Clés :**
- Aucune autorité scientifique ou revendications de recherche
- Aucun pouvoir de gouvernance ou création de politiques
- Aucune interprétation de la recherche de Couche-1
- Aucune exécution de code ou contenu dynamique
- Aucune analyse ou métrique en temps réel
- Artefacts statiques en lecture seule uniquement

---

## Mécanismes de Contrôle et de Publication

### Passerelle : Passerelle Phase-E

**Dépôt :** [`trizel-ai-site/phase-e-gateway`](https://github.com/trizel-ai-site/phase-e-gateway)

**Rôle :** Passerelle d'approbation humaine pour la publication d'artefacts (fermée par défaut).

**Fonctions :**
- Examiner les artefacts avant l'exposition publique
- Appliquer les exigences de validation
- Maintenir la politique de publication fermée par défaut
- Exiger une approbation humaine explicite

**Statut :** Fermée par défaut — Aucune publication automatique

---

### Plan de Contrôle : TRIZEL Admin

**Système :** `trizel-admin`

**Rôle :** Gestion des permissions, approbations et contrôle d'accès.

**Fonctions :**
- Gérer les permissions des dépôts
- Approuver les changements d'exposition
- Appliquer les politiques d'accès
- Maintenir les frontières de sécurité

**Autorité :** Contrôle administratif (sous gouvernance de Couche-0)

---

## Principes Non Négociables

Le système TRIZEL fonctionne selon ces **principes immuables** :

1. **Séparation Stricte des Préoccupations**
   - Gouvernance, exécution et présentation sont des couches séparées
   - Aucun dépôt ne remplit deux rôles
   - Les frontières sont appliquées et non négociables

2. **L'Autorité Ne Circule que vers le Bas**
   - Couche-0 gouverne Couche-1 et Couche-2
   - Couche-1 informe Couche-2 via des artefacts validés
   - Couche-2 affiche mais n'interprète pas

3. **Aucune Exécution en Temps Réel dans les Dépôts Publics**
   - Couche-2 (ce dépôt) contient uniquement des artefacts statiques
   - Aucune exécution JavaScript, aucun appel API, aucune collecte de métriques
   - Aucun processus de construction ou génération de contenu dynamique

4. **Publication Fermée par Défaut**
   - Tous les artefacts publics doivent passer par la Passerelle Phase-E
   - Approbation humaine requise avant l'exposition
   - L'état par défaut est non publié

5. **Approbation Humaine Requise**
   - Aucune publication automatique d'artefacts de recherche
   - Examen et validation manuels avant l'exposition publique
   - Approbation explicite du personnel autorisé

---

## Ce Qui Peut Être Publié Ici

Ce dépôt (`trizel-site-artifacts`) contient **uniquement des artefacts statiques approuvés** :

### Contenu Autorisé

- ✅ **Documentation statique** (fichiers Markdown)
- ✅ **Cartes et diagrammes du système** (SVG, PNG)
- ✅ **Descriptions structurelles** (pas d'interprétation)
- ✅ **Références aux sources autoritaires** (liens vers Couche-0 et Couche-1)
- ✅ **Actifs d'identité visuelle** (logos, système de conception)

### Explicitement Interdit

- ❌ **Aucune exécution de code** (pas de JavaScript, pas de logique en temps réel)
- ❌ **Aucune analyse ou métrique** (pas de suivi, pas de compteurs)
- ❌ **Aucun contenu dynamique** (pas d'appels API, pas de données en direct)
- ❌ **Aucun processus de construction** (pas de bundlers, pas d'automatisation)
- ❌ **Aucune revendication scientifique** (pas de résultats de recherche)
- ❌ **Aucune interprétation** (pas d'analyse de la recherche de Couche-1)

---

## Flux de Validation

```
Recherche Couche-1
      ↓
[Validation et Examen]
      ↓
Passerelle Phase-E
(Approbation Humaine Requise)
      ↓
[Décision d'Approbation]
      ↓
Publication Couche-2
(Artefacts Statiques Uniquement)
```

**Point Clé :** Aucun artefact n'atteint la Couche-2 sans validation explicite et approbation humaine.

---

## Résumé de l'Architecture du Système

**Structure d'Autorité :**
```
Couche-0 (trizel-core)
   ↓ [gouverne]
Couche-1 (trizel-lab, moteurs, pipelines)
   ↓ [produit des artefacts validés]
[Passerelle Phase-E — Approbation Humaine]
   ↓ [artefacts approuvés uniquement]
Couche-2 (trizel-site-artifacts)
   ↓ [présente à]
Visiteurs Publics
```

**Structure de Contrôle :**
```
trizel-admin (Plan de Contrôle)
   ↓ [gère les permissions]
Tous les Dépôts
   ↓ [applique]
Politiques d'Accès et Frontières de Sécurité
```

---

## Conformité Institutionnelle

Cette carte du système représente la **structure opérationnelle réelle** de TRIZEL en date de 2026.

**Classification de Couche :** Ce document est de Couche-2 (présentation uniquement)  
**Autorité :** Aucune — Référence descriptive uniquement  
**Source de Gouvernance :** Couche-0 (trizel-core)  
**Statut :** Documentation statique (aucun rôle opérationnel)

Pour les questions concernant :
- **Questions de gouvernance** → Référez-vous à Couche-0 ([trizel-core](https://github.com/trizel-ai/trizel-core))
- **Demandes de recherche** → Contactez via les canaux appropriés (non public)
- **Problèmes de présentation** → Ce dépôt

---

## Notes Linguistiques

**Langue Principale :** Français (FR)  
**Statut :** Traduction équivalente de la version anglaise

*Note : Les versions arabes, chinoises et autres langues peuvent être ajoutées dans les phases futures si requis par la politique institutionnelle.*

---

**Dépôt de Couche-2** — Présentation Uniquement — Aucune Exécution — Aucune Métrique — Aucune Autorité

**Carte du Système** — Documentation Statique — Lecture Seule — Non Opérationnel
