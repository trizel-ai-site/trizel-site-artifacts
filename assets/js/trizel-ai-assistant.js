/**
 * TRIZEL AI Assistant UI Component
 * Phase-F.1: "Talk to TRIZEL-AI" UI Shell
 * 
 * Layer-2 Presentation Repository
 * UI-only, no backend coupling, non-authoritative
 * Governed under PHASE_F_GOVERNANCE.md
 * 
 * This is a UI shell only - no AI processing happens in this repository.
 * All AI functionality is provided by external providers (implementation detail).
 * 
 * PHASE-F.1 MULTILINGUAL SEMANTIC LOCK APPLIED
 * All UI strings are scoped locally with semantic equivalence across:
 * EN (canonical), FR, AR, ZH, RU
 * Governance restriction: No global i18n system modification
 */

(function() {
  'use strict';
  
  /**
   * Local translations for TRIZEL-AI UI
   * Scoped to this component only - does not modify global i18n system
   * 
   * Semantic equivalence verified for all languages:
   * - EN: Canonical source of truth
   * - FR: Strict semantic equivalence
   * - AR: Formal scientific register (لغة علمية رسمية)
   * - ZH: Strict semantic equivalence
   * - RU: Strict semantic equivalence
   */
  const TRIZEL_AI_TRANSLATIONS = {
    en: {
      trizel_ai_button_aria_label: "Talk to TRIZEL-AI Assistant",
      trizel_ai_modal_title: "Talk to TRIZEL-AI",
      trizel_ai_close_aria_label: "Close dialog",
      trizel_ai_governance_notice_title: "⚠️ Governance Notice",
      trizel_ai_governance_notice_subtitle: "UI Assistant Only — Non-Authoritative",
      trizel_ai_governance_notice_text: "This AI assistant provides navigation and explanation support only. It cannot execute, analyze, or modify data. All scientific and governance decisions remain under Layer-0 authority.",
      trizel_ai_status_badge: "Advisory UI Assistant — Phase F.1",
      trizel_ai_welcome_heading: "Welcome to TRIZEL-AI Assistant",
      trizel_ai_welcome_intro: "I'm your UI assistant for navigating the TRIZEL Scientific Observatory. I can help you:",
      trizel_ai_category_find_info: "Find Information:",
      trizel_ai_category_find_info_desc: "Locate specific sections, documents, or references",
      trizel_ai_category_understand: "Understand Structure:",
      trizel_ai_category_understand_desc: "Explain the three-layer architecture and governance framework",
      trizel_ai_category_navigate: "Navigate Content:",
      trizel_ai_category_navigate_desc: "Guide you through the Global Observation & Production Index (GOI)",
      trizel_ai_category_language: "Language Support:",
      trizel_ai_category_language_desc: "Assist with multilingual content access (EN, FR, AR, ZH, RU)",
      trizel_ai_category_reference: "Reference Lookup:",
      trizel_ai_category_reference_desc: "Point you to relevant external resources and documentation",
      trizel_ai_limitations_heading: "What I Cannot Do",
      trizel_ai_limitations_intro: "As a UI-only assistant operating under Phase-F governance, I am strictly limited:",
      trizel_ai_limitation_no_exec: "❌ No Execution:",
      trizel_ai_limitation_no_exec_desc: "Cannot perform calculations, analysis, or data processing",
      trizel_ai_limitation_no_auth: "❌ No Authority:",
      trizel_ai_limitation_no_auth_desc: "Cannot make scientific or governance decisions",
      trizel_ai_limitation_no_mod: "❌ No Modification:",
      trizel_ai_limitation_no_mod_desc: "Cannot change data, schemas, or repository content",
      trizel_ai_limitation_no_live: "❌ No Live Data:",
      trizel_ai_limitation_no_live_desc: "Cannot access or integrate with external systems",
      trizel_ai_usage_heading: "How to Use",
      trizel_ai_usage_note_label: "Note:",
      trizel_ai_usage_note_text: "This is a UI shell component. The actual AI conversation interface is provided by external AI providers (such as GitHub Copilot, ChatGPT, or others) and is not part of this repository.",
      trizel_ai_usage_instruction: "To interact with the AI assistant, use your preferred AI provider's interface and ask questions about the TRIZEL repository content, structure, and documentation.",
      trizel_ai_usage_implementation: "Implementation detail: AI provider selection and integration happens outside this repository in accordance with Phase-F governance.",
      trizel_ai_governance_heading: "Governance & Boundaries",
      trizel_ai_governance_text_1: "This feature operates under the",
      trizel_ai_governance_link_1: "Phase-F Governance & AI Interaction Contract",
      trizel_ai_governance_text_2: "which establishes strict boundaries for AI interaction.",
      trizel_ai_governance_text_3: "All operations are subject to Layer-0 governance authority maintained in the",
      trizel_ai_governance_link_2: "trizel-core",
      trizel_ai_governance_text_4: "repository.",
      trizel_ai_footer_text_1: "Phase-F.1 UI Component • Governed by",
      trizel_ai_footer_link: "Phase-F Governance Contract",
      trizel_ai_footer_text_2: "• Layer-2 Presentation Only"
    },
    fr: {
      trizel_ai_button_aria_label: "Parler à l'Assistant TRIZEL-AI",
      trizel_ai_modal_title: "Parler à TRIZEL-AI",
      trizel_ai_close_aria_label: "Fermer la boîte de dialogue",
      trizel_ai_governance_notice_title: "⚠️ Avis de Gouvernance",
      trizel_ai_governance_notice_subtitle: "Assistant d'Interface Utilisateur Uniquement — Non Autoritaire",
      trizel_ai_governance_notice_text: "Cet assistant IA fournit un support de navigation et d'explication uniquement. Il ne peut pas exécuter, analyser ou modifier des données. Toutes les décisions scientifiques et de gouvernance restent sous l'autorité de la Couche-0.",
      trizel_ai_status_badge: "Assistant d'Interface Utilisateur Consultatif — Phase F.1",
      trizel_ai_welcome_heading: "Bienvenue à l'Assistant TRIZEL-AI",
      trizel_ai_welcome_intro: "Je suis votre assistant d'interface utilisateur pour naviguer dans l'Observatoire Scientifique TRIZEL. Je peux vous aider à :",
      trizel_ai_category_find_info: "Trouver des Informations :",
      trizel_ai_category_find_info_desc: "Localiser des sections, documents ou références spécifiques",
      trizel_ai_category_understand: "Comprendre la Structure :",
      trizel_ai_category_understand_desc: "Expliquer l'architecture à trois couches et le cadre de gouvernance",
      trizel_ai_category_navigate: "Naviguer dans le Contenu :",
      trizel_ai_category_navigate_desc: "Vous guider à travers l'Index Mondial d'Observation et de Production (GOI)",
      trizel_ai_category_language: "Support Linguistique :",
      trizel_ai_category_language_desc: "Assister avec l'accès au contenu multilingue (EN, FR, AR, ZH, RU)",
      trizel_ai_category_reference: "Recherche de Références :",
      trizel_ai_category_reference_desc: "Vous orienter vers des ressources et documentation externes pertinentes",
      trizel_ai_limitations_heading: "Ce que Je ne Peux Pas Faire",
      trizel_ai_limitations_intro: "En tant qu'assistant d'interface utilisateur uniquement fonctionnant sous la gouvernance Phase-F, je suis strictement limité :",
      trizel_ai_limitation_no_exec: "❌ Aucune Exécution :",
      trizel_ai_limitation_no_exec_desc: "Ne peut pas effectuer de calculs, d'analyse ou de traitement de données",
      trizel_ai_limitation_no_auth: "❌ Aucune Autorité :",
      trizel_ai_limitation_no_auth_desc: "Ne peut pas prendre de décisions scientifiques ou de gouvernance",
      trizel_ai_limitation_no_mod: "❌ Aucune Modification :",
      trizel_ai_limitation_no_mod_desc: "Ne peut pas modifier les données, schémas ou contenu du dépôt",
      trizel_ai_limitation_no_live: "❌ Aucune Données en Direct :",
      trizel_ai_limitation_no_live_desc: "Ne peut pas accéder ou s'intégrer avec des systèmes externes",
      trizel_ai_usage_heading: "Comment Utiliser",
      trizel_ai_usage_note_label: "Note :",
      trizel_ai_usage_note_text: "Ceci est un composant d'enveloppe d'interface utilisateur. L'interface de conversation IA réelle est fournie par des fournisseurs IA externes (tels que GitHub Copilot, ChatGPT ou autres) et ne fait pas partie de ce dépôt.",
      trizel_ai_usage_instruction: "Pour interagir avec l'assistant IA, utilisez l'interface de votre fournisseur IA préféré et posez des questions sur le contenu, la structure et la documentation du dépôt TRIZEL.",
      trizel_ai_usage_implementation: "Détail d'implémentation : La sélection et l'intégration du fournisseur IA se produisent en dehors de ce dépôt conformément à la gouvernance Phase-F.",
      trizel_ai_governance_heading: "Gouvernance et Limites",
      trizel_ai_governance_text_1: "Cette fonctionnalité fonctionne sous le",
      trizel_ai_governance_link_1: "Contrat de Gouvernance Phase-F et d'Interaction IA",
      trizel_ai_governance_text_2: "qui établit des limites strictes pour l'interaction IA.",
      trizel_ai_governance_text_3: "Toutes les opérations sont soumises à l'autorité de gouvernance de la Couche-0 maintenue dans le dépôt",
      trizel_ai_governance_link_2: "trizel-core",
      trizel_ai_governance_text_4: ".",
      trizel_ai_footer_text_1: "Composant d'Interface Utilisateur Phase-F.1 • Gouverné par le",
      trizel_ai_footer_link: "Contrat de Gouvernance Phase-F",
      trizel_ai_footer_text_2: "• Couche-2 Présentation Uniquement"
    },
    ar: {
      trizel_ai_button_aria_label: "التحدث إلى مساعد TRIZEL-AI",
      trizel_ai_modal_title: "التحدث إلى TRIZEL-AI",
      trizel_ai_close_aria_label: "إغلاق مربع الحوار",
      trizel_ai_governance_notice_title: "⚠️ إشعار الحوكمة",
      trizel_ai_governance_notice_subtitle: "مساعد واجهة المستخدم فقط — غير ذي سلطة",
      trizel_ai_governance_notice_text: "يوفر مساعد الذكاء الاصطناعي هذا دعم التنقل والشرح فقط. لا يمكنه تنفيذ أو تحليل أو تعديل البيانات. جميع القرارات العلمية والحوكمة تبقى تحت سلطة الطبقة-0.",
      trizel_ai_status_badge: "مساعد واجهة المستخدم الاستشاري — المرحلة F.1",
      trizel_ai_welcome_heading: "مرحباً بك في مساعد TRIZEL-AI",
      trizel_ai_welcome_intro: "أنا مساعد واجهة المستخدم الخاص بك للتنقل في المرصد العلمي TRIZEL. يمكنني مساعدتك في:",
      trizel_ai_category_find_info: "العثور على المعلومات:",
      trizel_ai_category_find_info_desc: "تحديد موقع الأقسام أو الوثائق أو المراجع المحددة",
      trizel_ai_category_understand: "فهم البنية:",
      trizel_ai_category_understand_desc: "شرح البنية ذات الطبقات الثلاث وإطار الحوكمة",
      trizel_ai_category_navigate: "التنقل في المحتوى:",
      trizel_ai_category_navigate_desc: "إرشادك عبر مؤشر المراقبة والإنتاج العالمي (GOI)",
      trizel_ai_category_language: "الدعم اللغوي:",
      trizel_ai_category_language_desc: "المساعدة في الوصول إلى المحتوى متعدد اللغات (EN, FR, AR, ZH, RU)",
      trizel_ai_category_reference: "البحث عن المراجع:",
      trizel_ai_category_reference_desc: "توجيهك إلى الموارد والوثائق الخارجية ذات الصلة",
      trizel_ai_limitations_heading: "ما لا يمكنني القيام به",
      trizel_ai_limitations_intro: "بصفتي مساعد واجهة مستخدم فقط يعمل تحت حوكمة المرحلة-F، أنا مقيد بشكل صارم:",
      trizel_ai_limitation_no_exec: "❌ لا تنفيذ:",
      trizel_ai_limitation_no_exec_desc: "لا يمكن إجراء الحسابات أو التحليل أو معالجة البيانات",
      trizel_ai_limitation_no_auth: "❌ لا سلطة:",
      trizel_ai_limitation_no_auth_desc: "لا يمكن اتخاذ قرارات علمية أو قرارات حوكمة",
      trizel_ai_limitation_no_mod: "❌ لا تعديل:",
      trizel_ai_limitation_no_mod_desc: "لا يمكن تغيير البيانات أو المخططات أو محتوى المستودع",
      trizel_ai_limitation_no_live: "❌ لا بيانات حية:",
      trizel_ai_limitation_no_live_desc: "لا يمكن الوصول إلى الأنظمة الخارجية أو التكامل معها",
      trizel_ai_usage_heading: "كيفية الاستخدام",
      trizel_ai_usage_note_label: "ملاحظة:",
      trizel_ai_usage_note_text: "هذا مكون غلاف واجهة مستخدم. واجهة المحادثة الفعلية للذكاء الاصطناعي يتم توفيرها من قبل موفري الذكاء الاصطناعي الخارجيين (مثل GitHub Copilot أو ChatGPT أو غيرهم) وليست جزءاً من هذا المستودع.",
      trizel_ai_usage_instruction: "للتفاعل مع مساعد الذكاء الاصطناعي، استخدم واجهة موفر الذكاء الاصطناعي المفضل لديك واطرح أسئلة حول محتوى مستودع TRIZEL وبنيته ووثائقه.",
      trizel_ai_usage_implementation: "تفصيل التنفيذ: اختيار موفر الذكاء الاصطناعي والتكامل يحدث خارج هذا المستودع وفقاً لحوكمة المرحلة-F.",
      trizel_ai_governance_heading: "الحوكمة والحدود",
      trizel_ai_governance_text_1: "تعمل هذه الميزة تحت",
      trizel_ai_governance_link_1: "عقد حوكمة المرحلة-F والتفاعل مع الذكاء الاصطناعي",
      trizel_ai_governance_text_2: "الذي يضع حدوداً صارمة لتفاعل الذكاء الاصطناعي.",
      trizel_ai_governance_text_3: "جميع العمليات تخضع لسلطة حوكمة الطبقة-0 المحفوظة في مستودع",
      trizel_ai_governance_link_2: "trizel-core",
      trizel_ai_governance_text_4: ".",
      trizel_ai_footer_text_1: "مكون واجهة المستخدم للمرحلة-F.1 • محكوم بواسطة",
      trizel_ai_footer_link: "عقد حوكمة المرحلة-F",
      trizel_ai_footer_text_2: "• الطبقة-2 العرض فقط"
    },
    zh: {
      trizel_ai_button_aria_label: "与TRIZEL-AI助手对话",
      trizel_ai_modal_title: "与TRIZEL-AI对话",
      trizel_ai_close_aria_label: "关闭对话框",
      trizel_ai_governance_notice_title: "⚠️ 治理通知",
      trizel_ai_governance_notice_subtitle: "仅用户界面助手 — 非权威性",
      trizel_ai_governance_notice_text: "此AI助手仅提供导航和解释支持。它不能执行、分析或修改数据。所有科学和治理决策仍在层级-0权限下。",
      trizel_ai_status_badge: "咨询用户界面助手 — 阶段F.1",
      trizel_ai_welcome_heading: "欢迎使用TRIZEL-AI助手",
      trizel_ai_welcome_intro: "我是您导航TRIZEL科学观测站的用户界面助手。我可以帮助您：",
      trizel_ai_category_find_info: "查找信息：",
      trizel_ai_category_find_info_desc: "定位特定部分、文档或参考",
      trizel_ai_category_understand: "理解结构：",
      trizel_ai_category_understand_desc: "解释三层架构和治理框架",
      trizel_ai_category_navigate: "导航内容：",
      trizel_ai_category_navigate_desc: "引导您浏览全球观测与生产指数（GOI）",
      trizel_ai_category_language: "语言支持：",
      trizel_ai_category_language_desc: "协助访问多语言内容（EN、FR、AR、ZH、RU）",
      trizel_ai_category_reference: "参考查找：",
      trizel_ai_category_reference_desc: "为您指出相关外部资源和文档",
      trizel_ai_limitations_heading: "我不能做什么",
      trizel_ai_limitations_intro: "作为在阶段-F治理下运行的仅用户界面助手，我受到严格限制：",
      trizel_ai_limitation_no_exec: "❌ 无执行：",
      trizel_ai_limitation_no_exec_desc: "不能执行计算、分析或数据处理",
      trizel_ai_limitation_no_auth: "❌ 无权限：",
      trizel_ai_limitation_no_auth_desc: "不能做出科学或治理决策",
      trizel_ai_limitation_no_mod: "❌ 无修改：",
      trizel_ai_limitation_no_mod_desc: "不能更改数据、模式或存储库内容",
      trizel_ai_limitation_no_live: "❌ 无实时数据：",
      trizel_ai_limitation_no_live_desc: "不能访问或与外部系统集成",
      trizel_ai_usage_heading: "如何使用",
      trizel_ai_usage_note_label: "注意：",
      trizel_ai_usage_note_text: "这是一个用户界面外壳组件。实际的AI对话界面由外部AI提供商（如GitHub Copilot、ChatGPT或其他）提供，不属于此存储库的一部分。",
      trizel_ai_usage_instruction: "要与AI助手交互，请使用您首选的AI提供商界面，并询问有关TRIZEL存储库内容、结构和文档的问题。",
      trizel_ai_usage_implementation: "实施细节：AI提供商选择和集成发生在此存储库之外，符合阶段-F治理。",
      trizel_ai_governance_heading: "治理与边界",
      trizel_ai_governance_text_1: "此功能在",
      trizel_ai_governance_link_1: "阶段-F治理与AI交互合约",
      trizel_ai_governance_text_2: "下运行，该合约为AI交互建立了严格的边界。",
      trizel_ai_governance_text_3: "所有操作均受",
      trizel_ai_governance_link_2: "trizel-core",
      trizel_ai_governance_text_4: "存储库中维护的层级-0治理权限约束。",
      trizel_ai_footer_text_1: "阶段-F.1用户界面组件 • 受",
      trizel_ai_footer_link: "阶段-F治理合约",
      trizel_ai_footer_text_2: "治理 • 仅层级-2展示"
    },
    ru: {
      trizel_ai_button_aria_label: "Поговорить с Ассистентом TRIZEL-AI",
      trizel_ai_modal_title: "Поговорить с TRIZEL-AI",
      trizel_ai_close_aria_label: "Закрыть диалоговое окно",
      trizel_ai_governance_notice_title: "⚠️ Уведомление о Управлении",
      trizel_ai_governance_notice_subtitle: "Только Ассистент Пользовательского Интерфейса — Не Является Авторитетным",
      trizel_ai_governance_notice_text: "Этот ИИ-ассистент предоставляет только поддержку навигации и объяснений. Он не может выполнять, анализировать или изменять данные. Все научные и управленческие решения остаются под властью Уровня-0.",
      trizel_ai_status_badge: "Консультативный Ассистент Пользовательского Интерфейса — Фаза F.1",
      trizel_ai_welcome_heading: "Добро пожаловать в Ассистент TRIZEL-AI",
      trizel_ai_welcome_intro: "Я ваш ассистент пользовательского интерфейса для навигации по Научной Обсерватории TRIZEL. Я могу помочь вам:",
      trizel_ai_category_find_info: "Найти Информацию:",
      trizel_ai_category_find_info_desc: "Найти конкретные разделы, документы или ссылки",
      trizel_ai_category_understand: "Понять Структуру:",
      trizel_ai_category_understand_desc: "Объяснить трехслойную архитектуру и структуру управления",
      trizel_ai_category_navigate: "Навигация по Контенту:",
      trizel_ai_category_navigate_desc: "Провести вас через Глобальный индекс наблюдений и производства (GOI)",
      trizel_ai_category_language: "Языковая Поддержка:",
      trizel_ai_category_language_desc: "Помочь с доступом к многоязычному контенту (EN, FR, AR, ZH, RU)",
      trizel_ai_category_reference: "Поиск Ссылок:",
      trizel_ai_category_reference_desc: "Указать вам на соответствующие внешние ресурсы и документацию",
      trizel_ai_limitations_heading: "Что Я Не Могу Делать",
      trizel_ai_limitations_intro: "Как ассистент только пользовательского интерфейса, работающий под управлением Фазы-F, я строго ограничен:",
      trizel_ai_limitation_no_exec: "❌ Без Выполнения:",
      trizel_ai_limitation_no_exec_desc: "Не могу выполнять вычисления, анализ или обработку данных",
      trizel_ai_limitation_no_auth: "❌ Без Полномочий:",
      trizel_ai_limitation_no_auth_desc: "Не могу принимать научные или управленческие решения",
      trizel_ai_limitation_no_mod: "❌ Без Изменений:",
      trizel_ai_limitation_no_mod_desc: "Не могу изменять данные, схемы или содержимое репозитория",
      trizel_ai_limitation_no_live: "❌ Без Реальных Данных:",
      trizel_ai_limitation_no_live_desc: "Не могу получать доступ или интегрироваться с внешними системами",
      trizel_ai_usage_heading: "Как Использовать",
      trizel_ai_usage_note_label: "Примечание:",
      trizel_ai_usage_note_text: "Это компонент оболочки пользовательского интерфейса. Фактический интерфейс разговора с ИИ предоставляется внешними провайдерами ИИ (такими как GitHub Copilot, ChatGPT или другими) и не является частью этого репозитория.",
      trizel_ai_usage_instruction: "Чтобы взаимодействовать с ИИ-ассистентом, используйте интерфейс вашего предпочитаемого провайдера ИИ и задавайте вопросы о содержимом, структуре и документации репозитория TRIZEL.",
      trizel_ai_usage_implementation: "Деталь реализации: Выбор провайдера ИИ и интеграция происходят вне этого репозитория в соответствии с управлением Фазы-F.",
      trizel_ai_governance_heading: "Управление и Границы",
      trizel_ai_governance_text_1: "Эта функция работает под",
      trizel_ai_governance_link_1: "Контрактом Управления Фазы-F и Взаимодействия с ИИ",
      trizel_ai_governance_text_2: "который устанавливает строгие границы для взаимодействия с ИИ.",
      trizel_ai_governance_text_3: "Все операции подчинены власти управления Уровня-0, поддерживаемой в репозитории",
      trizel_ai_governance_link_2: "trizel-core",
      trizel_ai_governance_text_4: ".",
      trizel_ai_footer_text_1: "Компонент Пользовательского Интерфейса Фазы-F.1 • Управляется",
      trizel_ai_footer_link: "Контрактом Управления Фазы-F",
      trizel_ai_footer_text_2: "• Только Презентация Уровня-2"
    }
  };
  
  /**
   * Get translation string
   */
  function t(key) {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const currentLang = pathParts[0] && TRIZEL_AI_TRANSLATIONS[pathParts[0]] ? pathParts[0] : 'en';
    const translations = TRIZEL_AI_TRANSLATIONS[currentLang] || TRIZEL_AI_TRANSLATIONS.en;
    const value = translations[key];
    
    if (!value) {
      console.warn(`[TRIZEL-AI i18n] Missing translation key: ${key}`);
      return key;
    }
    return value;
  }
  
  /**
   * Initialize TRIZEL AI Assistant UI
   */
  function initTrizelAI() {
    createAIButton();
    createAIModal();
    setupEventListeners();
  }
  
  /**
   * Create the floating AI assistant button
   */
  function createAIButton() {
    const button = document.createElement('button');
    button.className = 'trizel-ai-button';
    button.setAttribute('aria-label', t('trizel_ai_button_aria_label'));
    button.setAttribute('type', 'button');
    button.id = 'trizel-ai-button';
    
    button.innerHTML = `
      <svg class="trizel-ai-button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <path d="M12 8v4"></path>
        <path d="M12 16h.01"></path>
      </svg>
    `;
    
    document.body.appendChild(button);
  }
  
  /**
   * Create the AI assistant modal dialog
   */
  function createAIModal() {
    const modal = document.createElement('div');
    modal.className = 'trizel-ai-modal';
    modal.id = 'trizel-ai-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'trizel-ai-modal-title');
    
    modal.innerHTML = `
      <div class="trizel-ai-modal-content">
        <header class="trizel-ai-modal-header">
          <h2 class="trizel-ai-modal-title" id="trizel-ai-modal-title">
            <svg class="trizel-ai-modal-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
            ${t('trizel_ai_modal_title')}
          </h2>
          <button class="trizel-ai-modal-close" type="button" aria-label="${t('trizel_ai_close_aria_label')}" id="trizel-ai-modal-close">
            <svg class="trizel-ai-modal-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>
        
        <div class="trizel-ai-modal-body">
          <div class="trizel-ai-governance-notice">
            <p class="trizel-ai-governance-notice-title">
              ${t('trizel_ai_governance_notice_title')}
            </p>
            <p class="trizel-ai-governance-notice-text">
              <strong>${t('trizel_ai_governance_notice_subtitle')}</strong><br>
              ${t('trizel_ai_governance_notice_text')}
            </p>
          </div>
          
          <div class="trizel-ai-status">
            <span class="trizel-ai-status-indicator"></span>
            ${t('trizel_ai_status_badge')}
          </div>
          
          <div class="trizel-ai-content">
            <h3>${t('trizel_ai_welcome_heading')}</h3>
            
            <p>
              ${t('trizel_ai_welcome_intro')}
            </p>
            
            <ul>
              <li><strong>${t('trizel_ai_category_find_info')}</strong> ${t('trizel_ai_category_find_info_desc')}</li>
              <li><strong>${t('trizel_ai_category_understand')}</strong> ${t('trizel_ai_category_understand_desc')}</li>
              <li><strong>${t('trizel_ai_category_navigate')}</strong> ${t('trizel_ai_category_navigate_desc')}</li>
              <li><strong>${t('trizel_ai_category_language')}</strong> ${t('trizel_ai_category_language_desc')}</li>
              <li><strong>${t('trizel_ai_category_reference')}</strong> ${t('trizel_ai_category_reference_desc')}</li>
            </ul>
            
            <h3>${t('trizel_ai_limitations_heading')}</h3>
            
            <p>${t('trizel_ai_limitations_intro')}</p>
            
            <ul>
              <li><strong>${t('trizel_ai_limitation_no_exec')}</strong> ${t('trizel_ai_limitation_no_exec_desc')}</li>
              <li><strong>${t('trizel_ai_limitation_no_auth')}</strong> ${t('trizel_ai_limitation_no_auth_desc')}</li>
              <li><strong>${t('trizel_ai_limitation_no_mod')}</strong> ${t('trizel_ai_limitation_no_mod_desc')}</li>
              <li><strong>${t('trizel_ai_limitation_no_live')}</strong> ${t('trizel_ai_limitation_no_live_desc')}</li>
            </ul>
            
            <h3>${t('trizel_ai_usage_heading')}</h3>
            
            <p>
              <strong>${t('trizel_ai_usage_note_label')}</strong> ${t('trizel_ai_usage_note_text')}
            </p>
            
            <p>
              ${t('trizel_ai_usage_instruction')}
            </p>
            
            <p>
              <em>${t('trizel_ai_usage_implementation')}</em>
            </p>
            
            <h3>${t('trizel_ai_governance_heading')}</h3>
            
            <p>
              ${t('trizel_ai_governance_text_1')} 
              <a href="/PHASE_F_GOVERNANCE.md" target="_blank">${t('trizel_ai_governance_link_1')}</a>, 
              ${t('trizel_ai_governance_text_2')}
            </p>
            
            <p>
              ${t('trizel_ai_governance_text_3')} 
              <a href="https://github.com/trizel-ai/trizel-core" target="_blank" rel="noopener noreferrer">${t('trizel_ai_governance_link_2')}</a> 
              ${t('trizel_ai_governance_text_4')}
            </p>
          </div>
        </div>
        
        <footer class="trizel-ai-modal-footer">
          <p class="trizel-ai-footer-text">
            ${t('trizel_ai_footer_text_1')} 
            <a href="/PHASE_F_GOVERNANCE.md" target="_blank">${t('trizel_ai_footer_link')}</a> 
            ${t('trizel_ai_footer_text_2')}
          </p>
        </footer>
      </div>
    `;
    
    document.body.appendChild(modal);
  }
  
  /**
   * Set up event listeners
   */
  function setupEventListeners() {
    const button = document.getElementById('trizel-ai-button');
    const modal = document.getElementById('trizel-ai-modal');
    const closeBtn = document.getElementById('trizel-ai-modal-close');
    
    if (button) {
      button.addEventListener('click', openModal);
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeModal();
        }
      });
    }
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }
  
  /**
   * Open the AI assistant modal
   */
  function openModal() {
    const modal = document.getElementById('trizel-ai-modal');
    const button = document.getElementById('trizel-ai-button');
    
    if (modal) {
      modal.classList.add('active');
      
      setTimeout(function() {
        const closeBtn = document.getElementById('trizel-ai-modal-close');
        if (closeBtn) {
          closeBtn.focus();
        }
      }, 100);
      
      document.body.style.overflow = 'hidden';
      
      if (button) {
        modal.setAttribute('data-return-focus', 'trizel-ai-button');
      }
    }
  }
  
  /**
   * Close the AI assistant modal
   */
  function closeModal() {
    const modal = document.getElementById('trizel-ai-modal');
    
    if (modal) {
      modal.classList.remove('active');
      
      document.body.style.overflow = '';
      
      const returnFocusId = modal.getAttribute('data-return-focus');
      if (returnFocusId) {
        const returnElement = document.getElementById(returnFocusId);
        if (returnElement) {
          setTimeout(function() {
            returnElement.focus();
          }, 100);
        }
      }
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTrizelAI);
  } else {
    initTrizelAI();
  }
})();
