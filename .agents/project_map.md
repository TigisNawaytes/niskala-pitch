# Project Map: Niskala Vendor Pitch

## Folder Structure
```
/home/ssety/WebDev/niskala-pitch/  (atau /home/clevraven90/WebDev/niskala-pitch/)
├── .agents/               # Agent context (this folder)
│   ├── context.md         # Project purpose, narrative structure
│   ├── design.md          # Visual identity, components, navigation
│   ├── project_map.md     # This file — where everything lives
│   └── rules.md           # Coding conventions
├── index.html             # Entry point — Google Fonts + FontAwesome CDN
├── package.json           # Dependencies (React 19, Vite 8, ECharts, Framer Motion, Zustand)
├── vite.config.js         # Vite + React + Tailwind v4 plugins
├── dist/                  # Production build output
└── src/
    ├── main.jsx           # React root mount
    ├── App.jsx            # App shell: Cover + slide routing + navigation controls
    ├── index.css          # Tailwind v4 @theme, CSS variables, utility classes
    │
    ├── store/
    │   └── useSlideStore.js   # Zustand: cover state, currentSlide, navigation actions
    │
    ├── components/
    │   ├── index.js           # Barrel export
    │   ├── Cover.jsx          # Full-screen cover gate with logo + CTA
    │   ├── FragmentReveal.jsx # Fade-in+slide-up animation wrapper (Framer Motion)
    │   ├── SectionLabel.jsx   # Uppercase section label
    │   ├── CardPitch.jsx      # White card with optional left accent border
    │   └── RaceBar.jsx        # Animated horizontal progress bar
    │
    └── slides/                # 21 slide components (one per slide)
        ├── Slide04IonsToRisk.jsx       # ACT 1: SI pipeline
        ├── Slide05WhyPhreeqc.jsx       # ACT 1: PHREEQC engine credentials
        ├── Slide05PhreeqcEngine.jsx    # ACT 1: PHREEQC thermodynamic core
        ├── Slide06MassBalanceRO.jsx    # ACT 1: RO spatial transport (ROSSpy)
        ├── Slide07MassBalanceCT.jsx    # ACT 1: CT well-mixed mass balance
        ├── Slide06ScalingMass.jsx      # ACT 1: Scaling mass & surface loading
        ├── Slide07Kinetics.jsx         # ACT 1: t_ind vs T_res race
        ├── Slide08Literature.jsx       # ACT 1: 4 literature cards + sub-pages
        ├── Slide09OneEngine.jsx        # ACT 2: RO + CT overview
        ├── Slide10NiskalaRO.jsx        # ACT 2: RO deep dive + heatmap
        ├── Slide11NiskalaCT.jsx        # ACT 2: CT + COC chart (ECharts)
        ├── Slide12CTKineticRace.jsx    # ACT 2: CT before/after kinetic race
        ├── Slide13NiskalaPure.jsx      # ACT 2: Pure dose-response chart (ECharts)
        ├── Slide14ChemicalDB.jsx       # ACT 3: Inhibitor database tables
        ├── Slide15AutoOptimization.jsx # ACT 3: 4-strategy cards
        ├── Slide16DoseResponse.jsx     # ACT 3: Dose-response chart (ECharts)
        ├── Slide17SmartSubstitution.jsx# ACT 3: Smart substitution example
        ├── Slide18DTPMPCalib.jsx       # ACT 4: Calibration scatter chart (ECharts)
        ├── Slide19Validation.jsx       # ACT 4: Validation roadmap timeline
        ├── Slide20About.jsx            # ACT 4: Builder profile + quote
        └── Slide21Closing.jsx          # ACT 4: Final logo + tagline + module cards
```

## Key Files to Know

### `App.jsx` (container + navigation)
- Imports all 18 slides into `SLIDES` array
- Renders `Cover` component when `coverVisible=true`
- Uses `AnimatePresence` + Framer Motion for slide transitions
- Keyboard event listener for ← → Escape
- Renders nav dots, arrow buttons, progress bar when cover dismissed
- `slideVariants`: enter (slide from right), center, exit (slide to left)
- `currentSlide`: 0-17, drives which slide component renders
- `direction`: 1 or -1, used by Framer Motion for correct animation direction

### `index.css` (design tokens)
- Tailwind v4 `@theme` block: font families, brand color tokens (`niskala-*`)
- CSS variables under `:root`: background, foreground, card, muted, border, ring
- Utility classes: `.card-pitch`, `.badge-safe/warning/danger`, `.stat-gradient`, `.chart-box`
- Animations: `@keyframes logoGlow`, `coverPulse`, `raceBar`
- Print styles: `@media print` hides navigation, resets colors

## Adding a New Slide
1. Create `src/slides/SlideXXName.jsx` following the pattern
2. Import it in `src/App.jsx`
3. Add it to the `SLIDES` array at the desired position
4. The `totalSlides` in store auto-derives from array length — no store change needed

## Removing/Reordering Slides
1. Remove/change the import in `App.jsx`
2. Update the `SLIDES` array order
3. Delete the slide file if removing permanently
