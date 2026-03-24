# Portfolio Redesign — Modern Dark Theme with Purple Accents

Transform the current single-section hero page into a stunning, multi-section portfolio inspired by the **Figma Portfolio** and **Xtract Framer** templates. Both use dark backgrounds with purple/blue glows, glassmorphism cards, bento-grid layouts, and scroll-reveal animations.

## Design Direction

Key visual elements drawn from the inspiration sites:

| Element | Figma Portfolio | Xtract Template | Our Approach |
|---------|----------------|-----------------|--------------|
| **Background** | Deep navy/black | Black with purple radial glow | Black (#050510) with animated purple/blue orbs |
| **Accents** | Purple gradient borders | Purple buttons + glow effects | Purple-to-blue gradient system |
| **Cards** | Glassmorphism + gradient top borders | Bento grid with subtle borders | Glassmorphism cards with gradient border-top |
| **Typography** | Clean sans-serif, script logo | Inter, bold headings | Inter font family, large bold headings |
| **Animations** | Typewriter text, smooth entry | Scroll-reveal, pulsing glows | Framer Motion scroll-triggered + hover effects |
| **Layout** | Sections: Hero → Experience → CTA | Hero → Logos → Services Grid → Features | Hero → About → Skills Grid → Projects → Contact → Footer |

## Proposed Changes

### Dependencies

#### [MODIFY] [package.json](file:///c:/Users/HP/my-portfolio/package.json)
- Add `react-intersection-observer` for scroll-triggered animations

---

### Design System

#### [MODIFY] [globals.css](file:///c:/Users/HP/my-portfolio/app/globals.css)
- CSS custom properties for the full color palette and spacing
- Starfield/dot grid background using CSS radial gradient
- Glow/blob animations (multiple sizes and speeds)
- Glassmorphism utility classes
- Gradient text and border utilities
- Smooth scroll behavior

---

### Layout & Metadata

#### [MODIFY] [layout.tsx](file:///c:/Users/HP/my-portfolio/app/layout.tsx)
- Switch font to **Inter** from Google Fonts
- Update metadata (title: "David | AI Engineer", description)
- Add smooth scroll class to `<html>`

---

### Components

#### [NEW] [Navbar.tsx](file:///c:/Users/HP/my-portfolio/app/components/Navbar.tsx)
- Fixed top nav with glassmorphism backdrop-blur
- Logo/name on left, nav links on right
- Hide/show on scroll (with Framer Motion)
- Mobile hamburger menu
- Links: Home, About, Skills, Projects, Contact

#### [NEW] [Hero.tsx](file:///c:/Users/HP/my-portfolio/app/components/Hero.tsx)
- Full-viewport height section
- Large animated purple/blue radial glow orb behind text (Xtract style)
- Animated dot/star particles
- "System Online" badge pill
- Large bold heading: "Hi, I'm David." + gradient "AI Engineer."
- Subtitle paragraph
- Two CTA buttons: "View Projects" (solid purple) + "Contact Me" (ghost)
- Framer Motion entrance animations

#### [NEW] [About.tsx](file:///c:/Users/HP/my-portfolio/app/components/About.tsx)
- Scroll-reveal animated section
- Brief personal bio paragraph
- Stats row (e.g., "3+ Years Experience", "10+ Projects", "5+ Technologies")
- Smooth fade-in on scroll

#### [NEW] [Skills.tsx](file:///c:/Users/HP/my-portfolio/app/components/Skills.tsx)
- "My Skills" section heading with section badge pill
- **Bento grid layout** (inspired by Xtract) — varying card sizes
- Each card: icon + title + short description
- Glassmorphism card styling with subtle gradient top border
- Hover glow effect on cards
- Categories: AI/ML, Full-Stack, Data, DevOps, etc.

#### [NEW] [Projects.tsx](file:///c:/Users/HP/my-portfolio/app/components/Projects.tsx)
- "Featured Projects" section
- Project cards in a 2-column grid (Figma Portfolio style)
- Each card: gradient top border, project image, title, description, tech tags, "Learn More →" link
- Hover lift + glow animation
- Scroll-reveal entrance

#### [NEW] [Contact.tsx](file:///c:/Users/HP/my-portfolio/app/components/Contact.tsx)
- Full-width CTA section
- Large heading: "Let's Work Together"
- Subtitle text
- Email button + social links (GitHub, LinkedIn)
- Purple gradient bottom border accent

#### [NEW] [Footer.tsx](file:///c:/Users/HP/my-portfolio/app/components/Footer.tsx)
- Minimal footer with copyright + social icon links
- Top gradient border accent line

---

### Page Assembly

#### [MODIFY] [page.tsx](file:///c:/Users/HP/my-portfolio/app/page.tsx)
- Import and compose all section components
- Add animated background elements (floating orbs, dot grid)
- Wrap sections with proper spacing

---

## Verification Plan

### Automated
- Run `npm run build` to verify zero TypeScript/build errors

### Browser Testing
- Open `localhost:3000` in the browser and visually verify:
  - Dark theme with purple accents renders correctly
  - All 6 sections are visible and properly spaced
  - Scroll animations trigger on scroll
  - Navbar shows/hides on scroll
  - Hover effects work on cards and buttons
  - Responsive on mobile viewport
- Capture screenshots for the walkthrough
