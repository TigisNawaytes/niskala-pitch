import { motion } from 'framer-motion';
import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';
import ReactECharts from 'echarts-for-react';

const cocChartOption = {
  grid: { left: 40, right: 16, top: 20, bottom: 36 },
  xAxis: {
    type: 'category',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    axisLabel: { fontSize: 9, color: '#71717a' },
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { lineStyle: { color: '#f4f4f5' } },
  },
  yAxis: {
    type: 'value',
    axisLabel: { fontSize: 9, color: '#71717a' },
    splitLine: { lineStyle: { color: '#f4f4f5' } },
  },
  legend: {
    data: ['Calcite', 'Gypsum', 'Silica', 'Barite', 'HAP', 'Threshold'],
    bottom: 0,
    textStyle: { fontSize: 9, color: '#71717a' },
    itemWidth: 12,
    itemHeight: 8,
  },
  series: [
    {
      name: 'Calcite',
      type: 'line',
      smooth: true,
      symbol: 'none',
      data: [0.05, 0.22, 0.48, 0.73, 0.98, 1.22, 1.45, 1.67, 1.88, 2.08],
      lineStyle: { color: '#5170ff', width: 2 },
    },
    {
      name: 'Gypsum',
      type: 'line',
      smooth: true,
      symbol: 'none',
      data: [-0.8, -0.6, -0.4, -0.25, -0.1, 0.02, 0.12, 0.2, 0.28, 0.35],
      lineStyle: { color: '#f59e0b', width: 2 },
    },
    {
      name: 'Silica',
      type: 'line',
      smooth: true,
      symbol: 'none',
      data: [-0.5, -0.3, -0.15, 0, 0.12, 0.22, 0.3, 0.37, 0.43, 0.48],
      lineStyle: { color: '#a78bfa', width: 2 },
    },
    {
      name: 'Barite',
      type: 'line',
      smooth: true,
      symbol: 'none',
      data: [-0.2, 0.1, 0.35, 0.55, 0.72, 0.85, 0.98, 1.08, 1.18, 1.26],
      lineStyle: { color: '#14b8a6', width: 2 },
    },
    {
      name: 'HAP',
      type: 'line',
      smooth: false,
      symbol: 'none',
      data: [0.8, 1.3, 1.8, 2.3, 2.8, 3.3, 3.8, 4.3, 4.8, 5.3],
      lineStyle: { color: '#ef4444', width: 2, type: 'dashed' },
    },
    {
      name: 'Threshold',
      type: 'line',
      symbol: 'none',
      data: [1, 10].map(function (v) { return [v, 0.3]; }),
      lineStyle: { color: '#ef4444', width: 1.5, type: 'dotted' },
      z: 0,
    },
  ],
};

export default function Slide11NiskalaCT() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative dot-grid-brand">
      <div className="pointer-events-none absolute -top-28 -left-28 w-[420px] h-[420px] rounded-full blur-3xl glow-blob-ct" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-[360px] h-[360px] rounded-full blur-3xl glow-blob-brand" />

      <div className="relative z-10 max-w-5xl w-full">
        <SectionLabel color="#14b8a6">NiskalaCT</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6">
            Cooling Tower{' '}
            <span className="text-niskala-ct">Well-Mixed Model</span>
          </h2>
        </FragmentReveal>

        <div className="subtle-divider mb-5" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <FragmentReveal delay={0.1} from="left">
              <CardPitch accentColor="#14b8a6">
                <h3 className="font-bold text-base mb-4">Water Balance</h3>

                <div className="flex items-center gap-2 font-mono mb-4 flex-wrap">
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base"
                      style={{ background: 'rgba(81,112,255,0.12)', color: '#5170ff', border: '1px solid rgba(81,112,255,0.25)' }}
                    >
                      MU
                    </span>
                    <span className="text-[0.5rem] text-[#71717a] font-sans">Make-up</span>
                  </div>

                  <span className="text-[#71717a] text-lg font-bold self-start mt-2">=</span>

                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base"
                      style={{ background: 'rgba(20,184,166,0.12)', color: '#14b8a6', border: '1px solid rgba(20,184,166,0.25)' }}
                    >
                      Evap
                    </span>
                    <span className="text-[0.5rem] text-[#71717a] font-sans">Evaporation</span>
                  </div>

                  <span className="text-[#71717a] text-lg font-bold self-start mt-2">+</span>

                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base"
                      style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.25)' }}
                    >
                      BD
                    </span>
                    <span className="text-[0.5rem] text-[#71717a] font-sans">Blowdown</span>
                  </div>

                  <span className="text-[#71717a] text-lg font-bold self-start mt-2">+</span>

                  <div className="flex flex-col items-center gap-1">
                    <span
                      className="inline-flex items-center px-3 py-2 rounded-lg font-bold text-base"
                      style={{ background: 'rgba(167,139,250,0.12)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.25)' }}
                    >
                      Drift
                    </span>
                    <span className="text-[0.5rem] text-[#71717a] font-sans">Drift loss</span>
                  </div>
                </div>

                <p className="text-[#71717a] text-sm leading-relaxed">
                  COC = MU / BD — cycles of concentration drive ion buildup
                </p>
              </CardPitch>
            </FragmentReveal>

            <FragmentReveal delay={0.2} from="left">
              <CardPitch>
                <h3 className="font-bold text-base mb-4">Supply &rarr; Return Temperature Effect</h3>

                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="inline-flex flex-col items-center px-3 py-2 rounded-lg font-mono text-sm font-bold"
                    style={{ background: 'rgba(81,112,255,0.10)', color: '#5170ff', border: '1px solid rgba(81,112,255,0.2)' }}
                  >
                    <i className="fas fa-thermometer-quarter text-xs mb-1 opacity-70" />
                    Supply 30°C
                  </span>

                  <div className="flex-1 relative flex items-center">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-[#5170ff]/40 to-[#ef4444]/40" />
                    <motion.div
                      className="absolute left-0"
                      animate={{ left: ['0%', '80%'] }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                    >
                      <i className="fas fa-circle text-[#f59e0b] text-[0.35rem]" />
                    </motion.div>
                    <i className="fas fa-chevron-right text-[#ef4444]/60 text-[0.6rem] ml-1" />
                  </div>

                  <span
                    className="inline-flex flex-col items-center px-3 py-2 rounded-lg font-mono text-sm font-bold"
                    style={{ background: 'rgba(239,68,68,0.10)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.2)' }}
                  >
                    <i className="fas fa-thermometer-full text-xs mb-1 opacity-70" />
                    Return 40°C
                  </span>
                </div>

                <p className="text-[#71717a] text-sm leading-relaxed">
                  Higher return temperature reduces t<sub>ind</sub> — scaling risk increases at heat exchanger
                </p>
              </CardPitch>
            </FragmentReveal>
          </div>

          <FragmentReveal delay={0.15} from="right">
            <CardPitch className="h-full">
              <h3 className="font-bold text-base mb-3">COC Sensitivity Scan</h3>
              <div className="chart-box" style={{ height: 260 }}>
                <ReactECharts
                  option={cocChartOption}
                  style={{ height: '100%', width: '100%' }}
                  opts={{ renderer: 'svg' }}
                />
              </div>
              <p className="text-[#71717a] text-xs mt-3 leading-relaxed">
                COC 1 → 10: mineral SI increases non-linearly. Red zone = unsafe.
              </p>
              <div className="subtle-divider my-3" />
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt text-[#10b981] text-[0.7rem]" />
                <span className="text-[0.65rem] text-[#71717a]">
                  <span className="font-semibold text-[#10b981]">Maximum safe COC</span> found where all SI lines cross the dotted threshold
                </span>
              </div>
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
