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
