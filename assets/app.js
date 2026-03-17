/**
 * TRIZEL Layer-2 — Data-Driven Dashboard
 * Fetches JSON pipeline outputs and populates the DOM.
 * No frameworks. Pure vanilla JS. GitHub Pages compatible.
 * Multilingual: EN / AR / FR / ZH with RTL support.
 */

'use strict';

// ── Translations ───────────────────────────────────────────────

var TRANSLATIONS = {
  en: {
    nav_home:             'Home',
    nav_observations:     'Observations',
    nav_status:           'Status',
    nav_badge:            'Layer-2: Presentation Only',
    loading:              'Loading data\u2026',
    unavailable:          'Unavailable',
    dataset_link_unavail: 'Dataset link unavailable',
    could_not_load:       'Could not load',
    obs_title:            'Observation Datasets',
    obs_sub:              'All available pipeline outputs \u2014 Governance-compliant presentation layer (Layer-2)',
    latest_dataset:       'Latest Dataset',
    view_json:            'View JSON \u2192',
    json_link:            'JSON \u2192',
    all_observations:     'All Observations',
    all_obs_sub:          'Sorted by date (newest first). Each entry links directly to the raw JSON file.',
    no_observations:      'No observations found.',
    raw_data:             'Raw Data',
    github_repo:          'GitHub Repository \u2197',
    col_date:             'Date',
    col_records:          'Records',
    col_sources:          'Sources',
    col_data:             'Data',
    system_status:        'System Status',
    system_status_sub:    'Pipeline health and operational metrics',
    system:               'System',
    operational:          'Operational',
    pres_layer_active:    'Presentation layer active. No computation performed.',
    last_pipeline:        'Last Pipeline Update',
    latest_day:           'Latest Day',
    total_datasets:       'Total Datasets',
    daily_batches:        'Daily observation batches',
    source_repository:    'Source Repository',
    layer1_origin:        'Layer-1 execution origin',
    notice_label:         'Note:',
    layer2_notice:        'This site is a presentation layer only. No computation or interpretation is performed here. All data originates from the Layer-1 pipeline and is presented as static artifacts.',
    quick_links:          'Quick Links',
    browse_observations:  'Browse Observations',
    latest_json:          'Latest JSON',
    summary_json:         'Summary JSON',
    github:               'GitHub \u2197',
    total_days:           'Total Days',
    total_records:        'Total Records',
    total_valid_records:  'Total Valid Records',
    latest_day_label:     'Latest Day',
    last_updated_utc:     'Last Updated (UTC)',
    footer_tagline:       'TRIZEL \u2014 Governance-first scientific infrastructure',
    footer_note:          'Data displayed from static pipeline artifacts. No computation is performed in this layer.',
    records_unit:         'valid records',
    sources_unit:         'sources',
    state_scheduled:      'Scheduled for future observation',
    state_not_released:   'No data released yet',
    state_unavailable:    'No valid data retrieved'
  },
  ar: {
    nav_home:             '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',
    nav_observations:     '\u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a',
    nav_status:           '\u0627\u0644\u062d\u0627\u0644\u0629',
    nav_badge:            '\u0627\u0644\u0637\u0628\u0642\u0629 2: \u0639\u0631\u0636 \u0641\u0642\u0637',
    loading:              '\u062c\u0627\u0631\u064d \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a\u2026',
    unavailable:          '\u063a\u064a\u0631 \u0645\u062a\u0627\u062d',
    dataset_link_unavail: '\u0631\u0627\u0628\u0637 \u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u063a\u064a\u0631 \u0645\u062a\u0627\u062d',
    could_not_load:       '\u062a\u0639\u0630\u0651\u0631 \u062a\u062d\u0645\u064a\u0644',
    obs_title:            '\u0645\u062c\u0645\u0648\u0639\u0627\u062a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a',
    obs_sub:              '\u062c\u0645\u064a\u0639 \u0645\u062e\u0631\u062c\u0627\u062a \u062e\u0637 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u2014 \u0637\u0628\u0642\u0629 \u0639\u0631\u0636 \u0645\u062a\u0648\u0627\u0641\u0642\u0629 \u0645\u0639 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 (\u0627\u0644\u0637\u0628\u0642\u0629 2)',
    latest_dataset:       '\u0623\u062d\u062f\u062b \u0645\u062c\u0645\u0648\u0639\u0629 \u0628\u064a\u0627\u0646\u0627\u062a',
    view_json:            '\u0639\u0631\u0636 JSON \u2192',
    json_link:            'JSON \u2192',
    all_observations:     '\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a',
    all_obs_sub:          '\u0645\u0631\u062a\u0628\u0629 \u062d\u0633\u0628 \u0627\u0644\u062a\u0627\u0631\u064a\u062e (\u0627\u0644\u0623\u062d\u062f\u062b \u0623\u0648\u0644\u0627\u064b). \u0643\u0644 \u0625\u062f\u062e\u0627\u0644 \u064a\u0631\u062a\u0628\u0637 \u0645\u0628\u0627\u0634\u0631\u0629\u064b \u0628\u0645\u0644\u0641 JSON \u0627\u0644\u062e\u0627\u0645.',
    no_observations:      '\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0644\u0627\u062d\u0638\u0627\u062a.',
    raw_data:             '\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u0627\u0645',
    github_repo:          '\u0645\u0633\u062a\u0648\u062f\u0639 GitHub \u2197',
    col_date:             '\u0627\u0644\u062a\u0627\u0631\u064a\u062e',
    col_records:          '\u0627\u0644\u0633\u062c\u0644\u0627\u062a',
    col_sources:          '\u0627\u0644\u0645\u0635\u0627\u062f\u0631',
    col_data:             '\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a',
    system_status:        '\u062d\u0627\u0644\u0629 \u0627\u0644\u0646\u0638\u0627\u0645',
    system_status_sub:    '\u0635\u062d\u0629 \u062e\u0637 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628 \u0648\u0645\u0642\u0627\u064a\u064a\u0633 \u0627\u0644\u062a\u0634\u063a\u064a\u0644',
    system:               '\u0627\u0644\u0646\u0638\u0627\u0645',
    operational:          '\u064a\u0639\u0645\u0644',
    pres_layer_active:    '\u0637\u0628\u0642\u0629 \u0627\u0644\u0639\u0631\u0636 \u0646\u0634\u0637\u0629. \u0644\u0627 \u064a\u064f\u0646\u0641\u0651\u064e\u0630 \u0623\u064a \u062d\u0633\u0627\u0628.',
    last_pipeline:        '\u0622\u062e\u0631 \u062a\u062d\u062f\u064a\u062b \u0644\u062e\u0637 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628',
    latest_day:           '\u0623\u062d\u062f\u062b \u064a\u0648\u0645',
    total_datasets:       '\u0625\u062c\u0645\u0627\u0644\u064a \u0645\u062c\u0645\u0648\u0639\u0627\u062a \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a',
    daily_batches:        '\u062f\u0641\u0639\u0627\u062a \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0627\u0644\u064a\u0648\u0645\u064a\u0629',
    source_repository:    '\u0645\u0633\u062a\u0648\u062f\u0639 \u0627\u0644\u0645\u0635\u062f\u0631',
    layer1_origin:        '\u0645\u0635\u062f\u0631 \u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u0637\u0628\u0642\u0629 1',
    notice_label:         '\u0645\u0644\u0627\u062d\u0638\u0629:',
    layer2_notice:        '\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0637\u0628\u0642\u0629 \u0639\u0631\u0636 \u0641\u0642\u0637. \u0644\u0627 \u064a\u064f\u0646\u0641\u0651\u064e\u0630 \u0623\u064a \u062d\u0633\u0627\u0628 \u0623\u0648 \u062a\u0641\u0633\u064a\u0631 \u0647\u0646\u0627. \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0635\u062f\u0631\u0647\u0627 \u062e\u0637 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628 \u0641\u064a \u0627\u0644\u0637\u0628\u0642\u0629 1 \u0648\u062a\u064f\u0639\u0631\u0636 \u0643\u0642\u0637\u0639 \u0623\u062b\u0631\u064a\u0629 \u062b\u0627\u0628\u062a\u0629.',
    quick_links:          '\u0631\u0648\u0627\u0628\u0637 \u0633\u0631\u064a\u0639\u0629',
    browse_observations:  '\u062a\u0635\u0641\u062d \u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a',
    latest_json:          '\u0623\u062d\u062f\u062b JSON',
    summary_json:         '\u0645\u0644\u062e\u0635 JSON',
    github:               'GitHub \u2197',
    total_days:           '\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0623\u064a\u0627\u0645',
    total_records:        '\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0633\u062c\u0644\u0627\u062a',
    total_valid_records:  '\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0635\u0627\u0644\u062d\u0629',
    latest_day_label:     '\u0623\u062d\u062f\u062b \u064a\u0648\u0645',
    last_updated_utc:     '\u0622\u062e\u0631 \u062a\u062d\u062f\u064a\u062b (UTC)',
    footer_tagline:       'TRIZEL \u2014 \u0628\u0646\u064a\u0629 \u062a\u062d\u062a\u064a\u0629 \u0639\u0644\u0645\u064a\u0629 \u062a\u064f\u0639\u0637\u064a \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0627\u0644\u0623\u0648\u0644\u0648\u064a\u0629',
    footer_note:          '\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629 \u0645\u0646 \u0642\u0637\u0639 \u0623\u062b\u0631\u064a\u0629 \u0644\u062e\u0637 \u0623\u0646\u0627\u0628\u064a\u0628 \u062b\u0627\u0628\u062a. \u0644\u0627 \u064a\u064f\u0646\u0641\u0651\u064e\u0630 \u0623\u064a \u062d\u0633\u0627\u0628 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0637\u0628\u0642\u0629.',
    records_unit:         '\u0633\u062c\u0644\u0627\u062a \u0635\u0627\u0644\u062d\u0629',
    sources_unit:         '\u0645\u0635\u0627\u062f\u0631',
    state_scheduled:      '\u0645\u064f\u0628\u0631\u0645\u062c \u0644\u0644\u0631\u0635\u062f \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644\u064a \u0639\u0646\u062f \u062a\u0648\u0641\u0631 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a',
    state_not_released:   '\u0644\u0645 \u064a\u062a\u0645 \u0646\u0634\u0631 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0631\u0633\u0645\u064a\u064b\u0627 \u0628\u0639\u062f',
    state_unavailable:    '\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0628\u064a\u0627\u0646\u0627\u062a \u0635\u0627\u0644\u062d\u0629'
  },
  fr: {
    nav_home:             'Accueil',
    nav_observations:     'Observations',
    nav_status:           '\u00c9tat',
    nav_badge:            'Couche 2\u00a0: Pr\u00e9sentation uniquement',
    loading:              'Chargement des donn\u00e9es\u2026',
    unavailable:          'Indisponible',
    dataset_link_unavail: 'Lien du jeu de donn\u00e9es indisponible',
    could_not_load:       'Impossible de charger',
    obs_title:            'Jeux de donn\u00e9es d\u2019observation',
    obs_sub:              'Toutes les sorties disponibles du pipeline \u2014 couche de pr\u00e9sentation conforme \u00e0 la gouvernance (Couche\u00a02)',
    latest_dataset:       'Dernier jeu de donn\u00e9es',
    view_json:            'Voir JSON \u2192',
    json_link:            'JSON \u2192',
    all_observations:     'Toutes les observations',
    all_obs_sub:          'Tri\u00e9es par date (plus r\u00e9centes en premier). Chaque entr\u00e9e renvoie directement au fichier JSON brut.',
    no_observations:      'Aucune observation trouv\u00e9e.',
    raw_data:             'Donn\u00e9es brutes',
    github_repo:          'D\u00e9p\u00f4t GitHub \u2197',
    col_date:             'Date',
    col_records:          'Enregistrements',
    col_sources:          'Sources',
    col_data:             'Donn\u00e9es',
    system_status:        '\u00c9tat du syst\u00e8me',
    system_status_sub:    'Sant\u00e9 du pipeline et m\u00e9triques op\u00e9rationnelles',
    system:               'Syst\u00e8me',
    operational:          'Op\u00e9rationnel',
    pres_layer_active:    'Couche de pr\u00e9sentation active. Aucun calcul effectu\u00e9.',
    last_pipeline:        'Derni\u00e8re mise \u00e0 jour du pipeline',
    latest_day:           'Dernier jour',
    total_datasets:       'Total des jeux de donn\u00e9es',
    daily_batches:        'Lots d\u2019observations quotidiens',
    source_repository:    'D\u00e9p\u00f4t source',
    layer1_origin:        'Origine d\u2019ex\u00e9cution Couche\u00a01',
    notice_label:         'Remarque\u00a0:',
    layer2_notice:        'Ce site est une couche de pr\u00e9sentation uniquement. Aucun calcul ni interpr\u00e9tation n\u2019est effectu\u00e9 ici. Toutes les donn\u00e9es proviennent du pipeline Couche\u00a01 et sont pr\u00e9sent\u00e9es comme des artefacts statiques.',
    quick_links:          'Liens rapides',
    browse_observations:  'Parcourir les observations',
    latest_json:          'JSON le plus r\u00e9cent',
    summary_json:         'JSON r\u00e9capitulatif',
    github:               'GitHub \u2197',
    total_days:           'Jours totaux',
    total_records:        'Enregistrements totaux',
    total_valid_records:  'Enregistrements valides totaux',
    latest_day_label:     'Dernier jour',
    last_updated_utc:     'Derni\u00e8re mise \u00e0 jour (UTC)',
    footer_tagline:       'TRIZEL \u2014 Infrastructure scientifique ax\u00e9e sur la gouvernance',
    footer_note:          'Donn\u00e9es affich\u00e9es \u00e0 partir d\u2019artefacts de pipeline statiques. Aucun calcul n\u2019est effectu\u00e9 dans cette couche.',
    records_unit:         'enregistrements valides',
    sources_unit:         'sources',
    state_scheduled:      'Planifi\u00e9 pour observation future',
    state_not_released:   'Donn\u00e9es non publi\u00e9es \u00e0 ce jour',
    state_unavailable:    'Aucune donn\u00e9e valide r\u00e9cup\u00e9r\u00e9e'
  },
  zh: {
    nav_home:             '\u9996\u9875',
    nav_observations:     '\u89c2\u6d4b\u6570\u636e',
    nav_status:           '\u72b6\u6001',
    nav_badge:            '\u7b2c2\u5c42\uff1a\u4ec5\u5c55\u793a',
    loading:              '\u6570\u636e\u52a0\u8f7d\u4e2d\u2026',
    unavailable:          '\u4e0d\u53ef\u7528',
    dataset_link_unavail: '\u6570\u636e\u96c6\u94fe\u63a5\u4e0d\u53ef\u7528',
    could_not_load:       '\u65e0\u6cd5\u52a0\u8f7d',
    obs_title:            '\u89c2\u6d4b\u6570\u636e\u96c6',
    obs_sub:              '\u6240\u6709\u53ef\u7528\u7684\u7ba1\u9053\u8f93\u51fa \u2014 \u7b26\u5408\u6cbb\u7406\u7684\u5c55\u793a\u5c42\uff08\u7b2c2\u5c42\uff09',
    latest_dataset:       '\u6700\u65b0\u6570\u636e\u96c6',
    view_json:            '\u67e5\u770b JSON \u2192',
    json_link:            'JSON \u2192',
    all_observations:     '\u6240\u6709\u89c2\u6d4b',
    all_obs_sub:          '\u6309\u65e5\u671f\u6392\u5e8f\uff08\u6700\u65b0\u4f18\u5148\uff09\u3002\u6bcf\u6761\u8bb0\u5f55\u76f4\u63a5\u94fe\u63a5\u5230\u539f\u59cb JSON \u6587\u4ef6\u3002',
    no_observations:      '\u672a\u627e\u5230\u89c2\u6d4b\u6570\u636e\u3002',
    raw_data:             '\u539f\u59cb\u6570\u636e',
    github_repo:          'GitHub \u4ed3\u5e93 \u2197',
    col_date:             '\u65e5\u671f',
    col_records:          '\u8bb0\u5f55\u6570',
    col_sources:          '\u6765\u6e90',
    col_data:             '\u6570\u636e',
    system_status:        '\u7cfb\u7edf\u72b6\u6001',
    system_status_sub:    '\u7ba1\u9053\u5065\u5eb7\u72b6\u6001\u548c\u8fd0\u884c\u6307\u6807',
    system:               '\u7cfb\u7edf',
    operational:          '\u8fd0\u884c\u4e2d',
    pres_layer_active:    '\u5c55\u793a\u5c42\u6d3b\u8dc3\u3002\u672a\u6267\u884c\u4efb\u4f55\u8ba1\u7b97\u3002',
    last_pipeline:        '\u6700\u540e\u7ba1\u9053\u66f4\u65b0',
    latest_day:           '\u6700\u65b0\u65e5\u671f',
    total_datasets:       '\u6570\u636e\u96c6\u603b\u6570',
    daily_batches:        '\u6bcf\u65e5\u89c2\u6d4b\u6279\u6b21',
    source_repository:    '\u6e90\u4ee3\u7801\u5e93',
    layer1_origin:        '\u7b2c1\u5c42\u6267\u884c\u6765\u6e90',
    notice_label:         '\u6ce8\u610f\uff1a',
    layer2_notice:        '\u672c\u7ad9\u4ec5\u4e3a\u5c55\u793a\u5c42\u3002\u6b64\u5904\u4e0d\u6267\u884c\u4efb\u4f55\u8ba1\u7b97\u6216\u89e3\u91ca\u3002\u6240\u6709\u6570\u636e\u5747\u6765\u81ea\u7b2c1\u5c42\u7ba1\u9053\uff0c\u4ee5\u9759\u6001\u5236\u54c1\u7684\u5f62\u5f0f\u5448\u73b0\u3002',
    quick_links:          '\u5feb\u901f\u94fe\u63a5',
    browse_observations:  '\u6d4f\u89c8\u89c2\u6d4b\u6570\u636e',
    latest_json:          '\u6700\u65b0 JSON',
    summary_json:         '\u6458\u8981 JSON',
    github:               'GitHub \u2197',
    total_days:           '\u603b\u5929\u6570',
    total_records:        '\u603b\u8bb0\u5f55\u6570',
    total_valid_records:  '\u603b\u6709\u6548\u8bb0\u5f55\u6570',
    latest_day_label:     '\u6700\u65b0\u65e5\u671f',
    last_updated_utc:     '\u6700\u540e\u66f4\u65b0 (UTC)',
    footer_tagline:       'TRIZEL \u2014 \u6cbb\u7406\u4f18\u5148\u7684\u79d1\u5b66\u57fa\u7840\u8bbe\u65bd',
    footer_note:          '\u6570\u636e\u6765\u81ea\u9759\u6001\u7ba1\u9053\u5236\u54c1\u3002\u672c\u5c42\u4e0d\u6267\u884c\u4efb\u4f55\u8ba1\u7b97\u3002',
    records_unit:         '\u6761\u6709\u6548\u8bb0\u5f55',
    sources_unit:         '\u4e2a\u6765\u6e90',
    state_scheduled:      '\u8ba1\u5212\u7528\u4e8e\u672a\u6765\u89c2\u6d4b',
    state_not_released:   '\u6570\u636e\u5c1a\u672a\u53d1\u5e03',
    state_unavailable:    '\u672a\u83b7\u53d6\u5230\u6709\u6548\u6570\u636e'
  }
};

// ── Internationalisation engine ────────────────────────────────

// Single source of truth: supported languages are defined by the TRANSLATIONS
// object. Do not add language buttons in HTML — they are generated here.
var SUPPORTED_LANGS = Object.keys(TRANSLATIONS); // ['en', 'ar', 'fr', 'zh']

var LANG_STORAGE_KEY = 'l2-lang';
var LOCALE_MAP = { en: 'en-US', ar: 'ar-SA', fr: 'fr-FR', zh: 'zh-CN' };

function getCurrentLang() {
  var stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored && TRANSLATIONS[stored]) return stored;
  var browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return TRANSLATIONS[browser] ? browser : 'en';
}

/** Return the translated string for key in the active language. */
function t(key) {
  var lang = getCurrentLang();
  var dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  return dict[key] !== undefined ? dict[key] : (TRANSLATIONS['en'][key] || key);
}

/** Apply data-i18n attributes and update document language/direction. */
function applyTranslations() {
  var lang = getCurrentLang();
  document.documentElement.lang = lang;
  document.documentElement.dir  = (lang === 'ar') ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(function(node) {
    var key  = node.getAttribute('data-i18n');
    var text = t(key);
    if (text) node.textContent = text;
  });

  // Mark the active language button
  document.querySelectorAll('.l2-lang-btn').forEach(function(btn) {
    var isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

/** Persist language choice and refresh all UI. */
function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyTranslations();
  // Re-render dynamic content in the active language
  if (el('dash-total-days'))       { initDashboard(); }
  else if (el('obs-list'))         { initObservations(); }
  else if (el('status-timestamp')) { initStatus(); }
}

/**
 * Generate language switcher buttons dynamically from SUPPORTED_LANGS.
 * This is the single source of truth — no lang buttons are hardcoded in HTML.
 */
function initLangSwitcher() {
  var switcher = el('lang-switcher');
  if (!switcher) return;

  // Populate buttons from SUPPORTED_LANGS (derived from TRANSLATIONS keys)
  switcher.innerHTML = '';
  var currentLang = getCurrentLang();
  SUPPORTED_LANGS.forEach(function(lang) {
    var btn = document.createElement('button');
    btn.className = 'l2-lang-btn';
    btn.setAttribute('data-lang', lang);
    btn.setAttribute('aria-pressed', lang === currentLang ? 'true' : 'false');
    btn.textContent = lang.toUpperCase();
    if (lang === currentLang) btn.classList.add('active');
    switcher.appendChild(btn);
  });

  switcher.addEventListener('click', function(e) {
    var btn = e.target.closest('.l2-lang-btn');
    if (btn) setLang(btn.getAttribute('data-lang'));
  });
}

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
  if (!iso) return '\u2014';
  try {
    var locale = LOCALE_MAP[getCurrentLang()] || 'en-US';
    return new Date(iso).toLocaleString(locale, {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
      timeZone: 'UTC', timeZoneName: 'short'
    });
  } catch (_) { return '\u2014'; }
}

function loadingHtml(text) {
  return '<span class="l2-loading">' + (text || t('loading')) + '</span>';
}

function errorHtml(msg) {
  return '<span class="l2-error">\u26a0 ' + msg + '</span>';
}

/**
 * Fetch JSON with error handling. Returns parsed JSON or throws.
 */
async function fetchJSON(url) {
  var res = await fetch(url);
  if (!res.ok) throw new Error('HTTP ' + res.status + ' \u2014 ' + url);
  return res.json();
}

/**
 * Return an informational HTML snippet for a day_status value.
 * Only 'unavailable' (anomalous) renders a warning banner with ⚠️.
 * 'scheduled' and 'not_released' render a neutral informational note.
 * 'ok' and unknown states return an empty string.
 */
function stateHtml(dayStatus, validCount) {
  if (validCount > 0) return '';
  var key = {
    scheduled:    'state_scheduled',
    not_released: 'state_not_released',
    unavailable:  'state_unavailable'
  }[dayStatus];
  if (!key) return '';
  var label = t(key);
  if (dayStatus === 'unavailable') {
    return '<p role="alert" class="l2-alert-warning">\u26a0\ufe0f ' + label + '</p>';
  }
  return '<p class="l2-state-info">' + label + '</p>';
}

// ── Page: index.html ───────────────────────────────────────────

async function initDashboard() {
  // Show loading states
  var summaryIds = ['dash-total-days', 'dash-total-records', 'dash-latest-date'];
  summaryIds.forEach(function(id) { setHtml(id, loadingHtml()); });
  setHtml('dash-latest-link', loadingHtml());

  try {
    var summary = await fetchJSON('/public/summary.json');
    setText('dash-total-days', summary.total_days != null ? summary.total_days : '\u2014');
    // Use total_valid_records exclusively; fall back to 0 (never to total_records which
    // counts structural entries that are not real observations).
    var validRec = summary.total_valid_records != null ? summary.total_valid_records : 0;
    setText('dash-total-records', validRec);
    setText('dash-generated', formatDate(summary.generated_utc));
  } catch (e) {
    console.error('[TRIZEL] Failed to load /public/summary.json', e);
    ['dash-total-days','dash-total-records','dash-generated']
      .forEach(function(id) { setHtml(id, errorHtml(t('unavailable'))); });
  }

  try {
    var latest = await fetchJSON('/public/latest.json');
    setText('dash-latest-date', latest.latest_day || '\u2014');
    setHtml('dash-latest-link',
      '<a class="btn btn--outline" href="/public/' + latest.redirect + '">' +
      t('latest_dataset') + ' (' + (latest.latest_day || '') + ') \u2192</a>');
  } catch (e) {
    console.error('[TRIZEL] Failed to load /public/latest.json', e);
    setHtml('dash-latest-date', errorHtml(t('unavailable')));
    setHtml('dash-latest-link', errorHtml(t('dataset_link_unavail')));
  }
}

// ── Page: observations.html ────────────────────────────────────

async function initObservations() {
  var latestSection = el('obs-latest');
  var listEl = el('obs-list');

  if (latestSection) latestSection.innerHTML = loadingHtml();
  if (listEl) listEl.innerHTML = loadingHtml();

  // Load latest.json for the "Latest" section
  try {
    var latest = await fetchJSON('/public/latest.json');
    if (latestSection) {
      var latestValid = latest.valid_record_count != null ? latest.valid_record_count : (latest.record_count || 0);
      var latestDayStatus = latest.day_status || (latestValid === 0 ? 'unavailable' : 'ok');
      var latestStateHtml = stateHtml(latestDayStatus, latestValid);
      latestSection.innerHTML =
        '<div class="l2-card">' +
        '<div class="l2-card__label">' + t('latest_dataset') + '</div>' +
        '<div class="l2-card__value">' + (latest.latest_day || '\u2014') + '</div>' +
        '<p class="l2-card__desc" style="margin-top:0.5rem">' +
        latestValid + ' ' + t('records_unit') + ' \u00b7 ' +
        (latest.observations ? latest.observations.length : 0) + ' ' + t('sources_unit') +
        '</p>' +
        latestStateHtml +
        '<div style="margin-top:1rem">' +
        '<a class="l2-link-btn" href="/public/' + latest.redirect + '">' + t('view_json') + '</a>' +
        '</div>' +
        '</div>';
    }
  } catch (e) {
    console.error('[TRIZEL] Failed to load /public/latest.json', e);
    if (latestSection) latestSection.innerHTML = errorHtml(t('could_not_load') + ' /public/latest.json');
  }

  // Load summary.json for the full list
  try {
    var summary = await fetchJSON('/public/summary.json');
    if (!listEl) return;

    if (!summary.days || summary.days.length === 0) {
      listEl.innerHTML = '<p class="l2-loading">' + t('no_observations') + '</p>';
      return;
    }

    // Sort descending (newest first)
    var days = summary.days.slice().sort(function(a, b) {
      return b.date.localeCompare(a.date);
    });

    var rows = days.map(function(d) {
      var validCount = d.valid_record_count != null ? d.valid_record_count : (d.record_count || 0);
      var daySt = d.day_status || (validCount === 0 ? 'unavailable' : 'ok');
      // Show ⚠️ icon only for genuinely anomalous state (unavailable), not for scheduled/not_released
      var stateIcon = daySt === 'unavailable'
        ? ' <span class="l2-state-icon" role="img" aria-label="' + t('state_unavailable') + '">\u26a0\ufe0f</span>'
        : '';
      return '<tr>' +
        '<td>' + d.date + '</td>' +
        '<td>' + validCount + stateIcon + '</td>' +
        '<td>' + (d.sources ? d.sources.join(', ') : '\u2014') + '</td>' +
        '<td><a href="/public/' + d.path + '" class="l2-link-btn l2-link-btn--outline" style="font-size:0.8rem">' +
        t('json_link') + '</a></td>' +
        '</tr>';
    }).join('');

    listEl.innerHTML =
      '<div class="l2-table-wrap">' +
      '<table class="l2-table">' +
      '<thead><tr>' +
      '<th>' + t('col_date')    + '</th>' +
      '<th>' + t('col_records') + '</th>' +
      '<th>' + t('col_sources') + '</th>' +
      '<th>' + t('col_data')   + '</th>' +
      '</tr></thead>' +
      '<tbody>' + rows + '</tbody>' +
      '</table></div>';
  } catch (e) {
    console.error('[TRIZEL] Failed to load /public/summary.json', e);
    if (listEl) listEl.innerHTML = errorHtml(t('could_not_load') + ' /public/summary.json \u2014 ' + e.message);
  }
}

// ── Page: status.html ──────────────────────────────────────────

async function initStatus() {
  setHtml('status-timestamp', loadingHtml());
  setHtml('status-total-datasets', loadingHtml());
  setHtml('status-latest-day', loadingHtml());

  try {
    var summary = await fetchJSON('/public/summary.json');
    setText('status-timestamp', formatDate(summary.generated_utc));
    setText('status-total-datasets', summary.total_days != null ? summary.total_days : '\u2014');
  } catch (e) {
    console.error('[TRIZEL] Failed to load /public/summary.json', e);
    setHtml('status-timestamp', errorHtml(t('unavailable')));
    setHtml('status-total-datasets', errorHtml(t('unavailable')));
  }

  try {
    var latest = await fetchJSON('/public/latest.json');
    setText('status-latest-day', latest.latest_day || '\u2014');
  } catch (e) {
    console.error('[TRIZEL] Failed to load /public/latest.json', e);
    setHtml('status-latest-day', errorHtml(t('unavailable')));
  }
}

// ── Router: auto-detect page ───────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  applyTranslations();
  initLangSwitcher();

  if (el('dash-total-days'))       { initDashboard(); }
  else if (el('obs-list'))         { initObservations(); }
  else if (el('status-timestamp')) { initStatus(); }
});
