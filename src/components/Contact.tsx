
import { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDownloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Riya_Jain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="gradient-text">Let's Connect</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-8 text-dark-text">Get In Touch</h3>
              
              <p className="text-light-text text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you want to discuss a potential collaboration or just say hello, 
                I'd love to hear from you!
              </p>

              {/* Download Resume Button */}
              <div className="mb-8">
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald to-lime text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>

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

            {/* Contact Form */}
            <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="bg-white/80 backdrop-blur-sm border border-emerald/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-dark-text">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark-text mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-emerald/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-colors duration-200 text-dark-text"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark-text mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-emerald/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-colors duration-200 text-dark-text"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark-text mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border-2 border-emerald/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-colors duration-200 text-dark-text resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-emerald to-lime text-white font-semibold rounded-lg hover:scale-[1.02] transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
