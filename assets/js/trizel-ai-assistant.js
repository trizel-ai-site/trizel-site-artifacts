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
 */

(function() {
  'use strict';
  
  /**
   * Initialize TRIZEL AI Assistant UI
   */
  function initTrizelAI() {
    // Create and inject AI assistant button
    createAIButton();
    
    // Create AI assistant modal
    createAIModal();
    
    // Set up event listeners
    setupEventListeners();
  }
  
  /**
   * Create the floating AI assistant button
   */
  function createAIButton() {
    const button = document.createElement('button');
    button.className = 'trizel-ai-button';
    button.setAttribute('aria-label', 'Talk to TRIZEL-AI Assistant');
    button.setAttribute('type', 'button');
    button.id = 'trizel-ai-button';
    
    // AI icon (chat bubble with sparkle)
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
            Talk to TRIZEL-AI
          </h2>
          <button class="trizel-ai-modal-close" type="button" aria-label="Close dialog" id="trizel-ai-modal-close">
            <svg class="trizel-ai-modal-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>
        
        <div class="trizel-ai-modal-body">
          <!-- Governance Notice -->
          <div class="trizel-ai-governance-notice">
            <p class="trizel-ai-governance-notice-title">
              ⚠️ Governance Notice
            </p>
            <p class="trizel-ai-governance-notice-text">
              <strong>UI Assistant Only — Non-Authoritative</strong><br>
              This AI assistant provides navigation and explanation support only. 
              It cannot execute, analyze, or modify data. All scientific and governance 
              decisions remain under Layer-0 authority.
            </p>
          </div>
          
          <!-- Status Badge -->
          <div class="trizel-ai-status">
            <span class="trizel-ai-status-indicator"></span>
            Advisory UI Assistant — Phase F.1
          </div>
          
          <!-- Main Content -->
          <div class="trizel-ai-content">
            <h3>Welcome to TRIZEL-AI Assistant</h3>
            
            <p>
              I'm your UI assistant for navigating the TRIZEL Scientific Observatory. 
              I can help you:
            </p>
            
            <ul>
              <li><strong>Find Information:</strong> Locate specific sections, documents, or references</li>
              <li><strong>Understand Structure:</strong> Explain the three-layer architecture and governance framework</li>
              <li><strong>Navigate Content:</strong> Guide you through the Global Observation & Production Index (GOI)</li>
              <li><strong>Language Support:</strong> Assist with multilingual content access (EN, FR, AR, ZH, RU)</li>
              <li><strong>Reference Lookup:</strong> Point you to relevant external resources and documentation</li>
            </ul>
            
            <h3>What I Cannot Do</h3>
            
            <p>As a UI-only assistant operating under Phase-F governance, I am strictly limited:</p>
            
            <ul>
              <li>❌ <strong>No Execution:</strong> Cannot perform calculations, analysis, or data processing</li>
              <li>❌ <strong>No Authority:</strong> Cannot make scientific or governance decisions</li>
              <li>❌ <strong>No Modification:</strong> Cannot change data, schemas, or repository content</li>
              <li>❌ <strong>No Live Data:</strong> Cannot access or integrate with external systems</li>
            </ul>
            
            <h3>How to Use</h3>
            
            <p>
              <strong>Note:</strong> This is a UI shell component. The actual AI conversation interface 
              is provided by external AI providers (such as GitHub Copilot, ChatGPT, or others) and is 
              not part of this repository.
            </p>
            
            <p>
              To interact with the AI assistant, use your preferred AI provider's interface and ask 
              questions about the TRIZEL repository content, structure, and documentation.
            </p>
            
            <p>
              <em>Implementation detail: AI provider selection and integration happens outside this 
              repository in accordance with Phase-F governance.</em>
            </p>
            
            <h3>Governance & Boundaries</h3>
            
            <p>
              This feature operates under the 
              <a href="/PHASE_F_GOVERNANCE.md" target="_blank">Phase-F Governance & AI Interaction Contract</a>, 
              which establishes strict boundaries for AI interaction.
            </p>
            
            <p>
              All operations are subject to Layer-0 governance authority maintained in the 
              <a href="https://github.com/trizel-ai/trizel-core" target="_blank" rel="noopener noreferrer">trizel-core</a> 
              repository.
            </p>
          </div>
        </div>
        
        <footer class="trizel-ai-modal-footer">
          <p class="trizel-ai-footer-text">
            Phase-F.1 UI Component • Governed by 
            <a href="/PHASE_F_GOVERNANCE.md" target="_blank">Phase-F Governance Contract</a> • 
            Layer-2 Presentation Only
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
    
    // Open modal on button click
    if (button) {
      button.addEventListener('click', openModal);
    }
    
    // Close modal on close button click
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal on backdrop click
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeModal();
        }
      });
    }
    
    // Close modal on Escape key
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
      
      // Focus on close button for accessibility
      setTimeout(function() {
        const closeBtn = document.getElementById('trizel-ai-modal-close');
        if (closeBtn) {
          closeBtn.focus();
        }
      }, 100);
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Store the element that triggered the modal for focus return
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
      
      // Restore body scroll
      document.body.style.overflow = '';
      
      // Return focus to the button that opened the modal
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
  
  /**
   * Initialize on DOM ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTrizelAI);
  } else {
    initTrizelAI();
  }
})();
