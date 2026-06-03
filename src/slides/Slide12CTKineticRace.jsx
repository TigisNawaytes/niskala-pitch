import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';
import RaceBar from '../components/RaceBar';

export default function Slide12CTKineticRace() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative dot-grid-brand">
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[350px] h-[350px] rounded-full blur-3xl glow-blob-ct" />
      <div className="pointer-events-none absolute bottom-0 -right-20 w-[300px] h-[300px] rounded-full blur-3xl glow-blob-brand" />

      <div className="relative z-10 max-w-5xl w-full">
        <SectionLabel color="#14b8a6">NiskalaCT</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6">
            Kinetic <span className="text-niskala-ct">Race</span>: Time vs. Crystal
          </h2>
        </FragmentReveal>

        <div className="subtle-divider mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">

            <FragmentReveal delay={0.1} from="left">
              <CardPitch accentColor="#ef4444">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ef4444]/10 flex items-center justify-center border border-[#ef4444]/20 shrink-0">
                    <i className="fas fa-exclamation-triangle text-[#ef4444] text-xs" />
                  </div>
                  <h3 className="text-base font-bold text-[#ef4444]">Without Treatment</h3>
                </div>
                <RaceBar
                  label="Residence Time T_res"
                  value="6.5"
                  unit="hr"
                  target={52}
                  color="#f59e0b"
                  inView={true}
                />
                <RaceBar
                  label="Induction Time t_ind (natural)"
                  value="2.1"
                  unit="hr"
                  target={17}
                  color="#ef4444"
                  inView={true}
                />
                <div className="flex justify-center mt-2">
                  <span className="badge-danger">
                    <i className="fas fa-times-circle" />
                    RISK — crystal forms before water leaves
                  </span>
                </div>
              </CardPitch>
            </FragmentReveal>

            <div className="flex items-center justify-center gap-2 py-1">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e4e4e7] to-transparent" />
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass" style={{ borderColor: 'rgba(16,185,129,0.2)' }}>
                <i className="fas fa-arrow-down text-[#10b981] text-[0.55rem]" />
                <span className="text-[0.58rem] font-semibold text-[#10b981] tracking-wide uppercase">Treatment Added</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e4e4e7] to-transparent" />
            </div>

            <FragmentReveal delay={0.2} from="left">
              <CardPitch accentColor="#10b981">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 flex items-center justify-center border border-[#10b981]/20 shrink-0">
                    <i className="fas fa-shield-alt text-[#10b981] text-xs" />
                  </div>
                  <h3 className="text-base font-bold text-[#10b981]">With Phosphonate 3 ppm</h3>
                </div>
                <RaceBar
                  label="Residence Time T_res"
                  value="6.5"
                  unit="hr"
                  target={52}
                  color="#f59e0b"
                  inView={true}
                />
                <RaceBar
                  label="Induction Time t_ind (inhibited)"
                  value="9.8"
                  unit="hr"
                  target={78}
                  color="#10b981"
                  inView={true}
                />
                <div className="flex justify-center mt-2">
                  <span className="badge-safe">
                    <i className="fas fa-check-circle" />
                    SAFE — t<sub>ind</sub>/T<sub>res</sub> = 1.51&times;
                  </span>
                </div>
              </CardPitch>
            </FragmentReveal>
          </div>

          <FragmentReveal delay={0.15} from="right">
            <CardPitch className="h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#14b8a6]/10 flex items-center justify-center border border-[#14b8a6]/20 shrink-0">
                  <i className="fas fa-gem text-niskala-ct text-xs" />
                </div>
                <h3 className="text-base font-bold">Most Critical Mineral: Calcite</h3>
              </div>

              <div className="grid grid-cols-3 gap-3 my-5">
                {[
                  { sym: 'σ', val: '0.094', unit: 'J/m²', label: 'Surface energy' },
                  { sym: 'K', val: '5.0',   unit: 'ppm⁻¹', label: 'Inhibition const' },
                  { sym: 'α', val: '0.040', unit: '',       label: 'Efficiency exp' },
                ].map(({ sym, val, unit, label }) => (
                  <div
                    key={sym}
                    className="flex flex-col items-center justify-center rounded-xl py-4 px-2 border"
                    style={{ background: 'rgba(20,184,166,0.04)', borderColor: 'rgba(20,184,166,0.15)' }}
                  >
                    <div className="font-mono text-2xl font-bold text-niskala-ct mb-1">{sym}</div>
                    <div className="font-mono text-sm font-bold text-[#0a0a0a] leading-tight">{val}</div>
                    {unit && <div className="font-mono text-[0.55rem] text-[#71717a] mt-0.5">{unit}</div>}
                    <div className="text-[0.5rem] text-[#71717a] text-center mt-2 leading-tight">{label}</div>
                  </div>
                ))}
              </div>

              <div className="subtle-divider my-4" />

              <div className="formula-block">
                <div className="formula-block-header">Kinetic model</div>
                <div className="formula-block-body text-[0.65rem]">
                  t<sub>ind</sub> = f(&sigma;, SI, K, &alpha;, dose)
                </div>
              </div>

              <p className="text-[0.62rem] text-[#71717a] text-center mt-4 italic leading-relaxed">
                Parameters from kinetic_params.json, calibrated from Dai Table 2
              </p>
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
