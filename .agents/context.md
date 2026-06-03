# Project Context: Niskala Vendor Pitch

## 0. People
- **Creator:** Sigit Setyawan — Power Plant Chemist Engineer, 10+ tahun
- **Project:** Presentasi web interaktif untuk pitching Niskala Platform ke vendor chemical

## 1. What Is This?
Ini adalah **web-based slide presentation** (bukan aplikasi, bukan dashboard) yang dibuat untuk mempresentasikan Niskala Platform kepada vendor chemical yang tertarik memiliki software ini sebagai brand mereka (white-label).

Format: **21-slide horizontal presentation** dengan cover gate, navigasi keyboard/panah, progress bar, dan animasi slide transition.

## 2. Relationship to Main Niskala Project
Project ini **terpisah** dari repo utama `~/Niskala/`. Project ini:
- Tidak terhubung ke backend / API
- Tidak melakukan kalkulasi real-time
- Semua data chart adalah **dummy data** untuk ilustrasi
- Hanya menggunakan identitas visual Niskala (warna, font, logo)

## 3. Target Audience
- **Primer:** Technical engineer dan business development dari vendor chemical
- **Sekunder:** Manajemen vendor (slide partnership tidak disertakan — Act 6 dihapus per keputusan user)
- **Durasi target:** ~20 menit presentasi

## 4. Narrative Structure (5 Acts)
```
ACT 1 — THE PROBLEM (slides 1-3)
  Kenapa scaling mahal, blind dosing approach vs Niskala approach, filosofi open-engine

ACT 2 — THE SCIENCE (slides 4-8)
  SI fundamentals, PHREEQC engine, scaling mass, N-CNT kinetics, literature foundation

ACT 3 — THE APPLICATION (slides 9-13)
  RO + CT deep dive, kinetic race, NiskalaPure system-agnostic lab

ACT 4 — THE STRATEGY (slides 14-17)
  Chemical treatment database, 4-strategy auto-optimization, dose-response model, smart substitution

ACT 5 — THE DEPTH (slides 18-21)
  DTPMP calibration evidence, validation roadmap, about the builder, closing
```

## 5. Key Messaging
- **Filosofi inti:** "Understand the Process. Trust the Result."
- **Positioning:** Open-engine, physics-based, vendor-agnostic, literature-grounded
- **Differentiator:** Bukan blackbox — setiap kalkulasi traceable ke peer-reviewed science
- **Credibility:** 70+ data points dari Ahmed et al. (2024), DTPMP calibration dari Dai Table 2, 4 referensi primer

## 6. Technical Constraints
- **Single-page app** — tidak ada routing, tidak ada multi-page
- **No backend** — semua data hardcoded/dummy
- **Static build** — output `dist/` bisa di-deploy ke static hosting atau dibuka lokal
- **FontAwesome CDN** — untuk icons (tidak pakai lucide-react)
- **ECharts CDN** — via echarts-for-react, dummy data untuk ilustrasi
- **No PDF export** — presentasi live, bukan dokumen cetak
