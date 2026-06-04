import { useRef, useEffect, useCallback, useState } from 'react';

const COLORS = {
  h2o: '#5170ff',
  ca: '#ef4444',
  co3: '#f59e0b',
  caco3: '#94a3b8',
  pipeBorder: 'rgba(81, 112, 255, 0.25)',
  pipeDashed: 'rgba(81, 112, 255, 0.6)',
  cellDivider: 'rgba(0, 0, 0, 0.1)',
  cellAlt: ['rgba(81, 112, 255, 0.02)', 'rgba(0, 0, 0, 0.02)'],
  text: '#3f3f46',
  textMuted: '#71717a',
};

const SCENES = [
  {
    title: 'Feed Water Entry',
    desc: 'Dilute feed enters the RO vessel. Ca²⁺ and CO₃²⁻ ions flow freely. Concentration Factor (CF) is low.',
  },
  {
    title: 'Linear Concentration Buildup',
    desc: 'Pure water permeates through the membrane. Solvent volume drops sharply, causing extreme ion concentration spike in the retained stream.',
  },
  {
    title: 'Precipitation Onset',
    desc: 'Ion Product exceeds solubility limit (Supersaturated). Ca²⁺ and CO₃²⁻ collide and freeze into solid scale — an Immobile Entity.',
  },
  {
    title: 'Mass Transport Shift',
    desc: 'Scales disappear from the mobile mass flow. Water crossing to downstream cells is already "depleted" of scaling precursors.',
  },
  {
    title: 'ROSSpy Prediction Profile',
    desc: 'Smart tracking of mass transport per ion layer-by-layer. Peak scale deposits at the first saturation point, not naive static extrapolation.',
  },
];

export default function ROTransportCanvas({ onSceneChange }) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const animRef = useRef(null);
  const [scene, setSceneInternal] = useState(0);
  const setScene = useCallback((s) => {
    setSceneInternal(s);
    onSceneChange?.(s);
  }, [onSceneChange]);
  const [isPlaying, setIsPlaying] = useState(true);

  const particlesRef = useRef([]);
  const dimsRef = useRef({ pipeX: 0, pipeY: 0, pipeW: 0, pipeH: 0, cellW: 0 });

  const initParticles = useCallback(() => {
    particlesRef.current = [];
  }, []);

  const drawPipe = useCallback((ctx, w, h) => {
    const d = dimsRef.current;
    const { pipeX, pipeY, pipeW, pipeH, cellW } = d;

    // Pipe background
    ctx.fillStyle = 'rgba(81, 112, 255, 0.04)';
    ctx.fillRect(pipeX, pipeY, pipeW, pipeH);

    // Top border (solid)
    ctx.beginPath();
    ctx.moveTo(pipeX, pipeY);
    ctx.lineTo(pipeX + pipeW, pipeY);
    ctx.strokeStyle = COLORS.pipeBorder;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Bottom border (dashed — membrane)
    ctx.beginPath();
    ctx.setLineDash([8, 6]);
    ctx.moveTo(pipeX, pipeY + pipeH);
    ctx.lineTo(pipeX + pipeW, pipeY + pipeH);
    ctx.strokeStyle = COLORS.pipeDashed;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);

    // Cell dividers
    ctx.fillStyle = COLORS.textMuted;
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';

    for (let i = 0; i <= 6; i++) {
      const lx = pipeX + i * cellW;
      if (i > 0 && i < 6) {
        ctx.beginPath();
        ctx.moveTo(lx, pipeY);
        ctx.lineTo(lx, pipeY + pipeH);
        ctx.strokeStyle = COLORS.cellDivider;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Dashed extension below membrane
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.moveTo(lx, pipeY + pipeH);
        ctx.lineTo(lx, pipeY + pipeH + 18);
        ctx.strokeStyle = 'rgba(0,0,0,0.08)';
        ctx.stroke();
        ctx.setLineDash([]);
      }

      if (i < 6) {
        ctx.fillText(`Cell ${i + 1}`, lx + cellW / 2, pipeY - 10);
        // Alternating cell fill
        ctx.fillStyle = i % 2 === 0 ? COLORS.cellAlt[0] : COLORS.cellAlt[1];
        ctx.fillRect(lx, pipeY, cellW, pipeH);
        ctx.fillStyle = COLORS.textMuted;
      }
    }

    // Membrane labels
    ctx.fillStyle = COLORS.text;
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Element A', pipeX + cellW * 1.5, pipeY - 32);
    ctx.fillText('Element B', pipeX + cellW * 4.5, pipeY - 32);

    // Feed arrow
    ctx.fillStyle = COLORS.h2o;
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('Feed →', pipeX - 8, pipeY + pipeH / 2 + 4);
  }, []);

  const drawGraph = useCallback((ctx, w, h) => {
    const d = dimsRef.current;
    const { pipeX, pipeY, pipeW, cellW } = d;
    const graphH = 80;
    const baseY = pipeY - 45;

    // Background
    ctx.fillStyle = 'rgba(0,0,0,0.03)';
    ctx.fillRect(pipeX, baseY - graphH, pipeW, graphH);

    // Plot line — peak at Cell 2-3, then drops
    ctx.beginPath();
    ctx.moveTo(pipeX, baseY);
    ctx.lineTo(pipeX + cellW * 1.5, baseY - graphH * 0.75);
    ctx.lineTo(pipeX + cellW * 2.5, baseY - graphH * 0.92);
    ctx.lineTo(pipeX + cellW * 3.5, baseY - graphH * 0.08);
    ctx.lineTo(pipeX + cellW * 4.5, baseY - graphH * 0.04);
    ctx.lineTo(pipeX + cellW * 5.5, baseY);
    ctx.lineTo(pipeX + pipeW, baseY);

    ctx.strokeStyle = COLORS.caco3;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Fill area
    ctx.lineTo(pipeX + pipeW, baseY);
    ctx.lineTo(pipeX, baseY);
    ctx.fillStyle = 'rgba(148, 163, 184, 0.12)';
    ctx.fill();

    // Label
    ctx.fillStyle = COLORS.text;
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Scale deposition profile (ROSSpy prediction)', pipeX + 8, baseY - graphH + 16);
  }, []);

  const spawnParticles = useCallback((currentScene) => {
    const d = dimsRef.current;
    const { pipeX, pipeY, pipeH } = d;

    // Always spawn water
    if (Math.random() < 0.9) {
      particlesRef.current.push(new Particle('h2o', pipeX, pipeY + Math.random() * pipeH));
      if (Math.random() < 0.6) {
        particlesRef.current.push(new Particle('h2o', pipeX, pipeY + Math.random() * pipeH));
      }
    }

    // Ion spawn probability
    let ionProb = 0.12;
    if (currentScene === 3) ionProb = 0.02;
    if (currentScene >= 4) ionProb = 0;

    if (Math.random() < ionProb) {
      const type = Math.random() > 0.5 ? 'ca' : 'co3';
      particlesRef.current.push(new Particle(type, pipeX, pipeY + Math.random() * pipeH));
    }
  }, []);

  const checkPrecipitation = useCallback((currentScene) => {
    if (currentScene < 2 || currentScene >= 4) return;

    const d = dimsRef.current;
    const { pipeX, cellW } = d;
    const particles = particlesRef.current;

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      if (p1.settled || p1.x < pipeX + cellW * 1.3 || p1.x > pipeX + cellW * 3.2) continue;

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        if (p2.settled) continue;
        if (!((p1.type === 'ca' && p2.type === 'co3') || (p1.type === 'co3' && p2.type === 'ca'))) continue;

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        if (Math.sqrt(dx * dx + dy * dy) < 16) {
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          particles.splice(j, 1);
          particles.splice(i, 1);
          particles.push(new Particle('caco3', midX, midY));
          return;
        }
      }
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    drawPipe(ctx, w, h);

    if (scene < 4) spawnParticles(scene);
    checkPrecipitation(scene);

    const particles = particlesRef.current;
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      updateParticle(p, dimsRef.current, scene);
      drawParticle(ctx, p);
      if (p.x > w + 50 || p.y > h + 50) {
        particles.splice(i, 1);
      }
    }

    if (scene === 4) {
      ctx.fillStyle = 'rgba(248, 248, 250, 0.7)';
      ctx.fillRect(0, 0, w, h);
      drawGraph(ctx, w, h);
    }

    animRef.current = requestAnimationFrame(animate);
  }, [scene, drawPipe, drawGraph, spawnParticles, checkPrecipitation]);

  const resetAnim = useCallback(() => {
    cancelAnimationFrame(animRef.current);
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const dpr = window.devicePixelRatio || 1;
    const width = wrapper.clientWidth;
    const height = wrapper.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Recalculate pipe dims
    const pipeW = width * 0.82;
    const pipeH = height * 0.22;
    dimsRef.current = {
      pipeX: width * 0.09,
      pipeY: height * 0.38,
      pipeW,
      pipeH,
      cellW: pipeW / 6,
    };

    initParticles();
    drawPipe(ctx, width, height);
  }, [drawPipe, initParticles]);

  useEffect(() => {
    resetAnim();
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [resetAnim, animate]);

  const goScene = (dir) => {
    const next = scene + dir;
    if (next >= 0 && next < SCENES.length) {
      setScene(next);
      initParticles();
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Scene indicator */}
      <div className="flex items-center justify-center gap-2 mb-2">
        {SCENES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setScene(i); initParticles(); }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === scene ? 'bg-[#5170ff] scale-125 shadow-sm' : 'bg-[#e4e4e7] hover:bg-[#d4d4d8]'
            }`}
          />
        ))}
      </div>

      {/* Canvas */}
      <div ref={wrapperRef} className="relative flex-1 min-h-0 bg-white rounded-lg border border-[var(--border)] overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        {/* Scene label overlay */}
        <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm border border-[var(--border)] rounded-md px-2 py-0.5 text-[0.6rem] font-bold text-[var(--foreground)]">
          Scene {scene + 1} / {SCENES.length}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={() => goScene(-1)}
          disabled={scene === 0}
          className="flex-1 py-1.5 px-3 rounded-md border border-[var(--border)] text-[var(--foreground)] text-[0.7rem] font-semibold hover:bg-[var(--muted)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          ← Prev
        </button>
        <button
          onClick={() => goScene(1)}
          disabled={scene === SCENES.length - 1}
          className="flex-1 py-1.5 px-3 rounded-md bg-[#5170ff] text-white text-[0.7rem] font-semibold hover:bg-[#3d5ce0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {scene === SCENES.length - 1 ? 'Done ✓' : 'Next →'}
        </button>
      </div>
    </div>
  );
}

// ─── Particle Class & Helpers ───

class Particle {
  constructor(type, x, y) {
    this.type = type;
    this.settled = false;
    this.isPermeate = false;
    this.x = x;
    this.y = y;

    if (type === 'h2o') {
      this.radius = 3.5;
      this.vx = 2 + Math.random() * 0.8;
      this.vy = (Math.random() - 0.5) * 0.4;
    } else if (type === 'caco3') {
      this.radius = 7;
      this.vx = 0;
      this.vy = 2;
    } else {
      this.radius = 5;
      this.vx = 1.2 + Math.random() * 0.8;
      this.vy = (Math.random() - 0.5) * 1.2;
    }
  }
}

function updateParticle(p, dims, scene) {
  if (p.settled) return;

  const { pipeX, pipeY, pipeW, pipeH, cellW } = dims;

  let vx = Math.abs(p.vx); // Always forward
  let vy = p.vy;

  if (p.type === 'caco3') {
    vx *= 0.5;
    vy = 2;
  }

  // Agitation for ions in Cells 2-3 during concentration phase
  if (scene >= 1 && (p.type === 'ca' || p.type === 'co3') && !p.settled) {
    if (p.x > pipeX + cellW && p.x < pipeX + cellW * 3.5) {
      vx += Math.random() * 0.3; // Only forward jitter, never backward
      vy += (Math.random() - 0.5) * 0.3;
    }
  }

  p.x += vx;
  p.y += vy;

  // Top wall
  if (!p.isPermeate && p.y - p.radius < pipeY) {
    p.y = pipeY + p.radius;
    if (p.vy < 0) p.vy *= -1;
  }

  // Bottom wall (membrane)
  if (p.y + p.radius > pipeY + pipeH) {
    if (p.type === 'h2o') {
      let passProb = 0.18;
      if (scene >= 1) {
        if (p.x < pipeX + cellW * 2) passProb = 0.75;
        else passProb = 0.35;
      }

      if (Math.random() < passProb && !p.isPermeate) {
        p.isPermeate = true;
        p.vy = 2 + Math.random() * 2;
        p.vx = 0.3 + Math.random() * 0.5; // Always forward
      } else if (!p.isPermeate) {
        p.y = pipeY + pipeH - p.radius;
        p.vy *= -1;
      }
    } else if (p.type === 'caco3') {
      p.y = pipeY + pipeH - 7;
      p.settled = true;
      p.vx = 0;
      p.vy = 0;
    } else {
      p.y = pipeY + pipeH - p.radius;
      p.vy *= -1;
    }
  }

  // Left wall only (no right bounce — particles exit forward)
  if (p.x - p.radius < 0) {
    p.x = p.radius;
    p.vx = Math.abs(p.vx);
  }

  // Ensure vx stays positive after all updates
  if (!p.settled && p.type !== 'caco3') {
    p.vx = Math.max(0.2, Math.abs(p.vx));
  }
}

function drawParticle(ctx, p) {
  ctx.beginPath();

  if (p.type === 'caco3') {
    // Square for scale
    const s = p.radius * 2;
    ctx.fillStyle = COLORS.caco3;
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 4;
    roundRect(ctx, p.x - s / 2, p.y - s / 2, s, s, 2);
    ctx.fill();
  } else {
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    if (p.type === 'h2o') {
      ctx.fillStyle = COLORS.h2o;
      ctx.globalAlpha = p.isPermeate ? 0.35 : 0.75;
    } else if (p.type === 'ca') {
      ctx.fillStyle = COLORS.ca;
    } else {
      ctx.fillStyle = COLORS.co3;
    }
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  ctx.shadowBlur = 0;
  ctx.closePath();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
}
