import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    year: "2025",
    description:
      "Completed a hands-on data analytics job simulation focused on data cleaning, exploratory data analysis, business problem solving, and translating insights into actionable recommendations.",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    year: "2023",
    description:
      "Developed a strong foundation in Python programming, covering data types, control structures, functions, and problem-solving techniques relevant to data analytics.",
  },
  {
    title: "Robotic Process Automation (UiPath)",
    issuer: "ICT Academy",
    year: "2024",
    description:
      "Gained practical knowledge of automation fundamentals, workflow creation, and process optimization using UiPath tools.",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-12 bg-background">
      <div className="section-container px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mt-2 text-sm sm:text-base max-w-2xl mx-auto text-muted-foreground">
            Professional learning and skill validation
          </p>
          <div className="mx-auto mt-4 w-12 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/20" />
        </div>

        {/* Certifications List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="bg-card border border-border/50 rounded-2xl p-5 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Icon - Scaled for Mobile */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>

                <div className="flex-1 w-full">
                  <h3 className="text-base sm:text-lg font-semibold font-display text-foreground leading-tight">
                    {cert.title}
                  </h3>

                  {/* Improved metadata layout for mobile */}
                  <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 mt-2">
                    <span className="text-xs sm:text-sm font-bold text-primary/90 tracking-wide">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/30 px-2 py-0.5 rounded-md w-fit">
                      <Calendar size={12} className="text-primary/70" />
                      {cert.year}
                    </span>
                  </div>

                  {/* Separated description with better spacing */}
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};