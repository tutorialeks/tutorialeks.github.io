/**
 * Variant B2: Professional Philosophy Layout - JavaScript
 * Handles smooth scrolling, animations, and iframe height adjustments
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
        console.warn('[Variant B2] Cannot resize iframe (cross-origin):', iframe.src);
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
// APPROACH ITEMS PROGRESSIVE HIGHLIGHT
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    const approachItems = document.querySelectorAll('.approach-item');

    // Add progressive animation delay to approach items
    approachItems.forEach((item, index) => {
        item.style.animationDelay = `${0.8 + (index * 0.1)}s`;
    });
});

// ============================================================================
// COMPARISON TABLE ANIMATION
// ============================================================================

// Animate comparison table rows on scroll
const comparisonObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const rows = entry.target.querySelectorAll('.comparison-row');
            rows.forEach((row, index) => {
                setTimeout(() => {
                    row.style.opacity = '1';
                    row.style.transform = 'translateX(0)';
                }, index * 100);
            });
            comparisonObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', () => {
    const comparisonTable = document.querySelector('.comparison-table');
    if (comparisonTable) {
        // Set initial state for rows
        const rows = comparisonTable.querySelectorAll('.comparison-row');
        rows.forEach(row => {
            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            row.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
        });

        comparisonObserver.observe(comparisonTable);
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

console.log('[Variant B2] Professional Philosophy Layout initialized');
console.log('[Variant B2] Features: Smooth scroll, fade-in animations, comparison table animation, iframe adjustment');
