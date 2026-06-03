import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

function StepCircle({ num, children, extra = null }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center shrink-0">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5170ff] text-white text-sm font-bold leading-none shadow-sm">
          {num}
        </span>
        <div className="w-px flex-1 min-h-[16px] bg-gradient-to-b from-[#5170ff]/40 to-transparent mt-1" />
      </div>
      <div className="pb-3 flex-1">
        <span className="text-sm leading-relaxed text-[var(--foreground)]">{children}</span>
        {extra}
      </div>
    </div>
  );
}

export default function Slide17SmartSubstitution() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Intelligence</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6 text-[var(--foreground)]">
            Smart Chemical <span className="stat-gradient">Substitution</span>
          </h2>
        </FragmentReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FragmentReveal delay={0.1}>
            <CardPitch className="h-full">
              <h3 className="text-lg font-bold mb-4 text-[var(--foreground)]">Algorithm</h3>
              <div className="space-y-0">
                <StepCircle num={1}>
                  Sweep all registered inhibitors from chemical DB
                </StepCircle>
                <StepCircle num={2}>
                  Compute minimum effective dose (MED) for each candidate
                </StepCircle>
                <StepCircle num={3}>
                  Check feasibility — pH compatibility, mineral saturation constraints
                </StepCircle>
                <StepCircle
                  num={4}
                  extra={
                    <span className="inline-flex items-center gap-1.5 mt-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 uppercase tracking-wide">
                      <i className="fas fa-check-circle text-[9px]" />
                      OPEX ≥ 20% trigger
                    </span>
                  }
                >
                  Recommend substitution if OPEX reduction ≥ 20%
                </StepCircle>
              </div>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.2}>
            <CardPitch accentColor="#a78bfa" className="h-full">
              <div className="mb-3 flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold text-[var(--foreground)]">Example</h3>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#a78bfa]/15 text-niskala-violet border border-[#a78bfa]/25 uppercase tracking-wide">
                  <i className="fas fa-map-marker-alt text-[9px]" />
                  North Java Sea — BWRO
                </span>
              </div>

              <div className="rounded-lg overflow-hidden border border-[var(--border)] text-sm">
                <div className="grid grid-cols-4 px-3 py-2 bg-[var(--muted)] text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                  <span>Label</span>
                  <span>Chemical</span>
                  <span>Dose</span>
                  <span>OPEX</span>
                </div>
                <div className="grid grid-cols-4 px-3 py-2.5 border-t border-[var(--border)] items-center">
                  <span className="text-[var(--muted-foreground)] font-medium text-xs">Current</span>
                  <span className="font-semibold text-xs text-[var(--foreground)]">SHMP</span>
                  <span className="text-[#ef4444] font-mono text-xs">5.2 ppm</span>
                  <span className="font-mono text-xs text-[var(--muted-foreground)]">$1.82/m³</span>
                </div>
                <div className="grid grid-cols-4 px-3 py-2.5 border-t border-[var(--border)] items-center bg-[#a78bfa]/[0.04]">
                  <span className="text-[var(--muted-foreground)] font-medium text-xs">Switch to</span>
                  <span className="font-semibold text-xs text-[#a78bfa]">Phosphonate</span>
                  <span className="text-[#10b981] font-mono text-xs">2.3 ppm</span>
                  <span className="font-mono text-xs text-[#10b981]">$0.74/m³</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                  <i className="fas fa-arrow-down text-[10px]" />
                  −56% dose &nbsp;|&nbsp; −59% OPEX savings
                </span>
              </div>

              <p className="text-[0.7rem] text-[var(--muted-foreground)] mt-3 leading-relaxed border-t border-[var(--border)] pt-3">
                SHMP α=0.35, limited at neutral pH. Phosphonate α=0.75.
              </p>
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
