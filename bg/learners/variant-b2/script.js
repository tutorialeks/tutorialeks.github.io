/**
 * Variant B2: Professional Philosophy Layout - Variant-specific JavaScript
 * Handles approach items animation and comparison table progressive reveal
 */

// ============================================================================
// APPROACH ITEMS PROGRESSIVE HIGHLIGHT
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    const approachItems = document.querySelectorAll('.approach-item');

    // Add progressive animation delay to approach items
    approachItems.forEach((item, index) => {
        item.style.animationDelay = `${0.8 + (index * 0.1)}s`;
    });

    console.log('[Variant B2] Professional Philosophy Layout variant-specific features initialized');
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
