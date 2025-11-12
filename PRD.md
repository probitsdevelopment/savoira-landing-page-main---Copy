# Planning Guide

Savoira is an AI-powered platform homepage that showcases intelligent L&D operations through elegant design, smooth interactions, and clear value propositions.

**Experience Qualities**:
1. **Professional yet Approachable** - Enterprise-grade credibility balanced with human-centric warmth through refined typography and purposeful motion
2. **Effortlessly Navigable** - Seamless scroll-based journey with sticky navigation that guides users through features without overwhelming
3. **Trustworthy and Modern** - Clean, minimalist aesthetic with subtle AI-themed elements that inspire confidence in cutting-edge technology

**Complexity Level**: Light Application (multiple features with basic state)
  - Single-page application with smooth scroll navigation, interactive components (modals, dropdowns, hover states), and state management for navigation highlighting and theme toggling

## Essential Features

### Sticky Navigation Header
- **Functionality**: Fixed navigation bar with logo, links, dropdown menu, and CTA button
- **Purpose**: Provides persistent access to all sections and key actions throughout the scrolling experience
- **Trigger**: Visible on page load, remains fixed during scroll
- **Progression**: User scrolls → Active section highlights in nav → Click nav link → Smooth scroll to section → Click CTA → Modal opens
- **Success criteria**: Navigation remains accessible, active section is visually indicated, smooth scroll animations complete within 800ms

### Smooth Scroll Anchoring
- **Functionality**: Navigation links scroll to corresponding page sections with easing animation
- **Purpose**: Creates fluid, delightful user experience while maintaining context and orientation
- **Trigger**: Click on navigation link or section anchor
- **Progression**: Click link → Smooth scroll animation begins → Section scrolls into view → Navigation updates active state
- **Success criteria**: Scroll completes smoothly, correct section is centered, no jarring jumps

### Demo Request Modal
- **Functionality**: Dialog form for booking demo with name, email, company, and message fields
- **Purpose**: Captures qualified leads interested in exploring Savoira
- **Trigger**: Click "Book a Demo" or "Request Demo" buttons
- **Progression**: Click CTA → Modal slides in → User fills form → Submit → Success toast → Modal closes
- **Success criteria**: Form validates input, submission provides feedback, modal closes gracefully

### Feature Card Interactions
- **Functionality**: Hoverable cards with subtle animations revealing additional context
- **Purpose**: Engages users to explore features while maintaining clean visual hierarchy
- **Trigger**: Mouse hover or focus on feature card
- **Progression**: Hover card → Elevation increases → Shadow deepens → Tooltip or content reveals → Mouse leaves → Card returns to rest state
- **Success criteria**: Animations feel responsive (150-200ms), content is readable, transitions are smooth

### Resources Dropdown Menu
- **Functionality**: Expandable navigation menu showing Case Studies, Blog, Documentation links
- **Purpose**: Organizes secondary navigation without cluttering primary header
- **Trigger**: Click or hover on "Resources" nav item
- **Progression**: Click Resources → Dropdown opens → Hover items → Visual feedback → Click item → Navigate or scroll → Dropdown closes
- **Success criteria**: Menu appears within 100ms, items are clearly clickable, closes on outside click

## Edge Case Handling

- **Scroll Position Tracking** - Active navigation link updates based on current viewport section using Intersection Observer
- **Mobile Navigation** - Collapses to hamburger menu below 768px with slide-in drawer for links
- **Form Validation** - Email format validation, required field checks with inline error messages
- **Missing Sections** - Graceful handling if anchor target doesn't exist (no scroll, console warning only)
- **Rapid Clicking** - Debounced scroll events prevent animation conflicts from multiple rapid nav clicks
- **Empty Form Submit** - Prevents submission with toast error message guiding user to fill required fields

## Design Direction

The design should evoke trust, intelligence, and forward-thinking innovation—feeling modern and premium like enterprise SaaS (think Notion, Linear, Stripe) with subtle AI-themed accents. A minimal interface serves the content best, allowing features and value propositions to shine without visual competition from heavy decorative elements.

## Color Selection

**Triadic** color scheme establishing visual hierarchy with primary (brand authority), secondary (supporting actions), and accent (AI intelligence highlights).

- **Primary Color**: Deep sophisticated blue `oklch(0.45 0.15 250)` - Communicates trust, enterprise reliability, and professional credibility
- **Secondary Colors**: 
  - Warm slate `oklch(0.65 0.02 250)` for supporting UI elements and text hierarchies
  - Soft lavender `oklch(0.85 0.08 280)` for subtle background variations and cards
- **Accent Color**: Vibrant electric purple `oklch(0.65 0.20 290)` - Represents AI innovation, smart technology, creates visual interest for CTAs
- **Foreground/Background Pairings**:
  - Background (Pure white `oklch(1 0 0)`): Deep slate text `oklch(0.20 0.01 250)` - Ratio 15.8:1 ✓
  - Card (Soft lavender `oklch(0.98 0.01 280)`): Deep slate text `oklch(0.20 0.01 250)` - Ratio 14.2:1 ✓
  - Primary (Deep blue `oklch(0.45 0.15 250)`): White text `oklch(1 0 0)` - Ratio 8.9:1 ✓
  - Accent (Electric purple `oklch(0.65 0.20 290)`): White text `oklch(1 0 0)` - Ratio 5.2:1 ✓
  - Muted (Light gray `oklch(0.96 0 0)`): Medium slate `oklch(0.55 0.01 250)` - Ratio 6.1:1 ✓

## Font Selection

Typography should convey modern sophistication with excellent readability, using geometric sans-serifs that feel both technical and approachable for a SaaS platform.

- **Typographic Hierarchy**:
  - Hero Headline: Inter Bold / 56px / -0.02em letter-spacing / 1.1 line-height
  - Section Headers: Inter SemiBold / 36px / -0.01em / 1.2 line-height
  - Subsection Headers: Inter Medium / 24px / normal / 1.3 line-height
  - Body Text: Inter Regular / 16px / normal / 1.6 line-height
  - Button Labels: Inter Medium / 15px / 0.01em / 1.0 line-height
  - Captions/Labels: Inter Medium / 14px / normal / 1.4 line-height

## Animations

Animations should feel purposeful and refined—celebrating moments of interaction without delaying or distracting from content consumption, with subtle easing that mimics natural physics.

- **Purposeful Meaning**: Smooth scroll animations guide attention through the narrative journey; hover states provide tactile feedback suggesting interactivity; modal transitions maintain spatial context
- **Hierarchy of Movement**: 
  - Primary: Smooth scroll navigation (400-600ms ease-out)
  - Secondary: Feature card hover elevations (200ms ease-out), button press feedback (150ms)
  - Tertiary: Icon micro-animations on hover (100ms), tooltip reveals (200ms)
  - Ambient: Subtle floating animations on hero visuals (3-4s infinite ease-in-out)
- **Color Transitions**: All interactive elements (buttons, links, cards, icons, inputs) feature smooth color transitions (200-400ms cubic-bezier easing) for professional polish and tactile feedback

## Component Selection

- **Components**: 
  - `Button` (primary/secondary/ghost variants) for CTAs and navigation
  - `Dialog` for demo request modal with form inputs
  - `DropdownMenu` for Resources navigation item
  - `Card` for feature highlights, USP showcases, and metric displays
  - `Input` and `Textarea` for demo form fields
  - `Label` for form accessibility
  - `Sheet` for mobile navigation drawer
  - `Separator` for visual section breaks in footer
  - `ScrollArea` for smooth scrolling containers if needed
  - `Tooltip` for feature card hover hints

- **Customizations**: 
  - Custom sticky header with blur backdrop effect (`backdrop-blur-lg`)
  - Gradient overlays for hero section using Tailwind gradient utilities
  - Custom smooth scroll behavior using `scroll-behavior: smooth` and/or framer-motion
  - Floating badge components for trust indicators (ISO, GDPR)
  - Custom grid layouts for feature showcases (responsive 2x3 to 1x6)

- **States**: 
  - Buttons: Rest (solid primary), Hover (darkened + lifted), Active (pressed inset), Disabled (opacity 50%)
  - Navigation links: Rest (muted text), Hover (primary text), Active section (primary + underline indicator)
  - Feature cards: Rest (flat white), Hover (elevated shadow-lg + border accent), Focus (ring-2 ring-accent)
  - Form inputs: Rest (border-input), Focus (border-primary + ring), Error (border-destructive + error text)

- **Icon Selection**: 
  - `RocketLaunch` for AI-driven efficiency
  - `ChartBar` for analytics/insights
  - `ShieldCheck` for security/compliance
  - `ArrowsClockwise` for seamless continuity
  - `Cloud` for cloud-ready access
  - `Lock` for privacy controls
  - `Link` for profile sharing
  - `Eye` for visibility controls
  - `List` for hamburger menu (mobile)
  - `X` for close actions
  - Social: `LinkedinLogo`, `TwitterLogo`, `YoutubeLogo`

- **Spacing**: 
  - Section padding: `py-20 md:py-32` (80px / 128px vertical)
  - Container max-width: `max-w-7xl mx-auto px-6 lg:px-8`
  - Card gap spacing: `gap-6 md:gap-8`
  - Inline element spacing: `space-x-4` for button groups
  - Vertical rhythm: `space-y-4` for content stacks

- **Mobile**: 
  - Navigation collapses to hamburger menu with Sheet component at `<768px`
  - Hero text size reduces: 56px → 36px
  - Section padding reduces: py-32 → py-20 → py-12
  - Feature grid: 3 columns → 2 columns → 1 column (lg:grid-cols-3 md:grid-cols-2 grid-cols-1)
  - Footer columns stack vertically on mobile
  - CTA buttons stack vertically with full width on small screens
