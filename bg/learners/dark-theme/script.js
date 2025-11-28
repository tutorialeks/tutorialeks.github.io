/**
 * Variant Black: Dark Glassmorphism - JavaScript
 * Bidirectional scroll animations and minimal interactions
 */

// ============================================================================
// BIDIRECTIONAL SCROLL ANIMATIONS
// ============================================================================

/**
 * Initialize bidirectional scroll animations
 * Elements fade in on scroll down, fade out on scroll up
 */
function initBidirectionalScroll() {
    const elements = document.querySelectorAll('.scroll-animate');

    // Options for Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
        threshold: 0.1
    };

    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is entering viewport - fade in
                entry.target.classList.add('visible');
            } else {
                // Element is leaving viewport - fade out
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    // Observe all elements
    elements.forEach(element => {
        observer.observe(element);
    });

    console.log('[Variant Black] Bidirectional scroll animations initialized:', elements.length, 'elements');
}

// ============================================================================
// DISCOUNT BADGE ENHANCED HOVER
// ============================================================================

/**
 * Add subtle scale effect to discount badge on hover
 */
function initDiscountBadge() {
    const badge = document.querySelector('.discount-badge');
    if (!badge) return;

    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.1) rotate(5deg)';
        badge.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1) rotate(0deg)';
    });

    // Click to scroll to pricing
    badge.addEventListener('click', () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    console.log('[Variant Black] Discount badge interactions initialized');
}

// ============================================================================
// CARD SUBTLE GLOW EFFECT
// ============================================================================

/**
 * Add subtle glow to glass cards on hover
 */
function initCardGlowEffect() {
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle purple glow on hover
            const currentShadow = window.getComputedStyle(this).boxShadow;
            this.style.boxShadow = `${currentShadow}, var(--glow-purple)`;
        });

        card.addEventListener('mouseleave', function() {
            // Remove custom shadow (revert to CSS)
            this.style.boxShadow = '';
        });
    });

    console.log('[Variant Black] Card glow effects initialized:', cards.length, 'cards');
}

// ============================================================================
// SCROLL INDICATOR AUTO-HIDE
// ============================================================================

/**
 * Hide scroll indicator after scrolling
 */
function initScrollIndicator() {
    const indicator = document.querySelector('.scroll-indicator');
    if (!indicator) return;

    // Click to scroll down
    indicator.addEventListener('click', () => {
        const trustSection = document.getElementById('trust');
        if (trustSection) {
            trustSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Hide on scroll
    let lastScrollY = window.pageYOffset;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100 && indicator.style.opacity !== '0') {
            indicator.style.opacity = '0';
            indicator.style.pointerEvents = 'none';
        } else if (window.pageYOffset <= 100 && indicator.style.opacity !== '0.7') {
            indicator.style.opacity = '0.7';
            indicator.style.pointerEvents = 'auto';
        }
    }, { passive: true });

    console.log('[Variant Black] Scroll indicator initialized');
}

// ============================================================================
// STAGGERED ANIMATION DELAYS
// ============================================================================

/**
 * Add staggered delays to grid items for sequential animation
 */
function initStaggeredAnimations() {
    const grids = [
        document.querySelector('.trust-grid'),
        document.querySelector('.steps-grid'),
        document.querySelector('.value-grid'),
        document.querySelector('.testimonials-grid'),
        document.querySelector('.pricing-cards'),
        document.querySelector('.comparison-table')
    ];

    grids.forEach(grid => {
        if (!grid) return;

        const items = grid.querySelectorAll('.scroll-animate');
        items.forEach((item, index) => {
            // Add incremental delay
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    console.log('[Variant Black] Staggered animation delays applied');
}

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Variant Black] Initializing dark glassmorphism features...');

    initBidirectionalScroll();
    initDiscountBadge();
    initCardGlowEffect();
    initScrollIndicator();
    initStaggeredAnimations();

    console.log('[Variant Black] All features initialized successfully');
});

// ============================================================================
// REDUCED MOTION SUPPORT
// ============================================================================

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log('[Variant Black] Reduced motion preference detected - animations disabled');
}
