import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const currentSteps = [
  'Grab sample → lab test (1–2 week turnaround)',
  'Vendor recommends chemical & dosage based on experience',
  'Trial & error — adjust when scaling or corrosion appears',
  'No prediction. No optimization. Reactive, not proactive.',
];

const niskalaSteps = [
  'Input water chemistry once → engine runs in <3 seconds',
  'PHREEQC thermodynamics + kinetic modeling predicts scaling risk',
  'Auto-optimization computes minimum effective dose and pH target',
  'Traceable — every number links to peer-reviewed science',
];

function StepList({ steps, circleColor, textColor, circleBg, baseDelay = 0 }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <FragmentReveal key={i} delay={baseDelay + i * 0.08}>
          <li className="flex items-start gap-3">
            <span
              className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${circleBg} ${textColor}`}
            >
              {i + 1}
            </span>
            <span className="text-sm sm:text-base leading-relaxed text-[#0a0a0a]">
              {step}
            </span>
          </li>
        </FragmentReveal>
      ))}
    </ol>
  );
}

export default function Slide02BlindApproach() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative">
      <div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #ef444408 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #10b98108 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 pointer-events-none dot-grid" />

      <div className="relative z-10 max-w-6xl w-full">
        <SectionLabel>Current Practice</SectionLabel>

        <FragmentReveal delay={0.05}>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight leading-[1.05] mb-8">
            The <span className="text-[#ef4444]">Blind</span> Chemical Dosing Loop
          </h2>
        </FragmentReveal>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-stretch">
          <FragmentReveal delay={0.2} from="left">
            <CardPitch accentColor="#ef4444" className="p-6 sm:p-7 h-full">
              <div className="flex items-center gap-2 mb-5">
                <span className="badge-danger px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full">
                  Current Practice
                </span>
              </div>
              <StepList
                steps={currentSteps}
                circleBg="bg-[#ef4444]/10"
                textColor="text-[#ef4444]"
                baseDelay={0.3}
              />
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.25} from="scale">
            <div className="hidden md:flex flex-col items-center justify-center px-4 gap-3 self-stretch">
              <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#e4e4e7] to-transparent" />
              <div className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-[#e4e4e7] bg-white shadow-sm">
                <span className="text-[10px] font-black text-[#a1a1aa] tracking-widest">VS</span>
              </div>
              <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#e4e4e7] to-transparent" />
            </div>
          </FragmentReveal>

          <div className="md:hidden flex items-center gap-3 my-1">
            <div className="flex-1 h-px bg-[#e4e4e7]" />
            <span className="text-[10px] font-black text-[#a1a1aa] tracking-widest px-2 py-1 border border-[#e4e4e7] rounded-full">VS</span>
            <div className="flex-1 h-px bg-[#e4e4e7]" />
          </div>

          <FragmentReveal delay={0.3} from="right">
            <CardPitch accentColor="#10b981" className="p-6 sm:p-7 h-full">
              <div className="flex items-center gap-2 mb-5">
                <span className="badge-safe px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full">
                  Niskala Method
                </span>
              </div>
              <StepList
                steps={niskalaSteps}
                circleBg="bg-[#10b981]/10"
                textColor="text-[#10b981]"
                baseDelay={0.4}
              />
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
