import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Master of Science in Information Systems",
    school: "New York University, Courant Institute of Mathematical Sciences",
    period: "September 2023 - May 2025",
    status: "Completed",
    description: "Advanced coursework in information systems, data management, and software engineering."
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "NIT Bhopal (Maulana Azad National Institute of Technology)",
    period: "July 2016 - June 2020",
    status: "Completed",
    description: "Comprehensive foundation in computer science fundamentals, algorithms, and software development."
  }
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="education" ref={sectionRef} className="py-32 section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">Education</span>
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white border border-blue-100 rounded-2xl p-8 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl text-blue-600 mb-2">
                        {edu.school}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-slate-700 mb-1">
                        {edu.period}
                      </div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
