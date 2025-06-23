
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AuroraBackground from './AuroraBackground';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      <AuroraBackground />
      
      {/* Content */}
      <div className="relative z-10 text-center section-padding">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl animate-float">
              <img 
                src="/lovable-uploads/817b4d92-bb22-44fe-9fa9-72332b6a5669.png" 
                alt="Riya Jain" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">Riya Jain</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-600 font-light mb-8 h-12">
            <TypewriterEffect text="Full Stack Developer" speed={150} delay={1000} />
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
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Download Resume
            </a>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-lg"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center text-slate-600 hover:text-blue-600 transition-colors duration-300 animate-bounce"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
