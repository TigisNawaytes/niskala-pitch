import { motion } from 'framer-motion';
import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const elements = ['E1', 'E2', 'E3', 'E4', 'E5', 'E6'];
const leftBarHeights = [18, 26, 34, 44, 56, 70];

const heatmapData = [
  { label: 'E1', pct: 10,  color: '#10b981' },
  { label: 'E2', pct: 25,  color: '#84cc16' },
  { label: 'E3', pct: 40,  color: '#eab308' },
  { label: 'E4', pct: 58,  color: '#f59e0b' },
  { label: 'E5', pct: 80,  color: '#f97316' },
  { label: 'E6', pct: 95,  color: '#ef4444' },
];

const minerals = [
  { name: 'Calcite', active: true },
  { name: 'Gypsum',  active: false },
  { name: 'Barite',  active: false },
  { name: 'Silica',  active: false },
];

const MAX_HM_HEIGHT = 100;

export default function Slide10NiskalaRO() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full py-6">
        <SectionLabel color="#5170ff">NiskalaRO</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6 text-[var(--foreground)]">
            Membrane <span className="text-niskala-brand">Reactive Transport</span>
          </h2>
        </FragmentReveal>

        <div className="subtle-divider mb-5" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <FragmentReveal delay={0.1} from="left">
              <CardPitch accentColor="#5170ff">
                <h3 className="text-lg font-bold mb-4 text-[var(--foreground)]">6-Element &times; 12-Cell Model</h3>

                <div className="flex items-end justify-center gap-3 mb-1" style={{ height: 84 }}>
                  {elements.map((el, i) => (
                    <div key={el} className="flex flex-col items-center gap-1">
                      <motion.div
                        className="w-8 rounded-t-md"
                        style={{
                          background: `linear-gradient(180deg, #5170ff${Math.round(40 + i * 18).toString(16).padStart(2,'0')} 0%, #5170ff 100%)`,
                        }}
                        initial={{ height: 0 }}
                        whileInView={{ height: leftBarHeights[i] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-3 mb-1">
                  {elements.map((el) => (
                    <div key={el} className="w-8 text-center">
                      <span className="text-[0.58rem] font-mono text-[var(--muted-foreground)]">{el}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between px-1 mb-3">
                  <span className="text-[0.55rem] font-mono text-[var(--muted-foreground)]">Inlet</span>
                  <div className="flex-1 mx-2 border-t border-dashed border-[var(--border)]" />
                  <span className="text-[0.55rem] font-mono text-[var(--muted-foreground)]">Concentrate</span>
                </div>

                <p className="text-[0.72rem] text-[var(--muted-foreground)] leading-relaxed">
                  Concentration Factor increases linearly along elements &rarr; scaling risk
                  concentrates at the tail.
                </p>
              </CardPitch>
            </FragmentReveal>

            <FragmentReveal delay={0.2} from="left">
              <CardPitch>
                <h3 className="text-lg font-bold mb-3 text-[var(--foreground)]">Key Equations</h3>
                <div className="formula-block">
                  <div className="formula-block-header">Kinetics</div>
                  <div className="formula-block-body">
                    <div>CF<sub>i</sub> = <span className="text-niskala-brand">J</span><sub>w,i</sub> &middot; C<sub>f,i</sub> / J<sub>s,i</sub></div>
                    <div>SI<sub>wall</sub> = SI<sub>bulk</sub> &times; CPF</div>
                    <div>SI<sub>eff</sub> = SI<sub>membrane</sub> &minus; &Delta;SI<sub>max</sub></div>
                    <div className="pl-4">&times; (1 &minus; e<sup>&minus;k&middot;dose</sup>) &times; 0.8</div>
                  </div>
                </div>
              </CardPitch>
            </FragmentReveal>
          </div>

          <FragmentReveal delay={0.15} from="right">
            <CardPitch className="h-full">
              <h3 className="text-lg font-bold mb-3 text-[var(--foreground)]">Surface Loading Heatmap</h3>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {minerals.map((m) => (
                  <span
                    key={m.name}
                    className={`px-2.5 py-0.5 rounded-full text-[0.6rem] font-semibold cursor-pointer transition-colors ${
                      m.active
                        ? 'bg-niskala-brand text-white shadow-sm'
                        : 'bg-[var(--card)] text-[var(--muted-foreground)] border border-[var(--border)]'
                    }`}
                  >
                    {m.name}
                  </span>
                ))}
              </div>

              <div className="flex items-end justify-center gap-3 mb-1" style={{ height: MAX_HM_HEIGHT + 8 }}>
                {heatmapData.map((d, i) => (
                  <div key={d.label} className="flex flex-col items-center gap-1">
                    <span className="text-[0.55rem] font-mono text-[var(--muted-foreground)]">{d.pct}%</span>
                    <motion.div
                      className="w-9 rounded-t-md"
                      style={{ background: `linear-gradient(180deg, ${d.color}99 0%, ${d.color} 100%)` }}
                      initial={{ height: 0 }}
                      whileInView={{ height: Math.round((d.pct / 100) * MAX_HM_HEIGHT) }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 mb-1">
                {heatmapData.map((d) => (
                  <div key={d.label} className="w-9 text-center">
                    <span className="text-[0.58rem] font-mono text-[var(--muted-foreground)]">{d.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between px-1 mb-3">
                <span className="text-[0.55rem] font-mono text-[var(--muted-foreground)]">Inlet</span>
                <div className="flex-1 mx-2 border-t border-dashed border-[var(--border)]" />
                <span className="text-[0.55rem] font-mono text-[var(--muted-foreground)]">Concentrate</span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-[0.55rem] text-[var(--muted-foreground)] font-mono">Low</span>
                <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-[#10b981] via-[#eab308] to-[#ef4444]" />
                <span className="text-[0.55rem] text-[var(--muted-foreground)] font-mono">High</span>
              </div>

              <div className="subtle-divider my-3" />

              <p className="text-[0.72rem] text-[var(--muted-foreground)] leading-relaxed">
                <span className="text-[#ef4444] font-semibold">Element 5&ndash;6</span>: highest scaling
                risk &mdash; requires targeted inhibitor dosing
              </p>
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
