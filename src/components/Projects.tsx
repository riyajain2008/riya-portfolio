import { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Stock Broker App",
    description: "Real-time stock trading platform using WebSockets, GraphQL, OpenSearch, and Next.js",
    technologies: ["Next.js", "WebSockets", "GraphQL", "OpenSearch"],
    image: "photo-1611974789855-9c2a0a7236a3",
    github: "https://github.com/riyajain2008/Stock-Broker-App"
  },
  {
    title: "StreamSphere",
    description: "Video streaming platform with Kafka pipeline, secure auth, and AWS hosting",
    technologies: ["Kafka", "AWS", "Authentication", "Video Streaming"],
    image: "photo-1574717024653-61fd2cf4d44d",
    github: "https://github.com/riyajain2008/StreamSphere"
  },
  {
    title: "Customer Microservice",
    description: "Flask-based REST API deployed on Kubernetes with CI/CD automation",
    technologies: ["Flask", "Kubernetes", "CI/CD", "REST API"],
    image: "photo-1558494949-ef010cbdcc31",
    github: "https://github.com/CSCI-GA-2820-FA24-003/customers"
  },
  {
    title: "Unemployment Rate Prediction",
    description: "ML models for unemployment forecasting using ARIMA and neural networks",
    technologies: ["Machine Learning", "ARIMA", "Neural Networks", "Python"],
    image: "photo-1551288049-bebda4e38f71",
    github: "https://github.com/riyajain2008/unemployment_rate_prediction"
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 section-padding bg-gradient-to-br from-blue-50 to-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-all duration-300 hover:scale-[1.02] h-full shadow-lg hover:shadow-xl">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-xs hover:bg-blue-100 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* GitHub Link */}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
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

export default Projects;
