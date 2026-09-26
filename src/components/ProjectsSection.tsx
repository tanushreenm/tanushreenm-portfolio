import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FolderOpen, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website",
    tech: "HTML & CSS",
    points: [
      "Designed and developed a static e-commerce website using HTML and CSS.",
      "Implemented product pages, navigation, and user-friendly interface.",
    ],
  },
  {
    title: "AI-Based Soil Health Analyzer",
    tech: "Python · ML · Smartphone Integration",
    points: [
      "Developed an AI-based soil health analysis system using a smartphone to capture and analyze soil data.",
      "Applied data analysis and basic machine learning techniques to evaluate soil health conditions.",
      "Implemented local language voice/text feedback for user-friendly access.",
    ],
  },
];

const ProjectsSection = () => (
  <AnimatedSection className="section-padding bg-background">
    <div id="projects" className="max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-3">
        <span className="gradient-text">Projects</span>
      </h2>
      <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-12" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-6 md:p-8 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <FolderOpen size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="text-xs text-accent font-medium">{project.tech}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {project.points.map((p, j) => (
                <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ProjectsSection;
