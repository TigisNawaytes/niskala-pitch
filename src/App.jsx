import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSlideStore from './store/useSlideStore';
import Cover from './components/Cover';

import Slide04IonsToRisk from './slides/Slide04IonsToRisk';
import Slide05WhyPhreeqc from './slides/Slide05WhyPhreeqc';
import Slide05PhreeqcEngine from './slides/Slide05PhreeqcEngine';
import Slide06MassBalanceRO from './slides/Slide06MassBalanceRO';
import Slide07MassBalanceCT from './slides/Slide07MassBalanceCT';
import Slide06ScalingMass from './slides/Slide06ScalingMass';
import Slide07Kinetics from './slides/Slide07Kinetics';
import Slide08Literature from './slides/Slide08Literature';
import Slide09OneEngine from './slides/Slide09OneEngine';
import Slide10NiskalaRO from './slides/Slide10NiskalaRO';
import Slide11NiskalaCT from './slides/Slide11NiskalaCT';
import Slide12CTKineticRace from './slides/Slide12CTKineticRace';
import Slide13NiskalaPure from './slides/Slide13NiskalaPure';
import Slide14ChemicalDB from './slides/Slide14ChemicalDB';
import Slide15AutoOptimization from './slides/Slide15AutoOptimization';
import Slide16DoseResponse from './slides/Slide16DoseResponse';
import Slide17SmartSubstitution from './slides/Slide17SmartSubstitution';
import Slide18DTPMPCalib from './slides/Slide18DTPMPCalib';
import Slide19Validation from './slides/Slide19Validation';
import Slide20About from './slides/Slide20About';
import Slide21Closing from './slides/Slide21Closing';

const SLIDES = [
  Slide04IonsToRisk, Slide05WhyPhreeqc, Slide05PhreeqcEngine, Slide06MassBalanceRO, Slide07MassBalanceCT, Slide06ScalingMass,
  Slide07Kinetics, Slide08Literature, Slide09OneEngine,
  Slide10NiskalaRO, Slide11NiskalaCT, Slide12CTKineticRace,
  Slide13NiskalaPure, Slide14ChemicalDB, Slide15AutoOptimization,
  Slide16DoseResponse, Slide17SmartSubstitution,
  Slide18DTPMPCalib, Slide19Validation, Slide20About, Slide21Closing,
];

const ACT_META = [
  { label: 'Act 1', name: 'The Science', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)' },
  { label: 'Act 1', name: 'The Science', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)' },
  { label: 'Act 1', name: 'The Science', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)' },
  { label: 'Act 1', name: 'The Science', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)' },
  { label: 'Act 1', name: 'The Science', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)' },
  { label: 'Act 1', name: 'The Science', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)' },
  { label: 'Act 1', name: 'The Science', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)' },
  { label: 'Act 1', name: 'The Science', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)' },
  { label: 'Act 2', name: 'The Application', color: '#5170ff', bg: 'rgba(81,112,255,0.08)', border: 'rgba(81,112,255,0.18)' },
  { label: 'Act 2', name: 'The Application', color: '#5170ff', bg: 'rgba(81,112,255,0.08)', border: 'rgba(81,112,255,0.18)' },
  { label: 'Act 2', name: 'The Application', color: '#5170ff', bg: 'rgba(81,112,255,0.08)', border: 'rgba(81,112,255,0.18)' },
  { label: 'Act 2', name: 'The Application', color: '#5170ff', bg: 'rgba(81,112,255,0.08)', border: 'rgba(81,112,255,0.18)' },
  { label: 'Act 2', name: 'The Application', color: '#5170ff', bg: 'rgba(81,112,255,0.08)', border: 'rgba(81,112,255,0.18)' },
  { label: 'Act 3', name: 'The Strategy', color: '#14b8a6', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.18)' },
  { label: 'Act 3', name: 'The Strategy', color: '#14b8a6', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.18)' },
  { label: 'Act 3', name: 'The Strategy', color: '#14b8a6', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.18)' },
  { label: 'Act 3', name: 'The Strategy', color: '#14b8a6', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.18)' },
  { label: 'Act 4', name: 'The Depth', color: '#6366f1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.18)' },
  { label: 'Act 4', name: 'The Depth', color: '#6366f1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.18)' },
  { label: 'Act 4', name: 'The Depth', color: '#6366f1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.18)' },
  { label: 'Act 4', name: 'The Depth', color: '#6366f1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.18)' },
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    filter: 'blur(3px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
  exit: (dir) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    filter: 'blur(3px)',
  }),
};

export default function App() {
  const coverVisible = useSlideStore((s) => s.coverVisible);
  const currentSlide = useSlideStore((s) => s.currentSlide);
  const direction = useSlideStore((s) => s.direction);
  const goToSlide = useSlideStore((s) => s.goToSlide);
  const nextSlide = useSlideStore((s) => s.nextSlide);
  const prevSlide = useSlideStore((s) => s.prevSlide);
  const closeCover = useSlideStore((s) => s.closeCover);

  const CurrentSlideComponent = SLIDES[currentSlide];
  const slideNum = String(currentSlide + 1).padStart(2, '0');
  const totalNum = String(SLIDES.length).padStart(2, '0');
  const actMeta = ACT_META[currentSlide] || ACT_META[0];

  useEffect(() => {
    if (coverVisible) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); nextSlide(); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prevSlide(); }
      else if (e.key === 'Escape') closeCover();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [coverVisible, nextSlide, prevSlide, closeCover]);

  const progress = SLIDES.length > 1 ? (currentSlide / (SLIDES.length - 1)) * 100 : 0;

  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ background: 'var(--background)' }}>
      <div className="frame-overlay" />

      <Cover />

      <AnimatePresence mode="wait" custom={direction}>
        {!coverVisible && (
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 280, damping: 32, mass: 0.85 },
              opacity: { duration: 0.35, ease: 'easeOut' },
              filter: { duration: 0.3 },
            }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            style={{ background: 'var(--background)' }}
          >
            <CurrentSlideComponent />
          </motion.div>
        )}
      </AnimatePresence>

      {!coverVisible && (
        <>
          <div
            className="progress-bar-glow fixed top-0 left-0 z-50"
            style={{ width: `${progress}%` }}
          />

          <nav
            className="no-print fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-5 sm:px-6"
            style={{
              background: 'rgba(248,248,250,0.85)',
              backdropFilter: 'blur(16px) saturate(1.4)',
              WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
              borderBottom: '1px solid rgba(81,112,255,0.1)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            <div className="flex items-center gap-3">
              <button
                onClick={closeCover}
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
                title="Back to cover (Esc)"
              >
                <span
                  className="text-[0.95rem] font-extrabold tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #5170ff 0%, #7b93ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Niskala
                  <span style={{ background: 'none', WebkitTextFillColor: '#8aa0ff', color: '#8aa0ff' }}>.</span>
                </span>
              </button>

              <button
                onClick={closeCover}
                className="w-8 h-8 rounded-full bg-white border border-[#e4e4e7] flex items-center justify-center text-[#71717a] text-xs hover:border-[#5170ff]/40 hover:text-[#5170ff] transition-all duration-200"
                title="Home / Back to cover"
              >
                <i className="fas fa-home" />
              </button>

              <div className="h-5 w-px bg-[#e4e4e7] mx-1 hidden sm:block" />

              <span className="font-mono text-[0.65rem] font-bold text-[#0a0a0a] tracking-widest tabular-nums">
                {slideNum}
                <span className="text-[#cbd5e1] mx-0.5">/</span>
                <span className="text-[#71717a]">{totalNum}</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <motion.div
                key={actMeta.label + actMeta.name}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="hidden sm:flex items-center gap-2 text-[0.65rem] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full"
                style={{
                  color: actMeta.color,
                  background: actMeta.bg,
                  border: `1px solid ${actMeta.border}`,
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: actMeta.color }} />
                {actMeta.label}
                <span className="text-[#71717a] font-normal normal-case">{actMeta.name}</span>
              </motion.div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="w-8 h-8 rounded-full bg-white border border-[#e4e4e7]
                    flex items-center justify-center text-[#71717a] text-xs
                    hover:border-[#5170ff]/40 hover:text-[#5170ff] transition-all duration-200
                    disabled:opacity-30 disabled:cursor-default"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === SLIDES.length - 1}
                  className="w-8 h-8 rounded-full bg-white border border-[#e4e4e7]
                    flex items-center justify-center text-[#71717a] text-xs
                    hover:border-[#5170ff]/40 hover:text-[#5170ff] transition-all duration-200
                    disabled:opacity-30 disabled:cursor-default"
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </nav>

          <div
            className="no-print fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-[6px] py-3 px-2 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(12px) saturate(1.2)',
              WebkitBackdropFilter: 'blur(12px) saturate(1.2)',
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`nav-dot-v ${i === currentSlide ? 'active' : ''}`}
                title={`Slide ${i + 1}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
