import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const cocRows = [
  { label: 'Makeup', ca: 80, color: '#14b8a6' },
  { label: 'COC 2', ca: 160, color: 'rgba(20,184,166,0.6)' },
  { label: 'COC 3', ca: 240, color: 'rgba(20,184,166,0.45)' },
  { label: 'COC 4', ca: 320, color: 'rgba(20,184,166,0.3)' },
  { label: 'COC 5', ca: 400, color: 'rgba(20,184,166,0.2)' },
];

export default function Slide07MassBalanceCT() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Foundation</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-black tracking-tight leading-[1.1] mb-1 text-[var(--foreground)]">
            CT Mass Balance — <span className="stat-gradient">Well-Mixed</span>
          </h2>
          <p className="text-sm font-light text-[var(--muted-foreground)] mb-3 tracking-tight">
            Evaporation concentrates everything. One chemistry state for the entire basin.
          </p>
        </FragmentReveal>

        {/* ── Water balance + COC chart ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <FragmentReveal delay={0.08} from="left">
            <CardPitch accentColor="#14b8a6" className="py-2 px-3">
              <div className="flex items-center gap-1.5 mb-2">
                <i className="fas fa-sync-alt text-niskala-ct text-[10px]" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">
                  Water Balance — M = E + B + D
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 mb-2">
                {[
                  { icon: 'fa-cloud', label: 'Evap', value: 'E', color: '#14b8a6' },
                  { icon: 'fa-tint-slash', label: 'BD', value: 'B', color: '#f59e0b' },
                  { icon: 'fa-wind', label: 'Drift', value: 'D', color: '#a78bfa' },
                ].map((item) => (
                  <div key={item.value} className="rounded border border-[var(--border)] bg-[var(--muted)]/30 p-1 text-center">
                    <i className={`fas ${item.icon} text-[7px]`} style={{ color: item.color }} />
                    <p className="text-[7px] font-bold text-[var(--foreground)] mt-0.5">{item.label}</p>
                    <p className="text-xs font-mono font-bold" style={{ color: item.color }}>{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <div className="rounded bg-[var(--muted)]/40 px-2 py-0.5 border border-[var(--border)]">
                  <p className="text-[9px] font-mono text-[var(--muted-foreground)]">COC = C<sub>sys</sub> / C<sub>makeup</sub></p>
                </div>
                <div className="rounded bg-[var(--muted)]/40 px-2 py-0.5 border border-[var(--border)]">
                  <p className="text-[9px] font-mono text-[var(--muted-foreground)]">C<sub>sys</sub> = C<sub>makeup</sub> × COC</p>
                </div>
                <div className="rounded bg-[var(--muted)]/40 px-2 py-0.5 border border-[var(--border)]">
                  <p className="text-[9px] font-mono text-[var(--muted-foreground)]">T<sub>res</sub> = V × (COC − 1) / E</p>
                </div>
              </div>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.12} from="right">
            <CardPitch className="py-2 px-3">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] mb-2">
                Ca²⁺ vs COC
              </h3>
              <div className="space-y-1">
                {cocRows.map((row) => (
                  <div key={row.label} className="flex items-center gap-2">
                    <span className="text-[8px] font-mono text-[var(--muted-foreground)] w-10 shrink-0 text-right">
                      {row.label}
                    </span>
                    <div className="flex-1 h-3.5 bg-[var(--muted)]/30 rounded overflow-hidden">
                      <div
                        className="h-full rounded flex items-center justify-end px-1"
                        style={{
                          width: `${(row.ca / 400) * 100}%`,
                          background: row.color,
                        }}
                      >
                        <span className="text-[7px] font-mono font-bold text-white">{row.ca}</span>
                      </div>
                    </div>
                    <span className="text-[7px] font-mono text-[var(--muted-foreground)] w-5">mg/L</span>
                  </div>
                ))}
              </div>
              <p className="text-[8px] text-[var(--muted-foreground)] mt-1.5 leading-relaxed">
                All ions scale linearly. TDS at COC 5 = 5× makeup TDS.
              </p>
            </CardPitch>
          </FragmentReveal>
        </div>

        {/* ── Bottom: RO vs CT + Warning ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FragmentReveal delay={0.2} from="left">
            <CardPitch className="py-2 px-3">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] mb-2">
                RO vs CT
              </h3>
              <div className="space-y-1.5">
                <div className="flex items-start gap-1.5 p-1.5 rounded border border-[#5170ff]/15 bg-[#5170ff]/[0.03]">
                  <span className="text-[8px] font-bold text-[#5170ff] w-4 shrink-0">RO</span>
                  <div>
                    <p className="text-[9px] font-bold text-[var(--foreground)]">Spatial 1D</p>
                    <p className="text-[8px] text-[var(--muted-foreground)] leading-relaxed">
                      CF varies per element. PHREEQC runs <span className="font-mono text-[7px]">72×</span>.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-1.5 p-1.5 rounded border border-[#14b8a6]/15 bg-[#14b8a6]/[0.03]">
                  <span className="text-[8px] font-bold text-[#14b8a6] w-4 shrink-0">CT</span>
                  <div>
                    <p className="text-[9px] font-bold text-[var(--foreground)]">Well-Mixed 0D</p>
                    <p className="text-[8px] text-[var(--muted-foreground)] leading-relaxed">
                      Single concentration. PHREEQC runs <span className="font-mono text-[7px]">once</span>.
                    </p>
                  </div>
                </div>
              </div>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.24} from="right">
            <CardPitch accentColor="#ef4444" className="py-2 px-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <i className="fas fa-exclamation-triangle text-niskala-danger text-[9px]" />
                <h3 className="text-[10px] font-bold text-[var(--foreground)]">Why This Matters</h3>
              </div>
              <div className="space-y-1">
                <div className="flex items-start gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-niskala-danger/10 flex items-center justify-center shrink-0 text-[7px] font-bold text-niskala-danger border border-niskala-danger/20">1</span>
                  <p className="text-[8px] text-[var(--muted-foreground)] leading-relaxed">
                    Without mass balance: PHREEQC on raw water → <span className="text-niskala-danger">underestimated SI</span>.
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-niskala-danger/10 flex items-center justify-center shrink-0 text-[7px] font-bold text-niskala-danger border border-niskala-danger/20">2</span>
                  <p className="text-[8px] text-[var(--muted-foreground)] leading-relaxed">
                    RO worst case: Last element, SI<sub>wall</sub> = SI<sub>bulk</sub> × CPF.
                  </p>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-niskala-danger/10 flex items-center justify-center shrink-0 text-[7px] font-bold text-niskala-danger border border-niskala-danger/20">3</span>
                  <p className="text-[8px] text-[var(--muted-foreground)] leading-relaxed">
                    CT worst case: Return temp at operating COC.
                  </p>
                </div>
              </div>
              <p className="text-[8px] italic text-[var(--muted-foreground)] mt-1.5 pt-1.5 border-t border-[var(--border)]">
                &ldquo;Mass balance is the gatekeeper before thermodynamics.&rdquo;
              </p>
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
