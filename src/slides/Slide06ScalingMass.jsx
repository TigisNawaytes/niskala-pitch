import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

export default function Slide06ScalingMass() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Quantification</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-8 text-[var(--foreground)]">
            Not Just If It Scales —{' '}
            <span className="stat-gradient">How Much</span> and{' '}
            <span className="text-niskala-ct">Where</span>
          </h2>
        </FragmentReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 items-stretch">
          <FragmentReveal delay={0.1} from="left" className="flex flex-col">
            <CardPitch accentColor="#5170ff" className="flex flex-col flex-1">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#5170ff] mb-1">
                What PHREEQC computes
              </p>
              <h3 className="text-lg font-bold mb-2 text-[var(--foreground)]">Scaling Mass</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4 flex-1">
                PHREEQC{' '}
                <span className="font-mono text-xs bg-[#f4f4f5] px-1.5 py-0.5 rounded text-[var(--foreground)] border border-[var(--border)]">
                  EQUILIBRIUM_PHASES
                </span>{' '}
                simulates mineral precipitation by equilibrating the solution against a specified
                mineral phase, accounting for saturation index and available surface.
              </p>
              <div className="formula-block">
                <div className="formula-block-header">scaling_mass</div>
                <div className="formula-block-body">
                  scaling_mass = f(pitzer.dat, IAP, Ksp, &Delta;G)
                </div>
              </div>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.2} from="right" className="flex flex-col">
            <CardPitch accentColor="#14b8a6" className="flex flex-col flex-1">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#14b8a6] mb-1">
                Surface-normalized severity
              </p>
              <h3 className="text-lg font-bold mb-2 text-[var(--foreground)]">Surface Loading</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4 flex-1">
                Raw scaling mass is normalized by the membrane active area to compute surface
                loading, giving an area-independent severity metric in grams per square meter.
              </p>
              <div className="formula-block">
                <div className="formula-block-header">surface_loading</div>
                <div className="formula-block-body">
                  surface_loading = scaling_mass_mg / 1000 / area_m&sup2;
                </div>
              </div>
            </CardPitch>
          </FragmentReveal>
        </div>

        <FragmentReveal delay={0.35}>
          <div className="subtle-divider mb-5" />
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl border-l-4 border-l-[#5170ff] px-8 py-5 flex items-start gap-4">
            <i className="fas fa-quote-left text-[#5170ff]/40 text-2xl mt-0.5 shrink-0" />
            <p className="text-sm sm:text-base italic leading-relaxed text-[var(--muted-foreground)]">
              <strong className="not-italic text-[var(--foreground)]">SI &gt; 0</strong> only tells you{' '}
              <em>potential</em> to scale.{' '}
              <strong className="not-italic text-[#5170ff]">Scaling mass</strong> tells you{' '}
              <em>severity</em>.{' '}
              <strong className="not-italic text-[#14b8a6]">Surface loading</strong> tells you{' '}
              <em>spatial distribution</em>.
            </p>
          </div>
        </FragmentReveal>
      </div>
    </div>
  );
}
