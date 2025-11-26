/**
 * Variant B1: Warm Philosophy Layout - Variant-specific JavaScript
 * Handles philosophy box toggle with auto-open
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

    console.log('[Variant B1] Warm Philosophy Layout variant-specific features initialized');
});
