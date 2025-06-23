import { useEffect, useRef } from "react";
import { Linkedin, Github } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const Hero = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        minHeight: 300.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x73e8fa,
        shininess: 50.00,
        waveHeight: 12,
        waveSpeed: 0.5,
        zoom: 1.1,
        backgroundColor: 0xffffff,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      {/* Vanta Wave Aura */}
      <div
        ref={vantaRef}
        className="absolute top-0 left-0 w-full h-[350px] z-0"
        style={{ pointerEvents: "none" }}
      />
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center pt-40 pb-20 z-10">
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

        {/* Typing "Full Stack Developer" */}
        <h2 className="text-xl md:text-2xl text-gray-700 font-light mb-8 flex flex-row items-center justify-center">
          <span className="text-blue-500 font-semibold">
            <TypewriterEffect text="Full Stack Developer" speed={60} delay={400} />
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