# TutoriAleks - A/B Test Landing Page Variants

This directory contains 4 complete A/B test landing page variants for TutoriAleks private tutoring business.

## Variants Overview

### Variant A1: Bold Discount Layout
**Location:** `variant-a1/`
**Color Emphasis:** Amber/Yellow dominant
**Key Features:**
- Large animated 33% discount badge (top right, pulsing)
- 60/40 split layout (text left, image right)
- Bold gradient background (white to amber)
- Yellow CTA buttons
- Discount-focused messaging

**Use Case:** Best for price-sensitive learners who respond to clear savings

---

### Variant A2: Clean Discount Layout
**Location:** `variant-a2/`
**Color Emphasis:** Blue primary, minimal amber
**Key Features:**
- Centered single column layout (max-width: 800px)
- Trust badges in horizontal row below headline
- Clean white background
- Full-width code screen image
- Professional blue CTA buttons
- Subtle discount highlight badge

**Use Case:** Best for learners who prefer clean, professional design with discount as secondary benefit

---

### Variant B1: Warm Philosophy Layout
**Location:** `variant-b1/`
**Color Emphasis:** Coral/warm tones
**Key Features:**
- Large philosophy quote: "Няма да ти е лесно, но ще става ясно"
- 55/45 asymmetric split layout
- Expandable philosophy explanation box
- Warm peachy gradient background
- Circular tutor photo with warm shadow
- Coral-bordered CTA buttons

**Use Case:** Best for learners who value honesty and personal connection over discounts

---

### Variant B2: Professional Philosophy Layout
**Location:** `variant-b2/`
**Color Emphasis:** Blue/cyan professional
**Key Features:**
- 50/50 split layout
- Philosophy with structured approach breakdown (4 steps)
- Comparison table: "TutoriAleks vs други курсове"
- Cool gray-blue gradient background
- Professional blue CTA buttons
- Emphasis on methodology and structure

**Use Case:** Best for serious learners who want structured, methodical approach

---

## Page Structure (All Variants)

Each variant includes all 9 required sections:

1. **HERO** (100vh) - Unique per variant
2. **TRUST INDICATORS** - Sun Certified Java Developer, 143 IQ, 15 years experience
3. **HOW IT WORKS** - 4-step learning process
4. **VALUE PROPOSITION** - 6 benefit cards
5. **PRICING** - Hourly prices + 33% discount callout + package courses iframe
6. **CREDENTIALS** - iframe: `../../shared/components/credentials.html`
7. **TESTIMONIALS** - 3 sample testimonials
8. **FINAL CTA** - Strong conversion push
9. **FOOTER** - iframe: `../../shared/components/footer.html`

---

## Technical Implementation

### Files per Variant
- `index.html` - Full page structure
- `styles.css` - Variant-specific styles
- `script.js` - JavaScript for animations and interactions

### Shared Resources Used
- `../../../shared/css/variables.css` - Design system variables
- `../../../shared/css/global.css` - Global styles
- `../../../shared/js/forms.js` - Form link handling
- `../../../shared/components/credentials.html` - Credentials iframe
- `../../../shared/components/pricing-table.html` - Pricing table iframe
- `../../../shared/components/footer.html` - Footer iframe

### JavaScript Features
- Smooth scroll for anchor links
- Intersection Observer for fade-in animations
- Dynamic iframe height adjustment
- Form link initialization (via forms.js)
- Variant-specific interactions (philosophy toggle for B1, comparison animation for B2)

### Responsive Design
- Mobile-first approach
- Breakpoint: 768px
- Grid layouts collapse to single column on mobile
- Touch-friendly button sizes
- Optimized font sizes for mobile

---

## Testing Checklist

### Functionality
- [ ] All CTA buttons link to form (via data-form-type)
- [ ] Smooth scroll works for anchor links
- [ ] Iframes load correctly (credentials, pricing, footer)
- [ ] Animations trigger on scroll
- [ ] Responsive layout works on mobile

### Content
- [ ] All Bulgarian text is correct
- [ ] Pricing is accurate (120лв, 80лв, 60лв, 50лв, 100лв)
- [ ] 33% discount messaging is clear
- [ ] Philosophy quote appears correctly (B1, B2)
- [ ] Trust indicators show correct data

### Performance
- [ ] Images use lazy loading (except hero)
- [ ] No console errors
- [ ] Animations are smooth
- [ ] Page loads quickly

---

## A/B Testing Strategy

### Recommended Test Groups
- **Group A1:** Price-sensitive users (social media ads mentioning discount)
- **Group A2:** Professional learners (Google Ads, LinkedIn)
- **Group B1:** Personal connection seekers (Facebook, Instagram stories)
- **Group B2:** Structured learners (university forums, professional groups)

### Key Metrics to Track
- Conversion rate (consultation form submissions)
- Bounce rate
- Time on page
- Scroll depth
- CTA click-through rate

### Test Duration
- Minimum 2 weeks per variant
- 100+ visitors per variant for statistical significance

---

## Future Enhancements

- Add Google Analytics tracking codes
- Implement heatmap tracking (Hotjar)
- Add exit-intent popups
- Implement live chat widget
- Add video testimonials
- Create mobile app download section

---

## Files Summary

```
bg/learners/
├── variant-a1/
│   ├── index.html (357 lines)
│   ├── styles.css (687 lines)
│   └── script.js (155 lines)
├── variant-a2/
│   ├── index.html (373 lines)
│   ├── styles.css (628 lines)
│   └── script.js (140 lines)
├── variant-b1/
│   ├── index.html (367 lines)
│   ├── styles.css (683 lines)
│   └── script.js (169 lines)
├── variant-b2/
│   ├── index.html (396 lines)
│   ├── styles.css (711 lines)
│   └── script.js (188 lines)
└── README.md (this file)
```

**Total:** 4 variants, 12 files, ~4,500 lines of production-ready code

---

## Contact

For questions about these landing pages, contact Aleks (TutoriAleks owner).

Generated with Claude Code on 2025-11-26.
