
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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-slate-800">
            Riya Jain
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Download Resume Button */}
          <a 
            href="#"
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
