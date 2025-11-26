import { useEffect, useRef, useState } from 'react';
import { Code2, Sparkles, Cpu } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(3, 7, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 animate-float">
              <Code2 className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 animate-float-delay-1">
              <Sparkles className="w-8 h-8 text-blue-400" />
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 animate-float-delay-2">
              <Cpu className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 animate-gradient">
              Julio Machado
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto font-light leading-relaxed">
            Criando tecnologia como obras de arte — códigos que respiram, sistemas que aprendem e interfaces que vivem.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="px-6 py-3 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-3xl font-bold text-blue-400">344+</div>
              <div className="text-sm text-blue-200">Projetos</div>
            </div>
            <div className="px-6 py-3 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-3xl font-bold text-blue-400">12+</div>
              <div className="text-sm text-blue-200">Linguagens</div>
            </div>
            <div className="px-6 py-3 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-3xl font-bold text-blue-400">30+</div>
              <div className="text-sm text-blue-200">Frameworks</div>
            </div>
            <div className="px-6 py-3 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-3xl font-bold text-blue-400">20</div>
              <div className="text-sm text-blue-200">Anos TI</div>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
            >
              Explorar Portfólio
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
}
