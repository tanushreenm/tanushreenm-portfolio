import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "Programming in Java – NPTEL",
  "Introduction To Machine Learning – NPTEL",
  "Front End Web Developer – Infosys Springboard",
  "UI/UX for Beginners – Great Learning",
  "Generative AI – Oracle",
  "Introduction to Database Management – NPTEL"   // ✅ New certification added
];

const CertificationsSection = () => (
  <AnimatedSection className="section-padding bg-card">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-3">
        <span className="gradient-text">Certifications</span>
      </h2>
      <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-12" />

      <div className="grid sm:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <Award className="mx-auto mb-3 text-accent" size={28} />
            <p className="text-foreground font-medium text-sm">{cert}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default CertificationsSection;
