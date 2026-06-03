import ReactECharts from 'echarts-for-react';
import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const beforePoints = [
  [2.1, 18.7], [3.5, 42.5], [4.2, 31.0], [5.5, 48.3],
  [7.0, 60.5], [8.2, 63.0], [11.0, 70.2], [14.5, 85.0],
];

const afterPoints = [
  [2.1, 3.5], [3.5, 5.8], [4.2, 6.2], [5.5, 7.8],
  [7.0, 8.5], [8.2, 9.8], [11.0, 13.5], [14.5, 18.8],
];

const identityLine = [[0, 0], [45, 45]];

const scatterOption = {
  grid: { left: 48, right: 16, top: 24, bottom: 48 },
  xAxis: {
    type: 'value',
    min: 0,
    max: 45,
    axisLabel: { fontSize: 9, color: '#71717a' },
    splitLine: { lineStyle: { color: '#f4f4f5' } },
    name: 'Measured t_ind (min)',
    nameTextStyle: { fontSize: 8, color: '#71717a' },
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 45,
    axisLabel: { fontSize: 9, color: '#71717a' },
    splitLine: { lineStyle: { color: '#f4f4f5' } },
    name: 'Predicted t_ind (min)',
    nameTextStyle: { fontSize: 8, color: '#71717a' },
  },
  series: [
    {
      name: 'Before Calibration',
      type: 'scatter',
      data: beforePoints,
      symbolSize: 8,
      itemStyle: { color: '#ef4444' },
    },
    {
      name: 'After Calibration',
      type: 'scatter',
      data: afterPoints,
      symbolSize: 8,
      itemStyle: { color: '#10b981' },
    },
    {
      name: 'Identity',
      type: 'line',
      data: identityLine,
      lineStyle: { color: '#a1a1aa', type: 'dashed', width: 1.5 },
      symbol: 'none',
    },
  ],
  tooltip: { trigger: 'item' },
  legend: {
    bottom: 0,
    left: 'center',
    textStyle: { fontSize: 9, color: '#71717a' },
    icon: 'circle',
    itemWidth: 8,
    itemHeight: 8,
  },
};

export default function Slide18DTPMPCalib() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative dot-grid-brand">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none glow-blob-brand" />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none glow-blob-violet" />

      <div className="relative z-10 max-w-5xl w-full">
        <SectionLabel>Validation</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6">
            <span className="stat-gradient">Calibration</span> Evidence
          </h2>
        </FragmentReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <FragmentReveal delay={0.1} from="left">
              <CardPitch accentColor="#a78bfa">
                <h3 className="text-[#0a0a0a] font-bold text-sm mb-4">
                  DTPMP — Dai Table 2 Grid Search
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black tracking-tight stat-gradient">8</span>
                    <p className="text-[#71717a] text-[0.65rem] font-medium uppercase tracking-wider mt-0.5">
                      Data Points
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-tight text-niskala-brand">50–90°C</span>
                    <p className="text-[#71717a] text-[0.65rem] font-medium uppercase tracking-wider mt-0.5">
                      Temperature Range
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-tight text-niskala-violet">0.68–1.05</span>
                    <p className="text-[#71717a] text-[0.65rem] font-medium uppercase tracking-wider mt-0.5">
                      SI Range
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-tight text-niskala-ct">0.05–0.25</span>
                    <p className="text-[#71717a] text-[0.65rem] font-medium uppercase tracking-wider mt-0.5">
                      Dose (ppm)
                    </p>
                  </div>
                </div>
              </CardPitch>
            </FragmentReveal>

            <FragmentReveal delay={0.2} from="left">
              <CardPitch>
                <h3 className="text-[#0a0a0a] font-bold text-sm mb-4">Calibration Results</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between py-1.5 border-b border-[#f4f4f5]">
                    <span className="text-[#71717a] text-xs font-medium">K</span>
                    <span className="font-mono text-sm font-bold text-[#0a0a0a]">5.0 ppm⁻¹</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#f4f4f5]">
                    <span className="text-[#71717a] text-xs font-medium">α</span>
                    <span className="font-mono text-sm font-bold text-[#0a0a0a]">0.040</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-[#f4f4f5]">
                    <span className="text-[#71717a] text-xs font-medium">RMSE</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-base font-bold line-through text-[#ef4444] decoration-2">868.6%</span>
                      <span className="text-[#71717a] text-xs">→</span>
                      <span className="font-mono text-base font-bold text-[#10b981]">76.5%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[#71717a] text-xs font-medium">Improvement</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-extrabold px-3 py-1.5 rounded-full bg-[#10b981]/15 text-[#10b981] border-2 border-[#10b981]/30 uppercase tracking-wide shadow-sm">
                      <i className="fas fa-bolt text-xs" />
                      11&times; BETTER
                    </span>
                  </div>
                </div>
              </CardPitch>
            </FragmentReveal>
          </div>

          <FragmentReveal delay={0.15} from="right">
            <CardPitch>
              <h3 className="text-[#0a0a0a] font-bold text-sm mb-3">
                Predicted vs Measured t<sub className="text-[0.6rem] align-sub">ind</sub>
              </h3>
              <div className="chart-box">
                <ReactECharts
                  option={scatterOption}
                  style={{ height: 320 }}
                  opts={{ renderer: 'svg' }}
                />
              </div>
              <div className="subtle-divider my-2" />
              <p className="text-[#71717a] text-[0.6rem] italic text-center">
                Grid search across 8 experimental conditions from Dai Table 2
              </p>
            </CardPitch>
          </FragmentReveal>
        </div>
      </div>
    </div>
  );
}
