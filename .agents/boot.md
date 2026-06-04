# Niskala Vendor Pitch — AI Session Initialization Protocol

Sebelum mulai bekerja, jalankan protokol inisialisasi berikut secara berurutan
untuk menyelaraskan konteks dengan project ini.

> **Catatan path:** Semua file agent ada di `.agents/` (dengan huruf 's') —
> bukan `.agent/`. Jangan salah path.

---

## Langkah 1: Pahami Identitas & Tujuan Project

Baca kedua file berikut secara paralel:
- `.agents/context.md` — apa project ini, narrative structure 5-act, target audience
- `.agents/rules.md` — konvensi koding, styling, slide content rules

**Poin kunci yang harus dipahami:**
- Ini adalah **web presentation**, bukan aplikasi dashboard — tidak ada backend, tidak ada API
- Target: **pitching ke vendor chemical** yang tertarik white-label Niskala Platform
- **21 slide** dalam 4 act narrative arc (Science → Application → Strategy → Depth)
- Semua chart data adalah **dummy/ilustrasi**, bukan hasil kalkulasi real-time
- Stack: React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion + ECharts + Zustand

---

## Langkah 2: Pahami Design System

Baca:
- `.agents/design.md` — warna, font, komponen, navigasi, pola ECharts

**Poin kunci yang harus dipahami:**
- **Light mode only** — background `#f8f8fa`, card `#ffffff`
- **Brand colors:** `#5170ff` (RO), `#14b8a6` (CT), `#a78bfa` (Pure/science)
- **Font:** Inter (sans, judul+body), JetBrains Mono (mono, formula)
- **Gradient:** `#5170ff → #a78bfa` via class `stat-gradient` untuk headline aksen
- **Icons:** FontAwesome CDN (`fas` prefix), bukan lucide-react
- **5 reusable components:** `FragmentReveal`, `SectionLabel`, `CardPitch`, `RaceBar`, `Cover`
- **Navigasi:** keyboard ← →, tombol panah, nav dots, Escape ke cover
- **Slide transitions:** Framer Motion AnimatePresence, horizontal slide 300px

---

## Langkah 3: Pahami Struktur File & Riwayat Development

Baca secara paralel:
- `.agents/project_map.md` — peta folder, key files, cara tambah/hapus slide
- `.agents/changelog.md` — riwayat development (baca entry paling atas = terbaru)

**Poin kunci dari changelog:**
- Kapan project dibuat, apa yang sudah selesai
- Link ke project utama Niskala (`~/Niskala/`)
- Keputusan desain yang sudah ditetapkan (light mode only, no Act 6, dummy data)

**File kunci yang harus diketahui:**
| File | Peran |
|---|---|
| `src/App.jsx` | Container utama: Cover + slide routing + semua navigasi |
| `src/store/useSlideStore.js` | Zustand store — semua state navigasi |
| `src/index.css` | Tailwind v4 @theme + CSS variables + utility classes |
| `src/components/` | 5 reusable components + barrel export |
| `src/slides/` | 21 file slide, satu per slide |
---

## Langkah 4: Pahami Isi Slide

Untuk memahami konten presentasi, baca beberapa slide kunci:
- `src/slides/Slide04IonsToRisk.jsx` — pipeline SI
- `src/slides/Slide05WhyPhreeqc.jsx` — PHREEQC engine credentials
- `src/slides/Slide06MassBalanceRO.jsx` — RO spatial transport (ROSSpy)
- `src/slides/Slide07MassBalanceCT.jsx` — CT well-mixed mass balance
- `src/slides/Slide08Literature.jsx` — 4 referensi + horizontal sub-pages
- `src/slides/Slide15AutoOptimization.jsx` — 4-strategi cards
- `src/slides/Slide18DTPMPCalib.jsx` — ECharts scatter calibration
- `src/slides/Slide21Closing.jsx` — penutup

**Tidak perlu membaca semua 21 slide** — baca beberapa dari setiap act untuk memahami pola.
**Pola yang berlaku di semua slide:**
- Setiap slide adalah `export default function SlideXX()` — tidak menerima props
- Konten dibungkus `FragmentReveal` dengan `delay` staggered (0, 0.1, 0.25, 0.4, ...)
- Layout: `max-w-5xl` centered, padding `px-8 sm:px-12`
- Section label + title di atas, lalu konten dalam CardPitch atau grid
- Tidak ada state lokal untuk navigasi — semua lewat `useSlideStore`

---

## Langkah 5: Verifikasi Environment

Sebelum mulai bekerja, pastikan:

1. **Dependencies terinstall:**
   ```bash
   cd /home/ssety/WebDev/niskala-pitch   # atau /home/clevraven90/WebDev/niskala-pitch — cek mana yang ada
   npm install   # jika node_modules belum ada
   ```

2. **Build bersih:**
   ```bash
   npm run build   # harus 0 errors
   ```

3. **Dev server jalan:**
   ```bash
   npm run dev     # harus bisa diakses di browser
   ```

---

## Langkah 6: Verifikasi & Konfirmasi

Setelah membaca file Langkah 1–4, berikan ringkasan singkat:

1. **Status project** — kapan terakhir diupdate? (lihat entry terbaru `changelog.md`)
2. **Jumlah slide & struktur act** — konfirmasi paham 4 act, 21 slide
3. **Design tokens** — sebutkan 3 brand color + font stack
4. **State management** — konfirmasi paham Zustand store untuk navigasi
5. **Konfirmasi siap** — nyatakan bahwa konteks sudah diserap dan siap bekerja
