/**
 * Variant A1: Bold Discount Layout - Variant-specific JavaScript
 * Handles discount badge hover effect
 */

// ============================================================================
// DISCOUNT BADGE HOVER EFFECT
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    const discountBadge = document.querySelector('.discount-badge');

    if (discountBadge) {
        discountBadge.addEventListener('mouseenter', () => {
            discountBadge.style.transform = 'scale(1.1) rotate(5deg)';
        });

        discountBadge.addEventListener('mouseleave', () => {
            discountBadge.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    console.log('[Variant A1] Bold Discount Layout variant-specific features initialized');
});
