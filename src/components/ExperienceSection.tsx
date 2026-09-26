import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const internships = [
  {
    title: "AI/ML Data Expert Intern",
    company: "NDV Techsys Solutions",
    period: "June 2025 – July 2025",
    points: [
      "Gained practical exposure to AI/ML concepts through hands-on implementation.",
      "Assisted in building and evaluating machine learning models for prediction and classification tasks.",
    ],
  },
  {
    title: "Python with Data Science Intern",
    company: "NSIC - Technical Solutions",
    period: "Dec 2024",
    points: [
      "Used Python to work with datasets for data analysis and reporting tasks.",
      "Applied core data science concepts using Python libraries in hands-on exercises.",
    ],
  },
  {
    title: "Developer Intern",
    company: "Cognizant",
    period: "June 2026 – July 2026",
    points: [
      "Contributed to the development of a full-stack web application using Angular and Spring Boot, working across frontend components and REST API integration.",
      "Collaborated with the team on debugging, code reviews, and implementing features as part of an agile development workflow.",
    ],
  },
];

const ExperienceSection = () => (
  <AnimatedSection className="section-padding bg-card">
    <div id="experience" className="max-w-4xl mx-auto scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-3">
        <span className="gradient-text">Experience</span>
      </h2>
      <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-12" />

      <div className="space-y-6">
        {internships.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Briefcase size={18} className="text-accent" />
              </div>
              <div>
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{item.period}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.company}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((p, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ExperienceSection;
