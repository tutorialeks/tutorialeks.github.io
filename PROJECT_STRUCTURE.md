# TutoriAleks Website - Project Structure

## Overview

This document describes the complete structure of the TutoriAleks website, including directory organization, file conventions, and how different components work together.

## Directory Structure

```
tutorialeks.github.io/
├── index.html                      # Root landing page (redirect or main page)
├── logo1.png                       # Site logo
├── README.md                       # Project README
├── LICENSE                         # License file
├── .gitignore                      # Git ignore rules
│
├── bg/                             # Bulgarian language pages
│   ├── learners/                   # Bulgarian learners landing pages
│   │   ├── white-theme/            # Bold Discount layout (A/B test variant)
│   │   │   ├── index.html         # Main HTML file
│   │   │   ├── styles.css         # Variant-specific styles
│   │   │   └── script.js          # Variant-specific JavaScript
│   │   │
│   │   ├── variant-a2/            # Clean Discount layout (A/B test variant)
│   │   │   ├── index.html
│   │   │   ├── styles.css
│   │   │   └── script.js
│   │   │
│   │   ├── variant-b1/            # Warm Philosophy layout (A/B test variant)
│   │   │   ├── index.html
│   │   │   ├── styles.css
│   │   │   └── script.js
│   │   │
│   │   └── variant-b2/            # Professional Philosophy layout (A/B test variant)
│   │       ├── index.html
│   │       ├── styles.css
│   │       └── script.js
│   │
│   └── professionals/              # Bulgarian professionals landing page (planned)
│       ├── index.html
│       ├── styles.css
│       └── script.js
│
├── en/                             # English language pages (planned)
│   ├── learners/                   # English learners landing page
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── script.js
│   │
│   └── professionals/              # English professionals landing page
│       ├── index.html
│       ├── styles.css
│       └── script.js
│
├── blog/                           # Blog section (planned)
│   ├── python/                     # Python category
│   │   ├── post-name.html
│   │   └── another-post.html
│   │
│   ├── javascript/                 # JavaScript category
│   │   └── post-name.html
│   │
│   └── tutorials/                  # General tutorials category
│       └── post-name.html
│
├── shared/                         # ROOT-LEVEL GLOBAL RESOURCES (all languages)
│   ├── css/                        # Global CSS (shared across all languages)
│   │   ├── variables.css          # Light theme CSS custom properties
│   │   ├── variables-dark.css     # Dark theme CSS variable overrides
│   │   ├── global.css             # Global base styles and utilities
│   │   └── animations-dark.css    # Dark theme animation definitions
│   │
│   └── js/                         # Global JavaScript (shared across all languages)
│       ├── forms.js               # Centralized forms configuration & smart path resolver
│       └── landing-page.js        # Shared landing page functionality (scroll, animations, iframes)
│
└── bg/                             # Bulgarian language directory
    ├── learners/                   # Landing pages (as shown above)
    │
    └── shared/                     # Bulgarian-specific shared resources
        └── components/             # Bulgarian HTML components (with translated text)
            ├── footer.html         # Site footer (light theme)
            ├── footer-dark.html    # Site footer (dark theme)
            ├── credentials.html    # Credentials section (light theme)
            ├── credentials-dark.html # Credentials section (dark theme)
            ├── pricing-table.html  # Pricing table (light theme)
            ├── pricing-table-dark.html # Pricing table (dark theme)
            ├── googleforms.html    # Google Forms wrapper (light theme)
            └── googleforms-dark.html # Google Forms wrapper (dark theme)
```

## Page Types and Paths

### Landing Pages (3 levels deep)

**Structure:** `{language}/{audience}/{theme}/index.html`

**Examples:**
- `bg/learners/white-theme/index.html` - Bulgarian learners (light theme)
- `bg/learners/dark-theme/index.html` - Bulgarian learners (dark theme)
- `bg/professionals/white-theme/index.html` - Bulgarian professionals
- `en/learners/white-theme/index.html` - English learners (planned)

**Path to global resources:** `../../../shared/` (CSS/JS)
**Path to language components:** `../../shared/components/`

### Blog Posts (2 levels deep)

**Structure:** `blog/{category}/{post-name}.html`

**Examples:**
- `blog/python/getting-started.html`
- `blog/javascript/async-await.html`
- `blog/tutorials/first-program.html`

**Path to shared resources:** `../../shared/`

### Root Pages (0 levels deep)

**Structure:** `{page-name}.html`

**Examples:**
- `index.html`
- `about.html`
- `contact.html`

**Path to shared resources:** `shared/`

## Smart Path Resolution

The website uses a **smart path resolver** in `shared/js/forms.js` that automatically detects the current page depth and calculates the correct relative path to shared components.

### How It Works

1. **Path Detection:** Analyzes `window.location.pathname`
2. **Depth Calculation:** Counts directory levels from root
3. **Path Building:** Constructs the correct `../` sequence

### Supported Depths

| Depth | Example Path | Resolved Path to Global | Resolved Path to Components |
|-------|-------------|------------------------|----------------------------|
| 0 | `index.html` | `shared/` | N/A |
| 2 | `blog/python/post.html` | `../../shared/` | N/A |
| 3 | `bg/learners/white-theme/index.html` | `../../../shared/` | `../../shared/components/` |

## Google Forms System

### Configuration Location

All Google Form configurations are centralized in `shared/js/forms.js` in the `FORMS_CONFIG` object.

### Form Naming Convention

Form types follow this pattern: `{language}-{audience}-{formType}`

**Examples:**
- `bg-learners-consultation` - Bulgarian learners consultation form
- `en-professionals-consultation` - English professionals consultation form
- `general` - General contact form (no prefix, shared across all)

### Available Form Types

| Form Type | Language | Audience | Purpose |
|-----------|----------|----------|---------|
| `bg-learners-consultation` | Bulgarian | Learners | Free consultation booking |
| `bg-learners-courseAccess` | Bulgarian | Learners | Python course access |
| `bg-professionals-consultation` | Bulgarian | Professionals | Professional consultation |
| `en-learners-consultation` | English | Learners | Free consultation booking |
| `en-learners-courseAccess` | English | Learners | Python course access |
| `en-professionals-consultation` | English | Professionals | Professional consultation |
| `general` | Any | Any | General contact/questions |

### Using Forms in HTML

```html
<!-- Include the forms script (from landing pages at depth 3) -->
<script src="../../../shared/js/forms.js"></script>

<!-- Use data-form-type attribute -->
<a href="#" data-form-type="bg-learners-consultation" class="btn btn-primary">
    Запази безплатна консултация
</a>
```

The script automatically:
1. Detects the page location
2. Calculates the correct path to `googleforms.html`
3. Builds the complete URL with form parameters
4. Updates the link's `href` attribute

## Language-Specific Components

Components are located in each language's `shared/components/` directory. Each component has light and dark theme variants.

### Component Structure

```
{lang}/shared/components/
├── footer.html             # Light theme footer
├── footer-dark.html        # Dark theme footer
├── credentials.html        # Light theme credentials
├── credentials-dark.html   # Dark theme credentials
├── pricing-table.html      # Light theme pricing
├── pricing-table-dark.html # Dark theme pricing
├── googleforms.html        # Light theme forms wrapper
└── googleforms-dark.html   # Dark theme forms wrapper
```

### Footer Component

Site-wide footer with contact information and links.

**Usage from Landing Pages (Bulgarian):**
```html
<!-- Light theme -->
<iframe src="../../shared/components/footer.html"
        class="iframe-container footer-iframe"
        frameborder="0"></iframe>

<!-- Dark theme -->
<iframe src="../../shared/components/footer-dark.html"
        class="iframe-container footer-iframe"
        frameborder="0"></iframe>
```

### Credentials Component

About section with credentials, certifications, and experience.

**Usage from Landing Pages (Bulgarian):**
```html
<!-- Light theme -->
<iframe src="../../shared/components/credentials.html"
        class="iframe-container credentials-iframe"
        frameborder="0"></iframe>

<!-- Dark theme -->
<iframe src="../../shared/components/credentials-dark.html"
        class="iframe-container credentials-iframe"
        frameborder="0"></iframe>
```

### Pricing Table Component

Pricing information and package details.

**Usage from Landing Pages (Bulgarian):**
```html
<!-- Light theme -->
<iframe src="../../shared/components/pricing-table.html"
        class="iframe-container pricing-iframe"
        frameborder="0"></iframe>

<!-- Dark theme -->
<iframe src="../../shared/components/pricing-table-dark.html"
        class="iframe-container pricing-iframe"
        frameborder="0"></iframe>
```

### Google Forms Wrapper Component

Displays Google Forms in an iframe with custom title and description.

**Parameters:**
- `link` - The Google Form URL (must end with `?embedded=true`)
- `title` - Form title to display
- `description` - Form description to display

**Note:** This component is accessed automatically by the forms.js script. You don't need to link to it directly. The script automatically selects the correct theme variant.

## Styling System

### CSS Variables (`shared/css/variables.css`)

Defines global CSS custom properties:
- Colors (primary, secondary, backgrounds, text)
- Typography (font families, sizes, weights)
- Spacing (margins, paddings)
- Breakpoints (responsive design)

### Global Styles (`shared/css/global.css`)

Provides:
- CSS reset/normalization
- Utility classes (`.container`, `.btn`, `.grid`, etc.)
- Common component styles
- Responsive utilities

### Page-Specific Styles

Each landing page has its own `styles.css` for page-specific styling:
- `bg/learners/styles.css`
- `bg/professionals/styles.css`
- etc.

## JavaScript Architecture

### Shared Scripts

**`shared/js/forms.js`**
- Centralized form configuration
- Smart path resolution
- Automatic link initialization
- Form URL building

**`shared/js/landing-page.js`**
- **Smooth scrolling** for anchor links (prevents page jump)
- **Fade-in animations** using Intersection Observer API
- **Seamless iframe resizing** (dynamically adjusts height to prevent scrollbars)
- **Scroll indicator auto-hide** (hides after scrolling 100px)
- **Performance optimizations** (lazy loading for images outside hero section)

This script contains common functionality shared across all landing page variants and should be loaded before variant-specific scripts.

**Usage in HTML:**
```html
<script src="../../../shared/js/forms.js"></script>
<script src="../../../shared/js/landing-page.js"></script>
<script src="script.js"></script>
```

### Variant-Specific Scripts

Each landing page variant has its own `script.js` for variant-specific functionality:

**`bg/learners/white-theme/script.js`**
- Discount badge hover effects (scale + rotate animation)

**`bg/learners/variant-a2/script.js`**
- No variant-specific features (uses shared functionality only)

**`bg/learners/variant-b1/script.js`**
- Philosophy box toggle functionality
- Auto-open philosophy box after 2 seconds

**`bg/learners/variant-b2/script.js`**
- Approach items progressive highlight
- Comparison table progressive reveal animation

## Adding New Pages

### Adding a New Landing Page

1. **Create directory structure:**
   ```
   {language}/{audience}/
   ├── index.html
   ├── styles.css
   └── script.js
   ```

2. **Include shared resources in HTML:**
   ```html
   <link rel="stylesheet" href="../../shared/css/variables.css">
   <link rel="stylesheet" href="../../shared/css/global.css">
   <link rel="stylesheet" href="styles.css">
   <script src="../../shared/js/forms.js"></script>
   <script src="../../shared/js/landing-page.js"></script>
   <script src="script.js"></script>
   ```

   **Note:** For landing pages with variants (A/B testing), adjust paths accordingly:
   ```html
   <script src="../../../shared/js/forms.js"></script>
   <script src="../../../shared/js/landing-page.js"></script>
   <script src="script.js"></script>
   ```

3. **Add form configurations to `shared/js/forms.js`:**
   ```javascript
   '{language}-{audience}-consultation': {
       url: 'YOUR_FORM_URL',
       title: 'Your Title',
       description: 'Your Description'
   }
   ```

4. **Use form links with data attributes:**
   ```html
   <a href="#" data-form-type="{language}-{audience}-consultation">
       Link Text
   </a>
   ```

### Adding a New Blog Post

1. **Create HTML file:**
   ```
   blog/{category}/{post-name}.html
   ```

2. **Include shared resources:**
   ```html
   <link rel="stylesheet" href="../../shared/css/variables.css">
   <link rel="stylesheet" href="../../shared/css/global.css">
   <script src="../../shared/js/forms.js"></script>
   ```

3. **Use any form type in your content:**
   ```html
   <a href="#" data-form-type="bg-learners-consultation">
       Book a consultation
   </a>
   ```

## Best Practices

### File Organization

✅ **DO:**
- Keep page-specific code in page directories
- Use shared resources for common functionality
- Follow the established naming conventions
- Maintain consistent directory depth (2 levels for content pages)

❌ **DON'T:**
- Duplicate code across pages
- Hardcode paths to shared resources
- Create deeply nested directory structures
- Mix languages in the same directory

### Form Configuration

✅ **DO:**
- Use descriptive form type names
- Follow the `{language}-{audience}-{formType}` convention
- Update all form URLs in one place (`shared/js/forms.js`)
- Test forms after configuration changes

❌ **DON'T:**
- Hardcode form URLs in HTML
- Use generic form type names
- Create duplicate form configurations
- Forget to add `?embedded=true` to Google Form URLs

### Path Management

✅ **DO:**
- Use relative paths consistently
- Let the smart path resolver handle form paths
- Maintain the 2-level depth for content pages
- Test paths when adding new pages

❌ **DON'T:**
- Use absolute paths (except for external resources)
- Manually calculate relative paths for forms
- Create pages at inconsistent depths
- Assume paths without testing

## Deployment

The website is deployed to GitHub Pages from the `main` branch.

**Deployment URL:** `https://tutorialeks.github.io/`

### Pre-Deployment Checklist

- [ ] All Google Form URLs are configured in `shared/js/forms.js`
- [ ] All form links use `data-form-type` attributes
- [ ] Shared components are properly linked
- [ ] CSS and JavaScript files are included correctly
- [ ] All paths are relative (no hardcoded absolute paths)
- [ ] Test all forms on different page types
- [ ] Verify responsive design on mobile devices

## Troubleshooting

### Forms Don't Work

**Problem:** Clicking form links does nothing or goes to "#"

**Solutions:**
1. Check browser console for errors (F12 → Console)
2. Verify `data-form-type` matches a key in `FORMS_CONFIG`
3. Ensure `shared/js/forms.js` is loaded before page scripts
4. Check that form URLs end with `?embedded=true`

### Incorrect Paths

**Problem:** Resources (CSS, JS, images) don't load

**Solutions:**
1. Verify the page is at the expected depth (2 levels for content)
2. Check that relative paths use correct number of `../`
3. Ensure file names match exactly (case-sensitive)
4. Test paths by opening files directly in browser

### Console Errors

**Error:** `Unknown form type: xyz`

**Solution:** The `data-form-type` value doesn't exist in `FORMS_CONFIG`. Check for typos or add the form type to the configuration.

**Error:** `Failed to load resource`

**Solution:** Path to shared resource is incorrect. Verify the relative path based on page depth.

## Future Enhancements

### Planned Features

- [ ] English language landing pages
- [ ] Blog section with categories
- [ ] Search functionality
- [ ] Newsletter subscription
- [ ] Testimonials section
- [ ] Video tutorials integration
- [ ] Multi-language blog posts

### Potential Improvements

- [ ] Service Worker for offline functionality
- [ ] Progressive Web App (PWA) features
- [ ] Advanced analytics integration
- [ ] A/B testing framework
- [ ] Automated form submission handling
- [ ] CMS integration for blog posts

---

**Last Updated:** November 29, 2025
**Version:** 1.1 (Directory Restructure)
**Maintainer:** TutoriAleks
