import AnimatedSection from "./AnimatedSection";
import { Target } from "lucide-react";

const AboutSection = () => (
  <AnimatedSection className="section-padding bg-background">
    <div id="about" className="max-w-4xl mx-auto text-center scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8" />
      <div className="glass-card p-8 md:p-10">
        <Target className="mx-auto mb-4 text-accent" size={32} />
        <h3 className="text-lg font-semibold text-foreground mb-3">Career Objective</h3>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Computer Science Engineering student with hands-on experience in programming,
          debugging, and basic application development through internships and projects.
          Looking for a fresher Software Engineer position to contribute to software design,
          development and testing while continuously enhancing technical skills.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
