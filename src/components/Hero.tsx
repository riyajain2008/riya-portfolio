import { useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { Linkedin, Github } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";

const Hero = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: false,
        touchControls: false,
        minHeight: 330,
        minWidth: 200,
        color: 0x73e8fa,
        shininess: 80,
        waveHeight: 26,
        waveSpeed: 0.45,
        zoom: 0.95,
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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Vanta.js Animated Wave */}
      <div
        ref={vantaRef}
        className="absolute top-0 left-0 w-full h-[330px] z-0"
        style={{ pointerEvents: "none" }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center pt-44 pb-20 z-10">
        <div className="mb-6">
          <img
            src="/lovable-uploads/817b4d92-bb22-44fe-9fa9-72332b6a5669.png"
            alt="Riya Jain"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover bg-white"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-2 text-center">
          Riya JAIN
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 font-light mb-8 text-center">
          <TypewriterEffect text="Full Stack Developer" speed={60} delay={300} />
        </h2>
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