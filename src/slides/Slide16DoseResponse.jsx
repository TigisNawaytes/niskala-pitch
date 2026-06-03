import ReactECharts from 'echarts-for-react';
import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const doseData = [0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 7, 10];
const siEffData = [1.27, 1.05, 0.82, 0.61, 0.44, 0.32, 0.24, 0.18, 0.15, 0.14, 0.14];

const chartOption = {
  grid: { left: 45, right: 20, top: 20, bottom: 30 },
  xAxis: {
    type: 'value',
    name: 'Dose (ppm)',
    nameTextStyle: { fontSize: 9, color: '#71717a' },
    axisLabel: { fontSize: 9, color: '#71717a' },
    splitLine: { show: false },
    min: 0,
    max: 11,
  },
  yAxis: {
    type: 'value',
    name: 'SI_eff',
    nameTextStyle: { fontSize: 9, color: '#71717a' },
    axisLabel: { fontSize: 9, color: '#71717a', formatter: (v) => v.toFixed(2) },
    splitLine: { color: '#f4f4f5', lineStyle: { type: 'dashed' } },
    min: 0,
    max: 1.4,
  },
  series: [
    {
      type: 'line',
      data: doseData.map((d, i) => [d, siEffData[i]]),
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      lineStyle: { color: '#5170ff', width: 2.5 },
      itemStyle: { color: '#5170ff' },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(81,112,255,0.25)' },
            { offset: 1, color: 'rgba(81,112,255,0.02)' },
          ],
        },
      },
      markLine: {
        silent: true,
        data: [
          {
            yAxis: 0.30,
            label: {
              formatter: 'Threshold 0.30',
              color: '#ef4444',
              fontSize: 9,
              position: 'insideEndTop',
            },
            lineStyle: { color: '#ef4444', type: 'dashed', width: 2 },
          },
        ],
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    formatter: (params) => {
      const p = params[0];
      return `<strong>Dose:</strong> ${p.data[0]} ppm<br/><strong>SI<sub>eff</sub>:</strong> ${p.data[1].toFixed(3)}`;
    },
  },
};

export default function Slide16DoseResponse() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative dot-grid-brand">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none glow-blob-brand" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none glow-blob-ct" />

      <div className="relative z-10 max-w-5xl w-full">
        <SectionLabel>Model</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6">
            Empirical <span className="stat-gradient">Dose-Response</span> Model
          </h2>
        </FragmentReveal>

        <div className="grid md:grid-cols-[1.2fr_1.4fr] gap-6 items-start">
          <div className="flex flex-col gap-4">
            <FragmentReveal delay={0.1}>
              <CardPitch accentColor="#5170ff">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <i className="fas fa-square-root-alt text-niskala-brand" /> Model Equation
                </h3>
                <div className="formula-block mb-3">
                  <span className="text-niskala-brand font-semibold">SI</span>
                  <sub className="text-niskala-brand">eff</sub>
                  {' = '}
                  <span className="text-niskala-brand font-semibold">SI</span>
                  <sub className="text-niskala-brand">membrane</sub>
                  {' \u2212 '}
                  <span className="text-niskala-violet font-semibold">&Delta;SI</span>
                  <sub className="text-niskala-violet">max</sub>
                  {' \u00D7 '}
                  (1 &minus; e<sup>&minus;k&middot;dose</sup>)
                  {' \u00D7 '}
                  <span className="text-niskala-ct">0.8</span>
                </div>
                <ul className="space-y-2 text-xs text-[#71717a]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-niskala-brand mt-[5px] shrink-0" />
                    <span><strong className="text-[#0a0a0a]">SI</strong><sub>membrane</sub> — baseline scaling index without inhibition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-niskala-violet mt-[5px] shrink-0" />
                    <span><strong className="text-[#0a0a0a]">&Delta;SI</strong><sub>max</sub> — maximum SI reduction at saturation (plateau)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-niskala-ct mt-[5px] shrink-0" />
                    <span><strong className="text-[#0a0a0a]">k</strong> — rate constant governing dose sensitivity</span>
                  </li>
                </ul>
              </CardPitch>
            </FragmentReveal>

            <FragmentReveal delay={0.2}>
              <CardPitch>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <i className="fas fa-flask text-niskala-brand" /> Calibration Source
                </h3>
                <p className="text-sm text-[#71717a] leading-relaxed">
                  70+ data points from Ahmed et al. (2024), Amjad (2022), Dai et al. (2021).
                </p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#5170ff]/10 text-niskala-brand border border-[#5170ff]/20">
                    <i className="fas fa-database text-[10px]" />
                    Calibrated from 70+ data points
                  </span>
                </div>
              </CardPitch>
            </FragmentReveal>
          </div>

          <FragmentReveal delay={0.1}>
            <CardPitch accentColor="#5170ff">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <i className="fas fa-chart-line text-niskala-brand" /> Dose-Response: Phosphonate on Calcite
              </h3>
              <div className="chart-box">
                <ReactECharts
                  option={chartOption}
                  style={{ height: 320 }}
                  opts={{ renderer: 'svg' }}
                />
              </div>
              <div className="subtle-divider my-2" />
              <p className="text-xs text-[#71717a] leading-snug">
                <span className="text-niskala-brand font-semibold">SI</span>
                <sub className="text-niskala-brand">membrane</sub>
                {' = 1.27 \u2192 '}
                <strong className="text-[#0a0a0a]">MED = 2.3 ppm</strong>
                {' brings SI'}
                <sub>eff</sub>
                {' below threshold 0.30'}
              </p>
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
