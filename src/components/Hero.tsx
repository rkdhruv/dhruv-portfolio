import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let shapes: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotSpeed: number;
      dx: number;
      dy: number;
      opacity: number;
      type: "triangle" | "diamond" | "line";
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      resize();
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = Math.floor((w * h) / 25000);
      shapes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 20 + 8,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.12 + 0.03,
        type: (["triangle", "diamond", "line"] as const)[
          Math.floor(Math.random() * 3)
        ],
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const s of shapes) {
        s.x += s.dx;
        s.y += s.dy;
        s.rotation += s.rotSpeed;

        if (s.x < -50) s.x = w + 50;
        if (s.x > w + 50) s.x = -50;
        if (s.y < -50) s.y = h + 50;
        if (s.y > h + 50) s.y = -50;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.strokeStyle = `rgba(225, 29, 72, ${s.opacity})`;
        ctx.lineWidth = 1.5;

        if (s.type === "triangle") {
          ctx.beginPath();
          ctx.moveTo(0, -s.size);
          ctx.lineTo(s.size * 0.866, s.size * 0.5);
          ctx.lineTo(-s.size * 0.866, s.size * 0.5);
          ctx.closePath();
          ctx.stroke();
        } else if (s.type === "diamond") {
          ctx.beginPath();
          ctx.moveTo(0, -s.size);
          ctx.lineTo(s.size * 0.6, 0);
          ctx.lineTo(0, s.size);
          ctx.lineTo(-s.size * 0.6, 0);
          ctx.closePath();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(-s.size, 0);
          ctx.lineTo(s.size, 0);
          ctx.stroke();
        }

        ctx.restore();
      }

      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <GeometricBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-page" aria-hidden="true" />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-heading text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Dhruv Patel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-lg text-tertiary sm:text-xl"
        >
          Software Engineer{" "}
          <span className="text-accent" aria-hidden="true">·</span> CS @ UDel{" "}
          <span className="text-accent" aria-hidden="true">·</span> Builder
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="rounded-xl bg-accent px-8 py-3 font-heading text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:brightness-110 hover:shadow-accent/40 active:scale-[0.97]"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-xl border border-border px-8 py-3 font-heading text-sm font-semibold text-secondary transition-all hover:border-accent/40 hover:text-primary active:scale-[0.97]"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-faint transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
