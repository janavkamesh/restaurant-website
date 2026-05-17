Anti-Gravity Conversion Rules
Tamil Nadu Fine Dining Website — Stitch Design → Production Code
Authority: This document overrides any value Anti-Gravity infers from the Stitch design.
Use alongside: Tamil Nadu Fine Dining Website project in Google Stitch (connected via MCP).

HOW TO USE THIS DOCUMENT
Anti-Gravity: Read the Stitch design for visual layout and structure only — section order, image placements, spacing proportions, and component positions.
For every other decision — colors, fonts, behavior, interactions, mobile rules, CTA logic — use the exact values in this document. Do not infer. Do not approximate. Use what is written here.
If a value in the Stitch design conflicts with a value in this document, this document wins.

TECH STACK

Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS with custom config (defined below — do not use default Tailwind colors)
Fonts: Google Fonts via next/font — Playfair Display, Inter, Space Mono
Images: next/image for all images (WebP optimization, lazy loading)
Animations: Framer Motion — subtle only, respect prefers-reduced-motion


EXACT COLOR SYSTEM
These are the only colors used on this website. No other colors. No approximations.
Token NameHexUsed Formilk#FAFAF7Page background — 80% of all surfacesbanana#F2E8D6Section alternate background (menu, story, cards)mint#EAF3EEBadge and tag backgrounds onlycurry#2A5C3FNavbar accent, secondary CTA border + text, section accentsforest#1A2E1ENavbar Reserve button bg, trust section bg, footer bg, all headlines on light surfacesgold#D4A853Primary CTA button background, prices, rating numbers — NOTHING ELSEchilli#7A3520Urgency CTA bg (Call button, callback button)sage#4A6B52All body text on light surfaces, nav links, descriptorssage-light#B8C9BCAll body text on dark surfaces (forest bg sections)border#E2D9C6All dividers, card borders, input borders, hairlinesveg#2A5C3FVegetarian indicator dot and border — same as currynonveg#7A3520Non-vegetarian indicator dot and border — same as chilliwhatsapp#25D366WhatsApp button only
Color Rules — Non-Negotiable

#FAFAF7 is the page background. Never use white #FFFFFF or dark green as a page background.
#D4A853 gold appears on primary CTA buttons and prices only. Not as a background for sections. Not for decorative use.
#1A2E1E forest appears in exactly 5 places: navbar Reserve button, hero 4px accent bar, trust/stats section, footer, all headlines. Not as a full-page background.
#F2E8D6 banana leaf is the section alternate background. Pages alternate: milk → banana → milk → banana → forest (trust only) → milk → forest (footer).
No pure black text anywhere. Darkest text is #1A2E1E.
No hex values outside this table. If the Stitch design shows a slightly different shade, override it with the exact hex above.


EXACT TYPOGRAPHY SYSTEM
Font Assignments
FontUse CaseNever Use ForPlayfair DisplayH1, H2, H3 headings, pull quotes, logoBody text, buttons, labels, pricesInterBody copy, nav links, buttons, labels, eyebrows, form fields, footerHeadings, pricesSpace MonoMenu prices and monetary values onlyAnything else
Font Size Scale
ElementDesktopMobileWeightColorH1 Hero headline56px36pxSemiBold (600)#F2E8D6 on dark / #1A2E1E on lightH2 Section heading36px28pxSemiBold (600)#1A2E1EH3 Sub-section28px22pxRegular (400)#1A2E1EH4 Card title22px20pxSemiBold (600)#1A2E1EEyebrow label12px11pxMedium (500)#4A6B52 uppercase, letter-spacing 0.1emBody large18px16pxRegular (400)#4A6B52Body16px16pxRegular (400)#4A6B52Body on dark16px16pxRegular (400)#B8C9BCNav links15px14pxMedium (500)#4A6B52CTA button text16px15pxMedium (500)#1A2E1E on gold / #FAFAF7 on darkMenu item name16px15pxSemiBold (600)#1A2E1EMenu descriptor14px13pxRegular (400)#4A6B52Prices16px15pxRegular (400)#D4A853 — Space Mono fontForm labels14px14pxMedium (500)#1A2E1ESmall print13px13pxRegular (400)#4A6B52Pull quote22px18pxItalic (400)#1A2E1EFooter text13px12pxRegular (400)#B8C9BC
Typography Rules — Non-Negotiable

Minimum body font size: 16px. Never go below 16px for any body text. This prevents iOS Safari auto-zoom on form focus.
Body line-height: 1.65 minimum. Pull quotes: 1.5.
Playfair Display for headings only. If the Stitch design uses Playfair for anything other than H1–H4 and pull quotes, override it with Inter.
Space Mono for prices only. No other use.


LAYOUT & SPACING RULES
Max content width:      1200px, centered with auto margins
Section padding top/bottom:
  Desktop:              80px (py-20 in Tailwind)
  Mobile:               48px (py-12 in Tailwind)
Card border-radius:     12px
Button border-radius:   8px
Button min height:      52px (desktop) / 48px absolute minimum (mobile)
Input min height:       52px
Tap target minimum:     44 × 44px — all interactive elements
Background Alternation Pattern (follow this exactly, page by page)
HOME:
  Section 1 Hero          → full-bleed image + dark overlay (no bg color)
  Section 2 Proof Bar     → #FAFAF7
  Section 3 Dish Preview  → #FAFAF7
  Section 4 Story Teaser  → #F2E8D6
  Section 5 Reserve/Visit → #1A2E1E
  Footer                  → #1A2E1E

MENU:
  Category Tabs (sticky)  → #FAFAF7
  Signature Dish          → #F2E8D6
  Full Menu               → #FAFAF7
  Drinks & Specials       → #F2E8D6
  Reserve CTA (bottom)    → #1A2E1E
  Footer                  → #1A2E1E

OUR STORY:
  Cinematic Open          → full-bleed image + dark overlay
  Origin Story            → #FAFAF7
  Team Section            → #F2E8D6
  Philosophy              → #FAFAF7
  Invitation CTA          → #1A2E1E
  Footer                  → #1A2E1E

RESERVE:
  Reservation Form        → #FAFAF7
  Experience Options      → #F2E8D6
  Private Dining          → #FAFAF7
  Policies FAQ            → #FAFAF7
  Footer                  → #1A2E1E

GLOBAL COMPONENTS — BEHAVIOR RULES
Navbar
Position:           sticky top-0, z-index 50
Background:         #FAFAF7
Border bottom:      1px solid #E2D9C6
On scroll (>10px):  add subtle box-shadow, border intensifies slightly

Logo:               Left aligned, Playfair Display SemiBold, #1A2E1E
Nav links:          "Home" | "Menu" | "Our Story"
                    Inter Medium, #4A6B52, hover → #1A2E1E, transition 200ms

Reserve button:     bg #1A2E1E, text #D4A853, Inter Medium 14px
                    px-5 py-2.5, border-radius 8px
                    hover → bg #2A5C3F, transition 200ms
                    ALWAYS VISIBLE — on desktop and mobile

Mobile behavior:    Hamburger icon collapses only the 3 text nav links
                    Reserve button NEVER goes into the hamburger menu
                    Hamburger drawer: bg #FAFAF7, full-width, stacked links
                    Close on outside tap
Sticky Mobile Bottom Bar
Visibility:         Mobile only (hidden on md: and above)
Position:           sticky bottom — use position: sticky with bottom: 0
                    OR fixed bottom: 0 — choose whichever Anti-Gravity implements
                    more cleanly, but add padding-bottom: env(safe-area-inset-bottom)
                    for notch device support
Background:         #1A2E1E
Height:             64px + safe area inset
z-index:            40

3 equal-width buttons (flex, each flex: 1):
  Button 1 "Book table":  bg #D4A853, text #1A2E1E, Inter Medium 14px
  Button 2 "Call":        bg #7A3520, text #FFFFFF, Inter Medium 14px
                          href: tel:[PHONE_NUMBER]
  Button 3 "WhatsApp":    bg #25D366, text #FFFFFF, Inter Medium 14px
                          href: https://wa.me/[WHATSAPP_NUMBER]

All buttons: min-height 48px, font-size 14px
This bar is the highest-priority conversion element on mobile.
It must be present on ALL 4 pages. Never omit it.
Floating WhatsApp Button
Position:     fixed, bottom: 24px, right: 24px, z-index 50
Shape:        circle, 56px × 56px
Background:   #25D366
Icon:         WhatsApp SVG, white, 28px
hover:        scale(1.1), transition 200ms
aria-label:   "Chat on WhatsApp"
href:         https://wa.me/[WHATSAPP_NUMBER]
Visibility:   always visible on desktop AND mobile
              On mobile: position bottom must clear the sticky bar
              Set bottom: calc(64px + 16px + env(safe-area-inset-bottom))
Footer
Background:   #1A2E1E
Padding:      48px top/bottom

Row 1: Logo (#F2E8D6, Playfair Display SemiBold) + Reserve button (bg #D4A853, text #1A2E1E)
Row 2: Address | Phone (tel: link) | Email | Instagram link
       Inter Regular 13px, #B8C9BC, flex-wrap gap-6
Row 3: Copyright + FSSAI license note
       Inter Regular 13px, #B8C9BC, opacity 60%

Top border: 1px solid #2A5C3F

BUTTON SYSTEM — 5 VARIANTS
Build these as a reusable Button component. Do not create one-off button styles.
PRIMARY:
  bg: #D4A853   text: #1A2E1E   border: none
  hover bg: #E8C26A
  Use for: Book table, Reserve your table, Confirm reservation
  Rule: Only one primary button visible per screen section

SECONDARY:
  bg: transparent   text: #2A5C3F   border: 1.5px solid #2A5C3F
  hover bg: #EAF3EE
  Use for: View menu, Explore, Secondary page navigation

URGENT:
  bg: #7A3520   text: #FFFFFF   border: none
  hover bg: #9E4A2A
  Use for: Call now, Request a callback — urgency/phone actions only

GHOST:
  bg: transparent   text: #F2E8D6   border: 1px solid #F2E8D6
  hover bg: rgba(255,255,255,0.1)
  Use for: Secondary CTA on dark/hero backgrounds only

TEXT LINK:
  bg: none   border: none   text: #2A5C3F
  hover: underline, underline-offset 4px
  Use for: "Explore the full menu →", "Read our full story →", inline page links

ALL BUTTONS:
  min-height: 52px
  border-radius: 8px
  font-family: Inter
  font-weight: 500 (Medium)
  transition: all 200ms ease
  cursor: pointer
  focus-visible: ring 2px #D4A853, outline none

CTA PLACEMENT — ALL 4 PAGES
This is the conversion architecture. Follow it exactly.
NAVBAR (all pages):     "Reserve" — PRIMARY button, always visible
HOME Hero:              "Reserve your table →" PRIMARY + "View our menu" GHOST
HOME bottom section:    "Reserve now →" PRIMARY only
MENU bottom section:    "Reserve your table →" PRIMARY + phone number text link
STORY bottom section:   "Reserve your table →" PRIMARY + "View our menu →" SECONDARY (equal weight)
RESERVE page (form):    "Confirm reservation →" PRIMARY — full width, inside form card
MOBILE bar (all pages): Book (PRIMARY) | Call (URGENT) | WhatsApp (custom green)
CTA copy rules:

Never say "Click here" or "Submit"
Always use action verbs: Reserve / Book / Call / Confirm / Explore
"Your" language preferred: "Reserve your table" not "Make a reservation"
No fake urgency: no "Book NOW!!!" — premium brands use invitation tone


SECTION HEADING SYSTEM
Every section heading follows this exact pattern. Build as a reusable component.
Structure (top to bottom):
1. Eyebrow text:    uppercase, Inter Medium 12px, #4A6B52, letter-spacing 0.1em
2. Accent bar:      width 48px, height 3px, background #D4A853, margin-bottom 12px
3. H2 heading:      Playfair Display SemiBold, 36px desktop / 28px mobile, #1A2E1E
4. Sub-heading:     Inter Regular, 16px, #4A6B52 (optional)

Alignment: left-aligned by default. Center only when the section is
           full-width with no sidebar content (e.g., the Story Invitation section).

FORM RULES — RESERVE PAGE
Form card:
  max-width: 560px, centered
  background: #FFFFFF (exception — pure white for the form card only, not the page)
  border: 1px solid #E2D9C6
  border-radius: 24px
  padding: 40px desktop / 24px mobile

Input fields:
  height: 52px
  background: #FAFAF7
  border: 1px solid #E2D9C6
  border-radius: 8px
  font-family: Inter
  font-size: 16px (CRITICAL — never below 16px — prevents iOS zoom)
  color: #1A2E1E
  focus state: border-color #2A5C3F, ring 1px #2A5C3F

Field order (do not change):
  1. Date (type="date", min=today)
  2. Time slot (pill group — NOT a dropdown)
  3. Party size (stepper with +/- buttons — NOT a text input)
  4. Name (type="text", autocomplete="name")
  5. Phone (type="tel", autocomplete="tel", +91 prefix shown inline)
  6. Special requests (textarea, 3 rows, explicitly labeled "optional")

Phone field rule: India market — phone is primary contact, not email.
Phone comes before email. Email is not required on this form.

Time slot pills:
  "12–2 PM" | "2–5 PM" | "7–9 PM" | "9–11 PM"
  Inactive: Inter Medium 14px, #4A6B52, border #E2D9C6, bg transparent
  Selected: bg #1A2E1E, text #D4A853, border #1A2E1E

Party size stepper:
  Range: 1–12
  At 12: show text "Larger group?" + link to private dining section
  Button size: 44×44px minimum (Fitts's Law)

Validation:
  Client-side only (no page reload)
  Errors appear inline below each field
  Error color: #A63228
  Error text: descriptive — "Please select a date" not "Required field"
  Required fields: date, time, guests, name, phone

Success state:
  Replace form with confirmation message
  Show: ✓ icon (#2A5C3F), "Table confirmed!", booking summary
  Summary card: bg #F2E8D6, border-radius 12px, padding 16px

IMAGE RULES
All images:           next/image component (never <img> tags)
Above-fold images:    priority={true} for immediate loading
Below-fold images:    lazy loading (default next/image behavior)
Format:               WebP (next/image handles automatically)

Hero images (Home + Story):
  Full viewport height (100vh)
  object-fit: cover
  Dark overlay: bg-black/35 (Home) / bg-black/40 (Story)
  No carousel. Single static image only.

Food photography images:
  Aspect ratio: 1:1 square for dish preview cards
  Aspect ratio: 16:9 for feature/signature dish
  Always well-lit, warm tones — no dark or moody food photography
  No filter overlays on food images

Team/portrait images:
  Aspect ratio: 1:1 square for team cards
  Aspect ratio: 3:4 portrait for story teaser
  Candid, warm, natural light — not corporate headshots

Placeholder strategy:
  Use Unsplash URLs for placeholders during build
  Flag all placeholder images with a comment: // TODO: Replace with real photography
  Never use gray placeholder boxes in the final deliverable

MOBILE RULES — CRITICAL
Breakpoint:           Mobile = below 768px (md: breakpoint in Tailwind)
Viewport minimum:     375px — everything must work at this width

Horizontal scroll:    ZERO horizontal scroll permitted on any page at 375px
Tap targets:          All buttons, links, nav items: minimum 44×44px
Font size minimum:    16px for all inputs and body text (prevents iOS zoom)
No PDF links:         Anywhere on the site. Menu is HTML only.

Layout changes mobile:
  2-column → 1-column for all grid sections
  Text always renders BEFORE image when stacked vertically
  Proof bar collapses to 1 stat + 1 logo (never wraps to 2 rows)
  Hero content: centered on mobile (left-aligned on desktop)
  CTA buttons: full-width on mobile, fixed width on desktop
  Dish cards: single column scroll (not horizontal scroll)

Form on mobile:
  Full-width within card
  Card padding reduces to 24px
  All inputs full-width
  Time slot pills wrap to 2×2 grid if needed

DIETARY INDICATOR COMPONENT
This is a standard FSSAI (India food safety) visual. Build as a reusable component.
Props: type = "veg" | "nonveg"

Visual:
  Outer: 14×14px square
  Border: 1.5px solid
    veg → #2A5C3F
    nonveg → #7A3520
  Inner dot: 6×6px circle, centered
    veg → bg #2A5C3F
    nonveg → bg #7A3520

Accessibility:
  aria-label="Vegetarian" or aria-label="Non-vegetarian"
  Never rely on color alone — the square vs circle shape also differentiates
  (Note: FSSAI standard uses square border for both — dot color is the differentiator)

SEO & META RULES
Root layout title template:   "%s | [Restaurant Name]"
Home page title:              "Authentic Tamil Cuisine in T. Nagar, Chennai | [Restaurant Name]"
Menu page title:              "Menu — [Restaurant Name]"
Story page title:             "Our Story — [Restaurant Name]"
Reserve page title:           "Reserve Your Table — [Restaurant Name]"

Root description:             "Authentic Chettinad and Tamil Nadu cuisine in T. Nagar, Chennai.
                               Reserve your table directly. Confirmed within 90 minutes."

Open Graph:
  og:type = "restaurant"
  og:locale = "en_IN"
  og:image = hero image URL

JSON-LD Schema (add to root layout):
  @type: Restaurant
  servesCuisine: "Indian, Tamil, Chettinad"
  priceRange: "₹₹"
  openingHours: "Mo-Su 12:00-23:00"
  address, telephone, aggregateRating — use real restaurant data

ACCESSIBILITY RULES
Focus states:       All interactive elements — ring 2px #D4A853, outline none
Icon-only buttons:  aria-label required (hamburger, WhatsApp float, stepper +/-)
Images:             Meaningful alt text — never empty string for content images
Form fields:        All inputs have associated <label> with htmlFor
Skip link:          "Skip to main content" — first element in layout, visually hidden until focused
Color:              Never used as the ONLY indicator of meaning
                    (dietary indicator uses shape + color, not color alone)
Animations:         Wrap all Framer Motion in prefers-reduced-motion check
                    If reduced motion preferred → render content static, no transitions

WHAT TO PRESERVE FROM THE STITCH DESIGN
Read the Stitch design for these elements only:

Section order and page structure — the sequence of sections on each page
General spacing proportions — how much breathing room between sections
Image placement positions — where images sit relative to text blocks
Component positions — where cards, grids, and columns are placed
Overall visual hierarchy — what is large vs small, prominent vs supporting

WHAT TO OVERRIDE FROM THE STITCH DESIGN
Override the Stitch design with this document for:

Every hex color value — use the exact table above
Every font assignment — Playfair / Inter / Space Mono rules above
Every font size — use the scale table above
All interactive behavior — navbar scroll, form validation, sticky bar
All mobile behavior — breakpoints, tap targets, stacking order
CTA text and button variants — use CTA table above
Section background colors — use the alternation pattern above


RESTAURANT DATA PLACEHOLDERS
Replace these with real values before launch:
RESTAURANT_NAME:        "Annamalai Kitchen"
RESTAURANT_TAGLINE:     "Where Tamil Nadu comes to the table"
PHONE:                  "+91 98765 43210"
WHATSAPP:               "+919876543210"
EMAIL:                  "hello@annamalaikikitchen.com"
ADDRESS:                "42, Usman Road, T. Nagar, Chennai — 600017"
GOOGLE_MAPS_URL:        "https://maps.google.com"
INSTAGRAM_URL:          "https://instagram.com"
HOURS:                  "Open daily, 12 PM – 11 PM"
ESTABLISHED:            "2007"
GOOGLE_RATING:          "4.8"
REVIEW_COUNT:           "2,400+"
CONFIRMATION_TIME:      "90 minutes"
FSSAI_LICENSE:          "[FSSAI License Number]"

BUILD ORDER
Build one page at a time. Confirm and review before proceeding.
Phase 1:  Global setup — Tailwind config, fonts, constants, Navbar, MobileStickyBar,
          FloatingWhatsApp, Footer, Button component, SectionHeading component,
          DietaryIndicator component
Phase 2:  Home page
Phase 3:  Menu page
Phase 4:  Our Story page
Phase 5:  Reserve page
Phase 6:  SEO, accessibility audit, performance check, mobile QA
After each phase: verify against the color rules, typography rules, and mobile rules in this document before starting the next phase.

Anti-Gravity Conversion Rules v1.0
Source design: Tamil Nadu Fine Dining Website — Google Stitch (via MCP)
Based on: Master Design Prompt (Forest & Linen color system, IA document)
Market: Tamil Nadu, India | 4-page restaurant website | Mobile-first | Conversion-focused