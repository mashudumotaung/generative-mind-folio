import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mashudumotaung008@gmail.com',
    href: 'mailto:mashudumotaung008@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '067 294 2082',
    href: 'tel:+27672942082',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Mashudu Motaung',
    href: 'https://www.linkedin.com/in/mashudu-motaung-41a0832b2/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'mashudumotaung',
    href: 'https://github.com/mashudumotaung',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking opportunities in AI, data analytics, and technology. 
            Let's connect and discuss how I can contribute to your team!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-card border border-border rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Ready to work together? Send me an email and let's start a conversation.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary"
              asChild
            >
              <a href="mailto:mashudumotaung008@gmail.com">
                <Send size={18} className="mr-2" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
