import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const pipelineItems = [
  {
    accentColor: '#10b981',
    icon: 'fa-check',
    iconColor: 'text-[#10b981]',
    dotColor: 'bg-[#10b981]',
    borderColor: 'border-[#10b981]/30',
    label: 'Literature Calibration',
    status: 'Complete',
    statusType: 'complete',
    detail: (
      <p className="text-[#71717a] text-sm leading-relaxed">
        DTPMP K &amp; &alpha; from Dai Table 2. RO dose-response from Ahmed 70+ data points.
      </p>
    ),
  },
  {
    accentColor: '#10b981',
    icon: 'fa-check',
    iconColor: 'text-[#10b981]',
    dotColor: 'bg-[#10b981]',
    borderColor: 'border-[#10b981]/30',
    label: 'Engine Testing',
    status: 'Complete',
    statusType: 'complete',
    detail: (
      <p className="text-[#71717a] text-sm leading-relaxed">
        13/13 backend tests. 22/22 Playwright E2E. North Java Sea, ASTM, Red Sea validation.
      </p>
    ),
  },
  {
    accentColor: '#f59e0b',
    icon: 'fa-sync-alt',
    iconColor: 'text-[#f59e0b]',
    dotColor: 'bg-[#f59e0b]',
    borderColor: 'border-[#f59e0b]/30',
    label: 'Single-Plant Pilot',
    status: 'In Progress',
    statusType: 'inprogress',
    detail: (
      <p className="text-[#71717a] text-sm leading-relaxed">
        Plant operational data, brine chemistry, membrane autopsy.
      </p>
    ),
  },
  {
    accentColor: undefined,
    icon: 'fa-ellipsis-h',
    iconColor: 'text-[#71717a]',
    dotColor: 'bg-[#a1a1aa]',
    borderColor: 'border-[#e4e4e7]',
    label: 'Multi-Plant Validation',
    status: 'Planned',
    statusType: 'planned',
    detail: (
      <p className="text-[#71717a] text-sm leading-relaxed">
        Diverse chemistries, membrane types, statistical validation.
      </p>
    ),
  },
];

function StatusBadge({ type, label }) {
  if (type === 'complete') {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25 uppercase tracking-wide">
        <i className="fas fa-check-circle text-[9px]" />
        {label}
      </span>
    );
  }
  if (type === 'inprogress') {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/25 uppercase tracking-wide">
        <i className="fas fa-spinner fa-spin text-[9px]" />
        {label}
      </span>
    );
  }
  // planned
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#f4f4f5] text-[#71717a] border border-[#e4e4e7] uppercase tracking-wide">
      <i className="fas fa-clock text-[9px]" />
      {label}
    </span>
  );
}

export default function Slide19Validation() {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative dot-grid-brand">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none glow-blob-brand" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full pointer-events-none glow-blob-violet" />

      <div className="relative z-10 max-w-5xl w-full">
        <SectionLabel>Roadmap</SectionLabel>

        <FragmentReveal>
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-8">
            Validation{' '}
            <span className="stat-gradient">Pipeline</span>
          </h2>
        </FragmentReveal>

        <div className="flex gap-4">
          <div className="flex flex-col items-center pt-1 shrink-0">
            {pipelineItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className={`w-3 h-3 rounded-full ${item.dotColor} ring-2 ring-white shadow-sm`} />
                {i < pipelineItems.length - 1 && (
                  <div className="w-px flex-1 min-h-[60px] border-l-2 border-dashed border-[#e4e4e7] my-1" />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 flex-1 min-w-0">
            {pipelineItems.map((item, i) => (
              <FragmentReveal key={i} delay={0.1 + i * 0.1}>
                <CardPitch accentColor={item.accentColor} className="p-4 sm:p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${item.borderColor}`}
                      style={item.accentColor ? { backgroundColor: `${item.accentColor}15` } : { backgroundColor: '#f4f4f5' }}
                    >
                      <i className={`fas ${item.icon} ${item.iconColor} text-sm`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <h3 className="font-bold text-base text-[#0a0a0a]">
                          {item.label}
                        </h3>
                        <StatusBadge type={item.statusType} label={item.status} />
                      </div>
                      {item.detail}
                    </div>
                  </div>
                </CardPitch>
              </FragmentReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
