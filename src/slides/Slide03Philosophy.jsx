import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const philosophyCards = [
  {
    icon: 'fa-microscope',
    label: 'Physics-Based',
    detail: 'PHREEQC + Pitzer/Davies, no blackbox regression',
    accentColor: '#5170ff',
    iconGradient: 'linear-gradient(135deg, #5170ff22 0%, #5170ff0a 100%)',
    iconTextClass: 'text-niskala-brand',
  },
  {
    icon: 'fa-book-open',
    label: 'Literature-Grounded',
    detail: '70+ data points from peer-reviewed sources',
    accentColor: '#a78bfa',
    iconGradient: 'linear-gradient(135deg, #a78bfa22 0%, #a78bfa0a 100%)',
    iconTextClass: 'text-niskala-violet',
  },
  {
    icon: 'fa-chart-line',
    label: 'Vendor-Agnostic',
    detail: 'Independent audit, no commercial bias',
    accentColor: '#14b8a6',
    iconGradient: 'linear-gradient(135deg, #14b8a622 0%, #14b8a60a 100%)',
    iconTextClass: 'text-niskala-ct',
  },
];

export default function Slide03Philosophy() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Philosophy</SectionLabel>

        <FragmentReveal delay={0}>
          <h2
            className="font-black tracking-tight leading-[1.1] mb-8 text-[var(--foreground)]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            <span className="stat-gradient">Understand the Process.</span>
            <br />
            <span className="stat-gradient">Trust the Result.</span>
          </h2>
        </FragmentReveal>

        <FragmentReveal delay={0.1}>
          <p className="text-[var(--muted-foreground)] text-base sm:text-lg max-w-3xl mb-6 leading-relaxed">
            Niskala is an open-engine platform. Every calculation — from ionic
            concentration to risk assessment — is traceable, explainable, and
            grounded in peer-reviewed science.
          </p>
        </FragmentReveal>

        <FragmentReveal delay={0.15}>
          <div className="subtle-divider mb-8" />
        </FragmentReveal>

        <div className="relative">
          <div className="hidden sm:flex absolute top-1/2 left-[calc(33.33%+0.5rem)] right-[calc(33.33%+0.5rem)] -translate-y-1/2 justify-center gap-1 pointer-events-none z-0">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[var(--border)]" />
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {philosophyCards.map((card, i) => (
              <FragmentReveal key={card.label} delay={0.3 + i * 0.12} from="scale">
                <CardPitch
                  accentColor={card.accentColor}
                  variant="elevated"
                  className="h-full"
                >
                  <div className="flex flex-col items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: card.iconGradient }}
                    >
                      <i className={`fas ${card.icon} ${card.iconTextClass} text-lg`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1.5 text-[var(--foreground)]">{card.label}</h3>
                      <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{card.detail}</p>
                    </div>
                  </div>
                </CardPitch>
              </FragmentReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
