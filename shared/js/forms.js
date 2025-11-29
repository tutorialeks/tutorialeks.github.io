/**
 * Centralized Google Forms Configuration and Smart Path Resolver
 * 
 * This script handles all Google Form links across the website with automatic
 * path detection based on the current page location.
 * 
 * Usage: Include this script in any page that needs form links:
 * <script src="../../shared/js/forms.js"></script>
 * 
 * Then use data attributes in your HTML:
 * <a href="#" data-form-type="bg-learners-consultation">Link Text</a>
 */

// ============================================================================
// FORMS CONFIGURATION
// ============================================================================

const FORMS_CONFIG = {
    // Bulgarian Learners
    'bg-learners-consultation': {
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSfPq85hi1ayW0POa_4EedhxgKoiAx6MaHzNNfKXwJCiefiiHQ/viewform?embedded=true', // https://forms.gle/rQ8qS4ckm8WmuPZHA
        title: 'Запази безплатна консултация',
        description: 'Попълнете формата и ще се свържа с вас в рамките на 24 часа'
    },
    'bg-learners-courseAccess': {
        url: 'https://forms.gle/ugyR4QinTxi2Bgce7?embedded=true',//https://docs.google.com/forms/d/e/1FAIpQLSdyh3bPYzEzeEj9aZayq2uIPNPitlpkcpkR9SwEKK69qpd8Qg/viewform?embedded=true
        title: 'Искам достъп до видео демонстрацията',
        description: 'Попълнете формата за достъп до безплатния Python курс'
    },
    'bg-learners-coursePackage': {
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSe2xUj5J1Bz2ej7wA6oXl4oiVeF_smezMQWewGGIPgs48wJIg/viewform?embedded=true',// https://forms.gle/BC9U9VWBgrAKfx416
        title: 'Запиши се за пакетно обучение',
        description: 'Попълнете формата за дългосрочно обучение'
    },
    
    // Bulgarian Professionals
    'bg-professionals-consultation': {
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSd_w2N80Mbj4IPL0b4XCVC4ieWwqwFp4TUImG6HqNSCGooyOQ/viewform?embedded=true', // https://forms.gle/4wP6FSVx5TSHsmYX8
        title: 'Запази консултация за професионалисти',
        description: 'Специализирана консултация за напреднали разработчици'
    },
    
    // English Learners
    'en-learners-consultation': {
        url: 'YOUR_EN_LEARNERS_CONSULTATION_FORM_URL',
        title: 'Book a Free Consultation',
        description: 'Fill out the form and I will contact you within 24 hours'
    },
    'en-learners-courseAccess': {
        url: 'YOUR_EN_LEARNERS_COURSE_ACCESS_FORM_URL',
        title: 'Get Course Access',
        description: 'Fill out the form to access the free Python course'
    },
    
    // English Professionals
    'en-professionals-consultation': {
        url: 'YOUR_EN_PROFESSIONALS_CONSULTATION_FORM_URL',
        title: 'Book Professional Consultation',
        description: 'Specialized consultation for advanced developers'
    },
    
    // General contact (shared across all pages)
    'general': {
        url: 'YOUR_GENERAL_CONTACT_FORM_URL',
        title: 'Contact Us',
        description: 'General inquiries and questions'
    }
};

// ============================================================================
// SMART PATH RESOLVER
// ============================================================================

/**
 * Automatically detects the current page depth and calculates the correct
 * relative path to the shared components directory.
 * 
 * Supported structures:
 * - Root: index.html → shared/
 * - Landing pages: bg/learners/index.html → ../../shared/
 * - Blog posts: blog/category/post.html → ../../shared/
 * 
 * @returns {string} The relative path to shared/components/googleforms.html
 */
function getGoogleFormsPath() {
    // Get the current page path
    const path = window.location.pathname;

    // Remove trailing slashes and split into segments
    const segments = path.replace(/\/$/, '').split('/').filter(segment => {
        // Filter out empty segments and common file names
        return segment && segment !== 'index.html' && segment !== '';
    });

    // Calculate depth (number of directory levels from root)
    // Subtract 1 because the last segment is usually the filename
    const depth = Math.max(0, segments.length - 1);

    // Build the relative path
    const upLevels = '../'.repeat(depth);

    // AUTO-DETECT THEME
    const isDarkTheme = path.includes('dark-theme') ||
                        document.body.classList.contains('dark-theme') ||
                        document.body.classList.contains('theme-dark');

    const filename = isDarkTheme ? 'googleforms-dark.html' : 'googleforms.html';
    const fullPath = upLevels + 'shared/components/' + filename;

    console.log('[Forms.js] Path detection:', {
        currentPath: path,
        segments: segments,
        depth: depth,
        isDarkTheme: isDarkTheme,
        resolvedPath: fullPath
    });

    return fullPath;
}

/**
 * Builds the complete URL for a Google Form with all parameters
 * 
 * @param {string} formType - The form type key from FORMS_CONFIG
 * @returns {string|null} The complete URL or null if form type not found
 */
function buildFormUrl(formType) {
    const config = FORMS_CONFIG[formType];
    
    if (!config) {
        console.error(`[Forms.js] Unknown form type: ${formType}`);
        console.error('[Forms.js] Available form types:', Object.keys(FORMS_CONFIG));
        return null;
    }
    
    // Get the base path to googleforms.html
    const basePath = getGoogleFormsPath();
    
    // Build URL parameters
    const params = new URLSearchParams({
        link: config.url,
        title: config.title,
        description: config.description
    });
    
    const fullUrl = `${basePath}?${params.toString()}`;
    
    console.log('[Forms.js] Built form URL:', {
        formType: formType,
        title: config.title,
        url: fullUrl
    });
    
    return fullUrl;
}

// ============================================================================
// AUTOMATIC LINK INITIALIZATION
// ============================================================================

/**
 * Initializes all form links on the page
 * Finds all elements with data-form-type attribute and updates their href
 */
function initializeFormLinks() {
    const formLinks = document.querySelectorAll('[data-form-type]');
    
    console.log(`[Forms.js] Initializing ${formLinks.length} form links`);
    
    formLinks.forEach(link => {
        const formType = link.getAttribute('data-form-type');
        const url = buildFormUrl(formType);
        
        if (url) {
            link.href = url;
            console.log(`[Forms.js] ✓ Initialized link for form type: ${formType}`);
        } else {
            console.warn(`[Forms.js] ✗ Failed to initialize link for form type: ${formType}`);
            // Keep the href as "#" to prevent navigation
            link.href = '#';
            // Add a click handler to show error
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert(`Form configuration error: Unknown form type "${formType}"`);
            });
        }
    });
    
    console.log('[Forms.js] Form links initialization complete');
}

// ============================================================================
// AUTO-INITIALIZATION
// ============================================================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFormLinks);
} else {
    // DOM is already ready
    initializeFormLinks();
}

// ============================================================================
// EXPORTS (for potential use in other scripts)
// ============================================================================

if (typeof window !== 'undefined') {
    window.FormsManager = {
        config: FORMS_CONFIG,
        buildFormUrl: buildFormUrl,
        getGoogleFormsPath: getGoogleFormsPath,
        initializeFormLinks: initializeFormLinks
    };
}
