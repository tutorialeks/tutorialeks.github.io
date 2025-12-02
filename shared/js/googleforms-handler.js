/**
 * Google Forms Handler - Shared JavaScript for Form Pages
 *
 * This script handles all the common functionality for both light and dark
 * themed Google Forms handler pages, including:
 * - URL parameter parsing
 * - Smart referrer-based navigation
 * - Form loading and display
 * - Error handling
 * - Iframe resize handling (for dark theme with advanced features)
 */

// ============================================================================
// URL PARAMETER HANDLING
// ============================================================================

/**
 * Get URL parameter by name
 * @param {string} name - Parameter name
 * @returns {string|null} Parameter value or null
 */
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ============================================================================
// SMART NAVIGATION
// ============================================================================

/**
 * Smart referrer detection for back navigation
 * Auto-detects theme and provides appropriate fallback
 * @returns {string} URL to navigate back to
 */
function getSmartBackLink() {
    const referrer = document.referrer;

    // If we have a referrer from the same origin, use it
    if (referrer && referrer.startsWith(window.location.origin)) {
        return referrer;
    }

    // Auto-detect theme from current path
    const path = window.location.pathname;
    const isDarkTheme = path.includes('dark-theme') || path.includes('googleforms-dark');

    // Fallback to theme-specific index
    const themeIndex = isDarkTheme
        ? '/bg/learners/dark-theme/index.html'
        : '/bg/learners/white-theme/index.html';

    return themeIndex;
}

/**
 * Update navigation links with smart referrer
 */
function updateNavigationLinks() {
    const backLink = getSmartBackLink();

    // Update brand link
    const brandLink = document.getElementById('brand-link');
    if (brandLink) {
        brandLink.href = backLink;
    }

    // Update error home link
    const errorHomeLink = document.getElementById('error-home-link');
    if (errorHomeLink) {
        errorHomeLink.href = backLink;
    }

    const themeName = window.location.pathname.includes('dark') ? 'Dark' : 'Light';
    console.log(`[Forms ${themeName}] Navigation links updated to:`, backLink);
}

// ============================================================================
// ERROR HANDLING
// ============================================================================

/**
 * Show error message to user
 * @param {string} message - Error message to display
 */
function showError(message) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error-text').textContent = message;
    document.getElementById('error').style.display = 'block';
}

// ============================================================================
// IFRAME UTILITIES (for advanced dark theme)
// ============================================================================

/**
 * Debounce utility for resize events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Try to resize iframe based on content (with cross-origin fallback)
 * @param {HTMLIFrameElement} iframe - The iframe element
 */
function resizeIframe(iframe) {
    try {
        if (iframe.contentWindow && iframe.contentWindow.document) {
            const doc = iframe.contentWindow.document;
            const height = Math.max(
                doc.documentElement.scrollHeight,
                doc.body.scrollHeight,
                doc.documentElement.offsetHeight,
                doc.body.offsetHeight
            );
            iframe.style.height = (height + 20) + 'px';
        }
    } catch (e) {
        // Cross-origin iframe - can't access content
        // Keep using viewport-based height
        console.log('[Forms] Cross-origin iframe - using viewport-based height');
    }
}

/**
 * Set responsive iframe height based on viewport
 * @param {HTMLIFrameElement} iframe - The iframe element
 */
function setResponsiveIframeHeight(iframe) {
    const isMobile = window.innerWidth <= 768;
    const viewportHeight = isMobile ? '70vh' : '75vh';
    const minHeight = isMobile ? '600px' : '800px';

    iframe.style.height = viewportHeight;
    iframe.style.minHeight = minHeight;
}

/**
 * Handle postMessage from Google Forms (if they send height data)
 * @param {MessageEvent} event - The message event
 */
function handleGoogleFormsMessage(event) {
    // Only accept messages from Google domains
    if (!event.origin.match(/https:\/\/(docs|forms)\.google\.com/)) {
        return;
    }

    const iframe = document.getElementById('form-iframe');
    if (event.data && event.data.height && iframe) {
        iframe.style.height = event.data.height + 'px';
        console.log('[Forms] Received height from Google Forms:', event.data.height);
    }
}

/**
 * Initialize iframe with resize handlers (for dark theme)
 */
function initializeIframe() {
    const iframe = document.getElementById('form-iframe');

    if (!iframe) {
        return;
    }

    // Set initial responsive height
    setResponsiveIframeHeight(iframe);

    // Handle load event with BOTH resize AND display logic
    iframe.addEventListener('load', () => {
        // Hide loading, show iframe wrapper
        document.getElementById('loading').style.display = 'none';
        document.querySelector('.iframe-wrapper').style.display = 'block';

        // Resize iframe
        resizeIframe(iframe);

        // Try again after delays (for fonts/images)
        setTimeout(() => resizeIframe(iframe), 100);
        setTimeout(() => resizeIframe(iframe), 500);
    });

    // Resize on window resize (debounced)
    window.addEventListener('resize', debounce(() => {
        setResponsiveIframeHeight(iframe);
        resizeIframe(iframe);
    }, 250));

    // Listen for postMessage from Google Forms
    window.addEventListener('message', handleGoogleFormsMessage);
}

// ============================================================================
// FORM LOADING
// ============================================================================

/**
 * Load form with basic display logic (for light theme)
 */
function loadFormBasic() {
    // Update navigation links with smart referrer
    updateNavigationLinks();

    // Extract parameters from URL
    const formLink = getUrlParameter('link');
    const formTitle = getUrlParameter('title');
    const formDescription = getUrlParameter('description') || 'Попълнете формата и ще се свържа с Вас скоро.';

    // Validate required parameters
    if (!formLink || !formTitle) {
        showError('Липсват задължителни параметри. Моля, уверете се че URL адресът съдържа "link" и "title" параметри.');
        return;
    }

    // Update title and description
    document.getElementById('form-title').textContent = formTitle;
    document.getElementById('form-description').textContent = formDescription;
    document.title = formTitle + ' - TutoriAleks';

    // Load iframe
    const iframe = document.getElementById('form-iframe');
    iframe.src = formLink;

    // Show iframe after loading
    iframe.onload = function() {
        document.getElementById('loading').style.display = 'none';
        document.querySelector('.iframe-wrapper').style.display = 'block';
    };

    // Handle errors
    iframe.onerror = function() {
        showError('Грешка при зареждане на формата. Моля, опитайте отново по-късно.');
    };
}

/**
 * Load form with advanced resize handling (for dark theme)
 */
function loadFormAdvanced() {
    // Update navigation links with smart referrer
    updateNavigationLinks();

    // Extract parameters from URL
    const formLink = getUrlParameter('link');
    const formTitle = getUrlParameter('title');
    const formDescription = getUrlParameter('description') || 'Попълнете формата и ще се свържа с Вас скоро.';

    // Validate required parameters
    if (!formLink || !formTitle) {
        showError('Липсват задължителни параметри. Моля, уверете се че URL адресът съдържа "link" и "title" параметри.');
        return;
    }

    // Update title and description
    document.getElementById('form-title').textContent = formTitle;
    document.getElementById('form-description').textContent = formDescription;
    document.title = formTitle + ' - TutoriAleks';

    // Initialize iframe resize handling
    initializeIframe();

    // Load iframe
    const iframe = document.getElementById('form-iframe');
    iframe.src = formLink;

    // Handle errors
    iframe.onerror = function() {
        showError('Грешка при зареждане на формата. Моля, опитайте отново по-късно.');
    };
}

// ============================================================================
// EXPORTS
// ============================================================================

if (typeof window !== 'undefined') {
    window.GoogleFormsHandler = {
        // Utilities
        getUrlParameter: getUrlParameter,
        getSmartBackLink: getSmartBackLink,
        updateNavigationLinks: updateNavigationLinks,
        showError: showError,

        // Iframe utilities
        debounce: debounce,
        resizeIframe: resizeIframe,
        setResponsiveIframeHeight: setResponsiveIframeHeight,
        handleGoogleFormsMessage: handleGoogleFormsMessage,
        initializeIframe: initializeIframe,

        // Form loaders
        loadFormBasic: loadFormBasic,
        loadFormAdvanced: loadFormAdvanced
    };
}
