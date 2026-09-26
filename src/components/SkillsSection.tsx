import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Code, Globe, Database, Users, Lightbulb, Handshake, Shuffle } from "lucide-react";

const techSkills = [
  { icon: Code, label: "Python & Java", desc: "Programming Languages" },
  { icon: Globe, label: "HTML, CSS, JS", desc: "Web Development" },
  { icon: Database, label: "SQL", desc: "Database Management" },
];

const softSkills = [
  { icon: Users, label: "Leadership" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Handshake, label: "Team Collaboration" },
  { icon: Shuffle, label: "Adaptability" },
];

const SkillsSection = () => (
  <AnimatedSection className="section-padding bg-background">
    <div id="skills" className="max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-3">
        <span className="gradient-text">Skills</span>
      </h2>
      <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-12" />

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {techSkills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <skill.icon className="mx-auto mb-3 text-accent" size={28} />
            <h3 className="font-semibold text-foreground">{skill.label}</h3>
            <p className="text-muted-foreground text-sm mt-1">{skill.desc}</p>
          </motion.div>
        ))}
      </div>

      <h3 className="text-xl font-display font-semibold text-foreground text-center mb-6">Interpersonal Skills</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {softSkills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-foreground text-sm font-medium"
          >
            <s.icon size={14} className="text-accent" />
            {s.label}
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SkillsSection;
