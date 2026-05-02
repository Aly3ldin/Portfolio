import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Network, TerminalSquare } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const numNodes = Math.floor((width * height) / 15000);

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 204, 204, 0.8)"; // Primary color

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.strokeStyle = "rgba(0, 204, 204, 0.15)";
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            
            // Draw flowing packet occasionally
            if (Math.random() > 0.99) {
               ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
               const px = nodes[i].x + (nodes[j].x - nodes[i].x) * Math.random();
               const py = nodes[i].y + (nodes[j].y - nodes[i].y) * Math.random();
               ctx.beginPath();
               ctx.arc(px, py, 2, 0, Math.PI * 2);
               ctx.fill();
               ctx.fillStyle = "rgba(0, 204, 204, 0.8)";
            }
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-primary font-mono mb-6"
          >
            <TerminalSquare className="w-5 h-5" />
            <span>SYSTEM_READY // CONNECTION_ESTABLISHED</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-foreground"
          >
            Alex <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Chen</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-2xl md:text-3xl font-mono text-muted-foreground">Senior Network Engineer</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            I architect, deploy, and secure the invisible infrastructure that keeps the internet running. From enterprise routing to zero-trust cloud topologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="font-mono bg-primary hover:bg-primary/90 text-primary-foreground">
              <Network className="w-4 h-4 mr-2" />
              VIEW_TOPOLOGY
            </Button>
            <Button size="lg" variant="outline" className="font-mono border-border hover:bg-muted">
              DOWNLOAD_MANIFEST.PDF
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
