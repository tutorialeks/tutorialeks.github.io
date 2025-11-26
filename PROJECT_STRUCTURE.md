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
│   │   ├── variant-a1/            # Bold Discount layout (A/B test variant)
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
└── shared/                         # Shared resources across all pages
    ├── components/                 # Reusable HTML components
    │   ├── bg/                     # Bulgarian language components
    │   │   ├── footer.html        # Site footer (Bulgarian)
    │   │   ├── credentials.html   # Credentials/about section (Bulgarian)
    │   │   ├── pricing-table.html # Pricing table (Bulgarian)
    │   │   └── googleforms.html   # Google Forms iframe wrapper (Bulgarian)
    │   │
    │   └── en/                     # English language components (planned)
    │       ├── footer.html        # Site footer (English)
    │       ├── credentials.html   # Credentials/about section (English)
    │       ├── pricing-table.html # Pricing table (English)
    │       └── googleforms.html   # Google Forms iframe wrapper (English)
    │
    ├── css/                        # Shared stylesheets
    │   ├── variables.css          # CSS custom properties (colors, fonts, etc.)
    │   └── global.css             # Global styles and utilities
    │
    └── js/                         # Shared JavaScript
        ├── forms.js               # Centralized forms configuration & smart path resolver
        └── landing-page.js        # Shared landing page functionality (scroll, animations, iframes)
```

## Page Types and Paths

### Landing Pages (2 levels deep)

**Structure:** `{language}/{audience}/index.html`

**Examples:**
- `bg/learners/index.html` - Bulgarian learners
- `bg/professionals/index.html` - Bulgarian professionals
- `en/learners/index.html` - English learners
- `en/professionals/index.html` - English professionals

**Path to shared resources:** `../../shared/`

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

| Depth | Example Path | Resolved Path to Shared |
|-------|-------------|------------------------|
| 0 | `index.html` | `shared/` |
| 2 | `bg/learners/index.html` | `../../shared/` |
| 2 | `blog/python/post.html` | `../../shared/` |

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
<!-- Include the forms script -->
<script src="../../shared/js/forms.js"></script>

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

## Shared Components

Components are organized by language in subfolders (`bg/` for Bulgarian, `en/` for English).

### Footer (`shared/components/{lang}/footer.html`)

Site-wide footer with contact information and links.

**Usage (Bulgarian):**
```html
<iframe src="../../shared/components/bg/footer.html"
        class="iframe-container"
        style="min-height: 400px;"
        frameborder="0">
</iframe>
```

**Usage (English):**
```html
<iframe src="../../shared/components/en/footer.html"
        class="iframe-container"
        style="min-height: 400px;"
        frameborder="0">
</iframe>
```

### Credentials (`shared/components/{lang}/credentials.html`)

About section with credentials, certifications, and experience.

**Usage (Bulgarian):**
```html
<iframe src="../../shared/components/bg/credentials.html"
        class="iframe-container"
        style="min-height: 1200px;"
        frameborder="0">
</iframe>
```

### Pricing Table (`shared/components/{lang}/pricing-table.html`)

Pricing information and package details.

**Usage (Bulgarian):**
```html
<iframe src="../../shared/components/bg/pricing-table.html"
        class="iframe-container"
        style="min-height: 1400px;"
        frameborder="0">
</iframe>
```

### Google Forms Wrapper (`shared/components/{lang}/googleforms.html`)

Displays Google Forms in an iframe with custom title and description.

**Parameters:**
- `link` - The Google Form URL (must end with `?embedded=true`)
- `title` - Form title to display
- `description` - Form description to display

**Note:** This component is accessed automatically by the forms.js script. You don't need to link to it directly.

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

**`bg/learners/variant-a1/script.js`**
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

**Last Updated:** November 25, 2025  
**Version:** 1.0  
**Maintainer:** TutoriAleks
