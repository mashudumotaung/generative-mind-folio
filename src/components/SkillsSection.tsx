import { Brain, Code, MessageSquare, Shield, GitBranch, FileText } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['AI Fundamentals', 'Generative AI', 'Large Language Models (LLMs)', 'Machine Learning Concepts', 'Neural Networks Basics'],
  },
  {
    title: 'Natural Language Processing',
    icon: MessageSquare,
    skills: ['Text Classification', 'Sentiment Analysis', 'Chatbot Development', 'Prompt Engineering', 'AI Content Generation'],
  },
  {
    title: 'Programming & Tools',
    icon: Code,
    skills: ['Python', 'No-Code AI Tools', 'API Integration', 'Jupyter Notebooks', 'Google Colab'],
  },
  {
    title: 'Ethical AI',
    icon: Shield,
    skills: ['Bias Detection', 'Fairness in AI', 'Responsible AI Development', 'AI Governance', 'Privacy Considerations'],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Repository Management', 'Collaboration Workflows', 'Code Review'],
  },
  {
    title: 'Documentation',
    icon: FileText,
    skills: ['Technical Writing', 'Project Documentation', 'API Documentation', 'User Guides', 'Markdown'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skillset developed through the CAPACITI Tech Career Accelerator program, 
            covering AI fundamentals to advanced implementation techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-full border border-border hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
