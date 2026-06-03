import ReactECharts from 'echarts-for-react';
import { FragmentReveal, SectionLabel, CardPitch } from '../components';

export default function Slide13() {
  const doseData = [0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 7, 10];
  const phosphonate = [2.1, 3.8, 5.6, 7.2, 8.5, 9.5, 10.1, 10.8, 11.2, 11.4, 11.5];
  const shmp = [2.1, 3.0, 4.0, 4.8, 5.4, 5.8, 6.1, 6.4, 6.6, 6.7, 6.8];
  const tres = doseData.map(() => 6.5);

  const chartOption = {
    grid: { left: 52, right: 24, top: 24, bottom: 36 },
    xAxis: {
      type: 'category',
      data: doseData,
      axisLabel: { fontSize: 9, color: '#71717a' },
      name: 'Dose (ppm)',
      nameTextStyle: { fontSize: 10, color: '#71717a' },
      splitLine: { lineStyle: { color: '#f4f4f5' } },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 14,
      axisLabel: { fontSize: 9, color: '#71717a' },
      name: 't_ind (hr)',
      nameTextStyle: { fontSize: 10, color: '#71717a' },
      splitLine: { lineStyle: { color: '#f4f4f5' } },
    },
    series: [
      {
        name: 'Phosphonate',
        type: 'line',
        data: phosphonate,
        smooth: true,
        lineStyle: { color: '#5170ff', width: 2 },
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
        symbol: 'circle',
        symbolSize: 4,
      },
      {
        name: 'SHMP',
        type: 'line',
        data: shmp,
        smooth: true,
        lineStyle: { color: '#d97706', width: 2 },
        itemStyle: { color: '#d97706' },
        symbol: 'diamond',
        symbolSize: 4,
      },
      {
        name: 'T_res',
        type: 'line',
        data: tres,
        smooth: false,
        lineStyle: { color: '#ef4444', width: 2, type: 'dashed' },
        itemStyle: { color: '#ef4444' },
        symbol: 'none',
      },
    ],
    legend: {
      bottom: 0,
      textStyle: { fontSize: 9, color: '#71717a' },
      itemWidth: 12,
      itemHeight: 8,
    },
    tooltip: {
      trigger: 'axis',
      textStyle: { fontSize: 10 },
    },
  };

  const pipelineSteps = [
    { step: 1, name: 'PHREEQC', output: 'SI', color: '#a78bfa', desc: 'Saturation Index calculation' },
    { step: 2, name: 'N-CNT',   output: <>t<sub>ind</sub> natural</>, color: '#5170ff', desc: 'Classical nucleation theory' },
    { step: 3, name: 'Langmuir', output: <>t<sub>ind</sub> inhibited</>, color: '#14b8a6', desc: 'Inhibitor surface coverage' },
    { step: 4, name: 'MED',     output: 'binary search', color: '#10b981', desc: 'Minimum effective dose' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative dot-grid-brand">
      <div className="pointer-events-none absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full blur-3xl glow-blob-violet" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[320px] h-[320px] rounded-full blur-3xl glow-blob-brand" />

      <div className="relative z-10 max-w-5xl w-full">
        <SectionLabel color="#a78bfa">NiskalaPure</SectionLabel>
        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-6">
            System-Agnostic{' '}
            <span className="text-niskala-violet">Kinetic Lab</span>
          </h2>
        </FragmentReveal>

        <div className="subtle-divider mb-5" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <FragmentReveal delay={0.1} from="left">
              <CardPitch accentColor="#a78bfa" className="flex-1">
                <h3 className="text-base font-bold mb-4">N-CNT + Langmuir Pipeline</h3>

                <div className="relative">
                  <div
                    className="absolute left-[13px] top-5 bottom-5 w-px"
                    style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #10b981 100%)', opacity: 0.3 }}
                  />

                  <div className="space-y-3">
                    {pipelineSteps.map(({ step, name, output, color, desc }) => (
                      <div key={step} className="flex items-start gap-3">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-[0.6rem] font-bold border-2 border-white shadow-sm"
                          style={{ background: color, zIndex: 1, position: 'relative' }}
                        >
                          {step}
                        </div>

                        <div className="flex-1 min-w-0 pt-0.5">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-semibold text-sm" style={{ color }}>{name}</span>
                            <i className="fas fa-arrow-right text-[#71717a] text-[0.5rem]" />
                            <span className="text-[#71717a] text-sm">{output}</span>
                          </div>
                          <p className="text-[0.6rem] text-[#71717a] mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardPitch>
            </FragmentReveal>

            <FragmentReveal delay={0.2} from="left">
              <CardPitch className="flex-1">
                <h3 className="text-base font-bold mb-3">Use Cases</h3>
                <div className="space-y-2.5">
                  {[
                    { text: 'Benchmark inhibitor efficacy', icon: 'fa-flask' },
                    { text: 'Dose-response sweep across 20 points', icon: 'fa-chart-line' },
                    { text: 'Compare inhibitors', icon: 'fa-balance-scale' },
                  ].map(({ text, icon }, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-[#a78bfa]/10 flex items-center justify-center shrink-0">
                        <i className={`fas ${icon} text-niskala-violet text-[0.6rem]`} />
                      </div>
                      <span className="text-sm text-[#0a0a0a]">{text}</span>
                    </div>
                  ))}
                </div>
              </CardPitch>
            </FragmentReveal>
          </div>

          <div className="lg:col-span-3">
            <FragmentReveal delay={0.15} from="right">
              <CardPitch className="h-full">
                <h3 className="text-base font-bold mb-3">Dose-Response Curve</h3>
                <div className="chart-box" style={{ height: 280 }}>
                  <ReactECharts
                    option={chartOption}
                    style={{ height: '100%', width: '100%' }}
                    opts={{ renderer: 'svg' }}
                  />
                </div>
                <p className="text-xs text-[#71717a] mt-3 text-center">
                  t<sub>ind</sub> saturates with dose — MED found at the elbow
                </p>
              </CardPitch>
            </FragmentReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
