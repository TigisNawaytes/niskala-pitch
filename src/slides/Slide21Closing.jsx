import FragmentReveal from '../components/FragmentReveal';
import CardPitch from '../components/CardPitch';

const modules = [
  {
    icon: 'fa-flask',
    colorClass: 'text-niskala-brand',
    bg: 'bg-[#5170ff]/10',
    border: 'border-[#5170ff]/25',
    name: 'NiskalaRO',
    sub: 'Reverse Osmosis',
  },
  {
    icon: 'fa-temperature-high',
    colorClass: 'text-niskala-ct',
    bg: 'bg-[#14b8a6]/10',
    border: 'border-[#14b8a6]/25',
    name: 'NiskalaCT',
    sub: 'Cooling Tower',
  },
  {
    icon: 'fa-vial',
    colorClass: 'text-niskala-violet',
    bg: 'bg-[#a78bfa]/10',
    border: 'border-[#a78bfa]/25',
    name: 'NiskalaPure',
    sub: 'Kinetic Lab',
  },
];

export default function Slide21Closing() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center gap-6">
        <FragmentReveal delay={0} from="scale">
          <h1
            className="font-extrabold tracking-tight leading-none text-[var(--foreground)]"
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              background: 'linear-gradient(135deg, #5170ff 0%, #7b93ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 8px rgba(81,112,255,0.2))',
            }}
          >
            Niskala
            <span style={{ background: 'none', WebkitTextFillColor: '#8aa0ff', color: '#8aa0ff' }}>.</span>
          </h1>
        </FragmentReveal>

        <FragmentReveal delay={0.15}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }} className="font-black tracking-tight leading-[1.05] text-[var(--foreground)]">
            <span className="stat-gradient">Understand the Process.</span>
            <br />
            <span className="stat-gradient">Trust the Result.</span>
          </h2>
        </FragmentReveal>

        <FragmentReveal delay={0.25}>
          <p className="text-[var(--muted-foreground)] text-base sm:text-lg max-w-xl leading-relaxed">
            Physics-based. Fully transparent. Traceable to peer-reviewed science.
          </p>
        </FragmentReveal>

        <FragmentReveal delay={0.35} from="scale">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {modules.map((m) => (
              <CardPitch key={m.name} className="!p-0">
                <div className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-glow-brand transition-all duration-300`}>
                  <div className={`w-10 h-10 rounded-xl ${m.bg} flex items-center justify-center`}>
                    <i className={`fas ${m.icon} ${m.colorClass} text-lg`} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-base text-[var(--foreground)] leading-tight">{m.name}</p>
                    <p className="text-[var(--muted-foreground)] text-xs mt-0.5">{m.sub}</p>
                  </div>
                </div>
              </CardPitch>
            ))}
          </div>
        </FragmentReveal>

        <FragmentReveal delay={0.5}>
          <div className="flex flex-col items-center gap-2">
            <div className="subtle-divider w-16" />
            <p className="text-[var(--muted-foreground)] text-base font-semibold tracking-wide">
              Thank you &bull; Questions &amp; Discussion
            </p>
            <div className="subtle-divider w-16" />
          </div>
        </FragmentReveal>
      </div>
    </div>
  );
}
