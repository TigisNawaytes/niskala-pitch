import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

// ── Generate 72 cells (6 elements × 12 cells) ──
const elementBounds = [1.0, 1.4, 1.9, 2.5, 3.1, 3.8, 4.5];
const CELLS = [];
for (let e = 0; e < 6; e++) {
  const start = elementBounds[e];
  const end = elementBounds[e + 1];
  for (let c = 0; c < 12; c++) {
    const cf = start + (end - start) * (c / 11);
    CELLS.push({
      element: e + 1,
      cell: c + 1,
      global: e * 12 + c + 1,
      cf: Number(cf.toFixed(2)),
      rec: Math.round(12 + (e * 12 + c) * (63 / 71)),
    });
  }
}

function cfToColor(cf) {
  const t = Math.min(1, Math.max(0, (cf - 1.0) / 3.5));
  const hue = 220 - t * 220;
  const sat = 55 + t * 35;
  const light = 92 - t * 52;
  return `hsl(${hue}, ${sat}%, ${light}%)`;
}

function interpolateColor(a, b, t) {
  const ah = parseInt(a.replace('#', ''), 16);
  const bh = parseInt(b.replace('#', ''), 16);
  const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
  const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `#${((rr << 16) | (rg << 8) | rb).toString(16).padStart(6, '0')}`;
}

function darkenColor(hex, factor) {
  const h = parseInt(hex.replace('#', ''), 16);
  const r = Math.round(((h >> 16) & 0xff) * (1 - factor));
  const g = Math.round(((h >> 8) & 0xff) * (1 - factor));
  const b = Math.round((h & 0xff) * (1 - factor));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export default function Slide06MassBalanceRO() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Foundation</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[1.4rem] sm:text-[1.8rem] font-black tracking-tight leading-[1.1] text-[var(--foreground)]">
            RO Mass Balance — <span className="stat-gradient">72-Cell Spatial Transport</span>
          </h2>
          <p className="text-[0.8rem] font-light text-[var(--muted-foreground)] mb-2 tracking-tight">
            6 elements × 12 cells = 72 unique PHREEQC runs. Concentration evolves cell-by-cell.
          </p>
        </FragmentReveal>

        {/* ── Vessel Diagram ── */}
        <FragmentReveal delay={0.04}>
          <CardPitch className="overflow-hidden !p-1 sm:!p-1.5 mb-1.5">
            <svg viewBox="0 0 900 210" className="w-full h-auto" style={{ maxHeight: '210px' }}>
              <defs>
                <linearGradient id="permGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5170ff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Vessel shell */}
              <rect x="60" y="50" width="780" height="72" rx="5" fill="none" stroke="#a1a1aa" strokeWidth="2" />
              <ellipse cx="60" cy="86" rx="5" ry="36" fill="none" stroke="#a1a1aa" strokeWidth="2" />
              <ellipse cx="840" cy="86" rx="5" ry="36" fill="none" stroke="#a1a1aa" strokeWidth="2" />
              <rect x="63" y="53" width="774" height="66" rx="3" fill="rgba(228,228,231,0.25)" />

              {/* 6 membrane elements */}
              {Array.from({ length: 6 }, (_, m) => {
                const colors = ['#22c55e', '#84cc16', '#eab308', '#f97316', '#ef4444', '#b91c1c'];
                const mx = 72 + m * 128;
                return (
                  <g key={m}>
                    <rect x={mx} y="60" width="118" height="52" rx="3" fill="rgba(255,255,255,0.6)" stroke="#d4d4d8" strokeWidth="1" />
                    {Array.from({ length: 12 }, (_, c) => {
                      const cellW = 116 / 12;
                      const cx = mx + 1 + c * cellW;
                      const baseColor = colors[m];
                      let fill = baseColor;
                      if (c >= 9) {
                        const t = (c - 9 + 1) / 3;
                        if (m < 5) fill = interpolateColor(baseColor, colors[m + 1], t * 0.6);
                        else fill = darkenColor(baseColor, t * 0.3);
                      }
                      return <rect key={c} x={cx} y="62" width={cellW - 1} height="48" rx="1" fill={fill} opacity="0.85" />;
                    })}
                    <text x={mx + 59} y="135" textAnchor="middle" fontSize="9" fill="#71717a" className="font-mono font-bold">M{m + 1}</text>
                  </g>
                );
              })}

              {/* Permeate tubes */}
              {Array.from({ length: 6 }, (_, m) => {
                const mx = 72 + m * 128;
                return <line key={m} x1={mx + 4} y1="86" x2={mx + 114} y2="86" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />;
              })}

              {/* Permeate collector */}
              <rect x="80" y="138" width="740" height="8" rx="4" fill="url(#permGrad)" />
              {Array.from({ length: 6 }, (_, m) => {
                const mx = 72 + m * 128;
                const dropX = mx + 59;
                return (
                  <g key={m}>
                    <line x1={dropX} y1="112" x2={dropX} y2="138" stroke="#a78bfa" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
                    <circle cx={dropX} cy="134" r="2" fill="#a78bfa" opacity="0.7" />
                  </g>
                );
              })}
              <text x="450" y="162" textAnchor="middle" fontSize="9" fill="#a78bfa" className="font-mono font-bold">Permeate</text>

              {/* Feed pipe */}
              <rect x="12" y="78" width="48" height="16" rx="8" fill="#5170ff" opacity="0.85" />
              <polygon points="8,86 22,78 22,94" fill="#5170ff" opacity="0.85" />
              <text x="36" y="64" textAnchor="middle" fontSize="10" fill="#5170ff" className="font-bold">Feed</text>

              {/* Reject pipe */}
              <rect x="840" y="78" width="48" height="16" rx="8" fill="#ef4444" opacity="0.8" />
              <polygon points="892,86 878,78 878,94" fill="#ef4444" opacity="0.8" />
              <text x="864" y="64" textAnchor="middle" fontSize="10" fill="#ef4444" className="font-bold">Reject</text>

              <text x="450" y="34" textAnchor="middle" fontSize="10" fill="#71717a" className="font-mono">6-Membrane RO Pressure Vessel · 12 cells / membrane</text>
            </svg>

            <div className="flex items-center justify-center gap-2 sm:gap-3 -mt-1 flex-wrap">
              {['#22c55e', '#84cc16', '#eab308', '#f97316', '#ef4444', '#b91c1c'].map((c, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="block w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
                  <span className="text-[0.6rem] font-mono text-[var(--muted-foreground)]">M{i + 1}</span>
                </div>
              ))}
            </div>
          </CardPitch>
        </FragmentReveal>

        {/* ── Bottom row: Key cells table | Equations | ROSSpy ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <FragmentReveal delay={0.1} from="left">
            <CardPitch className="py-2 px-2.5">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] mb-1.5">
                Key Cells
              </h3>
              <table className="w-full text-[9px]">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-0.5 pr-2 text-[var(--muted-foreground)] font-medium">Cell</th>
                    <th className="text-right py-0.5 px-1 text-[var(--muted-foreground)] font-medium">Elem</th>
                    <th className="text-right py-0.5 px-1 text-[var(--muted-foreground)] font-medium">CF</th>
                    <th className="text-right py-0.5 pl-1 text-[var(--muted-foreground)] font-medium">Rec%</th>
                  </tr>
                </thead>
                <tbody>
                  {CELLS.filter((c) => (c.cell === 1 || c.cell === 12) && c.element <= 3).map((cell) => (
                    <tr key={cell.global} className="border-b border-[var(--border)]/50">
                      <td className="py-0.5 pr-2 font-mono font-bold text-[var(--foreground)]">{cell.global}</td>
                      <td className="text-right py-0.5 px-1 font-mono text-[var(--foreground)]">{cell.element}</td>
                      <td className="text-right py-0.5 px-1 font-mono" style={{ color: cfToColor(cell.cf) }}>{cell.cf}</td>
                      <td className="text-right py-0.5 pl-1 font-mono text-[var(--muted-foreground)]">{cell.rec}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.14} from="bottom">
            <CardPitch accentColor="#5170ff" className="py-2 px-2.5">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#5170ff] mb-1.5">
                Core Equations
              </h3>
              <div className="space-y-1">
                <div className="rounded bg-[var(--muted)]/40 px-2 py-0.5 border border-[var(--border)]">
                  <p className="text-[9px] font-mono text-[var(--muted-foreground)]">CF = C<sub>brine</sub> / C<sub>feed</sub></p>
                </div>
                <div className="rounded bg-[var(--muted)]/40 px-2 py-0.5 border border-[var(--border)]">
                  <p className="text-[9px] font-mono text-[var(--muted-foreground)]">C<sub>wall</sub> = C<sub>bulk</sub> × CPF</p>
                </div>
                <div className="rounded bg-[var(--muted)]/40 px-2 py-0.5 border border-[var(--border)]">
                  <p className="text-[9px] font-mono text-[var(--muted-foreground)]">SI<sub>wall</sub> = SI<sub>bulk</sub> × CPF</p>
                </div>
              </div>
              <p className="text-[8px] text-[var(--muted-foreground)] mt-1.5 leading-relaxed">
                <strong className="text-[var(--foreground)]">72 independent PHREEQC runs</strong> per simulation. Each cell has unique CF, CPF, and residence time.
              </p>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.18} from="right">
            <CardPitch className="py-2 px-2.5">
              <div className="flex items-center gap-1.5 mb-1.5">
                <i className="fas fa-award text-niskala-brand text-[10px]" />
                <h3 className="text-[10px] font-bold text-[var(--foreground)]">ROSSpy Reference</h3>
              </div>
              <p className="text-[9px] text-[var(--muted-foreground)] leading-relaxed mb-1.5">
                Peer-reviewed 1D reactive transport framework. Two transport models:{' '}
                <span className="font-mono text-[8px]">linear_CF</span> &amp;{' '}
                <span className="font-mono text-[8px]">linear_permeate</span>.
              </p>
              <div className="rounded border border-[#5170ff]/15 bg-[#5170ff]/[0.03] p-1.5">
                <p className="text-[8px] italic text-[var(--muted-foreground)] leading-relaxed">
                  &ldquo;A One-Dimensional Reactive Transport Model of Geochemical Scaling in Reverse Osmosis Desalination.&rdquo;
                </p>
                <p className="text-[8px] font-semibold text-[var(--foreground)] mt-0.5">
                  Freiburger, Molins &amp; Buckley (2022)
                </p>
                <p className="text-[7px] text-[var(--muted-foreground)] font-mono mt-0.5">
                  DOI: 10.2139/ssrn.4124149
                </p>
              </div>
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
