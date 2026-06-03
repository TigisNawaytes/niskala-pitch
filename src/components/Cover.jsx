import { motion, AnimatePresence } from 'framer-motion';
import useSlideStore from '../store/useSlideStore';

export default function Cover() {
  const coverVisible = useSlideStore((s) => s.coverVisible);
  const openCover = useSlideStore((s) => s.openCover);

  return (
    <AnimatePresence>
      {coverVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ background: 'var(--background)' }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zM28 100L0 84V66l28 16 28-16v18L28 100z' fill='none' stroke='rgba(81%2C112%2C255%2C0.13)' stroke-width='1'/%3E%3C/svg%3E\")",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(81,112,255,0.10) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, var(--background) 85%)',
            }}
          />

          <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 text-center py-4">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="mb-3"
            >
              <span
                className="font-extrabold tracking-tight"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2.5rem)',
                  background: 'linear-gradient(135deg, #5170ff 0%, #7b93ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Niskala
                <span style={{ background: 'none', WebkitTextFillColor: '#8aa0ff', color: '#8aa0ff' }}>.</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2.5 mb-4 px-3.5 py-1.5 rounded-full border border-niskala-brand/25 bg-niskala-brand/8 text-niskala-brand">
                <span className="w-1.5 h-1.5 rounded-full bg-niskala-brand animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.18em]">OPEN-ENGINE PLATFORM</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h1 className="font-bold tracking-tight text-[var(--foreground)] mb-3" style={{ fontSize: 'clamp(1.5rem, 3.5vw + 0.5rem, 2.75rem)', lineHeight: 1.1 }}>
                Understand the Process.<br />
                <span className="relative inline-block">
                  Trust the{' '}
                  <span
                    className="font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #5170ff 0%, #a78bfa 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Result
                  </span>.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <p className="text-[var(--muted-foreground)] mb-6 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1vw + 0.2rem, 0.9rem)' }}>
                Boutique simulation platform for water chemistry engineers. Every calculation
                is traceable — from ion concentration to risk assessment — built for
                precision and transparency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-6">

                <div
                  className="relative rounded-xl p-px overflow-hidden cursor-default group h-full"
                  style={{ boxShadow: '0 0 0 1px rgba(81,112,255,0.12), 0 8px 32px rgba(81,112,255,0.10)' }}
                >
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      inset: '-200%',
                      animation: 'border-spin 5s linear infinite',
                      background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 155deg, rgba(81,112,255,0.85) 180deg, rgba(167,139,250,0.85) 205deg, transparent 230deg, transparent 360deg)',
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(81,112,255,0.06) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  <div className="relative bg-[var(--card)] rounded-xl text-left overflow-hidden h-full flex flex-col">
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--border)] bg-[var(--muted)] flex-shrink-0">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(239,68,68,0.5)' }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(245,158,11,0.5)' }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(16,185,129,0.5)' }} />
                      </div>
                      <span className="text-[11px] font-mono text-[var(--muted-foreground)] ml-1">NiskalaRO</span>
                      <div className="ml-auto flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-niskala-brand animate-pulse" />
                        <span className="text-[10px] font-bold text-niskala-brand tracking-wide">ACTIVE</span>
                      </div>
                    </div>

                    <div className="relative p-4 sm:p-5 flex-1">
                      <h3 className="text-base font-bold mb-1 tracking-tight text-[var(--foreground)]">
                        Niskala<span className="text-niskala-brand">RO</span>
                      </h3>
                      <p className="text-[var(--muted-foreground)] text-[13px] leading-relaxed mb-2">
                        RO scaling prediction. 72-cell reactive transport.
                      </p>
                      <div className="flex items-center gap-1.5 text-[13px] font-semibold text-niskala-brand">
                        Launch <i className="fas fa-chevron-right" style={{ fontSize: '14px' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="relative rounded-xl p-px overflow-hidden cursor-default group h-full"
                  style={{ boxShadow: '0 0 0 1px rgba(20,184,166,0.12), 0 8px 32px rgba(20,184,166,0.10)' }}
                >
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      inset: '-200%',
                      animation: 'border-spin 5s linear infinite',
                      background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 155deg, rgba(20,184,166,0.85) 180deg, rgba(45,212,191,0.85) 205deg, transparent 230deg, transparent 360deg)',
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.06) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative bg-[var(--card)] rounded-xl text-left overflow-hidden h-full flex flex-col">
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--border)] bg-[var(--muted)] flex-shrink-0">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(239,68,68,0.5)' }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(245,158,11,0.5)' }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(16,185,129,0.5)' }} />
                      </div>
                      <span className="text-[11px] font-mono text-[var(--muted-foreground)] ml-1">NiskalaCT</span>
                      <div className="ml-auto flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#14b8a6' }} />
                        <span className="text-[10px] font-bold tracking-wide" style={{ color: '#14b8a6' }}>ACTIVE</span>
                      </div>
                    </div>
                    <div className="relative p-4 sm:p-5 flex-1">
                      <h3 className="text-base font-bold mb-1 tracking-tight text-[var(--foreground)]">
                        Niskala<span style={{ color: '#14b8a6' }}>CT</span>
                      </h3>
                      <p className="text-[var(--muted-foreground)] text-[13px] leading-relaxed mb-2">
                        Cooling tower water-cycle optimization.
                      </p>
                      <div className="flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: '#14b8a6' }}>
                        Launch <i className="fas fa-chevron-right" style={{ fontSize: '14px' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="relative rounded-xl p-px overflow-hidden cursor-default group h-full"
                  style={{ boxShadow: '0 0 0 1px rgba(167,139,250,0.15), 0 8px 32px rgba(167,139,250,0.12)' }}
                >
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      inset: '-200%',
                      animation: 'border-spin 5s linear infinite',
                      background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 155deg, rgba(167,139,250,0.85) 180deg, rgba(139,92,246,0.85) 205deg, transparent 230deg, transparent 360deg)',
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(167,139,250,0.06) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative bg-[var(--card)] rounded-xl text-left overflow-hidden h-full flex flex-col">
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--border)] bg-[var(--muted)] flex-shrink-0">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(239,68,68,0.5)' }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(245,158,11,0.5)' }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(16,185,129,0.5)' }} />
                      </div>
                      <span className="text-[11px] font-mono text-[var(--muted-foreground)] ml-1">NiskalaPure</span>
                      <div className="ml-auto flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#a78bfa' }} />
                        <span className="text-[10px] font-bold tracking-wide" style={{ color: '#a78bfa' }}>ACTIVE</span>
                      </div>
                    </div>
                    <div className="relative p-4 sm:p-5 flex-1">
                      <h3 className="text-base font-bold mb-1 tracking-tight text-[var(--foreground)]">
                        Niskala<span style={{ color: '#a78bfa' }}>Pure</span>
                      </h3>
                      <p className="text-[var(--muted-foreground)] text-[13px] leading-relaxed mb-2">
                        Water chemistry lab. Thermodynamics + kinetics.
                      </p>
                      <div className="flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: '#a78bfa' }}>
                        Launch Lab <i className="fas fa-chevron-right" style={{ fontSize: '14px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              onClick={openCover}
              className="btn-shimmer inline-flex items-center gap-3 px-10 py-3 rounded-full bg-niskala-brand hover:bg-blue-600 text-white font-semibold text-sm tracking-wide transition-colors duration-300 active:scale-95"
              style={{ animation: 'coverPulse 3s ease-in-out infinite', boxShadow: '0 8px 32px rgba(81,112,255,0.3)' }}
            >
              <i className="fas fa-play text-sm" />
              Begin Presentation
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
