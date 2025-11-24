# Centralized Google Forms Configuration Guide

## Overview

The Google Forms system has been updated with a **centralized configuration** that makes it easy to manage all form URLs, titles, and descriptions from a single location in the code.

## How It Works

### 1. Configuration Location

All form configurations are stored in the `<head>` section of `bg/learners/index.html` in the `FORMS_CONFIG` object:

```javascript
const FORMS_CONFIG = {
    consultation: {
        url: 'YOUR_CONSULTATION_FORM_URL',
        title: 'Запази безплатна консултация',
        description: 'Попълнете формата и ще се свържа с вас в рамките на 24 часа'
    },
    courseAccess: {
        url: 'YOUR_COURSE_ACCESS_FORM_URL',
        title: 'Искам достъп до курса',
        description: 'Попълнете формата за достъп до безплатния Python курс'
    },
    // ... more forms
};
```

### 2. How Links Work

Instead of hardcoded URLs, all form links now use a `data-form-type` attribute:

```html
<a href="#" data-form-type="consultation" class="btn btn-primary">
    Запази безплатна консултация
</a>
```

When the page loads, JavaScript automatically:
1. Finds all links with `data-form-type` attribute
2. Looks up the configuration for that form type
3. Builds the complete URL with proper encoding
4. Updates the link's `href` attribute

## Setup Instructions

### Step 1: Create Your Google Forms

1. Go to https://forms.google.com
2. Create each of the 5 required forms:
   - **Consultation Form** - For booking free consultations
   - **Course Access Form** - For Python course access requests
   - **Student Form** - For student enrollment
   - **Parent Form** - For parent inquiries
   - **General Contact Form** - For general questions

3. For each form, click "Send" → Link icon → Copy the URL
4. **Important:** Use the embedded URL format (should end with `?embedded=true`)

### Step 2: Update the Configuration

Open `bg/learners/index.html` and find the `FORMS_CONFIG` object in the `<head>` section (around line 28).

Replace the placeholder URLs with your actual Google Form URLs:

```javascript
const FORMS_CONFIG = {
    consultation: {
        url: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true',
        title: 'Запази безплатна консултация',
        description: 'Попълнете формата и ще се свържа с вас в рамките на 24 часа'
    },
    // ... update all 5 forms
};
```

### Step 3: Customize Titles and Descriptions (Optional)

You can also customize the titles and descriptions for each form in the same configuration object. These will appear on the form page.

## Benefits of This System

✅ **Single Source of Truth** - Update all form links by editing one configuration object
✅ **Easy Maintenance** - No need to search through HTML for each link
✅ **Proper URL Encoding** - JavaScript handles special characters automatically
✅ **Type Safety** - Console errors if you reference a non-existent form type
✅ **Flexible** - Easy to add new forms or update existing ones

## Available Form Types

The system currently supports 5 form types:

| Form Type | Used For | Locations on Page |
|-----------|----------|-------------------|
| `consultation` | Free consultation bookings | Hero section CTA |
| `courseAccess` | Python course access | YouTube course section |
| `student` | Student enrollment | CTA section - Student card |
| `parent` | Parent inquiries | CTA section - Parent card |
| `general` | General contact/questions | CTA section - General card |

## Adding a New Form Type

To add a new form type:

1. **Add to configuration:**
```javascript
const FORMS_CONFIG = {
    // ... existing forms
    newFormType: {
        url: 'YOUR_NEW_FORM_URL',
        title: 'Your Form Title',
        description: 'Your form description'
    }
};
```

2. **Add link in HTML:**
```html
<a href="#" data-form-type="newFormType" class="btn btn-primary">
    Button Text
</a>
```

That's it! The JavaScript will automatically handle the rest.

## Troubleshooting

### Links Don't Work

**Problem:** Clicking a form link does nothing or goes to "#"

**Solutions:**
1. Check browser console for errors (F12 → Console tab)
2. Verify the `data-form-type` attribute matches a key in `FORMS_CONFIG`
3. Ensure JavaScript is enabled in the browser
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

### Console Errors

**Error:** `Unknown form type: xyz`

**Solution:** The `data-form-type` value doesn't match any key in `FORMS_CONFIG`. Check for typos.

## Technical Details

### URL Building Process

1. JavaScript reads the `data-form-type` attribute
2. Looks up the configuration in `FORMS_CONFIG`
3. Creates a `URLSearchParams` object with:
   - `link` - The Google Form URL
   - `title` - The form title
   - `description` - The form description
4. Builds the final URL: `../../shared/components/googleforms.html?link=...&title=...&description=...`
5. Updates the link's `href` attribute

### Browser Compatibility

- ✅ Chrome/Edge 49+
- ✅ Firefox 44+
- ✅ Safari 10.1+
- ✅ Opera 36+
- ⚠️ IE 11 (requires URLSearchParams polyfill)

### Performance

- Configuration is loaded once when the page loads
- Links are updated in a single pass through the DOM
- No performance impact on page load or interaction

## Migration from Old System

If you're migrating from the old hardcoded URL system:

**Old way:**
```html
<a href="../../shared/components/googleforms.html?link=URL&title=Title&description=Desc">
```

**New way:**
```html
<a href="#" data-form-type="formType">
```

The new system is cleaner and easier to maintain!

## Best Practices

1. **Keep URLs Updated** - Regularly verify that form URLs are still valid
2. **Test After Changes** - Always test form links after updating the configuration
3. **Use Descriptive Titles** - Make titles clear and action-oriented
4. **Keep Descriptions Concise** - Brief descriptions work best
5. **Backup Configuration** - Keep a copy of your form URLs in a safe place

## Support

For issues or questions:
- Check the browser console for error messages
- Verify all URLs are correct and accessible
- Ensure the `FORMS_CONFIG` object syntax is valid JavaScript
- Test forms individually by opening their URLs directly

---

**Last Updated:** November 25, 2025
**Version:** 2.0 (Centralized Configuration)
