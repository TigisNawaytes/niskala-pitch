import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';
import RaceBar from '../components/RaceBar';

export default function Slide07Kinetics() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Kinetics</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-2 text-[var(--foreground)]">
            The <span className="stat-gradient">Time</span> Dimension
          </h2>
          <p className="text-lg font-light text-[var(--muted-foreground)] mb-8 tracking-tight">
            of Crystallization
          </p>
        </FragmentReveal>

        <FragmentReveal delay={0.15}>
          <p className="text-[var(--muted-foreground)] text-base sm:text-lg max-w-3xl mb-6 leading-relaxed">
            Thermodynamics tells you <em>if</em> it scales. Kinetics tells you{' '}
            <em>when</em> — and whether your system outruns the crystal.
          </p>
        </FragmentReveal>

        <div className="grid md:grid-cols-2 gap-5">
          <FragmentReveal delay={0.3} from="left">
            <CardPitch accentColor="#a78bfa">
              <h3 className="text-lg font-bold mb-1 text-niskala-violet">N-CNT Kinetic Model</h3>
              <p className="text-[0.75rem] text-[var(--muted-foreground)] mb-4 leading-relaxed">
                Dai et al. (2021) — classical nucleation theory
              </p>
              <div className="formula-block">
                <div className="formula-block-header">Kinetic equations</div>
                <div className="formula-block-body space-y-1">
                  <div>
                    t<sub>ind</sub> = f(&sigma;, T, SI, inhibitor)
                  </div>
                  <div>
                    &sigma;<sub>eff</sub> = &sigma; &times; (1 + &alpha;&middot;&theta;)
                  </div>
                  <div>
                    &theta; = K&middot;C / (1 + K&middot;C)
                  </div>
                </div>
              </div>
            </CardPitch>
          </FragmentReveal>

          <FragmentReveal delay={0.45} from="right">
            <CardPitch accentColor="#10b981">
              <h3 className="text-lg font-bold mb-3 text-niskala-safe">Safety Criterion</h3>

              <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl px-5 py-4 mb-4 flex items-center justify-between gap-4">
                <code className="font-mono text-base sm:text-xl font-bold text-[var(--foreground)] tracking-tight">
                  t<sub>ind</sub> &ge; 1.2 &times; T<sub>res</sub>
                </code>
                <span className="badge-safe shrink-0">
                  <i className="fas fa-check text-[0.5rem]" /> SAFE
                </span>
              </div>

              <div className="mb-1 flex items-center justify-between text-[0.6rem] text-[var(--muted-foreground)] font-semibold uppercase tracking-wider px-0.5">
                <span>TIME</span>
                <span>FASTER CRYSTAL →</span>
              </div>

              <div className="space-y-1">
                <RaceBar
                  label="Residence Time T_res"
                  value="8.2"
                  unit="hr"
                  target={45}
                  color="#f59e0b"
                  inView={true}
                />
                <RaceBar
                  label="Induction Time t_ind (inhibited)"
                  value="12.6"
                  unit="hr"
                  target={68}
                  color="#10b981"
                  inView={true}
                />
              </div>

              <div className="mt-3 pt-3 border-t border-[var(--border)] flex items-center justify-between">
                <p className="text-[0.7rem] text-niskala-safe font-semibold">
                  t<sub>ind</sub> / T<sub>res</sub> = 1.54&times; &mdash; Kinetic margin safe
                </p>
                <i className="fas fa-shield-alt text-niskala-safe text-sm opacity-60" />
              </div>
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
