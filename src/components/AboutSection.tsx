import { Target, Lightbulb, Users, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Career Focus',
    description: 'Seeking entry-level AI, data analytics, or technology roles where I can apply my skills and grow.',
  },
  {
    icon: Lightbulb,
    title: 'AI Innovation',
    description: 'Passionate about building practical AI solutions that solve real-world problems.',
  },
  {
    icon: Shield,
    title: 'Ethical AI',
    description: 'Committed to developing AI systems that are fair, transparent, and bias-aware.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Strong team player with excellent communication and documentation skills.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am a dedicated AI enthusiast and recent graduate of the CAPACITI Tech Career Accelerator 
            program, where I developed hands-on expertise in Artificial Intelligence, Machine Learning, 
            and Generative AI technologies. My journey into AI began with a fascination for how 
            intelligent systems can transform industries and improve lives.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            Through intensive training and practical projects, I've gained proficiency in building 
            AI-powered applications, from chatbots and content generators to comprehensive AI solutions. 
            I'm particularly passionate about ethical AI development and ensuring that the technology 
            I create is inclusive, fair, and beneficial to all users.
          </p>
        </div>

        {/* Personal Branding Statement */}
        <div className="bg-gradient-card border border-border rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-primary mb-4 text-center">Personal Branding Statement</h3>
          <p className="text-foreground text-center text-lg italic leading-relaxed">
            "I combine technical AI expertise with a strong ethical foundation to build intelligent 
            solutions that make a positive impact. From prompt engineering to full-stack AI development, 
            I bring creativity, precision, and a commitment to responsible innovation to every project."
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
