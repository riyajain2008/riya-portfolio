
import { useEffect, useState } from 'react';
import AuroraBackground from './AuroraBackground';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cream-50">
      <AuroraBackground />
      
      {/* Content */}
      <div className="relative z-10 text-center section-padding">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-200 shadow-2xl animate-float">
              <img 
                src="/lovable-uploads/c8d40b6e-0a52-428a-9bd0-8882524b572b.png" 
                alt="Riya Jain" 
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-700 to-blue-400 bg-clip-text text-transparent">Riya Jain</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-600 font-light mb-8 h-12">
            <TypewriterEffect text="Full Stack Developer" />
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting digital experiences with precision and passion. 
            From concept to deployment, I build scalable solutions that make an impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-300 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Download Resume
            </a>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300 shadow-lg"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
