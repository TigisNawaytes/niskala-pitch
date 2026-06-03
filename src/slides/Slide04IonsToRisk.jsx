import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const pipelineSteps = [
  {
    formula: 'Ca²⁺ + CO₃²⁻',
    label: 'Ions in solution',
    color: '#5170ff',
    border: 'border-b-[#5170ff]',
  },
  {
    formula: 'IAP',
    label: 'Ion Activity Product',
    color: '#a78bfa',
    border: 'border-b-[#a78bfa]',
  },
  {
    formula: 'SI = log(IAP/Ksp)',
    label: 'Saturation Index',
    color: '#14b8a6',
    border: 'border-b-[#14b8a6]',
  },
  {
    formula: 'RISK',
    label: 'Assessment',
    color: '#0a0a0a',
    border: 'border-b-[#0a0a0a]',
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

        <div className="flex flex-wrap items-stretch gap-0 justify-center mb-8">
          {pipelineSteps.map((step, i) => (
            <FragmentReveal key={step.label} delay={0.1 + i * 0.1} from="scale" className="flex items-center">
              <div
                className="flex flex-col items-center justify-center text-center px-5 py-4 bg-[var(--card)] border border-[var(--border)] rounded-xl min-w-[130px] flex-1 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ borderBottom: `4px solid ${step.color}` }}
              >
                <p
                  className="font-mono text-base sm:text-lg font-bold leading-tight mb-1.5"
                  style={{ color: step.color }}
                >
                  {step.formula}
                </p>
                <p className="text-xs text-[var(--muted-foreground)]">{step.label}</p>
              </div>
              {i < pipelineSteps.length - 1 && (
                <div className="flex items-center justify-center px-2 sm:px-3 shrink-0">
                  <i
                    className="fas fa-chevron-right text-sm"
                    style={{ color: pipelineSteps[i + 1].color, opacity: 0.7 }}
                  />
                </div>
              )}
            </FragmentReveal>
          ))}
        </div>

        <FragmentReveal delay={0.55}>
          <div className="subtle-divider mb-6" />
          <p className="section-label mb-3" style={{ color: '#5170ff' }}>
            Saturation Index Scale
          </p>
        </FragmentReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {siZones.map((zone, i) => (
            <FragmentReveal key={zone.condition} delay={0.6 + i * 0.08} from="bottom">
              <CardPitch accentColor={zone.accentColor} className={`text-center ${zone.bg}`}>
                <p className={`font-mono text-sm font-bold mb-1.5 ${zone.textColor}`}>
                  {zone.condition}
                </p>
                <p className="font-semibold text-sm mb-2.5 text-[var(--foreground)]">{zone.description}</p>
                <span className={zone.badge}>
                  <i className={`${zone.badgeIcon} text-[0.5rem]`}></i> {zone.badgeText}
                </span>
              </CardPitch>
            </FragmentReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
