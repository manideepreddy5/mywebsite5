import { Cpu } from 'lucide-react'

const projects = [
  {
    title: 'Secure Haven – IoT Gated Community Management System',
    description:
      'Designed and implemented an IoT-based gated community management system to enhance security, energy efficiency, and operational monitoring. The system integrates smart sensors and RFID-based access control to collect real-time environmental and usage data, which is analyzed and visualized through dashboards for informed decision-making.',
    tags: ['IoT', 'Python', 'Data Analytics', 'Dashboards', 'Real-Time Monitoring'],
    icon: Cpu,
    highlights: [
      'Real-time sensor data collection and monitoring',
      'Energy usage analysis and pattern identification',
      'Research published in IJSRET (2025)',
    ],
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10 px-4">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mt-2 text-sm sm:text-base max-w-2xl mx-auto text-muted-foreground">
            Notable work and academic contributions
          </p>
          <div className="mx-auto mt-4 w-12 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/20" />
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border/50 rounded-3xl p-6 sm:p-10 shadow-card hover:shadow-card-hover transition-all duration-500 group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider">
                    Major Project
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground mt-1 leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Highlights - Tightened spacing for mobile */}
              <ul className="space-y-3 mb-8">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-foreground text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="leading-tight">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tags - Removed extra spacing around individual tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-[11px] sm:text-xs font-semibold tracking-wide whitespace-nowrap"
                  >
                    {tag}
                  </span >
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}