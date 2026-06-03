# Project Rules: Niskala Vendor Pitch

## 1. General Principles
- **Bahasa:** Komentar dan label UI dalam Bahasa Inggris. Diskusi dengan user dalam Bahasa Indonesia.
- **Single-page only:** Tidak ada routing. Semua konten dalam satu halaman dengan slide navigation.
- **No backend:** Semua data hardcoded. Tidak ada API calls, tidak ada fetch/axios.
- **Dummy data:** Chart data adalah ilustrasi, bukan hasil kalkulasi nyata. Boleh diubah untuk tuning visual.

## 2. React Component Conventions
- **Naming:** `PascalCase` untuk komponen, file name match component name.
- **Exports:** Setiap slide file menggunakan `export default function SlideXX()`. Tidak ada named exports.
- **Props:** Slide components TIDAK menerima props — self-contained. Hanya reusable components (`FragmentReveal`, `CardPitch`, `RaceBar`) yang menerima props.
- **Hooks:** Hanya gunakan hooks di App.jsx atau custom hooks. Slide components pure presentational.
- **State:** Semua state navigasi di Zustand store (`useSlideStore`). Jangan buat state lokal untuk navigasi.

## 3. Styling Rules
- **Tailwind-first:** Gunakan utility classes Tailwind. Hindari inline `style={{}}` kecuali untuk nilai dinamis (warna dari props, animasi).
- **CSS classes kustom:** Hanya di `index.css` untuk hal yang tidak bisa dengan Tailwind (animasi keyframes, print styles, pseudo-elements kompleks).
- **Responsive:** Semua slide harus bekerja di 1024px+ (laptop presentasi). Mobile secondary — pastikan tidak broken, tapi tidak perlu pixel-perfect.
- **Warna:** Gunakan Tailwind token `niskala-*` atau CSS variables. Jangan hardcode hex colors di komponen.
  - `text-niskala-brand`, `bg-niskala-ct/10`, `border-niskala-violet/30`
  - Muted text: `text-[#71717a]`

## 4. Slide Content Rules
- **FragmentReveal staggering:** Delay dimulai dari 0, naik 0.1–0.15 per elemen:
  ```
  SectionLabel: delay=0
  Title: delay=0
  Element 1: delay=0.1
  Element 2: delay=0.25
  Element 3: delay=0.4
  ```
- **FontAwesome icons:** Gunakan CDN icons dengan prefix `fas`. Jangan tambah dependency icon library baru.
- **Formula:** Gunakan `<span className="font-mono">` untuk formula kimia/matematika. Tidak ada KaTeX di versi React — sudah cukup dengan styling.
- **Chart containers:** Selalu bungkus dalam `<div className="chart-box">` dengan CardPitch wrapper.

## 5. File Organization
- **Satu slide = satu file** di `src/slides/`. Jangan gabung beberapa slide dalam satu file.
- **Komponen reusable** di `src/components/`. Jika dipakai 2+ slide, pindahkan ke sini.
- **Store** hanya `useSlideStore.js`. Jika butuh store tambahan, tambahkan file terpisah di `src/store/`.
- **Jangan sentuh `index.html`** kecuali untuk mengubah CDN links atau meta tags.

## 6. Build & Deploy
- **Dev:** `npm run dev` — Vite dev server dengan HMR
- **Build:** `npm run build` — output ke `dist/`
- **Preview:** `npm run preview` — preview production build lokal
- **Bundle size:** 1.4MB (ECharts + Framer Motion). Diterima untuk presentasi. Jika perlu optimasi, code-split per slide dengan `React.lazy()`.

## 7. Version Control
- Project ini **tidak dalam git repo** (berbeda dengan main Niskala project).
- Backup manual atau inisialisasi git terpisah jika diperlukan.
- Jangan commit ke repo Niskala utama — ini project terpisah.

## 8. Content Authority
- **Fakta sains:** Mengacu pada main Niskala project (`~/Niskala/.agents/`, `~/Niskala/docs/`, `~/Niskala/knowledges/`). Jika ada ketidakcocokan, prioritas ke main project.
- **Design decisions:** Mengacu pada `.agents/design.md` di project ini.
- **Narrative structure:** Mengacu pada `.agents/context.md` di project ini.
- **Slide content:** User (Sigit) adalah otoritas final untuk konten presentasi. Semua perubahan konten signifikan harus dikonfirmasi.
