# FS 60P - Next.js 3D WebGL Automatic Watch Showcase

A full-code clone of the luxury interactive 3D WebGL watch showcase [thewatch.60fps.fr](https://thewatch.60fps.fr/) built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Three.js**.

---

## Key Features

- **Master 3D Watch Model (`watch-DXFPNOEl.glb`)**: High-polygon mechanical watch rendered with Three.js `WebGLRenderer` using `ACESFilmicToneMapping` and `SRGBColorSpace`.
- **Realistic Lighting & Reflections**: Loaded via `EXRLoader` (`envmap-kW4EmG7W.exr`) for photorealistic brushed and mirror-polished metal reflections.
- **Dynamic 4-Colorway Customizer**: Real-time material and color updates across both the 3D model and photography:
  - `01` - **Classic Steel** (316L Stainless steel, satin brushed)
  - `02` - **Titanium Dark** (Grade 5 micro-blasted titanium with anthracite DLC)
  - `03` - **Yellow Gold** (18K 3N alloy with champagne dial)
  - `04` - **Rose Gold** (5N architectural rose gold)
- **Interactive Exploded Assembly**: Smooth mechanical disassembly animation lerping gears, balance wheel, crystal, dial, hands, ruby bearings, and winding rotor along their explosion vectors. Includes interactive slider and full explode button.
- **Lenis Kinetic Smooth Scrolling**: Fluid timeline scroll synchronizing camera and movement layer offsets.
- **Responsive Editorial UI**: Luxury typography using original Nekst and Inter font families, technical horology ledger, and 5-angle dynamic photo gallery.

---

## Getting Started

### Development Server

Run the development server with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build and start the optimized production server:

```bash
npm run build
npm start
```

---

## Project Structure

```
.
├── public/
│   ├── favicon.png                  # Site favicon
│   ├── share-image.webp             # Social OpenGraph image
│   └── assets/
│       ├── watch-DXFPNOEl.glb       # 9.0 MB Three.js master 3D model
│       ├── envmap-kW4EmG7W.exr      # High-dynamic-range EXR lighting map
│       ├── default-Bo472-CV.json    # PBR physical material configuration
│       ├── fonts/                   # Nekst and Inter font families (woff2, ttf)
│       └── the-watch/img/           # 20 variant photography renders (first..fourth)
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout with metadata and WatchProvider
│   │   ├── page.tsx                 # Main showcase page integrating canvas and UI
│   │   └── globals.css              # Custom font declarations & styling
│   ├── context/
│   │   └── WatchContext.tsx         # State management for colorways & exploded view
│   ├── components/
│   │   ├── canvas/
│   │   │   └── WatchCanvas.tsx      # Client Three.js WebGL rendering engine
│   │   ├── ui/
│   │   │   ├── Loader.tsx           # Authentic SVG circular loader matching 60fps
│   │   │   └── Navbar.tsx           # Minimal luxury header with exploded toggle
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Hero with interactive 4-colorway pills
│   │   │   ├── StorySection.tsx     # Editorial design narrative and specs
│   │   │   ├── ExplodedSection.tsx  # Movement disassembly slider & parts guide
│   │   │   ├── GallerySection.tsx   # 5-angle product photography gallery
│   │   │   ├── SpecsSection.tsx     # Technical specifications ledger
│   │   │   └── Footer.tsx           # Credits and smooth scroll to top
│   │   └── SmoothScroll.tsx         # Lenis kinetic scrolling controller
├── tailwind.config.ts               # Custom design tokens & typography
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Dependencies & build scripts
```
