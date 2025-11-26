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
});

// ============================================================================
// IFRAME HEIGHT ADJUSTMENT
// ============================================================================

function adjustIframeHeight() {
    const iframes = document.querySelectorAll('iframe.iframe-container');

    iframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            try {
                // Try to access iframe content height
                const iframeDocument = this.contentDocument || this.contentWindow.document;
                const iframeHeight = iframeDocument.body.scrollHeight;

                // Set minimum height based on iframe type
                let minHeight = 400;
                if (this.classList.contains('pricing-iframe')) {
                    minHeight = 600;
                } else if (this.classList.contains('credentials-iframe')) {
                    minHeight = 500;
                }

                // Use the larger of actual height or minimum height
                this.style.height = Math.max(iframeHeight, minHeight) + 'px';

                console.log('[Script] Iframe height adjusted:', {
                    src: this.src,
                    height: this.style.height
                });
            } catch (error) {
                // If cross-origin, fall back to default height
                console.warn('[Script] Cannot access iframe height (cross-origin):', error.message);
            }
        });
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', adjustIframeHeight);

// Also run after a short delay to catch any late-loading iframes
window.addEventListener('load', () => {
    setTimeout(adjustIframeHeight, 500);
});

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
