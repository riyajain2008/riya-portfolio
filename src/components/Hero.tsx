import { Linkedin, Github } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-[#0A0B22] overflow-hidden">
      {/* Aura/Wave Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* SVG Aura, you can enhance or replace with your AuroraBackground */}
        <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="none" className="w-full h-[40vh] md:h-[60vh]">
          <defs>
            <linearGradient id="auraGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop stopColor="#73e8fa" />
              <stop offset="0.5" stopColor="#a1c4fd" />
              <stop offset="1" stopColor="#00c6fb" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 C400,320 1040,80 1440,220 L1440,400 L0,400 Z"
            fill="url(#auraGradient)"
            fillOpacity="0.8"
          />
        </svg>
      </div>

      {/* Profile Picture */}
      <div className="z-10 mb-4">
        <img
          src="/lovable-uploads/817b4d92-bb22-44fe-9fa9-72332b6a5669.png"
          alt="Riya Jain"
          className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-lg bg-white object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="z-10 text-4xl md:text-6xl font-extrabold text-white mb-2 text-center">
        Riya JAIN
      </h1>

      {/* Typewriter Title */}
      <h2 className="z-10 text-2xl md:text-3xl text-white font-light mb-6 text-center">
        Full Stack <span className="text-blue-400 font-semibold">
          <TypewriterEffect text="Developer" speed={50} delay={500} />
        </span>
      </h2>

      {/* Social Icons */}
      <div className="z-10 flex gap-6 mt-2">
        <a
          href="https://www.linkedin.com/in/riyajain8991/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/riyajain2008"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;