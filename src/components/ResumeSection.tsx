import { Download, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const resumeHighlights = [
  'ATS-optimized format for maximum visibility',
  'Tailored for AI/ML and Data roles',
  'Highlights key projects and achievements',
  'Professional summary with career objectives',
  'Complete technical skills inventory',
  'Education and certifications included',
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Download My <span className="text-gradient">Resume</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get my complete professional resume showcasing my AI expertise, 
              projects, and qualifications in a recruiter-friendly format.
            </p>
          </div>

          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Resume Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-32 bg-secondary border border-border rounded-lg flex flex-col items-center justify-center relative group">
                  <FileText className="text-primary" size={40} />
                  <span className="text-xs text-muted-foreground mt-2">PDF</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Download className="text-primary-foreground" size={12} />
                  </div>
                </div>
              </div>

              {/* Resume Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <ul className="space-y-2 mb-6">
                  {resumeHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="text-primary flex-shrink-0" size={16} />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary"
                  asChild
                >
                  <a href="#" download>
                    <Download size={18} className="mr-2" />
                    Download Resume (PDF)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
