import { useState } from 'react';
import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';
import KineticCanvas from '../components/KineticCanvas';

export default function Slide04IonsToRisk() {
  const [phase, setPhase] = useState(null);

  const phaseColors = {
    'Undersaturated': '#5170ff',
    'Evaporation': '#f59e0b',
    'Supersaturated': '#ef4444',
    'Precipitation': '#a78bfa',
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-hero-pattern" />
      <div className="absolute inset-0 pointer-events-none bg-radial-brand" />
      <div className="absolute inset-0 pointer-events-none bg-radial-fade" />

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <SectionLabel>Science</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-4">
            From Ions to <span className="stat-gradient">Scaling Risk</span>
          </h2>
        </FragmentReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {/* Left: Kinetic Canvas */}
          <FragmentReveal delay={0.1} from="left">
            <div className="h-[420px]">
              <KineticCanvas onPhaseChange={setPhase} />
            </div>
          </FragmentReveal>

          {/* Right: Phase Info */}
          <div className="flex flex-col gap-3">
            <FragmentReveal delay={0.2} from="right">
              <CardPitch className="!p-4">
                <div className="text-center mb-3">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--muted-foreground)] mb-1">Reaction Kinetics</p>
                  <p className="font-mono text-lg font-bold text-[var(--foreground)]">Ca²⁺ + CO₃²⁻ ⇌ CaCO₃(s)</p>
                </div>

                {phase ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="block w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: phaseColors[phase.label] || '#71717a' }}
                      />
                      <span className="text-sm font-bold" style={{ color: phaseColors[phase.label] || '#0a0a0a' }}>
                        {phase.label}
                      </span>
                    </div>
                    <p className="text-[0.8rem] text-[var(--muted-foreground)] leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                ) : (
                  <p className="text-[0.8rem] text-[var(--muted-foreground)] leading-relaxed">
                    Click "Play" to start the calcite scaling simulation. Watch as ions transition from stable solution through evaporation and supersaturation to precipitation.
                  </p>
                )}
              </CardPitch>
            </FragmentReveal>

            {/* Legend */}
            <FragmentReveal delay={0.3} from="right">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { color: '#5170ff', label: 'Ca²⁺', sub: 'Calcium ion' },
                  { color: '#14b8a6', label: 'CO₃²⁻', sub: 'Carbonate ion' },
                  { color: '#94a3b8', label: 'CaCO₃', sub: 'Calcite scale' },
                ].map(item => (
                  <div key={item.label} className="bg-white border border-[#e4e4e7] rounded-lg p-2 text-center">
                    <span className="block w-3 h-3 rounded-full mx-auto mb-1" style={{ backgroundColor: item.color }} />
                    <p className="text-[0.65rem] font-mono font-bold text-[var(--foreground)]">{item.label}</p>
                    <p className="text-[0.55rem] text-[var(--muted-foreground)]">{item.sub}</p>
                  </div>
                ))}
              </div>
            </FragmentReveal>

            {/* SI Reference */}
            <FragmentReveal delay={0.4} from="right">
              <CardPitch className="!p-3">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--muted-foreground)] mb-2">Saturation Index Scale</p>
                <div className="space-y-1.5">
                  {[
                    { range: 'SI < 0', status: 'Under-saturated', color: '#10b981', bg: 'bg-[#10b981]/[0.04]' },
                    { range: '0 ≤ SI < 0.3', status: 'Metastable', color: '#f59e0b', bg: 'bg-[#f59e0b]/[0.04]' },
                    { range: 'SI ≥ 0.3', status: 'Supersaturated', color: '#ef4444', bg: 'bg-[#ef4444]/[0.04]' },
                  ].map(zone => (
                    <div key={zone.range} className={`flex items-center justify-between px-2.5 py-1.5 rounded-md ${zone.bg}`}>
                      <span className="text-[0.7rem] font-mono font-bold" style={{ color: zone.color }}>{zone.range}</span>
                      <span className="text-[0.7rem] text-[var(--foreground)]">{zone.status}</span>
                    </div>
                  ))}
                </div>
              </CardPitch>
            </FragmentReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
