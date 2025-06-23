
import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Pickleball Minds",
    location: "Remote",
    period: "June 2024 - August 2024",
    type: "Internship",
    highlights: [
      "Supported acquisition of the company's initial 1,000 premium members by building company's membership webpages using React and Node.js",
      "Integrated Stripe for secure, PCI-compliant payment processing and real-time subscription activation"
    ],
    technologies: ["React", "Node.js", "Stripe API", "Full-stack Development"]
  },
  {
    title: "Senior Software Engineer",
    company: "John Deere",
    location: "Moline, IL",
    period: "September 2021 - August 2023",
    type: "Full-time",
    highlights: [
      "Led the development and on-time delivery of sprint goals across cross-functional teams, contributing to over 50+ completed features",
      "Designed and delivered John Deere's Attachments Recommender Tool, increasing checkout attachment visibility by 70%",
      "Architected backend services using AWS Lambda, API Gateway, and DynamoDB, handling tens of thousands of real-time product lookups per day",
      "Created fully automated CI/CD pipelines with GitHub Actions and deployed on AWS CloudFront"
    ],
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "GitHub Actions", "CloudFront"]
  },
  {
    title: "Software Engineer",
    company: "John Deere",
    location: "Moline, IL",
    period: "August 2020 - August 2021",
    type: "Full-time",
    highlights: [
      "Improved production observability by integrating AWS X-Ray and OpenSearch, reducing mean time to detect and resolve issues by 40%",
      "Automated AMI upgrade workflows, saving 10+ hours of manual maintenance each month",
      "Built CI/CD pipelines in Jenkins with unit tests and SonarQube integration, reducing deployment failures by 50%"
    ],
    technologies: ["AWS X-Ray", "OpenSearch", "Jenkins", "SonarQube"]
  }
];

const Experience = () => {
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
    <section id="experience" ref={sectionRef} className="py-32 section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="gradient-text">Experience</span>
          </h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-emerald/20 rounded-2xl p-6 hover:border-emerald/40 transition-colors duration-300 h-full shadow-lg">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald to-lime rounded-lg flex items-center justify-center">
                        <Briefcase size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-dark-text">{exp.title}</h3>
                        <p className="text-emerald font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    {/* Location, Period, and Type - Right below title */}
                    <div className="space-y-1 text-sm text-light-text ml-13">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="mt-2">
                        <span className="px-2 py-1 bg-yellow/20 text-yellow-800 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-dark-text leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-emerald/10 text-emerald border border-emerald/20 rounded-full text-xs hover:bg-emerald/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
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

export default Experience;
