# Design Guidelines: Real Estate Website

## Design Approach

**Selected Approach:** Reference-Based (Airbnb + Zillow-inspired)

Real estate websites are inherently visual and experience-driven. We'll draw inspiration from Airbnb's clean card-based layouts and generous whitespace, combined with Zillow's data-rich property displays and professional trust signals. The design prioritizes visual storytelling through property imagery while maintaining clear information hierarchy.

**Core Principles:**
- Visual-first: Let property images dominate the experience
- Trust & credibility through professional polish
- Efficient browsing with clear filtering and navigation
- Seamless RTL support that feels native, not adapted

## Color Palette

**Light Mode:**
- Primary: 220 80% 25% (Deep professional blue - headers, CTAs, links)
- Primary Hover: 220 80% 20%
- Surface: 0 0% 100% (White backgrounds)
- Surface Secondary: 220 15% 97% (Subtle card backgrounds)
- Text Primary: 220 20% 15%
- Text Secondary: 220 10% 45%
- Border: 220 15% 88%
- Success (For Sale): 142 76% 36%
- Accent (For Rent): 262 83% 58%

**Dark Mode:**
- Primary: 220 80% 55%
- Primary Hover: 220 80% 60%
- Surface: 220 20% 10%
- Surface Secondary: 220 15% 14%
- Text Primary: 220 15% 95%
- Text Secondary: 220 10% 65%
- Border: 220 15% 20%

## Typography

**Font Families:**
- Headings: 'Inter', sans-serif (weights: 600, 700, 800)
- Body: 'Inter', sans-serif (weights: 400, 500, 600)
- Numbers/Prices: 'Inter', sans-serif (weight: 700)

**Scale:**
- Hero Heading: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headings: text-3xl md:text-4xl font-bold
- Card Titles: text-xl font-semibold
- Property Prices: text-2xl md:text-3xl font-bold
- Body Text: text-base leading-relaxed
- Labels/Meta: text-sm text-secondary

## Layout System

**Spacing Primitives:** Use Tailwind units 2, 4, 6, 8, 12, 16, 20, 24

**Container Strategy:**
- Max-width: max-w-7xl mx-auto
- Horizontal padding: px-4 md:px-6 lg:px-8
- Section vertical spacing: py-16 md:py-20 lg:py-24

**Grid Systems:**
- Property Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Feature Sections: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
- Details Layout: grid-cols-1 lg:grid-cols-3 (2 cols content, 1 col sidebar)

## Component Library

### Navbar
- Sticky top navigation (sticky top-0 z-50)
- Logo on start, navigation center, language switcher on end
- Transparent on hero with blur backdrop, solid white/dark on scroll
- Hamburger menu for mobile (full-screen overlay with slide-in animation)
- Navigation links: font-medium with subtle underline on hover

### PropertyCard
- Aspect ratio 4:3 for property images
- Rounded corners: rounded-xl
- Shadow: hover:shadow-2xl transition
- Badge positioning: Absolute top-4 start-4
- Price prominent: text-2xl font-bold mb-2
- Stats row: Icons + text in flex layout with gap-4
- Border on hover: ring-2 ring-primary/20

### Search Form (Hero)
- Multi-field inline form on desktop, stacked on mobile
- Input fields with icons (location pin, home, currency)
- Dropdown filters with custom styling
- Primary CTA button: Large, rounded-lg, shadow-lg

### Filter Sidebar
- Sticky positioning (sticky top-24)
- Collapsible sections with chevron indicators
- Range sliders for price with thumb styling
- Checkbox groups for amenities
- Clear filters button at bottom

### Property Gallery
- Main image: aspect-video or aspect-[16/10]
- Thumbnail grid: 4-5 thumbnails below, gap-2
- Modal lightbox on click (full-screen overlay)
- Navigation arrows on hover

### Contact Form (Agent Card)
- Card with agent photo, name, rating
- Form fields: Name, Email, Phone, Message
- Submit button: Full width, bold
- Contact methods: Phone and email icons with links

### Footer
- Three-column layout on desktop, stacked on mobile
- Columns: Quick Links, Contact Info, Social & Newsletter
- Social icons: Circular with hover scale effect
- Copyright row at bottom with border-top

## Images

**Hero Section:**
- Full-width background image (min-h-[600px] lg:min-h-[700px])
- Overlay: Dark gradient from transparent to black/30 for text readability
- Image: Modern luxury property exterior, well-lit, professional photography
- Position: Background-center background-cover

**Property Cards:**
- High-quality property photos (exterior or interior highlight)
- Consistent aspect ratio across all cards
- Lazy loading for performance

**Property Details Page:**
- Hero gallery: 5-8 professional property photos
- Mix of exterior, interior (living room, kitchen, bedrooms), and amenities
- High resolution, professionally lit

**About/Team Section (if included):**
- Professional headshots of agents
- Office or team photos
- Circular cropping for agent photos

## RTL Considerations

**Layout Adaptations:**
- All spacing: Use logical properties (ms-, me-, ps-, pe-, start-, end-)
- Text alignment: text-start instead of text-left
- Flex direction: Auto-reverse with [dir="rtl"]
- Icons: Mirror directional icons (arrows, chevrons) in RTL
- Forms: Labels and inputs align to start
- Number formatting: Keep Western numerals even in Arabic

## Page-Specific Guidelines

### HomePage
- Hero: Full-width with search form overlay (centered, max-w-4xl)
- Featured Properties: 8-section layout with heading, grid of 6 cards
- Stats Section: 4-column grid (Properties Listed, Happy Clients, Cities, Years Experience)
- How It Works: 3-step process with icons and descriptions
- CTA Section: Full-width with background image, centered content

### ListingsPage
- Two-column: Sidebar (1/4 width), Grid (3/4 width)
- Breadcrumb navigation at top
- Results count and sort dropdown above grid
- Pagination: Numbers with previous/next, centered below grid
- Load More button as alternative to pagination

### PropertyDetailsPage
- Image gallery at top (60% viewport height)
- Two-column below: Main content (66%), Sidebar (33%)
- Amenities: Grid with checkmark icons
- Map section: Embedded map with location pin
- Similar properties: Horizontal scroll or 3-column grid

## Interactions & States

**Minimal Animations:**
- Card hover: Transform scale(1.02) + shadow elevation
- Button hover: Slight brightness increase
- Link underlines: Slide-in from start
- Dropdown menus: Fade + slide down (150ms)
- Mobile menu: Slide from end (250ms)
- No complex scroll animations or parallax effects

**Loading States:**
- Skeleton screens for property cards (pulse animation)
- Spinner for form submissions
- Progressive image loading with blur-up

This design creates a premium, trustworthy real estate platform that balances visual appeal with functional efficiency, ensuring seamless experiences across all three languages with proper RTL support for Arabic users.