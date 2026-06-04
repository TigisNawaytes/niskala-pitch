import { useState } from 'react';
import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const PIPELINE = [
  { id: 'input', label: 'Water Quality', sub: 'Input', icon: 'fa-water', color: '#5170ff' },
  { id: 'balance', label: 'CBE Ionic', sub: 'Balance', icon: 'fa-balance-scale', color: '#a78bfa' },
  { id: 'mass', label: 'Mass Balance', sub: 'RO / CT', icon: 'fa-calculator', color: '#f59e0b' },
  { id: 'phreeqc', label: 'PHREEQC', sub: 'Scale Read', icon: 'fa-atom', color: '#14b8a6' },
  { id: 'condition', label: 'System', sub: 'Condition', icon: 'fa-clipboard-check', color: '#6366f1' },
  { id: 'optimization', label: 'Optimization', sub: 'Strategy', icon: 'fa-bullseye', color: '#ef4444' },
];

const RO_MODES = [
  { label: 'pH Adjustment', icon: 'fa-sliders-h', desc: 'Adjust feed pH to reduce SI' },
  { label: 'Antiscalant', icon: 'fa-shield-alt', desc: 'Dose phosphonate inhibitor' },
  { label: 'Hybrid', icon: 'fa-layer-group', desc: 'pH + AS combined strategy' },
  { label: 'Recovery', icon: 'fa-chart-line', desc: 'Optimize recovery limit' },
];

const CT_MODES = [
  { label: 'pH Adjustment', icon: 'fa-sliders-h', desc: 'Control alkalinity & pH' },
  { label: 'Antiscalant', icon: 'fa-shield-alt', desc: 'Polymeric dispersant dose' },
  { label: 'Hybrid', icon: 'fa-layer-group', desc: 'pH + AS combined strategy' },
  { label: 'COC Reduction', icon: 'fa-compress-arrows-alt', desc: 'Lower cycles of concentration' },
];

export default function Slide09OneEngine() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Application</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[1.8rem] sm:text-[2.4rem] font-black tracking-tight leading-[1.05] mb-4 text-[var(--foreground)]">
            One <span className="stat-gradient">Engine</span>, Two Systems
          </h2>
          <p className="text-[0.82rem] text-[var(--muted-foreground)] mb-5 max-w-3xl">
            Shared PHREEQC thermodynamic core. Same ionic balance, same scale detection — two different physics models for RO membrane and Cooling Tower.
          </p>
        </FragmentReveal>

        {/* ── Pipeline Flowchart ── */}
        <FragmentReveal delay={0.1}>
          <div className="flex items-stretch gap-1.5 sm:gap-2 mb-4 overflow-x-auto pb-1">
            {PIPELINE.map((node, i) => (
              <div key={node.id} className="flex items-center">
                <button
                  onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                  className={`relative flex flex-col items-center text-center px-2.5 py-2.5 rounded-lg border transition-all duration-200 min-w-[90px] sm:min-w-[110px] ${
                    activeNode === node.id
                      ? 'shadow-md scale-105'
                      : 'hover:shadow-sm'
                  }`}
                  style={{
                    background: activeNode === node.id ? `${node.color}08` : 'rgba(255,255,255,0.6)',
                    borderColor: activeNode === node.id ? `${node.color}40` : '#e4e4e7',
                    borderBottomWidth: '3px',
                    borderBottomColor: node.color,
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center mb-1"
                    style={{ background: `${node.color}12` }}
                  >
                    <i className={`fas ${node.icon}`} style={{ color: node.color, fontSize: '0.65rem' }} />
                  </div>
                  <span className="text-[0.65rem] font-bold text-[var(--foreground)] leading-tight">{node.label}</span>
                  <span className="text-[0.55rem] text-[var(--muted-foreground)]">{node.sub}</span>
                </button>

                {i < PIPELINE.length - 1 && (
                  <div className="flex flex-col items-center px-0.5 sm:px-1">
                    <i className="fas fa-chevron-right text-[0.45rem] text-[#a78bfa]/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </FragmentReveal>

        {/* ── Split: RO | CT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* RO Column */}
          <FragmentReveal delay={0.2} from="left">
            <CardPitch accentColor="#5170ff" className="!p-3">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#5170ff]/10 flex items-center justify-center border border-[#5170ff]/20">
                  <i className="fas fa-water text-[#5170ff] text-xs" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#5170ff]">NiskalaRO</h3>
                  <p className="text-[0.6rem] text-[var(--muted-foreground)]">Reverse Osmosis · 4 Optimization Modes</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {RO_MODES.map((mode, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-[#e4e4e7] p-2.5 hover:border-[#5170ff]/30 transition-colors bg-white/60"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <i className={`fas ${mode.icon} text-[#5170ff] text-[0.6rem]`} />
                      <span className="text-[0.7rem] font-bold text-[var(--foreground)]">{mode.label}</span>
                    </div>
                    <p className="text-[0.6rem] text-[var(--muted-foreground)] leading-snug">{mode.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 pt-2 border-t border-[var(--border)]">
                <div className="flex items-center justify-between text-[0.6rem]">
                  <span className="text-[var(--muted-foreground)]">Physics Model</span>
                  <span className="font-mono font-bold text-[#5170ff]">6×12 Cell ROSSpy</span>
                </div>
              </div>
            </CardPitch>
          </FragmentReveal>

          {/* CT Column */}
          <FragmentReveal delay={0.2} from="right">
            <CardPitch accentColor="#14b8a6" className="!p-3">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#14b8a6]/10 flex items-center justify-center border border-[#14b8a6]/20">
                  <i className="fas fa-temperature-high text-[#14b8a6] text-xs" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#14b8a6]">NiskalaCT</h3>
                  <p className="text-[0.6rem] text-[var(--muted-foreground)]">Cooling Tower · 4 Optimization Modes</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {CT_MODES.map((mode, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-[#e4e4e7] p-2.5 hover:border-[#14b8a6]/30 transition-colors bg-white/60"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <i className={`fas ${mode.icon} text-[#14b8a6] text-[0.6rem]`} />
                      <span className="text-[0.7rem] font-bold text-[var(--foreground)]">{mode.label}</span>
                    </div>
                    <p className="text-[0.6rem] text-[var(--muted-foreground)] leading-snug">{mode.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 pt-2 border-t border-[var(--border)]">
                <div className="flex items-center justify-between text-[0.6rem]">
                  <span className="text-[var(--muted-foreground)]">Physics Model</span>
                  <span className="font-mono font-bold text-[#14b8a6]">Well-Mixed COC</span>
                </div>
              </div>
            </CardPitch>
          </FragmentReveal>
        </div>

        {/* ── Core Engine Label ── */}
        <FragmentReveal delay={0.4}>
          <div className="flex justify-center mt-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.65rem] font-medium text-[var(--muted-foreground)] bg-[var(--card)] border border-[var(--border)]">
              <i className="fas fa-atom text-[#a78bfa] text-[0.55rem]" />
              Shared: PHREEQC Pitzer/Davies + 7-mineral database + N-CNT kinetics
            </span>
          </div>
        </FragmentReveal>
      </div>
    </div>
  );
}
