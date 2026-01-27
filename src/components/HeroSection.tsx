import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mashuduPhoto from '@/assets/mashudu-photo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <p className="text-primary font-mono text-sm mb-4">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Mashudu </span>
              <span className="text-gradient">Motaung</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">
              AI & Machine Learning Enthusiast
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Passionate about leveraging Artificial Intelligence to solve real-world problems. 
              CAPACITI Tech Career Accelerator learner with hands-on experience in Generative AI, 
              NLP, LLMs, and ethical AI practices. Ready to contribute to innovative AI solutions 
              that make a difference.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="mailto:mashudumotaung008@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                mashudumotaung008@gmail.com
              </a>
              <a
                href="tel:+27672942082"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                067 294 2082
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button asChild className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-6 glow-primary">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8">
              <a
                href="https://github.com/mashudumotaung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mashudu-motaung-41a0832b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                <img
                  src={mashuduPhoto}
                  alt="Mashudu Motaung"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
