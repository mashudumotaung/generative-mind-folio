import { ExternalLink, Github, Bot, FileEdit, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AI Concept Chatbot',
    description: 'An intelligent chatbot designed to explain AI concepts in simple terms. Built to help beginners understand machine learning, neural networks, and AI fundamentals through conversational interaction.',
    icon: Bot,
    problem: 'Many people find AI concepts difficult to understand due to complex technical jargon.',
    solution: 'Created an AI-powered chatbot that breaks down complex AI topics into digestible explanations using natural language processing.',
    technologies: ['Python', 'OpenAI API', 'Natural Language Processing', 'Streamlit'],
    features: ['Interactive Q&A', 'Context-aware responses', 'Multi-topic coverage', 'User-friendly interface'],
    github: 'https://github.com/mashudumotaung',
    demo: '#',
  },
  {
    title: 'Custom Content Generator',
    description: 'A generative AI application that creates customized content including blog posts, social media captions, and marketing copy based on user prompts and preferences.',
    icon: Sparkles,
    problem: 'Content creators spend excessive time writing repetitive content across multiple platforms.',
    solution: 'Developed a content generator leveraging LLMs to produce high-quality, customized content in seconds.',
    technologies: ['Generative AI', 'GPT API', 'Prompt Engineering', 'React'],
    features: ['Multiple content types', 'Tone customization', 'SEO optimization', 'Export functionality'],
    github: 'https://github.com/mashudumotaung',
    demo: '#',
  },
  {
    title: 'AI Resume Builder',
    description: 'An intelligent resume builder that uses AI to optimize resumes for ATS systems, suggest improvements, and tailor content for specific job descriptions.',
    icon: FileEdit,
    problem: 'Job seekers struggle to create ATS-optimized resumes that stand out to recruiters.',
    solution: 'Built an AI-powered tool that analyzes job descriptions and optimizes resume content for maximum impact.',
    technologies: ['NLP', 'Text Analysis', 'Python', 'Machine Learning'],
    features: ['ATS optimization', 'Keyword extraction', 'Format suggestions', 'Industry templates'],
    github: 'https://github.com/mashudumotaung',
    demo: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of AI projects demonstrating practical applications of machine learning, 
            natural language processing, and generative AI technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col group"
            >
              {/* Project Header */}
              <div className="p-6 pb-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Problem</h4>
                  <p className="text-muted-foreground text-sm">{project.problem}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
                  <p className="text-muted-foreground text-sm">{project.solution}</p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Links */}
              <div className="p-6 pt-0 flex gap-3">
                <Button asChild variant="outline" size="sm" className="flex-1 border-primary/50 text-primary hover:bg-primary/10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild size="sm" className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
