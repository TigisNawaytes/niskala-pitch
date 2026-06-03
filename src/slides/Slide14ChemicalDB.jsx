import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const roClasses = [
  { name: 'Phosphonates', alpha: '0.75', mode: 'Mode A+B' },
  { name: 'Synthetic Polymers', alpha: '0.60', mode: 'Mode A' },
  { name: 'SHMP', alpha: '0.35', mode: 'Mode A' },
  { name: 'Green Biopolymers', alpha: '0.55', mode: 'Mode A' },
];

const ctTypes = [
  { name: 'Phosphonate_CT', ifv: '0.55', note: '+corr.' },
  { name: 'Polymer_Dispersant', ifv: '0.45', note: null },
  { name: 'Zinc_Phosphate', ifv: '0.40', note: '+corr.' },
  { name: 'Molybdate', ifv: '0.00', note: 'corrosion' },
  { name: 'All_Organic_Triazole', ifv: '0.50', note: 'zinc-free' },
  { name: 'SHMP_CT', ifv: null, note: null },
  { name: 'None', ifv: null, note: null },
];

export default function Slide14ChemicalDB() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative dot-grid-brand">
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl glow-blob-brand" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full blur-3xl glow-blob-ct" />

      <div className="relative z-10 max-w-5xl w-full">
        <SectionLabel>Treatment</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6">
            Chemical <span className="stat-gradient">Treatment</span> Database
          </h2>
        </FragmentReveal>

        <div className="subtle-divider mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FragmentReveal delay={0.1} from="left">
            <CardPitch accentColor="#5170ff">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <i className="fas fa-filter text-niskala-brand text-sm" />
                RO &mdash; 4 Inhibitor Classes
              </h3>
              <div className="rounded-lg overflow-hidden border border-[#e4e4e7]">
                {roClasses.map((c, idx) => (
                  <div
                    key={c.name}
                    className={`flex items-center justify-between px-3 py-2.5 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-[#f8f8fa]/50'}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-niskala-brand shrink-0" />
                      <span className="text-sm text-[#0a0a0a] font-medium">{c.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-niskala-brand font-semibold">
                        &alpha;={c.alpha}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#5170ff]/10 text-niskala-brand border border-[#5170ff]/20 font-medium">
                        {c.mode}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.2} from="right">
            <CardPitch accentColor="#14b8a6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <i className="fas fa-snowflake text-niskala-ct text-sm" />
                CT &mdash; 7 Inhibitor Types
              </h3>
              <div className="rounded-lg overflow-hidden border border-[#e4e4e7]">
                {ctTypes.map((c, idx) => (
                  <div
                    key={c.name}
                    className={`flex items-center justify-between px-3 py-2 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-[#f8f8fa]/50'}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-niskala-ct shrink-0" />
                      <span className="text-sm text-[#0a0a0a] font-medium">{c.name}</span>
                      {c.note && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#14b8a6]/10 text-niskala-ct font-mono border border-[#14b8a6]/20">
                          {c.note}
                        </span>
                      )}
                    </div>
                    {c.ifv != null ? (
                      <span className="font-mono text-xs text-niskala-ct font-semibold">
                        IF={c.ifv}
                      </span>
                    ) : (
                      <span className="font-mono text-[10px] text-[#71717a]">&mdash;</span>
                    )}
                  </div>
                ))}
              </div>
            </CardPitch>
          </FragmentReveal>
        </div>

        <div className="subtle-divider mb-5" />

        <FragmentReveal delay={0.35}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#a78bfa]/30 bg-[#a78bfa]/[0.03] p-5 flex gap-3 items-start">
              <div className="w-9 h-9 rounded-lg bg-[#a78bfa]/15 flex items-center justify-center shrink-0">
                <i className="fas fa-atom text-niskala-violet text-base" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-niskala-violet">
                  Mode A &mdash; Kinetic (N-CNT)
                </span>
                <p className="text-sm text-[#71717a] mt-1 leading-relaxed">
                  Inhibitor delays nucleation &rarr; t<sub>ind</sub> increases. Used for
                  phosphonates, polymers, SHMP.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-[#14b8a6]/30 bg-[#14b8a6]/[0.03] p-5 flex gap-3 items-start">
              <div className="w-9 h-9 rounded-lg bg-[#14b8a6]/15 flex items-center justify-center shrink-0">
                <i className="fas fa-level-up-alt text-niskala-ct text-base" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-niskala-ct">
                  Mode B &mdash; SI Threshold
                </span>
                <p className="text-sm text-[#71717a] mt-1 leading-relaxed">
                  Dispersant-type inhibitors prevent crystal deposition &rarr; safe up to higher SI.
                  Langmuir-scaled limits.
                </p>
              </div>
            </div>
          </div>
        </FragmentReveal>
      </div>
    </div>
  );
}
