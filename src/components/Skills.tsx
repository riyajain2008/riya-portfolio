
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "Go", icon: "🔷" },
      { name: "JavaScript", icon: "📜" },
      { name: "TypeScript", icon: "🔷" },
      { name: "SQL", icon: "🗄️" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Angular", icon: "🅰️" },
      { name: "HTML", icon: "📄" },
      { name: "CSS", icon: "🎨" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "Flask", icon: "🌶️" },
      { name: "Express", icon: "🚀" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Jenkins", icon: "🔧" },
      { name: "GitHub Actions", icon: "🔄" },
      { name: "Terraform", icon: "🏗️" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "DynamoDB", icon: "⚡" },
      { name: "Redis", icon: "🔴" }
    ]
  }
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
    <section id="skills" ref={sectionRef} className="py-32 section-padding bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 hover:border-blue-200 transition-colors duration-300 h-full shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-bold mb-6 text-center text-blue-600">
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center gap-2 p-3 bg-blue-50/50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                        style={{ 
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms` 
                        }}
                      >
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      </div>
                    ))}
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

export default Skills;
