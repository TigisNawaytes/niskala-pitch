import { useEffect, useState } from 'react';

export default function RaceBar({ label, value, unit, target, color = '#f59e0b', inView }) {
  const [run, setRun] = useState(false);

  useEffect(() => {
    if (inView && !run) {
      const t = setTimeout(() => setRun(true), 300);
      return () => clearTimeout(t);
    }
  }, [inView, run]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[0.7rem] text-[#71717a] font-semibold tracking-wide">{label}</span>
        <span
          className="font-mono text-sm font-bold tabular-nums"
          style={{ color }}
        >
          {value} <span className="text-[0.65rem] font-normal opacity-60">{unit}</span>
        </span>
      </div>
      <div className="h-[6px] bg-[#e4e4e7]/60 rounded-full overflow-hidden relative">
        <div
          className="h-full rounded-full transition-all duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] relative"
          style={{
            width: run ? `${target}%` : '0%',
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}
