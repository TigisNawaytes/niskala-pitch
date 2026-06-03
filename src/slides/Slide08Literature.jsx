import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FragmentReveal from '../components/FragmentReveal';
import SectionLabel from '../components/SectionLabel';
import CardPitch from '../components/CardPitch';

const pageAccents = ['#a78bfa', '#5170ff', '#14b8a6', '#a78bfa'];
const pageTitles  = [
  'Literature Overview',
  'Dai et al. (2021) — MSDI Platform',
  'Ahmed et al. (2024) — Dose-Response Data',
  'Foundational References',
];

function SubPageNav({ current, total, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="w-9 h-9 flex items-center justify-center rounded-full border border-[#e4e4e7]
          text-[#71717a] hover:text-[#0a0a0a] hover:border-[#5170ff] hover:bg-white
          transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none"
      >
        <i className="fas fa-chevron-left text-xs" />
      </button>

      <span className="text-[0.7rem] font-mono text-[#71717a] tabular-nums min-w-[2.5rem] text-center">
        {current + 1} / {total}
      </span>

      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-nav-dot ${i === current ? 'active' : ''}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="w-9 h-9 flex items-center justify-center rounded-full border border-[#e4e4e7]
          text-[#71717a] hover:text-[#0a0a0a] hover:border-[#5170ff] hover:bg-white
          transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none"
      >
        <i className="fas fa-chevron-right text-xs" />
      </button>
    </div>
  );
}

export default function Slide08Literature() {
  const [page, setPage] = useState(0);
  const scrollRef = useRef(null);

  const scrollTo = useCallback((index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const child = container.children[index];
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    setPage(index);
  }, []);

  const handlePrev = useCallback(() => {
    if (page > 0) scrollTo(page - 1);
  }, [page, scrollTo]);

  const handleNext = useCallback(() => {
    if (page < 3) scrollTo(page + 1);
  }, [page, scrollTo]);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const childWidth = container.children[0]?.offsetWidth || 1;
    const idx = Math.round(scrollLeft / childWidth);
    if (idx !== page) setPage(idx);
  }, [page]);

  return (
    <div className="w-full h-full flex items-center justify-center px-8 sm:px-12 py-6 overflow-hidden relative dot-grid-brand">
      <div className="pointer-events-none absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full blur-3xl glow-blob-violet" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 w-[360px] h-[360px] rounded-full blur-3xl glow-blob-brand" />

      <div className="relative z-10 max-w-5xl w-full h-full flex flex-col">
        <div className="flex-shrink-0">
          <SectionLabel>Literature Foundation</SectionLabel>
          <FragmentReveal>
            <h2 className="text-[2.2rem] sm:text-[3rem] font-black tracking-tight leading-[1.05] mb-2">
              From <span className="stat-gradient">Literature</span> to Engine
            </h2>
          </FragmentReveal>
          <p className="text-[#71717a] text-sm sm:text-base mb-5 font-light">
            Every parameter in Niskala traces to peer-reviewed science.
          </p>

          <motion.div
            key={page}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 mb-4"
          >
            <div
              className="h-0.5 w-8 rounded-full"
              style={{ background: pageAccents[page] }}
            />
            <p
              className="text-[0.7rem] font-bold uppercase tracking-[0.18em]"
              style={{ color: pageAccents[page] }}
            >
              {pageTitles[page]}
            </p>
          </motion.div>

          <div className="subtle-divider mb-4" />
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-2 -mx-2 px-2 scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="min-w-full snap-start flex-shrink-0 flex items-center">
            <div className="grid grid-cols-2 gap-5 w-full">
              <FragmentReveal delay={0} from="scale">
                <CardPitch accentColor="#a78bfa">
                  <SectionLabel color="#a78bfa">Primary Model</SectionLabel>
                  <p className="text-[0.9rem] font-semibold text-[#0a0a0a] mb-1">Dai et al. (2021)</p>
                  <p className="text-[0.72rem] text-[#71717a] mb-2 italic">MSDI platform</p>
                  <div className="flex items-center gap-1.5 mb-2">
                    <i className="fas fa-journal-whills text-[#a78bfa] text-[0.6rem]" />
                    <span className="font-mono text-[0.62rem] text-[#a78bfa] font-semibold">Desalination</span>
                  </div>
                  <div className="flex items-start gap-2 text-[0.78rem] text-[#71717a]">
                    <i className="fas fa-arrow-right text-[#a78bfa] mt-0.5 text-[0.55rem]" />
                    <span>N-CNT model, MSDI platform, Langmuir adsorption</span>
                  </div>
                </CardPitch>
              </FragmentReveal>

              <FragmentReveal delay={0.08} from="scale">
                <CardPitch accentColor="#5170ff">
                  <SectionLabel color="#5170ff">Dose-Response Data</SectionLabel>
                  <p className="text-[0.9rem] font-semibold text-[#0a0a0a] mb-1">Ahmed et al. (2024)</p>
                  <p className="text-[0.72rem] text-[#71717a] mb-2 italic">J. Saudi Chem. Soc.</p>
                  <div className="flex items-center gap-1.5 mb-2">
                    <i className="fas fa-fingerprint text-[#5170ff] text-[0.6rem]" />
                    <span className="font-mono text-[0.62rem] text-[#5170ff] font-semibold">28:101923</span>
                  </div>
                  <div className="flex items-start gap-2 text-[0.78rem] text-[#71717a]">
                    <i className="fas fa-arrow-right text-[#5170ff] mt-0.5 text-[0.55rem]" />
                    <span>70+ data points for empirical dose-response calibration</span>
                  </div>
                </CardPitch>
              </FragmentReveal>

              <FragmentReveal delay={0.16} from="scale">
                <CardPitch accentColor="#14b8a6">
                  <SectionLabel color="#14b8a6">Deposit Reference</SectionLabel>
                  <p className="text-[0.9rem] font-semibold text-[#0a0a0a] mb-1">Amjad (2022)</p>
                  <p className="text-[0.72rem] text-[#71717a] mb-2 italic">Formed Deposits</p>
                  <div className="flex items-center gap-1.5 mb-2">
                    <i className="fas fa-book text-[#14b8a6] text-[0.6rem]" />
                    <span className="font-mono text-[0.62rem] text-[#14b8a6] font-semibold">Elsevier</span>
                  </div>
                  <div className="flex items-start gap-2 text-[0.78rem] text-[#71717a]">
                    <i className="fas fa-arrow-right text-[#14b8a6] mt-0.5 text-[0.55rem]" />
                    <span>Mineral morphology, inhibitor mechanisms, threshold effects</span>
                  </div>
                </CardPitch>
              </FragmentReveal>

              <FragmentReveal delay={0.24} from="scale">
                <CardPitch accentColor="#a78bfa">
                  <SectionLabel color="#a78bfa">Geochemistry</SectionLabel>
                  <p className="text-[0.9rem] font-semibold text-[#0a0a0a] mb-1">Appelo &amp; Postma</p>
                  <p className="text-[0.72rem] text-[#71717a] mb-2 italic">Geochemistry, Groundwater and Pollution</p>
                  <div className="flex items-center gap-1.5 mb-2">
                    <i className="fas fa-book text-[#a78bfa] text-[0.6rem]" />
                    <span className="font-mono text-[0.62rem] text-[#a78bfa] font-semibold">Balkema</span>
                  </div>
                  <div className="flex items-start gap-2 text-[0.78rem] text-[#71717a]">
                    <i className="fas fa-arrow-right text-[#a78bfa] mt-0.5 text-[0.55rem]" />
                    <span>Activity models, Pitzer equations, Davies, ion speciation</span>
                  </div>
                </CardPitch>
              </FragmentReveal>
            </div>
          </div>

          <div className="min-w-full snap-start flex-shrink-0 flex flex-col justify-center">
            <div
              className="rounded-xl mb-5 px-5 py-3.5 flex items-center gap-3 glass"
              style={{ borderLeft: `3px solid ${pageAccents[1]}` }}
            >
              <i className="fas fa-flask" style={{ color: pageAccents[1], fontSize: '0.85rem' }} />
              <h3 className="text-[1.15rem] font-bold tracking-tight">
                Dai et al. (2021) — MSDI Platform
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <CardPitch accentColor="#a78bfa">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-flask text-[#a78bfa] text-xs" />
                  <span className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#a78bfa]">What They Built</span>
                </div>
                <ul className="space-y-2.5 text-[0.82rem] text-[#0a0a0a]">
                  {[
                    'SSP thermodynamics for mineral solubility prediction',
                    'N-CNT (Nucleation-Crystal Nucleation Theory) kinetics',
                    'MSDI — Multi-Scale Deposit Inhibition platform',
                    'Langmuir adsorption framework for inhibitor binding',
                    'Flow-dependent surface deposition rates',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <i className="fas fa-circle text-[#a78bfa] mt-1.5 flex-shrink-0" style={{ fontSize: '0.35rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardPitch>

              <CardPitch accentColor="#5170ff">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-code-branch text-[#5170ff] text-xs" />
                  <span className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#5170ff]">What We Derived</span>
                </div>
                <ul className="space-y-2.5 text-[0.82rem] text-[#0a0a0a]">
                  {[
                    'N-CNT kinetic engine calibrated to 12 inhibitor families',
                    'Langmuir isotherm parameters for competitive adsorption',
                    'SSP-based saturation index (SI) as risk metric',
                    'MSDI-inspired multi-mineral deposition network',
                    'Validated against 50+ literature datasets',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <i className="fas fa-circle text-[#5170ff] mt-1.5 flex-shrink-0" style={{ fontSize: '0.35rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardPitch>
            </div>
          </div>

          <div className="min-w-full snap-start flex-shrink-0 flex flex-col justify-center">
            <div
              className="rounded-xl mb-5 px-5 py-3.5 flex items-center gap-3 glass"
              style={{ borderLeft: `3px solid ${pageAccents[2]}` }}
            >
              <i className="fas fa-table" style={{ color: pageAccents[2], fontSize: '0.85rem' }} />
              <h3 className="text-[1.15rem] font-bold tracking-tight">
                Ahmed et al. (2024) — Dose-Response Data
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <CardPitch accentColor="#5170ff">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-table text-[#5170ff] text-xs" />
                  <span className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#5170ff]">Experimental Campaign</span>
                </div>
                <ul className="space-y-2.5 text-[0.82rem] text-[#0a0a0a]">
                  {[
                    '70+ dose-response data points across inhibitor types',
                    'Controlled RO membrane fouling experiments',
                    'Systematic variation of inhibitor concentration vs. scaling reduction',
                    'Published in J. Saudi Chem. Soc. 28:101923',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <i className="fas fa-circle text-[#5170ff] mt-1.5 flex-shrink-0" style={{ fontSize: '0.35rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardPitch>

              <CardPitch accentColor="#14b8a6">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-chart-line text-[#14b8a6] text-xs" />
                  <span className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#14b8a6]">Engine Integration</span>
                </div>
                <ul className="space-y-2.5 text-[0.82rem] text-[#0a0a0a]">
                  {[
                    'Empirical dose-response → calibrated inhibition curves',
                    'Non-linear regression for EC50 / EC90 threshold estimation',
                    'Cross-validated against Amjad (2022) deposit data',
                    'Powers real-time inhibitor dose optimization engine',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <i className="fas fa-circle text-[#14b8a6] mt-1.5 flex-shrink-0" style={{ fontSize: '0.35rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardPitch>
            </div>
          </div>

          <div className="min-w-full snap-start flex-shrink-0 flex flex-col justify-center">
            <div
              className="rounded-xl mb-5 px-5 py-3.5 flex items-center gap-3 glass"
              style={{ borderLeft: `3px solid ${pageAccents[3]}` }}
            >
              <i className="fas fa-book-open" style={{ color: pageAccents[3], fontSize: '0.85rem' }} />
              <h3 className="text-[1.15rem] font-bold tracking-tight">
                Foundational References
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <CardPitch accentColor="#14b8a6">
                <SectionLabel color="#14b8a6">Deposit Reference</SectionLabel>
                <p className="text-[0.9rem] font-semibold text-[#0a0a0a] mb-2">Amjad (2022)</p>
                <p className="text-[0.72rem] text-[#71717a] mb-3 italic">Formed Deposits, Elsevier</p>
                <ul className="space-y-2.5 text-[0.82rem] text-[#0a0a0a]">
                  {[
                    'Comprehensive mineral morphology classification',
                    'Inhibitor mechanisms: threshold, dispersion, crystal modification',
                    'Synergistic effects in multi-inhibitor blends',
                    'Temperature and pH effects on deposit formation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <i className="fas fa-circle text-[#14b8a6] mt-1.5 flex-shrink-0" style={{ fontSize: '0.35rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardPitch>

              <CardPitch accentColor="#a78bfa">
                <SectionLabel color="#a78bfa">Geochemistry</SectionLabel>
                <p className="text-[0.9rem] font-semibold text-[#0a0a0a] mb-2">Appelo &amp; Postma</p>
                <p className="text-[0.72rem] text-[#71717a] mb-3 italic">Geochemistry, Groundwater and Pollution, Balkema</p>
                <ul className="space-y-2.5 text-[0.82rem] text-[#0a0a0a]">
                  {[
                    'Pitzer specific-ion interaction equations for high TDS',
                    'Davies and Debye-Hueckel activity models for low TDS',
                    'Aqueous speciation and ion pairing thermodynamics',
                    'Redox, sorption, and mineral equilibrium frameworks',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <i className="fas fa-circle text-[#a78bfa] mt-1.5 flex-shrink-0" style={{ fontSize: '0.35rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardPitch>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="subtle-divider mb-3" />
          <SubPageNav current={page} total={4} onPrev={handlePrev} onNext={handleNext} />
        </div>
      </div>
    </div>
  );
}
