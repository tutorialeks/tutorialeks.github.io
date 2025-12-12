# Marketing Automation Guide for TutoriAleks
## Free & Low-Budget Tools to Automate Daily Tasks

**Goal:** Reduce 40 min/day to 15 min/day through smart automation
**Budget:** 0-30 BGN/month for premium features (optional)

---

## 📊 QUICK WINS - Automate These First

| Task | Time Saved | Tool | Cost |
|------|------------|------|------|
| Schedule social posts | 15 min/day | Meta Business Suite | FREE |
| LinkedIn scheduling | 10 min/day | LinkedIn native scheduler | FREE |
| Track analytics | 5 min/day | Google Sheets + Zapier | FREE |
| Lead notifications | Instant | Google Forms + Email | FREE |
| Content ideas | 5 min/day | ChatGPT prompts | FREE |

**Total Time Saved:** 35 min/day → **Keep only 5-10 min for engagement**

---

## 🤖 AUTOMATION STACK (All Free Options)

### 1. CONTENT SCHEDULING (Saves 15-20 min/day)

#### Meta Business Suite (Facebook + Instagram) - FREE ✅
**What it does:** Schedule posts weeks in advance, both Facebook and Instagram

**Setup (10 minutes):**
1. Go to business.facebook.com
2. Link Facebook Business Page + Instagram
3. Click "Content" → "Planner"
4. Schedule posts up to 75 days in advance

**How to use for TutoriAleks:**
- **Sunday batch work:** Schedule entire week's Instagram + Facebook posts
- **Set optimal times:**
  - Instagram: 6:00 PM (evening scroll)
  - Facebook: 12:00-1:00 PM (lunch break)
- **Preview:** See calendar view of all scheduled content
- **Edit anytime:** Adjust if you need to pivot strategy

**Limitations:**
- Cannot schedule Instagram Stories (must post manually)
- Cannot schedule carousels with more than 10 images

**Pro tip:** Use "Draft" feature to prepare posts during the week, then schedule on Sunday

---

#### LinkedIn Native Scheduler - FREE ✅
**What it does:** Schedule LinkedIn posts directly from LinkedIn

**Setup (5 minutes):**
1. Write post on LinkedIn
2. Click clock icon next to "Post" button
3. Select date/time
4. Click "Schedule"

**How to use:**
- **Sunday batch:** Write all 5 LinkedIn posts for the week
- **Schedule for 7:30-8:00 AM** (best engagement time for professionals)
- Can schedule up to 3 months in advance

**Limitations:**
- Desktop only (no mobile scheduling)
- Cannot schedule carousel posts (LinkedIn limitation)

**Pro tip:** Write posts in Google Doc first, then copy/paste and schedule all at once

---

#### Buffer (Alternative - Freemium) - FREE for 3 channels
**What it does:** Schedule across multiple platforms from one dashboard

**Free Plan:**
- 3 social channels (e.g., Facebook Page + Instagram + LinkedIn)
- 10 scheduled posts per channel
- Basic analytics

**Paid Plan ($6/month):**
- Unlimited posts
- Better analytics
- Optimal timing AI

**When to use Buffer:**
- If you want ONE dashboard for everything
- If 10 posts/week per channel is enough (it is for your campaign)

**Setup:** buffer.com → Connect accounts → Start scheduling

---

### 2. ANALYTICS TRACKING (Saves 5-10 min/day)

#### Google Sheets + IMPORTXML (100% Free) - RECOMMENDED ✅

**What it does:** Auto-pull data from your website analytics

**Setup (30 minutes one-time):**

1. **Create Google Sheet** with these tabs:
   - Daily Metrics
   - Budget Tracker
   - Lead Pipeline
   - Content Performance

2. **Connect Google Analytics:**
   - Install Google Analytics Add-on in Sheets
   - Use formula: `=GoogleAnalytics("Sessions", "ga:date", TODAY()-7, TODAY())`
   - Auto-updates daily

3. **Track Social Stats:**
   - Manual for now (Meta/LinkedIn don't have easy free API)
   - Enter once daily (2 min)

4. **Auto-calculate Cost Per Lead:**
   - Formula: `=Total_Spend / Total_Leads`
   - Updates automatically when you enter new data

**Template structure:**
```
Daily Metrics Tab:
| Date | Platform | Reach | Engagement | Clicks | Leads | Cost |
Auto-calculate: Cost per Lead, ROI, Conversion Rate
```

**Pro tip:** Create a Google Form for yourself to quickly enter daily stats from phone

---

#### Zapier (Free Plan) - Optional but Powerful ✅

**Free Plan:**
- 100 tasks/month
- Single-step Zaps

**Useful Zaps for TutoriAleks:**

**Zap 1: Lead Alert (HIGH PRIORITY)**
- Trigger: New Google Form submission
- Action: Send SMS via Twilio (free trial) OR email notification
- **Time saved:** Get instant alerts instead of checking email

**Zap 2: Add Lead to Spreadsheet**
- Trigger: New form submission
- Action: Add row to Google Sheet "Lead Pipeline"
- **Time saved:** No manual data entry

**Zap 3: Social Media Analytics**
- Trigger: Daily at 9 PM
- Action: Send email summary of day's social stats
- Requires: Facebook/LinkedIn integration (free)

**Setup:** zapier.com → Create Zap → Follow wizard

**Cost:** FREE for 100 tasks/month (plenty for your campaign)

---

### 3. LEAD RESPONSE AUTOMATION (Saves 10 min per lead)

#### Gmail Canned Responses - FREE ✅

**What it does:** Pre-written email templates with 1-click insert

**Setup (15 minutes):**
1. Gmail Settings → Advanced → Enable "Templates"
2. Compose your 3 email templates:
   - Initial Response (24h)
   - Follow-up (48h)
   - Final Attempt (72h)
3. Save each as template

**How to use:**
1. New lead email arrives
2. Click "Reply"
3. Three dots → Templates → Insert template
4. Personalize [Name] and [Problem]
5. Send (takes 30 seconds instead of 5 minutes)

**Pro tip:** Create keyboard shortcuts for templates using Text Expander (free Chrome extension)

---

#### Google Forms Auto-Responder - FREE ✅

**What it does:** Instant auto-reply when someone fills your form

**Setup (5 minutes):**
1. Open your consultation form in Google Forms
2. Settings → Presentation
3. Enable "Show link to submit another response"
4. Add confirmation message:

```
Получих заявката Ви и ще се свържа с Вас в рамките на 24 часа.

Междувременно, подгответе:
- Какво точно не разбирате (темата);
- Най-добрият код, с който можете да се похвалите;
- Код, който не Ви се получава (ако има);
- Кога са Ви удобни срещи.

До скоро,
Алекс
+359 88 606 0295
```

**Advanced:** Use Google Apps Script to send custom email (requires 30 min setup, see below)

---

#### WhatsApp Business Auto-Reply - FREE ✅

**What it does:** Auto-respond when people message you on WhatsApp

**Setup (5 minutes):**
1. Download WhatsApp Business (separate from personal WhatsApp)
2. Business Tools → Away message
3. Set auto-reply:

```
Здравей! Благодаря за интереса към TutoriAleks.

Ще ти отговоря в рамките на 2 часа.

Междувременно, посети tutorialeks.com за повече информация.

- Александър
```

4. Schedule: Outside business hours (10 PM - 8 AM)

**Pro tip:** Also set "Quick Replies" for common questions (pricing, availability, etc.)

---

### 4. CONTENT CREATION HELPERS (Saves 10 min/day)

#### ChatGPT + Custom Prompts - FREE ✅

**What it does:** Generate post variations, never run out of ideas

**Setup:** Create a prompt library in Google Doc

**Example Prompts:**

**Prompt 1: Educational Post Generator**
```
You are a programming tutor writing a LinkedIn post.

Topic: [e.g., "why students struggle with loops"]
Tone: Helpful educator, not salesy
Length: 150-200 words
Language: Bulgarian
Format: Hook → 3 bullet points → Question for engagement

Generate post:
```

**Prompt 2: Facebook Ad Variation**
```
Rewrite this ad in 3 variations:
[paste original ad]

Variation 1: More urgent tone
Variation 2: More friendly tone
Variation 3: Question-based hook

Keep in Bulgarian, keep under 100 words each.
```

**Prompt 3: Engagement Response Helper**
```
Someone commented on my post: "[comment]"

Write 3 helpful responses that:
- Answer their question
- Show expertise
- Invite further discussion
- NOT salesy

In Bulgarian, friendly tone.
```

**Pro tip:** Save your best prompts in Notion or Google Doc for quick access

---

#### Canva Magic Resize - FREE (with limitation) ✅

**What it does:** Resize graphics for different platforms instantly

**Free Plan:**
- Create designs
- 5 magic resizes per month
- Access to templates

**How to use:**
1. Create Instagram post (1080x1080)
2. Click "Resize" → Select "Facebook Post" (1200x630)
3. Canva auto-adjusts layout
4. Download both

**Limitation:** Only 5 resizes/month free → Use strategically for your best posts

**Paid ($12.99/month):** Unlimited resizes, brand kit, remove backgrounds

---

#### Grammarly - FREE ✅

**What it does:** Check spelling, grammar, tone in Bulgarian posts

**Free Plan:**
- Grammar/spelling check
- Basic tone detection

**How to use:**
- Write posts in Google Doc
- Grammarly browser extension checks as you type
- Works in Bulgarian!

**Pro tip:** Use "Goals" feature to set tone (confident, friendly, etc.)

---

### 5. IMAGE & VIDEO CREATION (Saves 15 min per graphic)

#### Canva Templates - FREE ✅
(Already covered above, but key time-saver)

**Pro tip for batch work:**
1. Sunday: Create 1 testimonial graphic
2. Duplicate 2 times
3. Change text for other 2 testimonials
4. **Result:** 3 graphics in 15 minutes instead of 45

---

#### Remove.bg - FREE for low-res ✅

**What it does:** Remove background from photos instantly

**Free Plan:**
- Unlimited images
- Low resolution (good enough for social media)

**Use case:** Remove background from your photo, add to graphics

**Setup:** remove.bg → Upload image → Download

---

#### Kapwing (Video Editing) - FREE ✅

**What it does:** Edit videos online, add subtitles, trim

**Free Plan:**
- Unlimited projects
- 720p export
- Watermark (small)

**Use case for TutoriAleks:**
- Screen record coding tutorial (OBS Studio - free)
- Upload to Kapwing
- Add auto-subtitles (1 click)
- Trim to 60 seconds
- Export for Instagram Reel

**Time:** 5 minutes to edit 60-second video

---

### 6. MONITORING & ALERTS (Saves 10 min/day)

#### Google Alerts - FREE ✅

**What it does:** Email when your brand/keywords are mentioned online

**Setup (5 minutes):**
1. google.com/alerts
2. Create alerts for:
   - "TutoriAleks"
   - "Александър Павлов програмиране"
   - "частни уроци програмиране българия" (see competitors)

3. Frequency: As-it-happens
4. Deliver to: Your email

**Why useful:** Know if someone mentions you, respond quickly

---

#### F5Bot (Reddit Monitoring) - FREE ✅

**What it does:** Alert when keywords appear on Reddit

**Setup:**
1. f5bot.com
2. Add keywords: "програмиране уроци", "learning java help"
3. Get email alerts

**Use case:** Find people asking for programming help on Reddit, offer helpful advice (not spam!), build reputation

---

#### Mention.com (Alternative - Paid but powerful)
- Tracks social media mentions
- $25/month (probably too expensive for now)
- **Skip for now**, use Google Alerts instead

---

## 🔧 ADVANCED AUTOMATION (30 min setup, saves hours)

### Google Apps Script - Email Form Responses Automatically

**What it does:** Send personalized email immediately when form submitted

**Setup (30 minutes one-time):**

1. Open your Google Form
2. Click three dots → Script editor
3. Paste this code:

```javascript
function onFormSubmit(e) {
  // Get form response
  var name = e.values[1];  // Adjust index to your name field
  var email = e.values[2]; // Adjust index to your email field
  var problem = e.values[4]; // Their programming problem

  // Email subject
  var subject = "Здравей " + name + ", готов съм да помогна!";

  // Email body
  var body = "Здравей " + name + ",\n\n" +
             "Благодаря че се свърза с мен относно " + problem + ".\n\n" +
             "Ще прегледам информацията и ще ти отговоря в рамките на 24 часа.\n\n" +
             "Междувременно, подготви:\n" +
             "- Код който не ти излиза (ако има)\n" +
             "- Кога са ти удобни срещи\n\n" +
             "До скоро,\n" +
             "Александър\n" +
             "+359 88 606 0295\n" +
             "tutorialeks.com";

  // Send email
  MailApp.sendEmail(email, subject, body);

  // Also send notification to yourself
  MailApp.sendEmail(
    "info@tutorialeks.com",
    "🎯 NEW LEAD: " + name,
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Problem: " + problem + "\n\n" +
    "RESPOND WITHIN 24 HOURS!"
  );
}
```

4. Save script
5. Run → Authorize (allow access)
6. Click "Triggers" (clock icon)
7. Add trigger: `onFormSubmit` → From form → On form submit
8. Save

**Result:**
- Student gets instant personalized email
- You get instant notification
- **No manual work needed!**

---

### IFTTT (If This Then That) - FREE ✅

**What it does:** Connect apps and automate workflows

**Free Plan:**
- 2 applets
- Limited integrations

**Useful Applets:**

**Applet 1: Instagram Post → Auto-share to Facebook**
- Trigger: New Instagram post
- Action: Post same content to Facebook Page
- **Time saved:** Don't post twice

**Applet 2: Save all mentions to spreadsheet**
- Trigger: Mentioned on Twitter
- Action: Add row to Google Sheet
- Track all brand mentions

**Setup:** ifttt.com → Browse applets or create your own

---

## 📱 MOBILE APPS FOR ON-THE-GO

### Meta Business Suite App - FREE ✅
- Respond to messages from one app
- View analytics on phone
- Schedule posts (limited)

**Download:** iOS/Android app store

### LinkedIn Mobile App - FREE ✅
- Respond to comments quickly
- Post from phone (but cannot schedule)
- Check notifications

### Google Sheets App - FREE ✅
- Update tracking spreadsheet on the go
- Voice input: Say your daily metrics instead of typing

---

## 🎯 YOUR AUTOMATION WORKFLOW (Realistic 4-Week Setup)

### Week 0 (Setup Week)
**Time Investment:** 3-4 hours one-time
- [ ] Set up Meta Business Suite (30 min)
- [ ] Set up LinkedIn scheduler (10 min)
- [ ] Create Gmail canned responses (15 min)
- [ ] Set up Google Forms auto-responder (10 min)
- [ ] Set up Google Apps Script for emails (30 min)
- [ ] Create Zapier lead alert (15 min)
- [ ] Set up Google Alerts (5 min)
- [ ] Create ChatGPT prompt library (30 min)
- [ ] Test all automations (30 min)

### Week 1-4 (Campaign Execution)
**Daily Routine with Automation:**

**Sunday Batch (1.5 hours - down from 2):**
- [ ] Write all posts in Google Doc (45 min)
- [ ] Create/resize graphics in Canva (30 min)
- [ ] Schedule all posts for week (15 min)
  - Meta Business Suite: Instagram + Facebook
  - LinkedIn: Schedule posts
- **DONE! No daily posting needed**

**Daily Routine (15 min - down from 40):**
- [ ] Morning (5 min): Check notifications, respond to comments
- [ ] Afternoon (5 min): Respond to any form submissions (use templates)
- [ ] Evening (5 min): Quick engagement (comment on 3-5 posts)

**What's automated:**
- ✅ Social posts auto-publish
- ✅ Form submissions send auto-reply
- ✅ You get instant lead alerts
- ✅ Analytics tracked in spreadsheet
- ✅ Brand mentions monitored

**What you still do manually:**
- Respond to comments (personalized, can't automate well)
- Follow up with leads (personalized)
- Engage in groups (needs human touch)

---

## 💰 BUDGET COMPARISON

### Free Stack (0 BGN/month)
- Meta Business Suite
- LinkedIn native scheduler
- Gmail canned responses
- Google Forms + Apps Script
- Zapier free plan (100 tasks)
- Canva free
- ChatGPT free
- **Total:** 0 BGN

### Basic Paid Stack (30-50 BGN/month)
- Canva Pro: 23 BGN/month (unlimited resizes, brand kit)
- Buffer Basic: 12 BGN/month (unlimited posts)
- **Total:** 35 BGN/month

### Advanced Stack (100-150 BGN/month) - NOT NEEDED NOW
- Zapier Starter: 45 BGN/month
- Hootsuite: 90 BGN/month
- **Skip this** - free tools are plenty for your campaign

---

## ⚠️ WHAT NOT TO AUTOMATE

**DON'T automate these (hurts authenticity):**
- ❌ Commenting on others' posts (use real engagement)
- ❌ DM responses (people can tell it's a bot)
- ❌ Writing testimonials (obviously fake)
- ❌ Group participation (groups ban automated posts)

**DO automate these (saves time, maintains quality):**
- ✅ Scheduling posts
- ✅ Initial form auto-response
- ✅ Analytics tracking
- ✅ Lead notifications
- ✅ Content creation helpers (ChatGPT)

---

## 🚀 QUICK START GUIDE (Do This First)

**If you only have 1 hour for automation setup:**

**Priority 1 (15 min):** Meta Business Suite scheduling
- Biggest time saver
- Schedule entire week on Sunday

**Priority 2 (15 min):** Gmail canned responses
- Saves 5 min per lead response
- 10 leads = 50 min saved

**Priority 3 (15 min):** Google Form auto-responder
- Instant lead nurturing
- Looks professional

**Priority 4 (15 min):** Zapier lead alert
- Never miss a lead
- Respond faster = better conversion

**Result:** 40 min daily → 15 min daily = **25 min saved per day = 3 hours/week!**

---

## 📊 TIME SAVINGS CALCULATOR

### Without Automation:
- Writing posts: 15 min
- Posting manually: 10 min
- Checking analytics: 5 min
- Responding to leads: 10 min
- Finding content ideas: 5 min
- **Total:** 45 min/day = **5.25 hours/week**

### With Basic Automation:
- Sunday batch scheduling: 15 min (once per week)
- Daily engagement: 10 min
- Lead response (with templates): 5 min
- **Total:** 15 min/day = **1.75 hours/week**

**Time Saved:** 3.5 hours/week = **14 hours over 4-week campaign!**

---

## 🎓 LEARNING RESOURCES

### Video Tutorials (Free)
- **Meta Business Suite:** YouTube "Meta Business Suite tutorial 2024"
- **Zapier:** zapier.com/learn
- **Google Apps Script:** YouTube "Google Apps Script email automation"

### Help When Stuck
- Meta Business Suite: business.facebook.com/help
- Zapier Community: community.zapier.com
- Reddit: r/marketing, r/socialmedia

---

## ✅ AUTOMATION CHECKLIST

**Before Campaign Launch:**
- [ ] Meta Business Suite connected and tested
- [ ] LinkedIn scheduler working
- [ ] Gmail templates created (3 templates)
- [ ] Google Form auto-responder enabled
- [ ] Google Apps Script email working
- [ ] Zapier lead alert sending notifications
- [ ] Google Alerts created for brand mentions
- [ ] ChatGPT prompt library ready
- [ ] Canva brand kit set up
- [ ] Test post scheduled and published successfully

**Week 1 Check:**
- [ ] All scheduled posts publishing correctly
- [ ] Lead alerts arriving instantly
- [ ] Email templates being used
- [ ] Time savings verified (tracking actual time spent)

---

## 🔥 PRO TIPS

1. **Test Everything First**
   - Schedule a test post for tomorrow
   - Submit test form, verify auto-reply arrives
   - Check Zapier alerts work

2. **Have Backup Plan**
   - If Meta Business Suite fails, have posts ready in Google Doc
   - If form breaks, have email ready for manual response

3. **Monitor, Don't Set-and-Forget**
   - Check scheduled posts day before they publish
   - Adjust if needed (exam date changed, news event, etc.)

4. **Start Simple**
   - Week 0: Just use Meta Business Suite scheduling
   - Week 1: Add Gmail templates
   - Week 2: Add Zapier alerts
   - Week 3: Add advanced automation

5. **Track Time Saved**
   - Week 1: Track actual daily time spent
   - Compare to Week 0 baseline
   - Celebrate time saved!

---

## 🎯 FINAL RECOMMENDATION

**Start with this FREE stack (Week 0 setup):**
1. Meta Business Suite (scheduling)
2. LinkedIn native scheduler
3. Gmail canned responses
4. Google Form auto-responder
5. Zapier lead alert (free plan)

**Total Setup Time:** 1-2 hours
**Time Saved Per Week:** 3-4 hours
**Cost:** 0 BGN

**If campaign succeeds, upgrade to:**
- Canva Pro (23 BGN/month) for unlimited resizes
- Buffer Basic (12 BGN/month) if you want better analytics

**But honestly? The free tools are MORE than enough for your 4-week campaign.**

---

**You don't need expensive tools. You need smart automation. Start with the Quick Start guide above! 🚀**

---

*Saved to: `/marketing/AUTOMATION-GUIDE.md`*
*Companion to: `MARKETING-TIMELINE-TODO.md`*
*Part of: TutoriAleks Marketing Campaign*
