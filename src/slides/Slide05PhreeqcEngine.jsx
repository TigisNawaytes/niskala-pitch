import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const minerals = [
  { formula: 'CaCO₃',       name: 'Calcite',         si: '0.30', group: 'ca',   violet: false },
  { formula: 'CaSO₄·2H₂O', name: 'Gypsum',          si: '0.10', group: 'ca',   violet: false },
  { formula: 'CaSO₄',       name: 'Anhydrite',       si: '0.10', group: 'ca',   violet: false },
  { formula: 'SiO₂(am)',    name: 'Silica',          si: '0.00', group: 'si',   violet: false },
  { formula: 'BaSO₄',       name: 'Barite',          si: '0.50', group: 'ba',   violet: false },
  { formula: 'SrSO₄',       name: 'Celestite',       si: '0.10', group: 'ba',   violet: false },
  { formula: 'Ca₅(PO₄)₃OH', name: 'Hydroxyapatite', si: '1.50', group: 'hap',  violet: true  },
];

const groupTint = {
  ca:  { border: '#5170ff', bg: 'rgba(81,112,255,0.04)',  text: '#5170ff' },
  ba:  { border: '#14b8a6', bg: 'rgba(20,184,166,0.04)',  text: '#14b8a6' },
  si:  { border: '#a78bfa', bg: 'rgba(167,139,250,0.04)', text: '#a78bfa' },
  hap: { border: '#a78bfa', bg: 'rgba(167,139,250,0.07)', text: '#a78bfa' },
};

function getSiBadge(si) {
  const val = parseFloat(si);
  if (val <= 0)    return { color: '#10b981', label: '✓' };
  if (val <= 0.15) return { color: '#f59e0b', label: '!' };
  if (val <= 0.5)  return { color: '#f97316', label: '!!' };
  return { color: '#ef4444', label: '!!' };
}

const ionSpecies = [
  { ion: 'Ca²⁺',  color: '#5170ff' },
  { ion: 'Mg²⁺',  color: '#5170ff' },
  { ion: 'Na⁺',   color: '#5170ff' },
  { ion: 'K⁺',    color: '#5170ff' },
  { ion: 'Ba²⁺',  color: '#14b8a6' },
  { ion: 'Sr²⁺',  color: '#14b8a6' },
  { ion: 'Cl⁻',   color: '#a78bfa' },
  { ion: 'SO₄²⁻', color: '#a78bfa' },
  { ion: 'HCO₃⁻', color: '#a78bfa' },
  { ion: 'SiO₂',  color: '#f59e0b' },
  { ion: 'Fe²⁺',  color: '#ef4444' },
];

export default function Slide05PhreeqcEngine() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Engine</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-8 text-[var(--foreground)]">
            PHREEQC <span className="stat-gradient">Thermodynamic Core</span>
          </h2>
        </FragmentReveal>

        <div className="grid md:grid-cols-[1fr_2fr] gap-6">
          <div className="flex flex-col gap-4">
            <FragmentReveal delay={0.1} from="left">
              <CardPitch>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[var(--foreground)]">
                  <i className="fas fa-sliders-h text-niskala-brand" /> Input
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {ionSpecies.map((s) => (
                    <span
                      key={s.ion}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[0.65rem] font-mono font-semibold border"
                      style={{
                        color: s.color,
                        borderColor: `${s.color}33`,
                        backgroundColor: `${s.color}0d`,
                      }}
                    >
                      {s.ion}
                    </span>
                  ))}
                </div>
                <p className="text-[0.65rem] text-[var(--muted-foreground)] mb-2 font-medium tracking-wide uppercase">
                  + required parameters
                </p>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-sm bg-[#5170ff] shrink-0" />
                    <span className="text-[var(--foreground)]"><strong>pH / Temperature</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-sm bg-[#5170ff] shrink-0" />
                    <span className="text-[var(--foreground)]"><strong>Alkalinity</strong> (as CaCO₃)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-sm bg-[#a78bfa] shrink-0" />
                    <span className="text-[var(--foreground)]"><strong>PO₄</strong> <span className="text-[var(--muted-foreground)]">(optional)</span></span>
                  </div>
                </div>
              </CardPitch>
            </FragmentReveal>

            <FragmentReveal delay={0.2} from="left">
              <CardPitch accentColor="#5170ff">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[var(--foreground)]">
                  <i className="fas fa-database text-niskala-brand" /> Database Selection
                </h3>
                <div className="space-y-3">
                  <div className="rounded-lg border border-[#5170ff]/20 bg-[#5170ff]/[0.04] p-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <code className="font-mono text-niskala-brand font-bold text-xs bg-[#5170ff]/[0.1] px-2 py-0.5 rounded">
                        pitzer.dat
                      </code>
                      <span className="text-[var(--muted-foreground)] text-xs">TDS &gt; 10,000 mg/L</span>
                    </div>
                    <p className="text-[var(--muted-foreground)] text-xs leading-snug pl-1">
                      SWRO, seawater CT coastal plants
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#14b8a6]/20 bg-[#14b8a6]/[0.04] p-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <code className="font-mono text-niskala-ct font-bold text-xs bg-[#14b8a6]/[0.1] px-2 py-0.5 rounded">
                        phreeqc.dat
                      </code>
                      <span className="text-[var(--muted-foreground)] text-xs">TDS ≤ 10,000 mg/L</span>
                    </div>
                    <p className="text-[var(--muted-foreground)] text-xs leading-snug pl-1">
                      BWRO, freshwater CT, Davies
                    </p>
                  </div>
                </div>
              </CardPitch>
            </FragmentReveal>
          </div>

          <FragmentReveal delay={0.15}>
            <div>
              <p className="section-label text-[var(--muted-foreground)] mb-3">
                7 Supported Minerals
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {minerals.map((m) => {
                  const tint = groupTint[m.group];
                  const siBadge = getSiBadge(m.si);
                  return (
                    <div
                      key={m.name}
                      className={`rounded-xl p-3 border border-[var(--border)] bg-[var(--card)] transition-shadow hover:shadow-sm ${m.violet ? 'col-span-2 sm:col-span-1' : ''}`}
                      style={{
                        borderLeftColor: tint.border,
                        borderLeftWidth: '3px',
                      }}
                    >
                      <div
                        className="font-mono text-sm font-bold leading-tight break-all"
                        style={{ color: tint.text }}
                      >
                        {m.formula}
                      </div>
                      <div className="text-xs font-semibold text-[var(--foreground)] mt-1">{m.name}</div>
                      <div className="flex items-center justify-between mt-1.5">
                        <span className="text-xs text-[var(--muted-foreground)]">
                          SI <span className="font-mono font-semibold text-[var(--foreground)]">{m.si}</span>
                        </span>
                        <span
                          className="text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full"
                          style={{
                            color: siBadge.color,
                            backgroundColor: `${siBadge.color}18`,
                          }}
                        >
                          {siBadge.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
