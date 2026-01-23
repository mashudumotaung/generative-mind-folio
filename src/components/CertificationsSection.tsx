import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'IBM AI Foundations',
    issuer: 'IBM via Coursera',
    description: 'Comprehensive foundation in AI concepts, applications, and ethical considerations.',
    year: '2024',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google via Coursera',
    description: 'Understanding of Google AI tools and machine learning fundamentals.',
    year: '2024',
  },
  {
    title: 'AWS Machine Learning',
    issuer: 'AWS via Coursera',
    description: 'Cloud-based machine learning services and deployment strategies.',
    year: '2024',
  },
  {
    title: 'DeepLearning.AI Specialization',
    issuer: 'DeepLearning.AI via Coursera',
    description: 'Deep learning fundamentals including neural networks and optimization.',
    year: '2024',
  },
  {
    title: 'Generative AI Fundamentals',
    issuer: 'Coursera',
    description: 'Practical applications of generative AI including LLMs and prompt engineering.',
    year: '2024',
  },
  {
    title: 'CAPACITI AI Bootcamp',
    issuer: 'CAPACITI',
    description: 'Intensive AI training program covering practical project development.',
    year: '2024',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications from industry leaders demonstrating expertise 
            in AI, machine learning, and cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-tight">{cert.title}</h3>
                    <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-primary/80 mt-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mt-2">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
