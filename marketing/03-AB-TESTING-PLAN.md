# A/B Testing Plan - White Theme vs Dark Theme Landing Pages
## TutoriAleks Marketing Campaign | Microsoft Clarity Analysis

**Test Duration:** December 11, 2025 - January 11, 2026 (4 weeks)
**Traffic Split:** 50/50 between variants
**Primary Tool:** Microsoft Clarity (already installed ✅)
**Secondary:** Google Analytics (already tracking variants ✅)

---

## 📊 FRAMEWORK: ANSWERING YOUR QUESTION

### 1. PRIMARY ANSWER (Recommended Approach)

**Split Traffic 50/50 Using URL Parameters + UTM Tracking**

**Implementation:**
- **Week 1-2:** Send 50% traffic to white-theme, 50% to dark-theme
- **Week 3-4:** Send 70% to winner, 30% to loser (optimize for conversions)

**Traffic Distribution Method:**
- Use UTM parameters to control which page users land on
- Alternate links in your social media posts
- Use Facebook/LinkedIn URL randomizer trick (see implementation below)

**Why this works:**
- ✅ Simple to implement (just use different URLs)
- ✅ Clarity already set up with variant tags
- ✅ Google Analytics tracking both variants
- ✅ Can pivot mid-campaign based on data

---

### 2. CONFIDENCE LEVEL: 85%

**Why 85% and not 100%:**
- ✅ Clarity and GA tracking confirmed working
- ✅ Clear differentiation between variants (informal/calm vs formal/crisis)
- ✅ 4-week timeframe sufficient for statistical significance with expected traffic
- ⚠️ Small traffic volume (estimated 3,000-5,000 total visitors) means confidence intervals will be wider
- ⚠️ Seasonal bias (exam pressure increases week-to-week, may favor crisis messaging in Week 4)

**What increases confidence:**
- If you get 5,000+ visitors (more data = more confidence)
- If conversion rates differ by >20% (easier to detect winner)
- If both heatmaps and conversion rates align (qualitative + quantitative)

---

### 3. KEY ASSUMPTIONS

**Assumption 1: Traffic Volume**
- Assuming 3,000-5,000 total visitors over 4 weeks
- Based on: 370 BGN ad spend + organic reach
- If lower (<2,000), statistical significance may not be reached

**Assumption 2: Visitor Behavior Consistency**
- Assuming visitors don't see both pages (no cross-contamination)
- Assuming mobile vs desktop split is similar for both variants
- Assuming time-of-day effects are distributed evenly

**Assumption 3: Clarity Data Quality**
- Assuming Clarity heatmaps capture meaningful engagement (clicks, scrolls, rage clicks)
- Assuming session recordings are reviewed (at least 50 per variant)
- Assuming tags are working correctly (already verified in your code ✅)

**Assumption 4: Campaign Consistency**
- Assuming ad copy is similar for both variants (only landing page differs)
- Assuming budget split is equal between variants
- Assuming no external events skew one variant (e.g., competitor campaign)

**Assumption 5: Conversion Definition**
- Primary conversion: Form submission (consultation booking)
- Secondary: Time on page, scroll depth, CTA clicks
- Assuming form is identical on both pages

---

### 4. WHAT WOULD CHANGE MY ANSWER

**Scenario A: Very Low Traffic (<1,500 visitors total)**
- **Change:** Don't split 50/50 for full 4 weeks
- **Instead:** Week 1 test both, then go 100% with best performer based on early data + intuition
- **Why:** Not enough data for statistical significance anyway

**Scenario B: One Variant Clearly Losing (>50% worse conversion)**
- **Change:** Switch to 80/20 or 90/10 after Week 2
- **Why:** Don't waste ad budget on losing variant

**Scenario C: You Have Video Testimonials or Better Assets Mid-Campaign**
- **Change:** Create Variant C (new page with video) and test 33/33/33
- **Why:** New assets may outperform both original variants

**Scenario D: Clarity Heatmaps Show Opposite of Conversion Data**
- Example: Dark-theme has better engagement but worse conversions
- **Change:** Investigate friction points (form UX, CTA placement, trust signals)
- **Action:** Optimize losing elements, create hybrid page

**Scenario E: Mobile vs Desktop Show Opposite Winners**
- **Change:** Serve white-theme to desktop, dark-theme to mobile (or vice versa)
- **Why:** Device context may favor different messaging

**Scenario F: Week-by-Week Trends Show Pattern**
- Example: White wins Weeks 1-2, Dark wins Weeks 3-4
- **Insight:** Urgency messaging (dark-theme) works better as exam deadline approaches
- **Change:** Use dynamic landing page that switches based on days-to-exam

---

### 5. ALTERNATIVE ANSWER (If <80% Confident)

**Alternative: Sequential Testing (One at a Time)**

**If you're not confident in 50/50 split:**

**Week 1:** 100% traffic to White Theme
- Establish baseline conversion rate
- Collect Clarity heatmaps
- Note: Which sections get most attention? Where do users drop off?

**Week 2:** 100% traffic to Dark Theme
- Compare conversion rate to Week 1
- Compare Clarity engagement
- Control for time-based variables (exam urgency increasing)

**Week 3-4:** 100% to winner
- Optimize for conversions with proven variant

**Pros:**
- Simpler to manage (one URL at a time)
- Easier to compare week-over-week

**Cons:**
- Time-based bias (urgency increases each week)
- External factors affect one variant more (competitor launches campaign)
- Less statistically rigorous

**When to use this:**
- If traffic is very low (<1,000 total expected)
- If you're not comfortable with URL management
- If you want absolute simplicity

---

---

## 🎯 IMPLEMENTATION PLAN

### PHASE 1: PRE-CAMPAIGN SETUP (Week 0 - Before Dec 11)

#### ✅ Already Done (Verified in Code)
- [x] Microsoft Clarity installed on both pages
- [x] Clarity variant tags configured:
  - White: `page_variant: 'white-informal'`
  - Dark: `page_variant: 'dark-formal'`
  - Test name: `voice_messaging_test_2025`
- [x] Google Analytics tracking both variants
- [x] Meta Pixel on both pages

#### ⬜ To Do Before Launch

**1. Verify Clarity Dashboard Setup (15 min)**
- [x] Log in to clarity.microsoft.com
- [x] Go to Settings → Custom Tags
- [x] Verify these tags exist:
  - `page_variant` (values: white-informal, dark-formal)
  - `test_name` (value: voice_messaging_test_2025)
- [x] Create Filter: "Test 2025" → tag = voice_messaging_test_2025
- [x] Save filter for quick access

**2. Create UTM Parameter Tracking Sheet (15 min)**
- [ ] Open Google Sheet: "A/B Test Tracker"
- [ ] Add columns:
  - Date
  - Platform (Facebook/LinkedIn/Instagram/Google)
  - Variant (White/Dark)
  - URL Used
  - Link Clicks (from platform analytics)
  - Form Submissions (from Google Analytics)
  - Conversion Rate

**3. Prepare Both Landing Page URLs with UTM Parameters (10 min)**

**White Theme URLs:**
```
Base: https://tutorialeks.com/bg/learners/white-theme/

Facebook Organic:
https://tutorialeks.com/bg/learners/white-theme/?utm_source=facebook&utm_medium=organic&utm_campaign=dec2025&variant=white

Facebook Boost #1:
https://tutorialeks.com/bg/learners/white-theme/?utm_source=facebook&utm_medium=paid&utm_campaign=boost1_dec19&variant=white

LinkedIn Organic:
https://tutorialeks.com/bg/learners/white-theme/?utm_source=linkedin&utm_medium=organic&utm_campaign=dec2025&variant=white

LinkedIn Boost #1:
https://tutorialeks.com/bg/learners/white-theme/?utm_source=linkedin&utm_medium=paid&utm_campaign=boost1_dec27&variant=white

Google Ads:
https://tutorialeks.com/bg/learners/white-theme/?utm_source=google&utm_medium=cpc&utm_campaign=exam2025&variant=white

Instagram:
https://tutorialeks.com/bg/learners/white-theme/?utm_source=instagram&utm_medium=organic&utm_campaign=dec2025&variant=white
```

**Dark Theme URLs:**
```
Base: https://tutorialeks.com/bg/learners/dark-theme/

[Same UTM structure, just replace /white-theme/ with /dark-theme/ and variant=white with variant=dark]


Base: https://tutorialeks.com/bg/learners/dark-theme/

Facebook Organic:
https://tutorialeks.com/bg/learners/dark-theme/?utm_source=facebook&utm_medium=organic&utm_campaign=dec2025&variant=dark

Facebook Boost #1:
https://tutorialeks.com/bg/learners/dark-theme/?utm_source=facebook&utm_medium=paid&utm_campaign=boost1_dec19&variant=dark

LinkedIn Organic:
https://tutorialeks.com/bg/learners/dark-theme/?utm_source=linkedin&utm_medium=organic&utm_campaign=dec2025&variant=dark

LinkedIn Boost #1:
https://tutorialeks.com/bg/learners/dark-theme/?utm_source=linkedin&utm_medium=paid&utm_campaign=boost1_dec27&variant=dark

Google Ads:
https://tutorialeks.com/bg/learners/dark-theme/?utm_source=google&utm_medium=cpc&utm_campaign=exam2025&variant=dark

Instagram:
https://tutorialeks.com/bg/learners/dark-theme/?utm_source=instagram&utm_medium=organic&utm_campaign=dec2025&variant=dark
```

**4. Create URL Shortener Links (Optional but Recommended) (20 min)**
- [ ] Use Bitly (free) to create short links
- [ ] Name convention: `bit.ly/ta-fb-white`, `bit.ly/ta-fb-dark`
- [ ] Easier to track clicks
- [ ] Cleaner for social media posts

**5. Set Up Clarity Dashboards (20 min)**
- [ ] Dashboard 1: "White Theme Performance"
  - Filter: page_variant = white-informal
  - Metrics: Sessions, Clicks, Scroll depth, Form submissions
  - Heatmap: Enable
  - Recordings: Enable (sample 50+)

- [ ] Dashboard 2: "Dark Theme Performance"
  - Filter: page_variant = dark-formal
  - Same metrics as Dashboard 1

- [ ] Dashboard 3: "Comparison View"
  - Split view: White vs Dark side-by-side
  - Focus: Conversion funnel, Drop-off points

**6. Test Both Pages on Mobile & Desktop (15 min)**
- [ ] Visit white-theme on phone → Check Clarity session shows up with correct tag
- [ ] Visit dark-theme on desktop → Verify tracking
- [ ] Submit test form on each → Verify conversion tracked
- [ ] Check that UTM parameters persist through page

---

### PHASE 2: TRAFFIC DISTRIBUTION STRATEGY (4 Weeks)

#### Week 1 (Dec 11-17): 50/50 Split - Baseline Establishment

**Organic Posts (Daily):**
- Alternate URLs in bio/links
- Monday, Wednesday, Friday → White Theme URL
- Tuesday, Thursday, Saturday → Dark Theme URL
- Sunday → User choice (both in post)

**Example Post Rotation:**

*Monday LinkedIn (7:30 AM):*
```
[Educational post about programming]

Interested in 1-on-1 tutoring?
Free consultation: [White Theme URL with utm_source=linkedin&variant=white]
```

*Tuesday LinkedIn (7:30 AM):*
```
[Educational post]

Ready to start?
Book consultation: [Dark Theme URL with utm_source=linkedin&variant=dark]
```

**Instagram Bio Link Strategy:**
- Use Linktree or similar (free)
- Two buttons:
  - "Спокоен подход" → White Theme
  - "Спешна помощ" → Dark Theme
- Users self-select based on their mindset

**Expected Week 1 Results:**
- Total visitors: 300-500
- White theme: 150-250 visitors
- Dark theme: 150-250 visitors
- Early conversion data (2-4 leads per variant)

---

#### Week 2 (Dec 18-24): 50/50 Split - First Boost

**Facebook Boost #1 (Dec 19-26, 50 BGN):**
- Create TWO versions of the boosted post
- Version A: Links to White Theme (25 BGN budget)
- Version B: Links to Dark Theme (25 BGN budget)
- Run simultaneously
- Compare performance in Facebook Ads Manager

**OR Alternative (Simpler):**
- Single boosted post with Linktree/dual link
- Let users self-select
- Track which link gets more clicks in Linktree analytics

**Organic Posts:**
- Continue alternating daily
- If Week 1 data shows clear winner, adjust to 60/40 split

**Expected Week 2 Results:**
- Total visitors: 800-1,200 (boost traffic)
- White theme: 400-600
- Dark theme: 400-600
- Conversion data: 5-8 leads per variant
- **By end of Week 2: ~1,000 total visitors, enough for preliminary insights**

---

#### Week 3 (Dec 25-31): Adjust Based on Data

**Decision Point: December 28 (Mid-Campaign Review)**

**Check Clarity + GA Data:**
1. Which variant has higher conversion rate?
2. Which has better engagement (time on page, scroll depth)?
3. Which has better heatmap patterns (CTA clicks)?

**Scenario A: Clear Winner (>20% better conversion)**
- **Action:** Shift to 70% winner, 30% loser
- Google Ads: 100% to winner (budget optimization)
- LinkedIn Boost: Use winner only
- Organic: Continue alternating but favor winner

**Scenario B: Too Close to Call (<10% difference)**
- **Action:** Continue 50/50
- Need more data
- Focus on qualitative: Watch Clarity recordings, see WHY users convert/don't

**Scenario C: One Wins Conversions, Other Wins Engagement**
- Example: Dark has more clicks but fewer form submissions
- **Action:** Investigate friction
  - Is form harder to find on one page?
  - Is one CTA more prominent?
  - Are trust signals better positioned on winner?
- **Create Variant C:** Hybrid (best of both)

**Google Ads Launch (Dec 27):**
- Send 100% Google Ads traffic to variant that's winning
- Why: High-intent traffic (expensive), optimize for conversions
- Exception: If tied, send to White (safer, less aggressive)

**Expected Week 3 Results:**
- Total visitors: 1,000-1,500 (Google Ads + urgency organic)
- Cumulative: 2,000-2,700 visitors
- Strong statistical signal emerging

---

#### Week 4 (Jan 1-11): Optimize for Conversions

**Final Boost Strategy:**

**Facebook Boost #2 (Jan 2-9, 50 BGN):**
- 100% budget to winning variant
- Maximize conversions, not testing

**LinkedIn Boost #2 (Jan 4-11, 60 BGN):**
- 100% budget to winning variant

**Organic Posts:**
- 80% winner, 20% loser (keep some comparison data)

**Exception: If Still Tied**
- Consider messaging timing:
  - Use Dark Theme (urgent crisis) for "10 days to exam" posts
  - Use White Theme (calm supportive) for "study tips" posts
- Match page to message tone

**Expected Week 4 Results:**
- Total visitors: 1,000-2,000 (final push, urgency high)
- Cumulative: 3,000-4,700 total visitors
- Final conversion data: Clear winner determined

---

### PHASE 3: ANALYSIS & INSIGHTS (During Campaign + Post-Campaign)

#### Weekly Check-ins (Every Sunday)

**Clarity Analysis Checklist:**
- [ ] **Heatmaps:** Where do users click most?
  - White vs Dark: CTA button clicks
  - Which sections get most attention?
  - Where do users rage-click (frustration)?

- [ ] **Scroll Depth:** Do users reach bottom of page?
  - White vs Dark: Average scroll percentage
  - Where do most users drop off?

- [ ] **Session Recordings:** Watch 10 recordings per variant
  - Look for patterns:
    - Hesitation before form submission?
    - Reading testimonials thoroughly or skipping?
    - Checking pricing multiple times (price concern)?
  - Note any bugs/issues (form not loading, broken links)

- [ ] **Conversion Funnel:**
  - Landing page view → CTA click → Form page → Form submit
  - Which step has biggest drop-off?
  - White vs Dark: Where do they differ?

**Google Analytics Metrics:**
- [ ] **Traffic Sources:**
  - Which source sends more traffic to each variant?
  - Does Facebook prefer one theme? LinkedIn?

- [ ] **Behavior Metrics:**
  - Bounce rate (White vs Dark)
  - Pages per session (do they explore more?)
  - Average session duration

- [ ] **Conversion Rate:**
  - Total conversions / Total visitors
  - By source (Facebook White vs Facebook Dark)
  - By device (Mobile White vs Mobile Dark)

**Tracking Spreadsheet Updates:**
- [ ] Enter weekly totals
- [ ] Calculate running conversion rate
- [ ] Note any anomalies (spike in traffic, external event)

---

#### End-of-Campaign Analysis (January 12-15)

**Final Report Template:**

**1. Traffic Summary**
| Variant | Total Visitors | Bounce Rate | Avg Time on Page | Scroll Depth |
|---------|----------------|-------------|------------------|--------------|
| White   | _____          | _____%      | _____            | _____%       |
| Dark    | _____          | _____%      | _____            | _____%       |

**2. Conversion Summary**
| Variant | Form Submissions | Conversion Rate | Consultations Booked | Paying Students |
|---------|------------------|-----------------|----------------------|-----------------|
| White   | _____            | _____%          | _____                | _____           |
| Dark    | _____            | _____%          | _____                | _____           |

**3. Clarity Insights**
- **Heatmap Winner:** [White/Dark] - Why?
- **Engagement Winner:** [White/Dark] - Why?
- **Key Observations:**
  - Most clicked element: [element]
  - Most ignored section: [section]
  - Friction points: [list]

**4. Platform Performance**
| Platform | White CR | Dark CR | Winner |
|----------|----------|---------|--------|
| Facebook | _____%   | _____%  | ______ |
| LinkedIn | _____%   | _____%  | ______ |
| Google   | _____%   | _____%  | ______ |
| Instagram| _____%   | _____%  | ______ |

**5. Statistical Significance**
- [ ] Run chi-square test: [calculator.net/sample-size-calculator.html](https://www.calculator.net/sample-size-calculator.html)
- Confidence level: ___% (need 95%+ for significance)
- Winner: [White/Dark/Inconclusive]

**6. Qualitative Insights (from Clarity recordings)**
- What did successful converters do differently?
- What caused drop-offs?
- Any surprising behavior patterns?

**7. Recommendations**
- **Immediate:** Use [White/Dark] as primary landing page
- **Optimize:** Fix these elements on winner: [list]
- **Test Next:** [New hypothesis based on data]

---

### PHASE 4: POST-CAMPAIGN OPTIMIZATION

#### If White Theme Wins:

**Why it might win:**
- Calmer, more approachable tone
- Less pressure = more trust
- Solution-focused messaging resonates
- Works better for early-stage awareness traffic

**Next Steps:**
1. Make White Theme the default
2. Use Dark Theme for retargeting (urgency for people who already visited)
3. A/B test within White Theme:
   - Different CTA colors
   - Testimonial positioning
   - Pricing table prominence

---

#### If Dark Theme Wins:

**Why it might win:**
- Urgency messaging converts better in January (exam pressure)
- Problem-focused resonates with students in crisis
- Formal tone builds authority
- Works better for high-intent traffic (Google Ads)

**Next Steps:**
1. Make Dark Theme default for paid traffic
2. Use White Theme for organic/educational content
3. A/B test within Dark Theme:
   - Soften some language (balance urgency with empathy)
   - Add more trust signals (combat "too salesy" perception)

---

#### If Results Are Inconclusive (<5% difference):

**Possible Reasons:**
1. Not enough traffic (statistical significance not reached)
2. Both variants are equally good (or equally flawed)
3. External factors dominate (messaging matters more than design)
4. Wrong metrics (focusing on conversions, but should optimize for engagement first)

**Next Steps:**
1. **Segment analysis:** Does one win for mobile? For Facebook traffic?
2. **Create Variant C:** Hybrid approach
   - White Theme design + Dark Theme urgency headlines
   - Best of both worlds
3. **Focus on other variables:**
   - Test different CTAs ("Запази консултация" vs "Започни сега")
   - Test social proof positioning (top vs bottom)
   - Test pricing display (full table vs simplified)

---

## 🔧 TECHNICAL IMPLEMENTATION

### Option 1: Manual URL Alternation (Simplest)

**How it works:**
- When you create a post, consciously choose which URL to use
- Keep a checklist: "Today is Monday, use White"

**Pros:**
- Zero technical setup
- Complete control
- No complexity

**Cons:**
- Easy to forget which URL to use
- Requires discipline
- Manual tracking needed

**Best for:** If you're not technical and want maximum simplicity

---

### Option 2: Linktree with Dual Links (Recommended)

**Setup (15 min):**
1. Go to linktr.ee (free)
2. Create account
3. Add two buttons:
   - Button 1: "Спокоен подход към ученето" → White Theme URL
   - Button 2: "Спешна помощ за изпит" → Dark Theme URL
4. Put Linktree URL in all bios (Instagram, Facebook, LinkedIn)

**How it works:**
- Users self-select which message resonates
- Linktree tracks clicks on each button
- You see which gets more clicks

**Pros:**
- Users choose (interest-based segmentation)
- Easy analytics in Linktree dashboard
- One URL for all platforms

**Cons:**
- Extra click (Linktree → Landing page)
- Some users may bounce at Linktree step
- Free plan has limited analytics

**Best for:** Instagram (where you can only have 1 bio link)

---

### Option 3: Facebook/LinkedIn A/B Testing (Advanced)

**Facebook Ads Manager:**
- When creating boosted post, duplicate it
- Post A: White Theme URL
- Post B: Dark Theme URL
- Set equal budget (25 BGN each)
- Facebook shows each to 50% of audience automatically

**LinkedIn Campaign Manager:**
- Create two identical ads
- Different destination URLs
- Split budget equally

**Pros:**
- True A/B test (randomized distribution)
- Platform handles splitting
- Best statistical validity

**Cons:**
- Only works for paid ads (not organic)
- Requires understanding of Ads Manager
- Costs a bit more (running 2 campaigns)

**Best for:** Paid boosts (Week 2, Week 4)

---

### Option 4: Google Tag Manager + Cookies (Most Advanced)

**How it works:**
- Set up Google Tag Manager to randomly assign users to variant
- Cookie ensures same user always sees same variant
- Fully automated

**Pros:**
- True randomization
- No manual work
- Sophisticated

**Cons:**
- 2-3 hours technical setup
- Risk of bugs
- Overkill for 4-week campaign

**Recommendation:** Skip this. Too complex for your needs.

---

## 📊 SAMPLE SIZE & STATISTICAL SIGNIFICANCE

### Required Sample Size Calculator

**Assumptions:**
- Baseline conversion rate: 1-2% (typical for cold traffic to consultation form)
- Minimum detectable effect: 50% improvement (1% → 1.5%)
- Confidence level: 95%
- Statistical power: 80%

**Required visitors per variant:** ~2,900 each = **5,800 total**

**Your Expected Traffic:** 3,000-5,000 total

**Implications:**
- You're BORDERLINE for statistical significance
- If conversion rates differ by >50%, you'll have confidence
- If difference is small (<20%), results may be inconclusive

**Mitigation:**
- Focus on large effect sizes (qualitative + quantitative)
- Use Clarity recordings to supplement conversion data
- Don't over-interpret small differences

**Calculator:** Use this to check your results: [https://www.evanmiller.org/ab-testing/sample-size.html](https://www.evanmiller.org/ab-testing/sample-size.html)

---

## ⚠️ COMMON PITFALLS & HOW TO AVOID

### Pitfall 1: Uneven Traffic Distribution
**Problem:** 70% of traffic goes to one variant by accident

**How to avoid:**
- Check distribution weekly
- If one variant getting 60%+, correct course immediately
- Use Linktree analytics or UTM tracking sheet to monitor

---

### Pitfall 2: Changing Pages Mid-Test
**Problem:** You edit White Theme in Week 2, invalidating Week 1 data

**How to avoid:**
- FREEZE both pages during test period
- No edits allowed except bug fixes
- If you must change, restart test or create Variant C

---

### Pitfall 3: Confounding Variables
**Problem:** Week 1 = Christmas (low traffic), Week 4 = Exam panic (high urgency)

**How to avoid:**
- Acknowledge time-based effects in analysis
- Compare same-week performance, not Week 1 White vs Week 4 Dark
- If urgency increases, both variants should benefit equally

---

### Pitfall 4: Focusing Only on Conversions
**Problem:** White gets more form fills but users don't show up to consultations

**How to avoid:**
- Track full funnel: Form fill → Consultation booked → Attendance → Paying student
- Quality > quantity
- If one variant attracts more serious leads, it wins even with lower form fills

---

### Pitfall 5: Ignoring Qualitative Data
**Problem:** Numbers say Dark wins, but Clarity recordings show users are confused

**How to avoid:**
- Always watch session recordings (minimum 20 per variant)
- Heatmaps reveal friction points numbers can't
- If data conflicts, qualitative insights trump quantitative

---

### Pitfall 6: Stopping Test Too Early
**Problem:** White wins in Week 1, you abandon Dark in Week 2

**How to avoid:**
- Commit to at least 2 weeks per variant (1,000+ visitors)
- Early wins can be flukes
- Unless difference is massive (>100%), keep testing

---

## 🎯 DECISION FRAMEWORK (End of Campaign)

### Scenario 1: Clear Winner (>20% better conversion, p<0.05)
**Decision:** Use winner as primary landing page
**Confidence:** HIGH ✅

---

### Scenario 2: Moderate Winner (10-20% better, p<0.10)
**Decision:** Use winner but continue monitoring
**Confidence:** MEDIUM ⚠️
**Action:** Plan follow-up test to validate

---

### Scenario 3: Small Difference (<10%, p>0.10)
**Decision:** Inconclusive
**Confidence:** LOW 🚨
**Action:**
- Segment analysis (mobile vs desktop, platform-specific)
- If segments differ, use different variants for different sources
- Otherwise, pick one based on qualitative + brand fit

---

### Scenario 4: Winner Differs by Platform
Example: White wins on Facebook, Dark wins on Google Ads

**Decision:** Platform-specific landing pages
**Implementation:**
- Facebook/Instagram organic → White
- Google Ads (high intent) → Dark
- LinkedIn → Test both, use winner

---

### Scenario 5: Winner Differs by Week
Example: White wins Weeks 1-2, Dark wins Weeks 3-4

**Insight:** Urgency messaging works better as deadline approaches
**Decision:** Dynamic landing page
**Implementation:**
- >2 weeks to exam → White Theme
- <2 weeks to exam → Dark Theme
- Use JavaScript to switch automatically based on date

---

## 📋 WEEKLY CHECKLIST

### Sunday Night (Batch Planning):
- [ ] Review last week's data in Clarity
- [ ] Check conversion rates in GA
- [ ] Update tracking spreadsheet
- [ ] Decide: Continue 50/50 or adjust split?
- [ ] Prepare next week's URLs (which posts use which variant)

### Monday Morning:
- [ ] Double-check UTM parameters on today's posts
- [ ] Verify Clarity is tracking

### Wednesday (Mid-week check):
- [ ] Quick look at real-time Clarity
- [ ] Any issues? Fix immediately

### Friday:
- [ ] Review week's session recordings (5 per variant)
- [ ] Note any patterns

---

## 🚀 QUICK START (Do This First)

**If you only have 30 minutes before campaign launch:**

1. **Verify Clarity is working (5 min):**
   - Visit both pages
   - Check clarity.microsoft.com dashboard
   - See sessions appear with correct tags ✅

2. **Create Linktree (10 min):**
   - linktr.ee → Sign up
   - Add 2 buttons (White + Dark)
   - Put Linktree URL in Instagram bio

3. **Create UTM URLs (10 min):**
   - Copy template from this doc
   - Replace with your actual URLs
   - Save in Google Doc for quick reference

4. **Test both pages (5 min):**
   - Visit White + Dark on mobile
   - Submit test form on each
   - Verify tracking works

**Done! You're ready to start A/B testing on Dec 11!**

---

## 📊 EXPECTED OUTCOMES

### Best Case Scenario:
- **Clear winner by Week 2** (>30% better conversion)
- **1,000+ visitors per variant** (statistical significance)
- **Heatmaps show obvious differences** (one CTA placement works better)
- **Action:** Optimize winner, sunset loser, increase ad spend

### Realistic Scenario:
- **Moderate winner by Week 3** (15-25% better)
- **800-1,200 visitors per variant** (borderline significance)
- **Qualitative + quantitative align** (conversion rates + recordings both point to same winner)
- **Action:** Use winner with medium confidence, plan follow-up test

### Challenging Scenario:
- **Inconclusive after 4 weeks** (<10% difference)
- **Segment analysis reveals platform-specific winners**
- **Action:** Use different variants for different traffic sources

### Worst Case Scenario:
- **Both variants convert poorly** (<0.5%)
- **Issue is not theme, but something else** (form UX, offer, trust)
- **Action:** Focus on other optimizations, theme is not the bottleneck

---

## 📁 FILES TO CREATE

1. **Google Sheet: "A/B Test Tracker"**
   - Location: Google Drive
   - Share link in marketing folder
   - Update weekly

2. **Linktree Account**
   - linktr.ee/tutorialeks
   - Two buttons configured

3. **UTM Parameter Reference Doc**
   - Google Doc with all URLs
   - Copy/paste for posts

4. **Weekly Analysis Notes**
   - `marketing/ab-test-weekly-notes.md`
   - Week-by-week observations

5. **Final Report**
   - `marketing/ab-test-final-report.md`
   - Created Jan 12-15

---

## ✅ SUCCESS CRITERIA

**Test is successful if:**
- [x] 2,000+ total visitors (1,000+ per variant minimum)
- [x] 20+ conversions total (10+ per variant for comparison)
- [x] 50+ session recordings watched per variant
- [x] Statistical significance reached (p<0.05) OR clear qualitative insights
- [x] Actionable decision made (use variant X going forward)

**Test provides value even if inconclusive:**
- You learn what resonates with your audience
- Clarity heatmaps reveal optimization opportunities
- Segment insights guide future targeting
- Establishes baseline for future tests

---

## 🎓 LEARNING RESOURCES

**Microsoft Clarity:**
- Clarity Academy: [clarity.microsoft.com/learn](https://clarity.microsoft.com/learn)
- Heatmap guide: YouTube "Microsoft Clarity heatmap tutorial"

**A/B Testing:**
- CXL Guide: [cxl.com/ab-testing-guide](https://cxl.com/blog/ab-testing-guide/)
- Statistical significance: [evanmiller.org/ab-testing](https://www.evanmiller.org/ab-testing/)

**Google Analytics:**
- UTM parameters: [ga-dev-tools.web.app/campaign-url-builder](https://ga-dev-tools.web.app/campaign-url-builder/)

---

**You're ready to run a professional A/B test with your existing Clarity setup! Start with the Quick Start above and refer to the weekly checklists. Good luck! 📊🚀**

---

*Saved to: `/marketing/AB-TESTING-PLAN.md`*
*Companion files: `MARKETING-TIMELINE-TODO.md`, `AUTOMATION-GUIDE.md`*
*Part of: TutoriAleks Marketing Campaign*
