# Development Log: Niskala Vendor Pitch

> **Project ini adalah web presentation untuk pitching Niskala Platform ke vendor chemical.**
> Dibuat dari identitas visual dan konten teknis project utama Niskala.

---

## Parent Project

| | |
|---|---|
| **Project utama** | Niskala Platform — Physics-Based Water Quality Simulation |
| **Lokasi** | `~/Niskala/` (`/home/ssety/Niskala/` atau `/home/clevraven90/Niskala/` — cek mana yang ada) |
| **Branch aktif** | `feat/vendor-si-limits` (commit `6cdd0dc`, 2026-06-02) |
| **Dokumentasi utama** | `~/Niskala/.agents/`, `~/Niskala/docs/` |
| **Literatur** | `~/Niskala/knowledges/` (4 referensi primer) |

---

## 2026-06-03 — Initial Build (Session 1)

### Created
- **Project scaffold:** React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion + ECharts + Zustand
- **Design system:** CSS variables dan Tailwind tokens disinkronkan dari Niskala UI (`~/Niskala/frontend/src/index.css`)
- **21 slide components** dalam 4 act narrative arc:
  - **Act 1 — The Science (8 slides):** Ions to Risk, PHREEQC credentials, PHREEQC engine, RO mass balance (ROSSpy), CT mass balance (COC), scaling mass, kinetics, literature foundation
  - **Act 2 — The Application (5 slides):** One engine two systems, RO deep dive, CT deep dive, kinetic race, NiskalaPure
  - **Act 3 — The Strategy (4 slides):** Chemical database, 4-strategy optimization, dose-response model, smart substitution
  - **Act 4 — The Depth (4 slides):** DTPMP calibration evidence, validation roadmap, about the builder, closing
- **5 reusable components:** `FragmentReveal`, `SectionLabel`, `CardPitch`, `RaceBar`, `Cover`
- **Navigation system:** Framer Motion AnimatePresence slide transitions, keyboard nav, nav dots, progress bar
- **4 ECharts charts** dengan dummy data: COC scan, dose-response curve, MED curve, DTPMP calibration scatter
- **Agent knowledge base** (`.agents/`): `boot.md`, `context.md`, `design.md`, `project_map.md`, `rules.md`, `changelog.md`

### Design Decisions
- **Light mode only** (`#f8f8fa` background) — dipilih untuk kejelasan saat presentasi proyektor
- **No Act 6 (Partnership)** — dihapus per keputusan user, presentasi fokus pada produk bukan negosiasi bisnis
- **Dummy chart data** — semua grafik menggunakan data ilustrasi, bukan kalkulasi real-time
- **Single-page, no routing** — presentasi linear, tidak ada navigasi multi-halaman
- **FontAwesome CDN** untuk icons — lebih ringan dari lucide-react untuk use case presentasi
- **No KaTeX** di versi React — formula kimia menggunakan `<span className="font-mono">` styling

### Technical Notes
- **Build:** 0 errors, 1.4MB bundle (ECharts + Framer Motion)
- **Dev server:** `npm run dev` dari `/home/ssety/WebDev/niskala-pitch/` (atau `/home/clevraven90/WebDev/niskala-pitch/` — cek mana yang ada)
- **Production build:** `npm run build` → `dist/`, bisa di-deploy ke static hosting
- **Dependencies:** React 19, Vite 8, echarts-for-react 3, framer-motion 12, zustand 5, tailwindcss 4
- Slide transitions menggunakan horizontal slide (300px enter/exit) dengan spring physics
- Fragment animations via `whileInView` — otomatis trigger saat slide aktif

### Content Sources
Semua konten teknis dan sains diambil dari project utama Niskala:
- **Literature:** Dai et al. (2021), Ahmed et al. (2024), Amjad (2022), Appelo & Postma
- **Engine specs:** PHREEQC + Pitzer/Davies, 7 mineral, N-CNT kinetics, Langmuir model
- **Calibration data:** DTPMP K=5.0, α=0.040 dari Dai Table 2 (grid search 8 data points)
- **RO dose-response:** 70+ data points, SI_eff = SI_membrane − ΔSI_max × (1 − e^−k·dose) × 0.8
- **Module details:** RO 6-element×12-cell, CT well-mixed COC, Pure dose-response sweep

## 2026-06-04 — Slide Animations & Visual Overhaul (Session 2)

### Added
+ **Slide04 — KineticCanvas:** 4-phase calcite scaling particle simulation (Canvas 2D)
  - Partikel: Ca²⁺ (#5170ff), CO₃²⁻ (#14b8a6), CaCO₃ kerak (#94a3b8)
  - Fase: Undersaturated → Evaporation → Supersaturated → Precipitation (~18s)
  - Kontrol Play/Reset, phase indicator, timer, legend
+ **Slide06ROTransport — ROTransportCanvas:** 5-scene 1D mass transport visualization
  - Pipa horizontal 6 cell dengan membran bawah (dashed line)
  - Partikel air permeate turun, ion terpantul, kerak terbentuk di Cell 2–3
  - Scene 5: grafik prediksi ROSSpy (peak di Cell 2–3, turun ke 0)
  - Navigasi Prev/Next + 5 dot indicator
+ **Slide06MassBalanceRO — Vessel diagram:** SVG pressure vessel 6 membrane × 12 cells
  - Degradasi warna mulai Membrane 2 (M1 hijau → M6 merah tua)
  - Feed (biru), Reject (merah), Permeate (ungu gradient) pipes
  - 3-card bawah: Key Cells (3 membrane), Core Equations, ROSSpy Reference

### Modified
+ **Slide04:** Beaker animation original dihapus, diganti KineticCanvas
+ **Slide06MassBalanceRO:** Heatmap grid dihapus, diperpadat vertikal (padding/margin dikurangi)
  - Background classes: Semua slide menggunakan `bg-hero-pattern` + `bg-radial-brand` + `bg-radial-fade`
+ **Slide09OneEngine:** Redesain total — pipeline diagram 6 step + 4+4 mode cards
  - Pipeline: Water Quality → CBE Balance → Mass Balance → PHREEQC → Condition → Optimization
  - NiskalaRO 4 modes: pH Adjustment, Antiscalant, Hybrid, Recovery
  - NiskalaCT 4 modes: pH Adjustment, Antiscalant, Hybrid, COC Reduction

### Technical
+ New components: `KineticCanvas.jsx`, `ROTransportCanvas.jsx`
+ New slide: `Slide06ROTransport.jsx`
+ Build: 0 errors, ~1.5MB bundle
+ Git push: `f878ddc` on main
