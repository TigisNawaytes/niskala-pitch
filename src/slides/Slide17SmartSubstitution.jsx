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
        <span className="text-sm leading-relaxed">{children}</span>
        {extra}
      </div>
    </div>
  );
}

export default function Slide17SmartSubstitution() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative dot-grid-brand">
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none glow-blob-violet" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none glow-blob-brand" />

      <div className="relative z-10 max-w-5xl w-full">
        <SectionLabel>Intelligence</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6">
            Smart Chemical <span className="stat-gradient">Substitution</span>
          </h2>
        </FragmentReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FragmentReveal delay={0.1}>
            <CardPitch className="h-full">
              <h3 className="text-lg font-bold mb-4">Algorithm</h3>
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
                      OPEX &ge; 20% trigger
                    </span>
                  }
                >
                  Recommend substitution if OPEX reduction &ge; 20%
                </StepCircle>
              </div>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.2}>
            <CardPitch accentColor="#a78bfa" className="h-full">
              <div className="mb-3 flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold">Example</h3>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#a78bfa]/15 text-niskala-violet border border-[#a78bfa]/25 uppercase tracking-wide">
                  <i className="fas fa-map-marker-alt text-[9px]" />
                  North Java Sea — BWRO
                </span>
              </div>

              <div className="rounded-lg overflow-hidden border border-[#e4e4e7] text-sm">
                <div className="grid grid-cols-4 px-3 py-2 bg-[#f4f4f5] text-[10px] font-bold uppercase tracking-wider text-[#71717a]">
                  <span>Label</span>
                  <span>Chemical</span>
                  <span>Dose</span>
                  <span>OPEX</span>
                </div>
                <div className="grid grid-cols-4 px-3 py-2.5 border-t border-[#e4e4e7] items-center">
                  <span className="text-[#71717a] font-medium text-xs">Current</span>
                  <span className="font-semibold text-xs">SHMP</span>
                  <span className="text-[#ef4444] font-mono text-xs">5.2 ppm</span>
                  <span className="font-mono text-xs text-[#71717a]">$1.82/m&sup3;</span>
                </div>
                <div className="grid grid-cols-4 px-3 py-2.5 border-t border-[#e4e4e7] items-center bg-[#a78bfa]/[0.04]">
                  <span className="text-[#71717a] font-medium text-xs">Switch to</span>
                  <span className="font-semibold text-xs text-[#a78bfa]">Phosphonate</span>
                  <span className="text-[#10b981] font-mono text-xs">2.3 ppm</span>
                  <span className="font-mono text-xs text-[#10b981]">$0.74/m&sup3;</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                  <i className="fas fa-arrow-down text-[10px]" />
                  &minus;56% dose &nbsp;|&nbsp; &minus;59% OPEX savings
                </span>
              </div>

              <p className="text-[0.7rem] text-[#71717a] mt-3 leading-relaxed border-t border-[#e4e4e7] pt-3">
                SHMP &alpha;=0.35, limited at neutral pH. Phosphonate &alpha;=0.75.
              </p>
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
