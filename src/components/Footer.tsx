
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 section-padding bg-navy border-t border-cyan/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold gradient-text">Riya Jain</h3>
            <p className="text-slate mt-2">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/riyajain2008"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center text-cyan hover:bg-cyan hover:text-dark-navy transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/riyajain8991/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center text-cyan hover:bg-cyan hover:text-dark-navy transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:jainriya1920@gmail.com"
              className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center text-cyan hover:bg-cyan hover:text-dark-navy transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-8 mb-8 text-slate">
            <a href="#about" className="hover:text-cyan transition-colors duration-200">About</a>
            <a href="#experience" className="hover:text-cyan transition-colors duration-200">Experience</a>
            <a href="#projects" className="hover:text-cyan transition-colors duration-200">Projects</a>
            <a href="#skills" className="hover:text-cyan transition-colors duration-200">Skills</a>
            <a href="#contact" className="hover:text-cyan transition-colors duration-200">Contact</a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-cyan/20">
            <p className="text-slate">
              © {currentYear} Riya Jain. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
