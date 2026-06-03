import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const stats = [
  {
    icon: 'fa-bolt',
    number: '15–40',
    unit: '%',
    label: 'Energy Penalty',
    detail: '0.5 mm CaCO₃ scale → 15-40% heat transfer loss',
    blob: 'radial-gradient(ellipse at 30% 40%, #ef444420 0%, transparent 70%)',
  },
  {
    icon: 'fa-dollar-sign',
    number: '$46B',
    unit: null,
    label: 'Annual Cost (US)',
    detail: 'Corrosion + scaling in industrial water systems',
    blob: 'radial-gradient(ellipse at 70% 30%, #ef444418 0%, transparent 70%)',
  },
  {
    icon: 'fa-vial',
    number: '3–5×',
    unit: null,
    label: 'Over-Dosing',
    detail: 'Blind chemical dosing wastes 3-5× needed inhibitor',
    blob: 'radial-gradient(ellipse at 50% 60%, #ef444415 0%, transparent 70%)',
  },
];

export default function Slide01Cost() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>The Problem</SectionLabel>

        <FragmentReveal delay={0}>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight leading-[1.05] mb-8 text-[var(--foreground)]">
            Scaling Is <span className="stat-gradient">Expensive</span>
          </h2>
        </FragmentReveal>

        <FragmentReveal delay={0.1}>
          <p className="text-[var(--muted-foreground)] text-base sm:text-lg max-w-3xl mb-6 leading-relaxed">
            Mineral scale formation on heat transfer surfaces and membranes costs the industry
            billions annually in energy penalties, chemical waste, and unplanned downtime.
          </p>
        </FragmentReveal>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <FragmentReveal key={stat.label} delay={0.25 + i * 0.15} from="scale">
              <CardPitch accentColor="#ef4444">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: stat.blob }}
                />
                <div className="relative flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #ef444418 0%, #ef444408 100%)' }}
                  >
                    <i className={`fas ${stat.icon} text-[#ef4444] text-base`} />
                  </div>

                  <div className="flex items-end gap-1 leading-none">
                    <span
                      className="stat-gradient font-black"
                      style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', lineHeight: 1 }}
                    >
                      {stat.number}
                    </span>
                    {stat.unit && (
                      <span className="text-[var(--muted-foreground)] font-normal text-2xl mb-1">{stat.unit}</span>
                    )}
                  </div>

                  <h3 className="text-[var(--foreground)] font-bold text-base">{stat.label}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">{stat.detail}</p>
                </div>
              </CardPitch>
            </FragmentReveal>
          ))}
        </div>

        <FragmentReveal delay={0.7}>
          <div className="mt-8">
            <div className="subtle-divider mb-4" />
            <p className="text-[var(--muted-foreground)] text-xs text-center tracking-wide">
              Sources: NACE IMPACT Study (2016) · MacAdam &amp; Parsons (2004) · Ahmed et al. (2024)
            </p>
          </div>
        </FragmentReveal>
      </div>
    </div>
  );
}
