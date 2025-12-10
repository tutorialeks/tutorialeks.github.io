# Centralized Google Forms Configuration Guide

## Overview

The Google Forms system uses a **centralized configuration** with a **smart path resolver** that automatically handles form links across the entire website. All form configurations are managed from a single JavaScript file that works universally across all pages.

## How It Works

### 1. Configuration Location

All form configurations are stored in `shared/js/forms.js` in the `FORMS_CONFIG` object:

```javascript
const FORMS_CONFIG = {
    'bg-learners-consultation': {
        url: 'YOUR_BG_LEARNERS_CONSULTATION_FORM_URL',
        title: 'Запази безплатна консултация',
        description: 'Попълнете формата и ще се свържа с вас в рамките на 24 часа'
    },
    'bg-learners-courseAccess': {
        url: 'YOUR_BG_LEARNERS_COURSE_ACCESS_FORM_URL',
        title: 'Искам достъп до курса',
        description: 'Попълнете формата за достъп до безплатния Python курс'
    },
    // ... more forms
};
```

### 2. Smart Path Resolution

The system automatically detects the current page location and calculates the correct relative path to `shared/components/googleforms.html`. This works for:

- **Landing pages:** `bg/learners/index.html` → `../../shared/`
- **Blog posts:** `blog/python/post.html` → `../../shared/`
- **Root pages:** `index.html` → `shared/`

No manual path configuration needed!

### 3. How Links Work

Instead of hardcoded URLs, all form links use a `data-form-type` attribute:

```html
<a href="#" data-form-type="bg-learners-consultation" class="btn btn-primary">
    Запази безплатна консултация
</a>
```

When the page loads, JavaScript automatically:
1. Finds all links with `data-form-type` attribute
2. Detects the current page depth
3. Calculates the correct path to googleforms.html
4. Looks up the configuration for that form type
5. Builds the complete URL with proper encoding
6. Updates the link's `href` attribute

## Setup Instructions

### Step 1: Include the Forms Script

Add this script tag to your HTML page (before your page-specific scripts):

```html
<script src="../../shared/js/forms.js"></script>
```

**Note:** Adjust the path based on your page depth:
- Landing pages (2 levels): `../../shared/js/forms.js`
- Blog posts (2 levels): `../../shared/js/forms.js`
- Root pages (0 levels): `shared/js/forms.js`

### Step 2: Create Your Google Forms

1. Go to https://forms.google.com
2. Create forms for each audience and language:
   - Bulgarian Learners: consultation, course access
   - Bulgarian Professionals: consultation
   - English Learners: consultation, course access
   - English Professionals: consultation
   - General: contact form (shared)

3. For each form, click "Send" → Link icon → Copy the URL
4. **Important:** Use the embedded URL format (should end with `?embedded=true`)

### Step 3: Update the Configuration

Open `shared/js/forms.js` and find the `FORMS_CONFIG` object.

Replace the placeholder URLs with your actual Google Form URLs:

```javascript
const FORMS_CONFIG = {
    // Bulgarian Learners
    'bg-learners-consultation': {
        url: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
        title: 'Запази безплатна консултация',
        description: 'Попълнете формата и ще се свържа с вас в рамките на 24 часа'
    },
    'bg-learners-courseAccess': {
        url: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
        title: 'Искам достъп до курса',
        description: 'Попълнете формата за достъп до безплатния Python курс'
    },
    
    // Bulgarian Professionals
    'bg-professionals-consultation': {
        url: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
        title: 'Запази консултация за професионалисти',
        description: 'Специализирана консултация за напреднали разработчици'
    },
    
    // English Learners
    'en-learners-consultation': {
        url: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
        title: 'Book a Free Consultation',
        description: 'Fill out the form and I will contact you within 24 hours'
    },
    'en-learners-courseAccess': {
        url: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
        title: 'Get Course Access',
        description: 'Fill out the form to access the free Python course'
    },
    
    // English Professionals
    'en-professionals-consultation': {
        url: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
        title: 'Book Professional Consultation',
        description: 'Specialized consultation for advanced developers'
    },
    
    // General (shared across all)
    'general': {
        url: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
        title: 'Contact Us',
        description: 'General inquiries and questions'
    }
};
```

### Step 4: Use Form Links in HTML

Add form links using the `data-form-type` attribute:

```html
<!-- Bulgarian Learners Page -->
<a href="#" data-form-type="bg-learners-consultation" class="btn btn-primary">
    Запази безплатна консултация
</a>

<!-- English Professionals Page -->
<a href="#" data-form-type="en-professionals-consultation" class="btn btn-primary">
    Book Professional Consultation
</a>

<!-- Blog Post (any language/audience) -->
<a href="#" data-form-type="bg-learners-consultation">
    Book a consultation to discuss this topic
</a>
```

## Form Naming Convention

Form types follow this pattern: `{language}-{audience}-{formType}`

### Components

- **language:** `bg` (Bulgarian) or `en` (English)
- **audience:** `learners` or `professionals`
- **formType:** `consultation`, `courseAccess`, etc.

### Examples

| Form Type | Language | Audience | Purpose |
|-----------|----------|----------|---------|
| `bg-learners-consultation` | Bulgarian | Learners | Free consultation |
| `bg-learners-courseAccess` | Bulgarian | Learners | Course access |
| `bg-professionals-consultation` | Bulgarian | Professionals | Professional consultation |
| `en-learners-consultation` | English | Learners | Free consultation |
| `en-learners-courseAccess` | English | Learners | Course access |
| `en-professionals-consultation` | English | Professionals | Professional consultation |
| `general` | Any | Any | General contact |

**Exception:** The `general` form has no prefix and is shared across all pages.

## Benefits of This System

✅ **Single Source of Truth** - Update all form links by editing one file  
✅ **Smart Path Detection** - Works automatically on any page depth  
✅ **Easy Maintenance** - No need to search through HTML for each link  
✅ **Proper URL Encoding** - JavaScript handles special characters automatically  
✅ **Type Safety** - Console errors if you reference a non-existent form type  
✅ **Flexible** - Easy to add new forms or update existing ones  
✅ **Universal** - Works across landing pages, blog posts, and root pages  
✅ **Multi-language Support** - Built-in support for multiple languages and audiences

## Adding a New Form Type

To add a new form type:

### 1. Add to Configuration

Edit `shared/js/forms.js`:

```javascript
const FORMS_CONFIG = {
    // ... existing forms
    'de-learners-consultation': {
        url: 'YOUR_GERMAN_FORM_URL',
        title: 'Buchen Sie eine kostenlose Beratung',
        description: 'Füllen Sie das Formular aus'
    }
};
```

### 2. Use in HTML

```html
<a href="#" data-form-type="de-learners-consultation" class="btn btn-primary">
    Beratung buchen
</a>
```

That's it! The JavaScript automatically handles the rest.

## Troubleshooting

### Links Don't Work

**Problem:** Clicking a form link does nothing or goes to "#"

**Solutions:**
1. Check browser console for errors (F12 → Console tab)
2. Verify the `data-form-type` attribute matches a key in `FORMS_CONFIG`
3. Ensure `shared/js/forms.js` is loaded before clicking links
4. Check that the form URL is valid and accessible

### Form Doesn't Load in iframe

**Problem:** Form page loads but the form itself doesn't appear

**Solutions:**
1. Verify the Google Form URL ends with `?embedded=true`
2. Check that the form has "Allow responses from anyone" enabled
3. Ensure the form isn't restricted to specific domains
4. Try opening the form URL directly in a new tab to test

### Special Characters in Title/Description

**Problem:** Special characters (like Bulgarian Cyrillic) appear garbled

**Solution:** The system uses `URLSearchParams` which automatically handles encoding. If you see issues:
1. Ensure the HTML file is saved with UTF-8 encoding
2. Check that the `<meta charset="UTF-8">` tag is present in the `<head>`
3. Verify `shared/js/forms.js` is also saved with UTF-8 encoding

### Console Errors

**Error:** `Unknown form type: xyz`

**Solution:** The `data-form-type` value doesn't match any key in `FORMS_CONFIG`. Check for typos in:
- The HTML `data-form-type` attribute
- The `FORMS_CONFIG` object keys

**Error:** `Failed to load resource: shared/js/forms.js`

**Solution:** The path to forms.js is incorrect. Verify:
- Landing pages use: `../../shared/js/forms.js`
- Blog posts use: `../../shared/js/forms.js`
- Root pages use: `shared/js/forms.js`

### Path Issues

**Problem:** Forms work on some pages but not others

**Solution:** The smart path resolver should handle this automatically. If issues persist:
1. Check browser console for path detection logs
2. Verify all pages maintain consistent depth (2 levels for content)
3. Ensure the page structure matches the expected format

## Technical Details

### URL Building Process

1. JavaScript reads the `data-form-type` attribute from the link
2. Analyzes `window.location.pathname` to determine page depth
3. Calculates the correct relative path to `shared/components/googleforms.html`
4. Looks up the configuration in `FORMS_CONFIG`
5. Creates a `URLSearchParams` object with:
   - `link` - The Google Form URL
   - `title` - The form title
   - `description` - The form description
6. Builds the final URL: `{calculated-path}/googleforms.html?link=...&title=...&description=...`
7. Updates the link's `href` attribute

### Browser Compatibility

- ✅ Chrome/Edge 49+
- ✅ Firefox 44+
- ✅ Safari 10.1+
- ✅ Opera 36+
- ⚠️ IE 11 (requires URLSearchParams polyfill)

### Performance

- Configuration is loaded once when the page loads
- Path detection happens once per page load
- Links are updated in a single pass through the DOM
- No performance impact on page load or interaction
- Console logging can be disabled in production

## Best Practices

1. **Keep URLs Updated** - Regularly verify that form URLs are still valid
2. **Test After Changes** - Always test form links after updating the configuration
3. **Use Descriptive Titles** - Make titles clear and action-oriented
4. **Keep Descriptions Concise** - Brief descriptions work best
5. **Follow Naming Convention** - Use `{language}-{audience}-{formType}` format
6. **Backup Configuration** - Keep a copy of your form URLs in a safe place
7. **Test on Multiple Pages** - Verify forms work on landing pages, blog posts, etc.
8. **Check Console Logs** - Use browser console to debug issues

## Migration from Old System

If you're migrating from the old inline script system:

### Old Way (Inline Script)

```html
<head>
    <script>
        const FORMS_CONFIG = {
            consultation: { url: '...', title: '...', description: '...' }
        };
        // ... inline JavaScript
    </script>
</head>
<body>
    <a href="#" data-form-type="consultation">Link</a>
</body>
```

### New Way (Shared Script)

```html
<head>
    <!-- No inline script needed -->
</head>
<body>
    <a href="#" data-form-type="bg-learners-consultation">Link</a>
    
    <script src="../../shared/js/forms.js"></script>
</body>
```

### Migration Steps

1. Remove inline `<script>` from `<head>`
2. Add `<script src="../../shared/js/forms.js"></script>` before closing `</body>`
3. Update `data-form-type` values to use new naming convention
4. Test all form links

## Support

For issues or questions:
- Check the browser console for error messages (F12 → Console)
- Verify all URLs are correct and accessible
- Ensure the `FORMS_CONFIG` object syntax is valid JavaScript
- Test forms individually by opening their URLs directly
- Review the `PROJECT_STRUCTURE.md` for overall architecture

## Related Documentation

- **PROJECT_STRUCTURE.md** - Complete website architecture
- **GOOGLE_FORMS_SETUP.md** - Google Forms setup guide
- **DEPLOYMENT_GUIDE.md** - Deployment instructions

---

**Last Updated:** November 25, 2025  
**Version:** 3.0 (Shared Script with Smart Path Resolver)  
**Previous Version:** 2.0 (Inline Configuration)
