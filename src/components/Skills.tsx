
import { useEffect, useRef, useState } from 'react';
import { 
  Coffee, 
  Code, 
  Database, 
  Globe, 
  Server, 
  Cloud, 
  Container, 
  Settings, 
  GitBranch, 
  Zap,
  Layers
} from 'lucide-react';

const skills = [
  { name: "Java", icon: Coffee, color: "text-orange-600" },
  { name: "Python", icon: Code, color: "text-blue-500" },
  { name: "Go", icon: Zap, color: "text-cyan-500" },
  { name: "JavaScript", icon: Code, color: "text-yellow-500" },
  { name: "TypeScript", icon: Code, color: "text-blue-600" },
  { name: "SQL", icon: Database, color: "text-slate-600" },
  { name: "React", icon: Layers, color: "text-cyan-400" },
  { name: "Angular", icon: Globe, color: "text-red-600" },
  { name: "HTML", icon: Globe, color: "text-orange-500" },
  { name: "CSS", icon: Globe, color: "text-blue-500" },
  { name: "Node.js", icon: Server, color: "text-green-600" },
  { name: "Spring Boot", icon: Layers, color: "text-green-500" },
  { name: "Flask", icon: Server, color: "text-gray-600" },
  { name: "Express", icon: Server, color: "text-gray-800" },
  { name: "AWS", icon: Cloud, color: "text-orange-400" },
  { name: "Docker", icon: Container, color: "text-blue-600" },
  { name: "Kubernetes", icon: Settings, color: "text-purple-600" },
  { name: "Jenkins", icon: Settings, color: "text-blue-700" },
  { name: "GitHub Actions", icon: GitBranch, color: "text-gray-800" },
  { name: "Terraform", icon: Settings, color: "text-purple-700" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-700" },
  { name: "MongoDB", icon: Database, color: "text-green-600" },
  { name: "DynamoDB", icon: Database, color: "text-orange-600" },
  { name: "Redis", icon: Database, color: "text-red-600" }
];

const Skills = () => {
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
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-32 section-padding bg-gradient-to-br from-cream-50 via-cream-100 to-cream-50 relative"
      style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(255, 248, 220, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(255, 245, 210, 0.2) 0%, transparent 50%),
          linear-gradient(45deg, rgba(255, 250, 240, 0.1) 25%, transparent 25%), 
          linear-gradient(-45deg, rgba(255, 250, 240, 0.1) 25%, transparent 25%)
        `,
        backgroundSize: '60px 60px, 80px 80px, 20px 20px, 20px 20px'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-cream-200 rounded-2xl p-6 hover:border-blue-200 transition-all duration-300 h-full shadow-lg hover:shadow-xl hover:scale-105 flex flex-col items-center justify-center text-center">
                    <IconComponent size={32} className={`${skill.color} mb-3`} />
                    <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
