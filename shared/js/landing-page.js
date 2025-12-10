/**
 * TutoriAleks Landing Page - Shared JavaScript
 * Common functionality for all landing page variants
 *
 * Features:
 * - Smooth scrolling for anchor links
 * - Fade-in animations using Intersection Observer
 * - Seamless iframe resizing (no scrollbars)
 * - Scroll indicator auto-hide
 * - Performance optimizations
 */

// ============================================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignore empty anchors and form links
        if (href === '#' || this.hasAttribute('data-form-type')) {
            return;
        }

        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ============================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// ============================================================================
// IFRAME RESIZING - Seamless iframe display without scrollbars
// ============================================================================

/**
 * Dynamically resize iframe to fit content height
 * This prevents scrollbars and creates seamless integration
 *
 * @param {HTMLIFrameElement} iframe - The iframe element to resize
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

            // Add small buffer to prevent scrollbars
            iframe.style.height = (height + 20) + 'px';
        }
    } catch (e) {
        // Cross-origin iframe - can't access content
        console.warn('Cannot resize iframe (cross-origin):', iframe.src);
    }
}

/**
 * Initialize iframe resizing for all iframes on the page
 * Sets up load listeners and periodic resize checks
 */
function initIframeResizing() {
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach(iframe => {
        // Resize on load
        iframe.addEventListener('load', () => {
            resizeIframe(iframe);

            // Resize again after a short delay (for fonts/images)
            setTimeout(() => resizeIframe(iframe), 100);
            setTimeout(() => resizeIframe(iframe), 500);
        });

        // If already loaded, resize now
        if (iframe.contentWindow && iframe.contentWindow.document.readyState === 'complete') {
            resizeIframe(iframe);
        }
    });

    // Also resize on window resize
    window.addEventListener('resize', () => {
        iframes.forEach(resizeIframe);
    });
}

// ============================================================================
// SCROLL INDICATOR HIDE ON SCROLL
// ============================================================================

window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
});

// ============================================================================
// PERFORMANCE OPTIMIZATION: LAZY LOADING ENHANCEMENTS
// ============================================================================

/**
 * Add lazy loading to images that don't have it
 * Excludes hero images for better initial rendering
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        // Don't lazy load hero images for better LCP
        if (!img.closest('.hero-section')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize fade-in animations
    const elementsToObserve = document.querySelectorAll('.fade-in-observer');
    elementsToObserve.forEach(el => observer.observe(el));

    // Initialize iframe resizing for seamless display
    initIframeResizing();

    // Initialize lazy loading
    initLazyLoading();

    // Log initialization
    console.log('[TutoriAleks] Landing page initialized');
    console.log('[TutoriAleks] Features: Smooth scroll, fade-in animations, seamless iframes, lazy loading');
});
