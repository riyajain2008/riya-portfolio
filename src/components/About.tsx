import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-dark-text leading-relaxed">
                Hi, I'm <span className="text-emerald font-semibold">Riya</span> — a full stack developer 
                with experience working across scalable backend systems, frontend design, and cloud infrastructure.
              </p>
              
              <p className="text-lg text-dark-text leading-relaxed">
                I've worked in both large-scale enterprise and startup environments, and I'm currently pursuing 
                my Master's in Information Systems at NYU. I enjoy building thoughtful, well-architected products 
                that are both useful and user-friendly.
              </p>
              
              <p className="text-lg text-dark-text leading-relaxed">
                With experience at companies like John Deere, I've led the delivery of 50+ production 
                features and designed tools that significantly boost user engagement.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-dark-text">Features Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">3+</div>
                  <div className="text-dark-text">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="w-full max-w-sm mx-auto">
                <img 
                  src="/lovable-uploads/817b4d92-bb22-44fe-9fa9-72332b6a5669.png" 
                  alt="Riya Jain" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
