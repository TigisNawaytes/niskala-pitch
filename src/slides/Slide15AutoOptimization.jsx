import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const strategies = [
  {
    num: 1,
    accent: '#5170ff',
    icon: 'fa-tint',
    title: 'pH-Only (Acid Dosing)',
    text: 'Lower pH shifts carbonate equilibrium \u2192 HCO\u2083\u207b favored over CO\u2083\u00b2\u207b. Binary search finds minimum pH. H\u2082SO\u2084 dose from alkalinity + CO\u2082 equilibrium.',
    tags: [
      { type: 'safe', label: 'pH 7.1' },
      { type: 'muted', label: '87 mg/L H\u2082SO\u2084' },
    ],
  },
  {
    num: 2,
    accent: '#14b8a6',
    icon: 'fa-shield-alt',
    title: 'Antiscalant-Only (MED)',
    text: 'Find Minimum Effective Dose analytically. MED = minimum ppm to bring SI below threshold. No pH adjustment.',
    tags: [
      { type: 'safe', label: 'MED 2.3 ppm' },
      { type: 'muted', label: 'Phosphonate' },
    ],
  },
  {
    num: 3,
    accent: '#a78bfa',
    icon: 'fa-layer-group',
    title: 'Hybrid (OPEX Optimized)',
    text: 'Combines pH adjustment + reduced inhibitor dose. Cost-optimized: balances acid vs inhibitor cost.',
    tags: [
      { type: 'safe', label: 'pH 7.5 + 1.1 ppm' },
      { type: 'green', label: 'OPEX \u221232%' },
    ],
  },
  {
    num: 4,
    accent: '#f59e0b',
    icon: 'fa-arrow-down',
    title: 'COC Reduction',
    text: 'Last resort \u2014 reduce cycles of concentration. Binary search finds max safe COC.',
    tags: [
      { type: 'warning', label: 'COC 8 \u2192 6' },
      { type: 'muted', label: 'BD +33%' },
    ],
  },
];

export default function Slide15AutoOptimization() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative dot-grid-brand">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none glow-blob-brand" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none glow-blob-violet" />

      <div className="relative z-10 max-w-5xl w-full">
        <SectionLabel>Optimization</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6">
            4-Strategy <span className="stat-gradient">Auto-Optimization</span>
          </h2>
        </FragmentReveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {strategies.map((s, i) => (
            <FragmentReveal key={s.num} delay={0.1 + i * 0.1} from="scale">
              <CardPitch accentColor={s.accent} className="p-5 sm:p-6"
                style={{ backgroundColor: `${s.accent}05` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex flex-col items-center gap-1">
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-full text-base font-extrabold leading-none"
                      style={{
                        backgroundColor: `${s.accent}20`,
                        color: s.accent,
                        boxShadow: `0 0 0 3px ${s.accent}15`,
                      }}
                    >
                      {s.num}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <i className={`fas ${s.icon} text-xs`} style={{ color: s.accent }} />
                      <h3 className="text-base sm:text-lg font-bold leading-snug">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#71717a] leading-relaxed mb-3">
                      {s.text}
                    </p>
                    <div className="flex flex-wrap gap-2 items-center">
                      {s.tags.map((tag, j) => {
                        if (tag.type === 'safe') {
                          return (
                            <span key={j} className="badge-safe text-xs px-2.5 py-1 font-semibold">
                              {tag.label}
                            </span>
                          );
                        }
                        if (tag.type === 'warning') {
                          return (
                            <span key={j} className="badge-warning text-xs px-2.5 py-1 font-semibold">
                              {tag.label}
                            </span>
                          );
                        }
                        if (tag.type === 'green') {
                          return (
                            <span
                              key={j}
                              className="font-mono text-xs font-bold text-[#10b981] px-2.5 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20"
                            >
                              {tag.label}
                            </span>
                          );
                        }
                        return (
                          <span
                            key={j}
                            className="font-mono text-xs text-[#71717a] px-2.5 py-1 rounded-full bg-[#f4f4f5] border border-[#e4e4e7]"
                          >
                            {tag.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardPitch>
            </FragmentReveal>
          ))}
        </div>

        <FragmentReveal delay={0.6}>
          <div className="subtle-divider mt-6 mb-4" />
          <p className="text-sm italic text-[#71717a] text-center leading-relaxed">
            All strategies verified with kinetic scaling risk simulation before deployment.
          </p>
        </FragmentReveal>
      </div>
    </div>
  );
}
