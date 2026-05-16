# SourceHonig — Cinematic Logistics UI Design Spec
**Date:** 2026-05-16  
**Project:** Honey Export / SourceHonig Next.js site  
**Approach:** Hybrid DOM + Isolated R3F Scenes (Approach B)

---

## 1. Goals

Transform the existing Honey Export marketing site into an Awwwards-level cinematic logistics experience. Every section should feel alive. Motion is the primary storytelling medium. Business content (products, solutions, contact) is preserved; the entire visual and interaction layer is replaced.

---

## 2. Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#080808` | Page background |
| `surface` | `#111111` | Card backgrounds |
| `border` | `#1f1f1f` | Metallic edges |
| `orange` | `#FF5500` | Primary neon accent |
| `orange-glow` | `#FF5500/20` | Glow backgrounds |
| `cyan` | `#00F0FF` | Secondary highlight |
| `text` | `#E0E0E0` | Body text |
| `text-dim` | `#666666` | Secondary text |

### Typography
- Font: Lora (existing) — kept for headings
- Monospace: system-ui monospace stack for terminal/HUD elements
- All caps + wide letter-spacing for section labels

### Motion Principles
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo out) for entrances
- Duration: 0.8s standard, 1.2s for hero elements
- Stagger: 0.1s between sibling elements
- Scroll scrub: `scrub: 1.5` (smooth, not instant)
- Lenis duration: `1.2`, `easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`

---

## 3. Dependencies

New packages to install:
```
gsap                     # scroll animation engine
@gsap/react              # React hooks for GSAP
lenis                    # smooth inertia scroll
@react-three/fiber       # React renderer for Three.js
@react-three/drei        # R3F helpers (OrbitControls, useGLTF, etc.)
three                    # Three.js core
@types/three             # TypeScript types
```

Existing packages retained: `motion`, `shadcn/ui`, `tailwindcss`, `lucide-react`.

---

## 4. Folder Structure

```
src/
  providers/
    LenisProvider.tsx         # Lenis init + GSAP ticker integration
  components/
    cursor/
      CustomCursor.tsx        # Magnetic dot+ring cursor with glow trail
    loading/
      LoadingScreen.tsx       # Industrial scanner loading screen
    hero/
      HeroSection.tsx         # DOM wrapper: text reveal + buttons
      ContainerScene.tsx      # R3F Canvas (dynamic import, ssr: false)
      ShippingContainer.tsx   # Procedural container geometry + door refs
    ui/
      ContainerCard.tsx       # Reusable metallic 3D-tilt card
      GlowButton.tsx          # Orange neon CTA button
      MarqueeTicker.tsx       # Infinite scrolling marquee
      SectionLabel.tsx        # All-caps label with neon dot
    sections/
      SolutionsSection.tsx    # Container card grid (Solutions content)
      HorizontalScroll.tsx    # GSAP pinned conveyor belt
      StatsSection.tsx        # Animated counters on dark bg
      TerminalSection.tsx     # SVG route lines + glassmorphism panels
      AboutSection.tsx        # Two-col with parallax image
      ContactSection.tsx      # Form + contact info
    footer/
      Footer.tsx              # Marquee + mini container social links
  app/
    layout.tsx                # Wrap with LenisProvider, LoadingScreen
    page.tsx                  # Assemble all sections
    globals.css               # Dark theme tokens, carousel utils
```

All existing flat `components/*.tsx` files are replaced. `ui/` shadcn primitives are kept.

---

## 5. Component Specifications

### 5.1 LenisProvider
```
- Initializes Lenis with duration:1.2, expo easing
- Hooks lenis.on('scroll', ScrollTrigger.update)
- Adds lenis.raf to gsap.ticker
- Sets gsap.ticker.lagSmoothing(0)
- Registers ScrollTrigger plugin once at module level
- Destroys on unmount
```

### 5.2 LoadingScreen
```
State: isLoaded (false → true after 2.5s or assets ready)
Layout:
  - Full viewport, bg #080808
  - Center: container silhouette SVG (animated slide-in)
  - Bottom: progress bar (#FF5500 glow fill, left→right over 2s)
  - HUD text: "INITIALIZING CARGO SYSTEM..." (blinking cursor)
  - Top-right: version/system readouts (decorative)
Exit: GSAP clip-path wipe upward over 0.6s, then unmount
Trigger: fires once on first render
```

### 5.3 CustomCursor
```
Elements:
  - dot: 10px circle, bg #FF5500, position: fixed
  - ring: 40px circle, border 1px #FF5500, position: fixed
  - trail: 5 ghost dots, fading opacity 0.3→0.05

Behavior:
  - dot follows mouse instantly (no lag)
  - ring lerps to mouse at 0.12 factor per frame (rAF loop)
  - trail positions update on each rAF, shift array
  - On [data-cursor="block"]: ring morphs to rounded rect (60px×20px)
  - On [data-cursor="text"]: ring stretches vertically (8px×40px)
  - On click: brief scale pulse (scale 0.8 → 1)

Mobile: hidden when (pointer: coarse) media matches
```

### 5.4 Hero Section

**DOM Layer (z-index: 10)**
```
- Full viewport height, bg transparent (sits over Canvas)
- Content centered, max-width 900px
- Elements (all start opacity:0, y:40):
    1. SectionLabel: "LOGISTICS OPERATING SYSTEM"
    2. H1: "THE POWER OF" (line 1)
       "COLLABORATION" (line 2, orange)
    3. Subtitle paragraph
    4. Two GlowButtons: "Explore Solutions" + "Get In Touch"
- GSAP timeline on mount: stagger reveal, delay 0.8s (after container arrives)
- Mouse parallax: on mousemove, translate text layer ±8px opposite to container
```

**R3F Canvas Layer (z-index: 0, absolute inset)**
```
ContainerScene:
  - Camera: PerspectiveCamera fov:50, position [0, 1.5, 8]
  - Lighting:
      AmbientLight: intensity 0.3
      SpotLight: position [0, 10, 5], color #FF5500, intensity 2, angle 0.4
      PointLight (interior): position [0, 0, 0.5], color #00F0FF, intensity 0 → 4 on scroll
  - Fog: FogExp2(#080808, 0.04)

ShippingContainer geometry:
  - Body: BoxGeometry(8, 2.6, 2.6), MeshStandardMaterial(color:#1a1a1a, metalness:0.9, roughness:0.3)
  - 18 horizontal ridge strips: BoxGeometry(8.01, 0.04, 2.62), color:#222222 — corrugation effect
  - 4 corner posts: BoxGeometry(0.08, 2.62, 0.08), color:#333333
  - Left door group: pivoted at x:-2, contains BoxGeometry(3.9, 2.5, 0.06)
  - Right door group: pivoted at x:+2, contains BoxGeometry(3.9, 2.5, 0.06)
  - Door material: metalness:0.95, roughness:0.2, color:#0f0f0f
  - Interior plane: PlaneGeometry(3.8, 2.4) at z:+1.3 inside, emissive #00F0FF intensity 0→1

Entry animation (GSAP, on mount):
  - Container starts x:14, rotation.y: -0.3
  - Animates to x:0, rotation.y:0 over 1.4s, expo out

ScrollTrigger (scrub:1.5, start:"top top", end:"+=400"):
  - leftDoor.rotation.y: 0 → -2.27 (130°)
  - rightDoor.rotation.y: 0 → +2.27
  - interior PointLight intensity: 0 → 4
  - container.position.z: 0 → -1 (recedes slightly)

Mouse parallax:
  - On document mousemove: container.rotation.x/y ±0.05rad
```

### 5.5 ContainerCard
```
Props: title, description, icon, stat?, href?
Styling:
  - bg: #111, border: 1px solid #1f1f1f
  - border-radius: 4px (industrial, not rounded)
  - padding: 32px
  - Top edge: 2px orange neon line (full width)
  - data-cursor="block" on wrapper

Interaction:
  - onMouseMove: compute mouse position relative to card center
  - Apply rotateX/Y CSS transform (max ±8deg) via style prop
  - Perspective: 1000px on wrapper
  - Hover: box-shadow 0 0 30px #FF550030, border-color #FF550060
  - Transition out: 400ms ease

Motion: whileInView opacity 0→1, y 30→0, once:true
```

### 5.6 HorizontalScroll (Solutions Conveyor Belt — separate from 5.5 grid above)
```
Layout:
  - Outer section: height: "300vh" (provides scroll room for GSAP pin)
  - Inner sticky wrapper: height:100vh, overflow:hidden
  - Track: display:flex, width: (numCards * cardWidth + gaps)

GSAP ScrollTrigger:
  - trigger: outer section
  - pin: inner sticky wrapper
  - scrub: 1.5
  - x: 0 → -(track.scrollWidth - window.innerWidth)
  - start: "top top", end: "bottom bottom"

Cards: 6 ContainerCards with Solutions content
Section label "SOLUTIONS" pinned top-left during horizontal scroll
Conveyor belt decorative: dashed orange line running beneath cards
```

### 5.7 StatsSection
```
Layout: full-width dark section, 4-col grid
bg: radial gradient #FF5500/5 center on #080808
Numbers: animate 0→target via GSAP when useInView triggers
Data: 8+ Group Companies, 5000+ Products, 50+ Clients, 15+ Years
Orange number color, dim label below
Section label: "BY THE NUMBERS"
```

### 5.8 TerminalSection
```
Full-width section, bg #080808
Left panel (60%): SVG "route map"
  - Static world outline SVG
  - Animated path (stroke-dashoffset) India→USA route line, cyan color
  - 3 glowing node dots (India, Dubai, USA), pulsing scale animation
  - Floating label cards at each node

Right panel (40%): glassmorphism panels
  - bg: rgba(255,255,255,0.03), border: 1px solid #1f1f1f, blur:10px
  - 4 stat panels: Active Shipments, On-Time Rate, Countries, Partners
  - Each panel has blinking status indicator
  - Stagger reveal on scroll

Section label: "GLOBAL NETWORK"
```

### 5.9 Footer
```
Top: MarqueeTicker — "HONEY EXPORT • PRECISION MANUFACTURING • GLOBAL SOURCING •"
  repeating, CSS animation marquee, speed: 30s, pauses on hover

Main grid: 4 columns (brand, solutions, products, company)
bg: #050505

Social links: each inside a mini ContainerCard (64px square)
  - 3D tilt on hover, orange glow

Bottom bar:
  - Left: "© 2026 Honey Export"
  - Right: blinking orange dot + "SYSTEMS OPERATIONAL"
  - Center: thin orange line separator

No standard footer links — all inside ContainerCards
```

---

## 6. Page Assembly Order

```
<LenisProvider>
  <LoadingScreen />        ← unmounts after 2.5s
  <CustomCursor />         ← portal to document.body
  <HeroSection />          ← full viewport (ContainerScene inside)
  <SolutionsSection />     ← ContainerCard grid (non-horizontal)
  <HorizontalScroll />     ← GSAP pinned conveyor belt
  <StatsSection />
  <TerminalSection />
  <AboutSection />
  <ContactSection />
  <Footer />
</LenisProvider>
```

Header nav: dark glassmorphism bar, logo left, nav links right, fixed top. Appears after LoadingScreen exits (0.3s delay). Orange underline on active link.

---

## 7. Performance Constraints

- R3F Canvas renders only in hero viewport (IntersectionObserver pause when off-screen)
- GSAP ScrollTrigger: `invalidateOnRefresh: true` on all triggers
- `useReducedMotion()` check: if true, skip GSAP timelines, show static layout
- Images: `next/image` with priority on hero
- R3F: `frameloop="demand"` outside scroll interaction, `"always"` during scroll
- Mobile (<768px): ContainerScene replaced with CSS gradient placeholder

---

## 8. GLTF Swap Point

In `ShippingContainer.tsx`:
```tsx
const USE_GLTF = false // flip to true + add model path when .glb available
const GLTF_PATH = '/models/container.glb'
```
When `USE_GLTF = true`: load via `useGLTF(GLTF_PATH)`, attach same door refs to model's door bones/nodes, same GSAP ScrollTrigger drives rotation. No other changes needed.

---

## 9. Out of Scope

- Backend/API routes
- Authentication
- CMS integration
- Multi-language support
- Actual live tracking data (TerminalSection is decorative)
