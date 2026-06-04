import { useState } from 'react';
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

function cfToTextColor(cf) {
  return cf > 3.0 ? '#fff' : cf > 2.0 ? 'rgba(60,60,80,0.7)' : 'rgba(60,60,80,0.5)';
}

export default function Slide06MassBalanceRO() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Foundation</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[1.5rem] sm:text-[2rem] font-black tracking-tight leading-[1.1] mb-1 text-[var(--foreground)]">
            RO Mass Balance — <span className="stat-gradient">72-Cell Spatial Transport</span>
          </h2>
          <p className="text-sm font-light text-[var(--muted-foreground)] mb-3 tracking-tight">
            6 elements × 12 cells = 72 unique PHREEQC runs. Concentration evolves cell-by-cell.
          </p>
        </FragmentReveal>

        {/* ── 6×12 Cell Heatmap ── */}
        <FragmentReveal delay={0.08}>
          <CardPitch className="py-3 px-4 mb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <i className="fas fa-th text-niskala-brand text-[10px]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">
                  Spatial Profile — CF per Cell
                </span>
              </div>
              {hovered && (
                <span className="text-[10px] font-mono text-[var(--foreground)] bg-[var(--muted)] px-2 py-0.5 rounded border border-[var(--border)]">
                  Cell {hovered.global} (Elem {hovered.element}, #{hovered.cell}) | CF {hovered.cf} | Rec {hovered.rec}%
                </span>
              )}
            </div>

            {/* Grid: 6 rows (elements) × 12 columns (cells) */}
            <div className="space-y-1">
              {[1, 2, 3, 4, 5, 6].map((elemNum) => {
                const elemCells = CELLS.filter((c) => c.element === elemNum);
                return (
                  <div key={elemNum} className="flex items-center gap-2">
                    <span className="text-[9px] font-mono font-bold text-[var(--muted-foreground)] w-8 shrink-0 text-right">
                      #{elemNum}
                    </span>
                    <div className="flex items-center gap-[3px] flex-1">
                      {elemCells.map((cell) => (
                        <div
                          key={cell.global}
                          className="relative group flex-1 aspect-square rounded-sm cursor-pointer transition-all duration-200 hover:scale-110 hover:z-10 hover:shadow-md"
                          style={{
                            background: cfToColor(cell.cf),
                            minWidth: '14px',
                            maxWidth: '28px',
                          }}
                          onMouseEnter={() => setHovered(cell)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          {/* Tooltip on hover */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block z-20 whitespace-nowrap">
                            <div className="bg-[var(--card)] border border-[var(--border)] rounded-md px-2 py-1 shadow-lg">
                              <p className="text-[9px] font-mono text-[var(--foreground)]">
                                {cell.global}/72 | CF {cell.cf}
                              </p>
                            </div>
                            <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-l-transparent border-r-transparent border-t-[var(--border)] absolute left-1/2 -translate-x-1/2" />
                          </div>
                          {/* Cell number (tiny) */}
                          <span
                            className="absolute inset-0 flex items-center justify-center text-[6px] font-mono font-bold select-none"
                            style={{ color: cfToTextColor(cell.cf) }}
                          >
                            {cell.cell}
                          </span>
                        </div>
                      ))}
                    </div>
                    <span className="text-[8px] font-mono text-[var(--muted-foreground)] w-8 shrink-0">
                      CF {elemCells[11].cf}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 mt-2 pt-2 border-t border-[var(--border)]">
              <span className="text-[8px] text-[var(--muted-foreground)]">CF:</span>
              <div className="flex items-center gap-1 flex-1">
                {[1.0, 1.75, 2.5, 3.25, 4.0, 4.5].map((cf) => (
                  <div key={cf} className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-sm"
                      style={{ background: cfToColor(cf) }}
                    />
                    <span className="text-[7px] font-mono text-[var(--muted-foreground)]">{cf}</span>
                  </div>
                ))}
              </div>
              <span className="text-[8px] text-[var(--muted-foreground)]">Feed → Brine</span>
            </div>
          </CardPitch>
        </FragmentReveal>

        {/* ── Bottom row: Key cells table | Equations | ROSSpy ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          <FragmentReveal delay={0.15} from="left">
            <CardPitch className="py-2.5 px-3">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] mb-2">
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
                  {CELLS.filter((c) => c.cell === 1 || c.cell === 12).map((cell) => (
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

          <FragmentReveal delay={0.2} from="bottom">
            <CardPitch accentColor="#5170ff" className="py-2.5 px-3">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#5170ff] mb-2">
                Core Equations
              </h3>
              <div className="space-y-1.5">
                <div className="rounded bg-[var(--muted)]/40 px-2 py-1 border border-[var(--border)]">
                  <p className="text-[9px] font-mono text-[var(--muted-foreground)]">CF = C<sub>brine</sub> / C<sub>feed</sub></p>
                </div>
                <div className="rounded bg-[var(--muted)]/40 px-2 py-1 border border-[var(--border)]">
                  <p className="text-[9px] font-mono text-[var(--muted-foreground)]">C<sub>wall</sub> = C<sub>bulk</sub> × CPF</p>
                </div>
                <div className="rounded bg-[var(--muted)]/40 px-2 py-1 border border-[var(--border)]">
                  <p className="text-[9px] font-mono text-[var(--muted-foreground)]">SI<sub>wall</sub> = SI<sub>bulk</sub> × CPF</p>
                </div>
              </div>
              <p className="text-[8px] text-[var(--muted-foreground)] mt-2 leading-relaxed">
                <strong className="text-[var(--foreground)]">72 independent PHREEQC runs</strong> per simulation. Each cell has unique CF, CPF, and residence time.
              </p>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.25} from="right">
            <CardPitch className="py-2.5 px-3">
              <div className="flex items-center gap-1.5 mb-2">
                <i className="fas fa-award text-niskala-brand text-[10px]" />
                <h3 className="text-[10px] font-bold text-[var(--foreground)]">ROSSpy Reference</h3>
              </div>
              <p className="text-[9px] text-[var(--muted-foreground)] leading-relaxed mb-2">
                Peer-reviewed 1D reactive transport framework. Two transport models:{' '}
                <span className="font-mono text-[8px]">linear_CF</span> &amp;{' '}
                <span className="font-mono text-[8px]">linear_permeate</span>.
              </p>
              <div className="rounded border border-[#5170ff]/15 bg-[#5170ff]/[0.03] p-2">
                <p className="text-[8px] italic text-[var(--muted-foreground)] leading-relaxed">
                  &ldquo;A One-Dimensional Reactive Transport Model of Geochemical Scaling in Reverse Osmosis Desalination.&rdquo;
                </p>
                <p className="text-[8px] font-semibold text-[var(--foreground)] mt-1">
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
