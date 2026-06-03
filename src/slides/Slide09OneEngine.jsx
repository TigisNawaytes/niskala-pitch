import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

export default function Slide09OneEngine() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full py-6">
        <SectionLabel>Application</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-8 text-[var(--foreground)]">
            One <span className="stat-gradient">Engine</span>, Two Systems
          </h2>
        </FragmentReveal>

        <div className="subtle-divider mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-stretch mb-6">

          <FragmentReveal delay={0.1} from="left">
            <CardPitch accentColor="#5170ff" className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#5170ff]/10 flex items-center justify-center shrink-0 border border-[#5170ff]/20">
                  <i className="fas fa-water text-niskala-brand text-sm" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-niskala-brand">NiskalaRO</h3>
                  <p className="text-[var(--muted-foreground)] text-xs">Reverse Osmosis</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {[
                  '6-element × 12-cell reactive transport',
                  'Concentration Polarization Factor (CPF)',
                  'Surface loading g/m² spatial heatmap',
                  'Auto-optimization: pH / AS / hybrid / recovery',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[#5170ff] mt-1 shrink-0">
                      <i className="fas fa-chevron-right text-[0.55rem]" />
                    </span>
                    <span className="text-[var(--foreground)]">{text}</span>
                  </li>
                ))}
              </ul>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.25} from="scale">
            <div className="hidden md:flex flex-col items-center justify-center px-5 py-4 min-h-full">
              <div className="flex items-center gap-0 mb-1">
                <i className="fas fa-chevron-left text-[#5170ff]/60 text-[0.6rem]" />
                <div className="w-12 border-t-2 border-dashed border-[#a78bfa]/50" />
              </div>

              <div className="flex flex-col items-center gap-1 my-3">
                <div
                  className="rounded-xl px-3 py-2.5 text-center border"
                  style={{
                    background: 'linear-gradient(135deg, rgba(81,112,255,0.08) 0%, rgba(167,139,250,0.08) 100%)',
                    borderColor: 'rgba(167,139,250,0.3)',
                  }}
                >
                  <span className="font-mono text-[0.6rem] font-bold text-[#a78bfa] tracking-widest uppercase block">PHREEQC</span>
                  <span className="font-mono text-[0.55rem] text-[var(--muted-foreground)] tracking-wider block mt-0.5">Core</span>
                </div>
              </div>

              <div className="flex items-center gap-0 mt-1">
                <div className="w-12 border-t-2 border-dashed border-[#a78bfa]/50" />
                <i className="fas fa-chevron-right text-[#14b8a6]/60 text-[0.6rem]" />
              </div>
            </div>
          </FragmentReveal>

          <FragmentReveal delay={0.1} from="right">
            <CardPitch accentColor="#14b8a6" className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#14b8a6]/10 flex items-center justify-center shrink-0 border border-[#14b8a6]/20">
                  <i className="fas fa-temperature-high text-niskala-ct text-sm" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-niskala-ct">NiskalaCT</h3>
                  <p className="text-[var(--muted-foreground)] text-xs">Cooling Tower</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Well-mixed model with COC concentration',
                  <>Kinetic race: t<sub>ind</sub> vs T<sub>res</sub></>,
                  'COC sensitivity scan & max safe COC',
                  'Auto-optimization: pH / AS / hybrid / COC reduction',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[#14b8a6] mt-1 shrink-0">
                      <i className="fas fa-chevron-right text-[0.55rem]" />
                    </span>
                    <span className="text-[var(--foreground)]">{text}</span>
                  </li>
                ))}
              </ul>
            </CardPitch>
          </FragmentReveal>
        </div>

        <FragmentReveal delay={0.4}>
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[0.68rem] font-medium text-[var(--muted-foreground)] bg-[var(--card)] border border-[var(--border)]"
              style={{ borderColor: 'rgba(167,139,250,0.2)' }}
            >
              <i className="fas fa-info-circle text-[#a78bfa] text-[0.6rem]" />
              Same PHREEQC core, same inhibitor database philosophy, different physics models
            </span>
          </div>
        </FragmentReveal>
      </div>
    </div>
  );
}
