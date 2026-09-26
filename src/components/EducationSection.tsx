import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "B.E. - Computer Science and Engineering", institution: "Panimalar Engineering College, Chennai", detail: "CGPA: 8.76", period: "2023 – 2027" },
  { degree: "HSC", institution: "Jaigopal Garodia Vivekananda Vidyalaya School, Chennai", detail: "", period: "2023" },
  { degree: "SSLC", institution: "Jaigopal Garodia Vivekananda Vidyalaya School, Chennai", detail: "", period: "2021" },
];

const EducationSection = () => (
  <AnimatedSection className="section-padding bg-card">
    <div id="education" className="max-w-4xl mx-auto scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-3">
        <span className="gradient-text">Education</span>
      </h2>
      <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-12" />

      <div className="relative pl-10">
        <div className="timeline-line" />
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative mb-10 last:mb-0"
          >
            <div className="absolute -left-10 top-1 w-8 h-8 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
              <GraduationCap size={14} className="text-accent" />
            </div>
            <div className="glass-card p-6">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">{edu.period}</span>
              <h3 className="text-lg font-semibold text-foreground mt-1">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
              {edu.detail && <p className="text-accent font-medium text-sm mt-2">{edu.detail}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default EducationSection;
