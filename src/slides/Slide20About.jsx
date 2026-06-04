import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const products = [
  {
    dot: 'bg-[#5170ff]',
    border: 'border-l-[#5170ff]',
    icon: 'fa-flask',
    iconColor: 'text-niskala-brand',
    name: 'NiskalaRO',
    desc: 'Reverse Osmosis antiscalant optimizer',
  },
  {
    dot: 'bg-[#14b8a6]',
    border: 'border-l-[#14b8a6]',
    icon: 'fa-temperature-high',
    iconColor: 'text-niskala-ct',
    name: 'NiskalaCT',
    desc: 'Cooling tower chemistry engine',
  },
  {
    dot: 'bg-[#a78bfa]',
    border: 'border-l-[#a78bfa]',
    icon: 'fa-vial',
    iconColor: 'text-niskala-violet',
    name: 'NiskalaPure',
    desc: 'Kinetic laboratory tool',
  },
];

export default function Slide20About() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>About</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6 text-[var(--foreground)]">
            Built by a <span className="stat-gradient">Chemist</span>, for{' '}
            <span className="stat-gradient">Chemists</span>
          </h2>
        </FragmentReveal>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <FragmentReveal delay={0.1}>
            <CardPitch accentColor="#5170ff">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5170ff]/20 to-[#5170ff]/5 border border-[#5170ff]/20 flex items-center justify-center shrink-0 shadow-sm">
                    <i className="fas fa-hard-hat text-niskala-brand text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight text-[var(--foreground)]">Sigit Setyawan</h3>
                    <p className="text-[var(--muted-foreground)] text-sm mt-0.5">Power Plant Chemist Engineer</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                      <span className="text-[10px] text-[var(--muted-foreground)] font-medium">Available for partnership</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2.5 text-[var(--muted-foreground)] text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-niskala-brand mt-1.5 shrink-0" />
                    10+ years power plant ops
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-niskala-brand mt-1.5 shrink-0" />
                    Water chemistry specialist
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-niskala-brand mt-1.5 shrink-0" />
                    RO/CT/steam cycle expertise
                  </li>
                </ul>
              </div>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.2}>
            <CardPitch accentColor="#a78bfa">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-base text-[var(--foreground)]">Niskala Platform — Products Built</h3>
                <div className="space-y-2">
                  {products.map((p) => (
                    <div
                      key={p.name}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] border-l-4 ${p.border} shadow-sm`}
                    >
                      <i className={`fas ${p.icon} ${p.iconColor} text-base w-5 text-center`} />
                      <div>
                        <p className="text-sm font-bold text-[var(--foreground)] leading-tight">{p.name}</p>
                        <p className="text-[10px] text-[var(--muted-foreground)]">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardPitch>
          </FragmentReveal>
        </div>

        <FragmentReveal delay={0.35}>
          <CardPitch className="max-w-2xl mx-auto text-center">
            <div className="text-[5rem] leading-none text-niskala-brand/10 font-serif absolute -top-4 -left-2 select-none">&ldquo;</div>
            <p className="text-[var(--foreground)] italic text-base sm:text-lg leading-relaxed font-medium px-8 relative z-10">
              &ldquo;I built Niskala to give engineers the tools to verify, understand, and trust
              every chemical recommendation. Physics doesn&rsquo;t lie — and neither should
              your software.&rdquo;
            </p>
            <div className="text-[5rem] leading-none text-niskala-brand/10 font-serif absolute -bottom-8 -right-2 select-none rotate-180">&ldquo;</div>
            <p className="text-[var(--muted-foreground)] text-xs font-semibold mt-3 uppercase tracking-wider">
              &mdash; Sigit Setyawan
            </p>
          </CardPitch>
        </FragmentReveal>
      </div>
    </div>
  );
}
