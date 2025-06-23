import { useEffect, useRef } from "react";
import { Linkedin, Github } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";

const Hero = () => {
  // Reference for wave animation
  const waveRef = useRef<SVGPathElement | null>(null);

  // Animate the wave
  useEffect(() => {
    let frame = 0;
    let raf: number;
    const animate = () => {
      if (waveRef.current) {
        // Animate the wave path using a simple sine function
        const amplitude = 16;
        const frequency = 0.012;
        let path = "M 0 80 Q ";
        for (let i = 0; i <= 1440; i += 80) {
          const dx = i;
          const dy =
            80 +
            Math.sin((frame * 0.08 + i) * frequency) * amplitude +
            Math.cos((frame * 0.07 + i) * frequency) * amplitude * 0.5;
          path += `${dx} ${dy}, `;
        }
        path += "1440 80 L 1440 160 L 0 160 Z";
        waveRef.current.setAttribute("d", path);
      }
      frame++;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Animated Wave Aura */}
      <div className="absolute top-0 left-0 w-full" style={{ zIndex: 1 }}>
        <svg width="100%" height={160} viewBox="0 0 1440 160">
          <defs>
            <linearGradient id="hero-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop stopColor="#73e8fa" />
              <stop offset="0.5" stopColor="#a1c4fd" />
              <stop offset="1" stopColor="#00c6fb" />
            </linearGradient>
          </defs>
          <path
            ref={waveRef}
            fill="url(#hero-wave)"
            fillOpacity="0.7"
            d="M 0 80 Q 360 80, 720 80 Q 1080 80, 1440 80 L 1440 160 L 0 160 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center pt-40 pb-20" style={{ zIndex: 2 }}>
        {/* Profile Picture */}
        <div className="mb-6">
          <img
            src="/lovable-uploads/817b4d92-bb22-44fe-9fa9-72332b6a5669.png"
            alt="Riya Jain"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover bg-white"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-2 text-center">
          Riya JAIN
        </h1>

        {/* Full Stack (static) + Developer (typing effect) */}
        <h2 className="text-xl md:text-2xl text-gray-700 font-light mb-8 flex flex-row items-center justify-center">
          Full Stack&nbsp;
          <span className="text-blue-500 font-semibold">
            <TypewriterEffect text="Developer" speed={50} delay={500} />
          </span>
        </h2>

        {/* Social Icons */}
        <div className="flex gap-8 mt-2">
          <a
            href="https://www.linkedin.com/in/riyajain8991/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/riyajain2008"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;