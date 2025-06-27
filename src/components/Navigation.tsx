
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-center items-center h-16">
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-blue-400 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-slate-600 hover:text-blue-400 transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-slate-600 hover:text-blue-400 transition-colors duration-200"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-600 hover:text-blue-400 transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-600 hover:text-blue-400 transition-colors duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
