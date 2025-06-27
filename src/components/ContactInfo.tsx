
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 text-dark-text">Get In Touch</h3>
      
      <p className="text-light-text text-lg leading-relaxed mb-8">
        I'm always interested in new opportunities and exciting projects. 
        Whether you want to discuss a potential collaboration or just say hello, 
        I'd love to hear from you!
      </p>

      {/* Contact Links */}
      <div className="space-y-6">
        <a 
          href="mailto:jainriya1920@gmail.com"
          className="flex items-center gap-4 text-light-text hover:text-emerald transition-colors duration-200 group"
        >
          <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald/20 transition-colors duration-200">
            <Mail size={24} className="text-emerald" />
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <div>jainriya1920@gmail.com</div>
          </div>
        </a>

        <a 
          href="https://github.com/riyajain2008"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-light-text hover:text-emerald transition-colors duration-200 group"
        >
          <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald/20 transition-colors duration-200">
            <Github size={24} className="text-emerald" />
          </div>
          <div>
            <div className="font-semibold">GitHub</div>
            <div>@riyajain2008</div>
          </div>
        </a>

        <a 
          href="https://www.linkedin.com/in/riyajain8991/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-light-text hover:text-emerald transition-colors duration-200 group"
        >
          <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center group-hover:bg-emerald/20 transition-colors duration-200">
            <Linkedin size={24} className="text-emerald" />
          </div>
          <div>
            <div className="font-semibold">LinkedIn</div>
            <div>Riya Jain</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
