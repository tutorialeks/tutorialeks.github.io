/**
 * Variant B1: Warm Philosophy Layout - JavaScript
 * Handles smooth scrolling, animations, philosophy toggle, and iframe height adjustments
 */

// ============================================================================
// PHILOSOPHY BOX TOGGLE
// ============================================================================

function togglePhilosophy() {
    const content = document.getElementById('philosophyContent');
    const toggle = document.querySelector('.philosophy-toggle');

    if (content.classList.contains('open')) {
        content.classList.remove('open');
        toggle.classList.remove('open');
    } else {
        content.classList.add('open');
        toggle.classList.add('open');
    }
}

// Auto-open philosophy box after 2 seconds for engagement
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const content = document.getElementById('philosophyContent');
        const toggle = document.querySelector('.philosophy-toggle');
        if (content && !content.classList.contains('open')) {
            content.classList.add('open');
            toggle.classList.add('open');
        }
    }, 2000);
});

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
            // Optionally unobserve after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in-observer class
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.fade-in-observer');
    elementsToObserve.forEach(el => observer.observe(el));

    // Initialize iframe resizing for seamless display
    initIframeResizing();
});

// ============================================================================
// IFRAME RESIZING - Seamless iframe display without scrollbars
// ============================================================================

/**
 * Dynamically resize iframe to fit content height
 * This prevents scrollbars and creates seamless integration
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
        console.warn('[Variant B1] Cannot resize iframe (cross-origin):', iframe.src);
    }
}

/**
 * Initialize iframe resizing for all iframes
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

// Add loading="lazy" to images that don't have it (except hero image)
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        // Don't lazy load hero images
        if (!img.closest('.hero-section')) {
            img.setAttribute('loading', 'lazy');
        }
    });
});

// ============================================================================
// CONSOLE INFO
// ============================================================================

console.log('[Variant B1] Warm Philosophy Layout initialized');
console.log('[Variant B1] Features: Smooth scroll, fade-in animations, philosophy toggle, iframe adjustment');
