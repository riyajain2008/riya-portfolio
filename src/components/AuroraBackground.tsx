
import { useEffect, useRef } from 'react';

const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create soft aurora layers with very light sea blue and cream colors only
      const auroraLayers = [
        { color: 'rgba(173, 216, 230, 0.03)', speed: 0.002, amplitude: 60, frequency: 0.003 }, // Very light sea blue
        { color: 'rgba(255, 253, 250, 0.04)', speed: 0.003, amplitude: 40, frequency: 0.004 }, // Very light cream
        { color: 'rgba(176, 224, 230, 0.02)', speed: 0.0025, amplitude: 80, frequency: 0.0025 }, // Powder blue
        { color: 'rgba(255, 255, 255, 0.02)', speed: 0.0015, amplitude: 100, frequency: 0.002 }, // Pure white
      ];

      auroraLayers.forEach((layer, index) => {
        ctx.beginPath();
        
        // Create flowing aurora effect
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, layer.color);
        gradient.addColorStop(0.5, layer.color.replace(/[\d\.]+\)$/g, '0.01)'));
        gradient.addColorStop(1, layer.color);

        ctx.fillStyle = gradient;

        // Draw flowing shapes
        for (let i = 0; i < 2; i++) {
          ctx.beginPath();
          const phase = time * layer.speed + index * Math.PI / 2 + i * Math.PI / 4;
          const yOffset = canvas.height * 0.3 + Math.sin(phase) * 150;

          ctx.moveTo(-100, yOffset);

          for (let x = 0; x <= canvas.width + 100; x += 20) {
            const y = yOffset + 
                     Math.sin(x * layer.frequency + phase) * layer.amplitude +
                     Math.sin(x * layer.frequency * 1.5 + phase * 0.7) * (layer.amplitude * 0.5) +
                     Math.sin(x * layer.frequency * 0.5 + phase * 1.2) * (layer.amplitude * 0.3);
            ctx.lineTo(x, y);
          }

          ctx.lineTo(canvas.width + 100, canvas.height);
          ctx.lineTo(-100, canvas.height);
          ctx.closePath();
          
          ctx.globalAlpha = 0.3 - i * 0.1;
          ctx.fill();
        }
      });

      // Add very subtle floating particles
      for (let i = 0; i < 12; i++) {
        const x = (Math.sin(time * 0.001 + i) * canvas.width) / 2 + canvas.width / 2;
        const y = (Math.cos(time * 0.0015 + i * 0.5) * canvas.height) / 3 + canvas.height / 2;
        const size = Math.abs(Math.sin(time * 0.002 + i)) * 1.5 + 0.5;
        
        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
        particleGradient.addColorStop(0, 'rgba(173, 216, 230, 0.1)');
        particleGradient.addColorStop(1, 'rgba(173, 216, 230, 0)');
        
        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default AuroraBackground;
