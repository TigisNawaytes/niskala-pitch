# Design System: Niskala Vendor Pitch

## 1. Visual Identity

### Brand Colors (from Niskala UI)
| Token | Hex | Usage |
|---|---|---|
| `niskala-brand` | `#5170ff` | Primary accent, RO slides, CTA buttons, active nav |
| `niskala-ct` | `#14b8a6` | Cooling Tower slides, CT badges |
| `niskala-violet` | `#a78bfa` | NiskalaPure slides, literature accents, science |
| `niskala-safe` | `#10b981` | SAFE status, checkmarks, green badges |
| `niskala-warning` | `#f59e0b` | CAUTION, warning badges, amber indicators |
| `niskala-danger` | `#ef4444` | RISK status, red badges, danger indicators |

### Surface Colors
| Token | Value | Usage |
|---|---|---|
| Background | `#f8f8fa` | Slide background (light mode only) |
| Card | `#ffffff` | Card backgrounds |
| Border | `#e4e4e7` | Card borders, separators |
| Text primary | `#0a0a0a` | Body text, headings |
| Text muted | `#71717a` | Descriptions, footnotes, secondary text |

### Gradients
- **Brand gradient (stat-gradient):** `linear-gradient(135deg, #5170ff 0%, #a78bfa 100%)` — untuk headline aksen, stat numbers, logo text
- **Progress bar:** `linear-gradient(90deg, #5170ff, #a78bfa)` — top progress indicator

## 2. Typography
| Role | Font | Weight | Size |
|---|---|---|---|
| Slide title | Inter | 900 (black) | `clamp(2.2rem, 5vw, 3.5rem)` |
| Section label | Inter | 700 | `0.7rem`, tracking `0.2em`, uppercase |
| Body text | Inter | 400 | `0.7rem–1rem` |
| Code/formulas | JetBrains Mono | 400-700 | `0.65rem–0.85rem` |
| Stat numbers | Inter | 900 | `clamp(2.5rem, 5vw, 3.5rem)` |

### Font Loading
- Inter + JetBrains Mono: Google Fonts CDN, loaded in `index.html`

## 3. Component Patterns

### Slide Layout
```jsx
export default function SlideXX() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative">
      <div className="relative z-10 max-w-5xl w-full">
        {/* Section label, title, content */}
      </div>
    </div>
  );
}
```
- **Width:** max-w-5xl content area, centered
- **Padding:** responsive px-8 (mobile) → sm:px-12
- **Background:** default `#f8f8fa`, module-specific via className
- **Decorative blobs:** optional, positioned absolute with low-opacity brand colors

### FragmentReveal
Wraps content with fade-in + slide-up animation on slide enter:
```jsx
<FragmentReveal delay={0.1}>   // seconds, staggered
  <p>Content appears with animation</p>
</FragmentReveal>
```
- Uses Framer Motion `whileInView` with `viewport: { once: true }`
- Each slide remounts fresh on AnimatePresence, so all fragments re-trigger

### CardPitch
White card with border, optional left accent:
```jsx
<CardPitch accentColor="#5170ff" className="text-center">
  Card content
</CardPitch>
```
- Hover: lift 2px + blue-tinted shadow
- `accentColor` adds 3px left border

### SectionLabel
Small uppercase label above title:
```jsx
<SectionLabel color="#14b8a6">NiskalaCT</SectionLabel>
```
- Default color: `#5170ff`

### RaceBar
Animated horizontal progress bar:
```jsx
<RaceBar label="T_res" value="6.5" unit="hr" target={52} color="#f59e0b" inView={true} />
```
- `target`: 0-100 number for bar width percentage
- `inView`: trigger animation (pass `true` since slides remount)

## 4. Navigation System

### Slide Transitions
- Framer Motion `AnimatePresence` with horizontal slide variants
- Enter: slide from right (300px), Exit: slide to left (-300px)
- Direction tracked in Zustand store for correct enter/exit direction

### Controls
| Input | Action |
|---|---|
| `←` / `→` keyboard | Previous / next slide |
| `Escape` | Return to cover screen |
| Arrow buttons (bottom) | Previous / next slide |
| Nav dots (bottom) | Jump to specific slide |
| Home button (top-right) | Return to cover |

### Zustand Store (`useSlideStore`)
```js
coverVisible: boolean    // cover gate state
currentSlide: number     // 0-20
direction: number        // 1 (forward) or -1 (backward)
openCover() / closeCover()
goToSlide(index) / nextSlide() / prevSlide()
```

## 5. ECharts Integration
- Import: `import ReactECharts from 'echarts-for-react'`
- Container: `<div className="chart-box">` wrapper with 320px height
- Dummy data: hardcoded arrays, no API calls
- SVG renderer for crisp output: `opts={{ renderer: 'svg' }}`
- Grid: `{ left: 45, right: 20, top: 20, bottom: 30 }`
- Consistent text sizing: `axisLabel fontSize: 9`, `nameTextStyle fontSize: 10`, color `#71717a`

## 6. Dark Mode
Tidak diimplementasikan. Presentasi ini **light mode only** (`#f8f8fa` background). Slide 20 (About) menggunakan subtle brand-tinted background.
