import { GraduationCap, CheckCircle, Clock } from 'lucide-react';

const education = [
  {
    qualification: 'Grade 12',
    institution: 'Thamsanqa Secondary School',
    status: 'completed',
  },
  {
    qualification: 'Full-Stack Developer',
    institution: 'FNB App Academy',
    status: 'completed',
  },
  {
    qualification: 'Junior Full-Stack Developer',
    institution: 'SheCodes',
    status: 'in-progress',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional training programs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {education.map((item, index) => (
            <div
              key={item.qualification}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.qualification}</h3>
                <p className="text-muted-foreground text-sm">{item.institution}</p>
              </div>
              <div className="flex items-center gap-2">
                {item.status === 'completed' ? (
                  <span className="flex items-center gap-1.5 text-sm text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    <CheckCircle size={14} />
                    Completed
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-sm text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-full">
                    <Clock size={14} />
                    In Progress
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
