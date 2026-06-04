import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const pipelineSteps = [
  {
    formula: 'Ca²⁺ + CO₃²⁻',
    label: 'Ions in solution',
    color: '#5170ff',
  },
  {
    formula: 'IAP',
    label: 'Ion Activity Product',
    color: '#a78bfa',
  },
  {
    formula: 'SI = log(IAP/Ksp)',
    label: 'Saturation Index',
    color: '#14b8a6',
  },
  {
    formula: 'RISK',
    label: 'Assessment',
    color: '#0a0a0a',
  },
];

const siZones = [
  {
    condition: 'SI < 0',
    description: 'Under-saturated',
    badge: 'badge-safe',
    badgeIcon: 'fas fa-check',
    badgeText: 'SAFE',
    accentColor: '#10b981',
    bg: 'bg-[#10b981]/[0.04]',
    textColor: 'text-niskala-safe',
  },
  {
    condition: '0 < SI < 0.3',
    description: 'Metastable zone',
    badge: 'badge-warning',
    badgeIcon: 'fas fa-exclamation-triangle',
    badgeText: 'MONITOR',
    accentColor: '#f59e0b',
    bg: 'bg-[#f59e0b]/[0.04]',
    textColor: 'text-niskala-warning',
  },
  {
    condition: 'SI > 0.3',
    description: 'Supersaturated',
    badge: 'badge-danger',
    badgeIcon: 'fas fa-times',
    badgeText: 'RISK',
    accentColor: '#ef4444',
    bg: 'bg-[#ef4444]/[0.04]',
    textColor: 'text-niskala-danger',
  },
];

const caIons = [
  { top: '22%', left: '28%', anim: 'beakerFloat1', dur: '5.2s', delay: '0s' },
  { top: '45%', left: '62%', anim: 'beakerFloat2', dur: '6.1s', delay: '0.8s' },
  { top: '58%', left: '18%', anim: 'beakerFloat3', dur: '4.7s', delay: '1.5s' },
];

const coIons = [
  { top: '18%', left: '55%', anim: 'beakerFloat4', dur: '5.8s', delay: '0.3s' },
  { top: '38%', left: '35%', anim: 'beakerFloat5', dur: '6.4s', delay: '1.1s' },
  { top: '52%', left: '72%', anim: 'beakerFloat6', dur: '5.0s', delay: '2.0s' },
];

function BeakerAnimation() {
  return (
    <div className="relative w-[220px] h-[300px] mx-auto select-none">
      {/* ── Beaker SVG ── */}
      <svg viewBox="0 0 220 300" className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        {/* Liquid */}
        <path
          d="M 46 92 L 46 228 Q 46 258 110 258 Q 174 258 174 228 L 174 92 Z"
          fill="rgba(81,112,255,0.06)"
        />
        {/* Glass outline */}
        <path
          d="M 46 52 L 46 228 Q 46 262 110 262 Q 174 262 174 228 L 174 52"
          fill="none"
          stroke="rgba(160,160,190,0.45)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Rim */}
        <ellipse
          cx="110"
          cy="52"
          rx="64"
          ry="7"
          fill="none"
          stroke="rgba(160,160,190,0.45)"
          strokeWidth="2"
        />
        {/* Measurement ticks */}
        <line x1="56" y1="115" x2="78" y2="115" stroke="rgba(160,160,190,0.3)" strokeWidth="1.5" />
        <line x1="56" y1="155" x2="73" y2="155" stroke="rgba(160,160,190,0.3)" strokeWidth="1.5" />
        <line x1="56" y1="195" x2="78" y2="195" stroke="rgba(160,160,190,0.3)" strokeWidth="1.5" />
      </svg>

      {/* ── Ca²⁺ ions ── */}
      {caIons.map((ion, i) => (
        <div
          key={`ca-${i}`}
          className="absolute flex items-center gap-0.5"
          style={{
            top: ion.top,
            left: ion.left,
            animation: `${ion.anim} ${ion.dur} ease-in-out infinite`,
            animationDelay: ion.delay,
          }}
        >
          <span
            className="block rounded-full shrink-0"
            style={{
              width: '7px',
              height: '7px',
              background: '#5170ff',
              boxShadow: '0 0 6px rgba(81,112,255,0.45)',
            }}
          />
          <span
            className="font-mono font-bold leading-none"
            style={{ fontSize: '7px', color: '#5170ff' }}
          >
            Ca²⁺
          </span>
        </div>
      ))}

      {/* ── CO₃²⁻ ions ── */}
      {coIons.map((ion, i) => (
        <div
          key={`co-${i}`}
          className="absolute flex items-center gap-0.5"
          style={{
            top: ion.top,
            left: ion.left,
            animation: `${ion.anim} ${ion.dur} ease-in-out infinite`,
            animationDelay: ion.delay,
          }}
        >
          <span
            className="block rounded-full shrink-0"
            style={{
              width: '7px',
              height: '7px',
              background: '#14b8a6',
              boxShadow: '0 0 6px rgba(20,184,166,0.45)',
            }}
          />
          <span
            className="font-mono font-bold leading-none"
            style={{ fontSize: '7px', color: '#14b8a6' }}
          >
            CO₃²⁻
          </span>
        </div>
      ))}

      {/* ── Bubbles ── */}
      {[0, 1, 2].map((i) => (
        <span
          key={`bubble-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${3 + i}px`,
            height: `${3 + i}px`,
            background: 'rgba(81,112,255,0.18)',
            bottom: `${20 + i * 25}%`,
            left: `${30 + i * 22}%`,
            animation: `beakerBubbles ${3 + i * 0.8}s ease-in infinite`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      {/* ── Crystal formation ── */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          top: '38%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {/* Crystal that forms, glows, then sinks */}
        <div
          className="relative"
          style={{
            animation: 'beakerCrystalAppear 8s ease-in-out infinite',
            animationDelay: '1s',
          }}
        >
          {/* Hexagonal crystal */}
          <svg width="28" height="32" viewBox="0 0 28 32">
            <polygon
              points="14,1 26.5,8.5 26.5,23.5 14,31 1.5,23.5 1.5,8.5"
              fill="rgba(220,220,225,0.95)"
              stroke="rgba(180,180,190,0.6)"
              strokeWidth="0.8"
            />
            {/* Inner facet lines */}
            <line x1="14" y1="1" x2="14" y2="31" stroke="rgba(180,180,190,0.3)" strokeWidth="0.5" />
            <line x1="1.5" y1="8.5" x2="26.5" y2="23.5" stroke="rgba(180,180,190,0.3)" strokeWidth="0.5" />
            <line x1="26.5" y1="8.5" x2="1.5" y2="23.5" stroke="rgba(180,180,190,0.3)" strokeWidth="0.5" />
          </svg>
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full blur-md -z-10"
            style={{
              background: 'rgba(220,220,225,0.5)',
              transform: 'scale(1.6)',
            }}
          />
        </div>

        {/* Sink animation — separate wrapper so crystal doesn't jump back up */}
        <div
          className="absolute top-0"
          style={{
            animation: 'beakerCrystalSink 8s ease-in infinite',
            animationDelay: '3.5s',
            opacity: 0,
          }}
        >
          <svg width="28" height="32" viewBox="0 0 28 32">
            <polygon
              points="14,1 26.5,8.5 26.5,23.5 14,31 1.5,23.5 1.5,8.5"
              fill="rgba(200,200,205,0.85)"
              stroke="rgba(170,170,180,0.5)"
              strokeWidth="0.8"
            />
          </svg>
        </div>
      </div>

      {/* ── Precipitate pile at bottom ── */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-end justify-center gap-px"
        style={{ bottom: '42px', width: '80px' }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="block rounded-sm"
            style={{
              width: `${14 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 6}px`,
              background: `rgba(${200 + i * 5},${200 + i * 5},${205 + i * 3},${0.7 + Math.random() * 0.25})`,
              animation: 'beakerPrecipitatePulse 3s ease-in-out infinite',
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* ── Label under beaker ── */}
      <div className="absolute -bottom-2 left-0 right-0 text-center">
        <p className="text-[10px] font-mono text-[var(--muted-foreground)] tracking-wide">
          CaCO₃ precipitation
        </p>
      </div>
    </div>
  );
}

export default function Slide04IonsToRisk() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Science</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-8 text-[var(--foreground)]">
            From Ions to <span className="stat-gradient">Scaling Risk</span>
          </h2>
        </FragmentReveal>

        {/* ── 2-column: Beaker (left) | Pipeline + SI (right) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-start">
          {/* Left: Animated beaker */}
          <FragmentReveal delay={0.1} from="left">
            <CardPitch className="flex items-center justify-center py-5 h-full min-h-[300px]">
              <BeakerAnimation />
            </CardPitch>
          </FragmentReveal>

          {/* Right: Pipeline + SI zones */}
          <div className="flex flex-col gap-4">
            {/* Pipeline */}
            <div className="flex flex-nowrap items-stretch gap-0 justify-center">
              {pipelineSteps.map((step, i) => (
                <FragmentReveal key={step.label} delay={0.15 + i * 0.1} from="scale" className="flex items-center">
                  <div
                    className="flex flex-col items-center justify-center text-center px-2 py-2.5 bg-[var(--card)] border border-[var(--border)] rounded-lg min-w-[90px] flex-1 shadow-sm hover:shadow-md transition-shadow duration-300"
                    style={{ borderBottom: `3px solid ${step.color}` }}
                  >
                    <p className="font-mono text-[11px] sm:text-xs font-bold leading-tight mb-0.5" style={{ color: step.color }}>
                      {step.formula}
                    </p>
                    <p className="text-[9px] text-[var(--muted-foreground)]">{step.label}</p>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <div className="flex items-center justify-center px-1 shrink-0">
                      <i className="fas fa-chevron-right text-[9px]" style={{ color: pipelineSteps[i + 1].color, opacity: 0.7 }} />
                    </div>
                  )}
                </FragmentReveal>
              ))}
            </div>

            {/* SI Zones */}
            <FragmentReveal delay={0.55}>
              <div className="subtle-divider" />
              <p className="section-label mb-1.5 mt-2" style={{ color: '#5170ff' }}>
                Saturation Index Scale
              </p>
            </FragmentReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {siZones.map((zone, i) => (
                <FragmentReveal key={zone.condition} delay={0.6 + i * 0.08} from="bottom">
                  <CardPitch accentColor={zone.accentColor} className={`text-center ${zone.bg} py-3`}>
                    <p className={`font-mono text-xs font-bold mb-0.5 ${zone.textColor}`}>
                      {zone.condition}
                    </p>
                    <p className="font-semibold text-xs mb-1.5 text-[var(--foreground)]">{zone.description}</p>
                    <span className={zone.badge}>
                      <i className={`${zone.badgeIcon} text-[0.5rem]`}></i> {zone.badgeText}
                    </span>
                  </CardPitch>
                </FragmentReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
