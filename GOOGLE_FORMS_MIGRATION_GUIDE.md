# Google Forms Migration Guide

## Changes Completed

The Google Forms component has been successfully updated to use `link` and `title` URL parameters instead of the old `type` parameter system.

## What Changed

### 1. `shared/components/googleforms.html`
- **Removed:** Old `FORM_CONFIG` object with hardcoded form configurations
- **Removed:** `type` parameter logic
- **Added:** Direct URL parameter handling for `link`, `title`, and `description`

### 2. `bg/learners/index.html`
Updated all 5 Google Forms links to use the new parameter format:

1. **Hero Section - Consultation Button**
   - Old: `?type=general`
   - New: `?link=YOUR_CONSULTATION_FORM_URL&title=Запази безплатна консултация&description=...`

2. **YouTube Course Section - Course Access Button**
   - Old: `?type=student`
   - New: `?link=YOUR_COURSE_ACCESS_FORM_URL&title=Искам достъп до курса&description=...`

3. **CTA Section - Student Card**
   - Old: `?type=student`
   - New: `?link=YOUR_STUDENT_FORM_URL&title=Запиши се за уроци&description=...`

4. **CTA Section - Parent Card**
   - Old: `?type=parent`
   - New: `?link=YOUR_PARENT_FORM_URL&title=Запитване от родител&description=...`

5. **CTA Section - General Contact Card**
   - Old: `?type=general`
   - New: `?link=YOUR_GENERAL_CONTACT_FORM_URL&title=Свържете се с мен&description=...`

## Next Steps - Replace Placeholder URLs

You need to replace the following placeholder URLs with your actual Google Form URLs:

### Required Google Forms

1. **YOUR_CONSULTATION_FORM_URL** - For free consultation bookings
2. **YOUR_COURSE_ACCESS_FORM_URL** - For Python course access requests
3. **YOUR_STUDENT_FORM_URL** - For student enrollment
4. **YOUR_PARENT_FORM_URL** - For parent inquiries
5. **YOUR_GENERAL_CONTACT_FORM_URL** - For general contact/questions

### How to Get Google Form URLs

1. Create your Google Form at https://forms.google.com
2. Click "Send" button in the top right
3. Click the link icon (<>)
4. Copy the URL provided
5. Replace the corresponding placeholder in `bg/learners/index.html`

### URL Format Example

```
https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?embedded=true
```

**Important:** Make sure to use the embedded version URL (with `?embedded=true` at the end) for best iframe display.

## How the New System Works

### URL Parameters

- **link** (required): The Google Form URL to embed
- **title** (required): The title to display on the page
- **description** (optional): Description text below the title (defaults to "Попълнете формата и ще се свържа с вас скоро.")

### Example Usage

```html
<a href="../../shared/components/googleforms.html?link=https://forms.google.com/...&title=Contact Us&description=Fill out the form">
    Contact
</a>
```

### Benefits

- ✅ More flexible - can use any Google Form URL
- ✅ No need to update configuration files
- ✅ Easier to maintain
- ✅ Can pass custom titles and descriptions per link
- ✅ Cleaner codebase

## Testing

To test the implementation:

1. Replace at least one placeholder URL with a real Google Form URL
2. Open `bg/learners/index.html` in a browser
3. Click the corresponding button
4. Verify that:
   - The correct title appears
   - The correct description appears
   - The Google Form loads in the iframe
   - The back button works correctly

## Error Handling

The component will show an error message if:
- The `link` parameter is missing
- The `title` parameter is missing
- The Google Form fails to load

## Files Modified

- `shared/components/googleforms.html` - Updated component logic
- `bg/learners/index.html` - Updated all form links
- `GOOGLE_FORMS_MIGRATION_GUIDE.md` - This guide (new file)
