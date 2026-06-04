import { useState } from 'react';
import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';
import ROTransportCanvas from '../components/ROTransportCanvas';

const SCENES = [
  {
    title: 'Feed Water Entry',
    desc: 'Dilute feed enters the RO vessel. Ca²⁺ and CO₃²⁻ ions flow freely. Concentration Factor (CF) is low.',
    color: '#5170ff',
  },
  {
    title: 'Linear Concentration Buildup',
    desc: 'Pure water permeates through the membrane. Solvent volume drops sharply, causing extreme ion concentration spike in the retained stream.',
    color: '#f59e0b',
  },
  {
    title: 'Precipitation Onset',
    desc: 'Ion Product exceeds solubility limit (Supersaturated). Ca²⁺ and CO₃²⁻ collide and freeze into solid scale — an Immobile Entity.',
    color: '#ef4444',
  },
  {
    title: 'Mass Transport Shift',
    desc: 'Scales disappear from the mobile mass flow. Water crossing to downstream cells is already "depleted" of scaling precursors.',
    color: '#a78bfa',
  },
  {
    title: 'ROSSpy Prediction Profile',
    desc: 'Smart tracking of mass transport per ion layer-by-layer. Peak scale deposits at the first saturation point, not naive static extrapolation.',
    color: '#14b8a6',
  },
];

const LEGEND = [
  { color: '#5170ff', label: 'H₂O', sub: 'Water molecule' },
  { color: '#ef4444', label: 'Ca²⁺', sub: 'Calcium ion' },
  { color: '#f59e0b', label: 'CO₃²⁻', sub: 'Carbonate ion' },
  { color: '#94a3b8', label: 'CaCO₃', sub: 'Calcite scale' },
];

export default function Slide06ROTransport() {
  const [scene, setScene] = useState(0);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Foundation</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] font-black tracking-tight leading-[1.1] mb-1 text-[var(--foreground)]">
            1D Mass <span className="stat-gradient">Transport</span>
          </h2>
          <p className="text-[0.82rem] text-[var(--muted-foreground)] mb-4 tracking-tight">
            5-scene visualization of ion concentration, permeation, and scale formation across 6 cells.
          </p>
        </FragmentReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5 items-start">
          {/* Left: Canvas */}
          <FragmentReveal delay={0.1}>
            <div className="h-[420px]">
              <ROTransportCanvas onSceneChange={setScene} />
            </div>
          </FragmentReveal>

          {/* Right: Info panel */}
          <div className="flex flex-col gap-3">
            <FragmentReveal delay={0.2} from="right">
              <CardPitch className="!p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="block w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: SCENES[scene]?.color || '#71717a' }}
                  />
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--muted-foreground)]">
                    Scene {scene + 1} / {SCENES.length}
                  </p>
                </div>
                <h3 className="text-base font-bold text-[var(--foreground)] mb-1.5">
                  {SCENES[scene]?.title}
                </h3>
                <p className="text-[0.8rem] text-[var(--muted-foreground)] leading-relaxed">
                  {SCENES[scene]?.desc}
                </p>
              </CardPitch>
            </FragmentReveal>

            {/* Legend */}
            <FragmentReveal delay={0.3} from="right">
              <div className="grid grid-cols-2 gap-2">
                {LEGEND.map(item => (
                  <div key={item.label} className="bg-white border border-[#e4e4e7] rounded-lg p-2 flex items-center gap-2">
                    <span className="block w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                    <div className="min-w-0">
                      <p className="text-[0.65rem] font-mono font-bold text-[var(--foreground)]">{item.label}</p>
                      <p className="text-[0.55rem] text-[var(--muted-foreground)] truncate">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FragmentReveal>

            {/* Key concept */}
            <FragmentReveal delay={0.4} from="right">
              <CardPitch className="!p-3">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--muted-foreground)] mb-2">Core Concept</p>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#5170ff]/[0.04]">
                    <span className="text-[0.7rem] font-mono text-[#5170ff]">CF = C<sub>brine</sub>/C<sub>feed</sub></span>
                    <span className="text-[0.65rem] text-[var(--muted-foreground)]">↑ 1 → 4.5</span>
                  </div>
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#ef4444]/[0.04]">
                    <span className="text-[0.7rem] font-mono text-[#ef4444]">Peak Scale</span>
                    <span className="text-[0.65rem] text-[var(--muted-foreground)]">Cell 2–3</span>
                  </div>
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#a78bfa]/[0.04]">
                    <span className="text-[0.7rem] font-mono text-[#a78bfa]">Immobile</span>
                    <span className="text-[0.65rem] text-[var(--muted-foreground)]">CaCO₃(s)</span>
                  </div>
                </div>
              </CardPitch>
            </FragmentReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
