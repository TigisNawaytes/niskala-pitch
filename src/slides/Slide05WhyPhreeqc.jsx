import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const credentials = [
  {
    icon: 'fa-building',
    iconColor: '#5170ff',
    bg: 'rgba(81,112,255,0.06)',
    border: 'rgba(81,112,255,0.18)',
    title: 'USGS Origin',
    body: 'Developed by David Parkhurst at USGS since 1980. Built to simulate field data and laboratory experiments — not an academic prototype.',
  },
  {
    icon: 'fa-globe',
    iconColor: '#14b8a6',
    bg: 'rgba(20,184,166,0.06)',
    border: 'rgba(20,184,166,0.18)',
    title: 'Global Validation',
    body: 'Used worldwide for 20+ years to predict long-term effects of pollution, radioactive waste storage, and mineral scaling.',
  },
  {
    icon: 'fa-book',
    iconColor: '#a78bfa',
    bg: 'rgba(167,139,250,0.06)',
    border: 'rgba(167,139,250,0.18)',
    title: 'Academic Standard',
    body: 'Integrated into Appelo & Postma (2005), the standard geochemistry textbook. Mineral equilibration, speciation, and kinetics all traceable.',
  },
  {
    icon: 'fa-flask',
    iconColor: '#f59e0b',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.18)',
    title: 'Scaling-Specific',
    body: 'Pitzer & Davies activity models, aqueous complexation, and mineral precipitation kinetics — validated against measured SI data.',
  },
];

export default function Slide05WhyPhreeqc() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Engine</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-2 text-[var(--foreground)]">
            PHREEQC — The <span className="stat-gradient">Reference</span> Scale Engine
          </h2>
          <p className="text-lg font-light text-[var(--muted-foreground)] mb-8 tracking-tight">
            Why the world's geochemists trust it — and why Niskala builds on it
          </p>
        </FragmentReveal>

        {/* 4 Credential Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {credentials.map((cred, i) => (
            <FragmentReveal key={cred.title} delay={0.12 + i * 0.1} from="bottom">
              <CardPitch className="h-full">
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      background: cred.bg,
                      borderColor: cred.border,
                    }}
                  >
                    <i className={`fas ${cred.icon}`} style={{ color: cred.iconColor, fontSize: '14px' }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--foreground)] mb-1">
                      {cred.title}
                    </h3>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      {cred.body}
                    </p>
                  </div>
                </div>
              </CardPitch>
            </FragmentReveal>
          ))}
        </div>

        {/* Appelo Quote */}
        <FragmentReveal delay={0.55}>
          <div className="relative rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-5 overflow-hidden">
            {/* Decorative left accent */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: 'linear-gradient(to bottom, #5170ff, #a78bfa)' }}
            />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#5170ff]/10 flex items-center justify-center shrink-0 border border-[#5170ff]/20">
                <i className="fas fa-book-open text-niskala-brand text-sm" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm italic text-[var(--muted-foreground)] leading-relaxed mb-2">
                  &ldquo;PHREEQC encompasses over 20 years of experience in modeling water quality.
                  The code is used all over the world in research and to predict the long-term effects
                  of pollution and radioactive waste storage.&rdquo;
                </p>
                <p className="text-xs font-semibold text-[var(--foreground)]">
                  Appelo &amp; Postma (2005){' '}
                  <span className="font-normal text-[var(--muted-foreground)]">
                    — <em>Geochemistry, Groundwater and Pollution</em>, 2nd Ed.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </FragmentReveal>
      </div>
    </div>
  );
}
