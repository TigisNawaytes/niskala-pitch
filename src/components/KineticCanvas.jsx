import { useRef, useEffect, useCallback, useState } from 'react';

const colors = {
  ca: '#5170ff',
  co3: '#14b8a6',
  caco3: '#94a3b8',
  water: 'rgba(81, 112, 255, 0.08)',
  waterLine: 'rgba(81, 112, 255, 0.35)',
  phase1: '#5170ff',
  phase2: '#f59e0b',
  phase3: '#ef4444',
  phase4: '#a78bfa',
};

const PHASES = [
  { t: 0, label: 'Undersaturated', desc: 'IAP < Ksp — ions move freely, no scaling risk' },
  { t: 4, label: 'Evaporation', desc: 'Water volume decreases, ion concentration rises' },
  { t: 8, label: 'Supersaturated', desc: 'IAP > Ksp — collisions intensify, critical threshold' },
  { t: 11, label: 'Precipitation', desc: 'Ca²⁺ + CO₃²⁻ → CaCO₃(s) — scaling forms' },
];

export default function KineticCanvas({ onPhaseChange }) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const animRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const particlesRef = useRef([]);
  const stateRef = useRef({
    startTime: 0,
    currentWaterLevel: 0.15,
    currentPhase: -1,
  });

  const initParticles = useCallback((width, height) => {
    const particles = [];
    const numPairs = 80;
    for (let i = 0; i < numPairs; i++) {
      particles.push(createParticle('Ca', width, height));
      particles.push(createParticle('CO3', width, height));
    }
    particlesRef.current = particles;
  }, []);

  const drawFrame = useCallback((timestamp) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const state = stateRef.current;

    if (!state.startTime) state.startTime = timestamp;
    const elapsed = (timestamp - state.startTime) / 1000;
    setElapsed(elapsed);

    // Determine phase
    let phase = 0;
    let speedMulti = 1;
    let isAgitated = false;

    if (elapsed < 4) {
      phase = 0;
      state.currentWaterLevel = 0.15;
      speedMulti = 0.8;
    } else if (elapsed < 8) {
      phase = 1;
      const progress = (elapsed - 4) / 4;
      state.currentWaterLevel = 0.15 + (0.5 - 0.15) * progress;
      speedMulti = 1.3;
    } else if (elapsed < 11) {
      phase = 2;
      state.currentWaterLevel = 0.5;
      speedMulti = 2.2;
      isAgitated = true;
    } else if (elapsed < 16) {
      phase = 3;
      state.currentWaterLevel = 0.5;
      speedMulti = 1.0;
    } else {
      phase = 3;
      state.currentWaterLevel = 0.5;
      speedMulti = 0.3;
    }

    if (state.currentPhase !== phase) {
      state.currentPhase = phase;
      onPhaseChange?.(PHASES[phase]);
    }

    ctx.clearRect(0, 0, width, height);

    const waterTopY = height * state.currentWaterLevel;

    // Draw water
    ctx.fillStyle = colors.water;
    ctx.fillRect(0, waterTopY, width, height - waterTopY);
    ctx.beginPath();
    ctx.moveTo(0, waterTopY);
    ctx.lineTo(width, waterTopY);
    ctx.strokeStyle = colors.waterLine;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Container floor
    const BOTTOM_MARGIN = 20;
    const floorY = height - BOTTOM_MARGIN;
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    ctx.fillRect(0, floorY, width, BOTTOM_MARGIN);
    ctx.beginPath();
    ctx.moveTo(0, floorY);
    ctx.lineTo(width, floorY);
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Precipitation logic (phase 3)
    if (phase === 3 && Math.random() > 0.3) {
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          if (!p1.settled && !p2.settled &&
              ((p1.type === 'Ca' && p2.type === 'CO3') || (p1.type === 'CO3' && p2.type === 'Ca'))) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 30) {
              const midX = (p1.x + p2.x) / 2;
              const midY = (p1.y + p2.y) / 2;
              particles.splice(j, 1);
              particles.splice(i, 1);
              particles.push(createParticle('CaCO3', width, height, midX, midY));
              break;
            }
          }
        }
      }
    }

    // Update & draw particles
    const particles = particlesRef.current;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      updateParticle(p, waterTopY, speedMulti, isAgitated, width, height);

      // Stacking logic for CaCO3
      if (p.type === 'CaCO3' && !p.settled) {
        for (let j = 0; j < particles.length; j++) {
          if (i !== j && particles[j].settled) {
            const dx = p.x - particles[j].x;
            const dy = p.y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < p.radius + particles[j].radius - 2) {
              p.settled = true;
              break;
            }
          }
        }
      }

      drawParticle(ctx, p);
    }

    if (elapsed < 18) {
      animRef.current = requestAnimationFrame(drawFrame);
    } else {
      setIsPlaying(false);
    }
  }, [onPhaseChange]);

  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const dpr = window.devicePixelRatio || 1;
    const w = wrapper.clientWidth;
    const h = wrapper.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    stateRef.current = { startTime: 0, currentWaterLevel: 0.15, currentPhase: -1 };
    initParticles(w, h);
    setIsPlaying(true);
    animRef.current = requestAnimationFrame(drawFrame);
  }, [drawFrame, initParticles]);

  const resetAnimation = useCallback(() => {
    cancelAnimationFrame(animRef.current);
    setIsPlaying(false);
    setElapsed(0);
    stateRef.current = { startTime: 0, currentWaterLevel: 0.15, currentPhase: -1 };
    onPhaseChange?.(null);

    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const dpr = window.devicePixelRatio || 1;
    const w = wrapper.clientWidth;
    const h = wrapper.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    initParticles(w, h);
    ctx.clearRect(0, 0, w, h);
    const waterTopY = h * 0.15;
    ctx.fillStyle = colors.water;
    ctx.fillRect(0, waterTopY, w, h - waterTopY);
    ctx.beginPath();
    ctx.moveTo(0, waterTopY);
    ctx.lineTo(w, waterTopY);
    ctx.strokeStyle = colors.waterLine;
    ctx.lineWidth = 2;
    ctx.stroke();

    const floorY = h - 20;
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    ctx.fillRect(0, floorY, w, 20);
    ctx.beginPath();
    ctx.moveTo(0, floorY);
    ctx.lineTo(w, floorY);
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 2;
    ctx.stroke();
    particlesRef.current.forEach(p => drawParticle(ctx, p));
  }, [initParticles, onPhaseChange]);

  useEffect(() => {
    resetAnimation();
    return () => cancelAnimationFrame(animRef.current);
  }, [resetAnimation]);

  const phaseInfo = PHASES.find((p, i) => {
    const next = PHASES[i + 1];
    return elapsed >= p.t && (!next || elapsed < next.t);
  });

  return (
    <div className="w-full h-full flex flex-col">
      {/* Controls — ATAS */}
      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={startAnimation}
          disabled={isPlaying}
          className="flex-1 py-1.5 px-3 rounded-md bg-[#5170ff] text-white text-[0.7rem] font-semibold hover:bg-[#3d5ce0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPlaying ? 'Running...' : 'Play'}
        </button>
        <button
          onClick={resetAnimation}
          className="py-1.5 px-3 rounded-md border border-[var(--border)] text-[var(--foreground)] text-[0.7rem] font-semibold hover:bg-[var(--muted)] transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Canvas area */}
      <div ref={wrapperRef} className="relative flex-1 min-h-0 bg-[#f8f8fa] rounded-lg border border-[var(--border)] overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        {/* Timer */}
        <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm border border-[var(--border)] rounded-md px-2 py-1 text-[0.65rem] font-mono font-bold text-[var(--foreground)]">
          {elapsed.toFixed(1)}s
        </div>
        {/* Phase indicator */}
        {phaseInfo && (
          <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm border border-[var(--border)] rounded-md px-2 py-1 text-[0.6rem] font-bold" style={{ color: [colors.phase1, colors.phase2, colors.phase3, colors.phase4][PHASES.indexOf(phaseInfo)] }}>
            {phaseInfo.label}
          </div>
        )}
      </div>
    </div>
  );
}

function createParticle(type, width, height, x, y) {
  return {
    type,
    radius: type === 'CaCO3' ? 8 : 4,
    settled: false,
    x: x ?? Math.random() * (width - 40) + 20,
    y: y ?? Math.random() * (height * 0.75) + height * 0.15 + 20,
    vx: (Math.random() - 0.5) * 2.5,
    vy: (Math.random() - 0.5) * 2.5,
  };
}

function updateParticle(p, waterTopY, speedMulti, isAgitated, width, height) {
  if (p.settled) return;

  let vx = p.vx * speedMulti;
  let vy = p.vy * speedMulti;

  if (isAgitated) {
    vx += (Math.random() - 0.5) * 1.5;
    vy += (Math.random() - 0.5) * 1.5;
  }

  if (p.type === 'CaCO3') {
    vx *= 0.6;
    vy = 2.5;
  }

  p.x += vx;
  p.y += vy;

  // Bounce walls
  if (p.x - p.radius < 0) {
    p.x = p.radius;
    p.vx *= -1;
  } else if (p.x + p.radius > width) {
    p.x = width - p.radius;
    p.vx *= -1;
  }

  // Bounce water surface
  if (p.y - p.radius < waterTopY) {
    p.y = waterTopY + p.radius;
    if (p.vy < 0) p.vy *= -1;
  }

  // Bottom
  // Bottom — container floor with margin
  const BOTTOM_MARGIN = 20;
  const floorY = height - BOTTOM_MARGIN;
  if (p.y + p.radius > floorY) {
    p.y = floorY - p.radius;
    if (p.type === 'CaCO3') {
      p.settled = true;
    } else {
      p.vy *= -1;
    }
  }
}

function drawParticle(ctx, p) {
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
  if (p.type === 'Ca') {
    ctx.fillStyle = colors.ca;
    ctx.shadowColor = colors.ca;
  } else if (p.type === 'CO3') {
    ctx.fillStyle = colors.co3;
    ctx.shadowColor = colors.co3;
  } else {
    ctx.fillStyle = colors.caco3;
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
  }
  ctx.shadowBlur = p.settled ? 3 : 8;
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.closePath();

  // Charge label
  if (!p.settled && p.radius > 3) {
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = 'bold 7px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(p.type === 'Ca' ? '+' : '-', p.x, p.y);
  }
}
