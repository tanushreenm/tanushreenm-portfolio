import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Code2, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding hero-overlay text-primary-foreground scroll-mt-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Get In Touch</h2>
      <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8" />
      <p className="text-primary-foreground/70 mb-10">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <a href="mailto:tanushreenmurugan@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
          <Mail size={18} /> tanushreenmurugan@gmail.com
        </a>
        <a href="tel:+917824049290" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
          <Phone size={18} /> +91 7824049290
        </a>
      </div>

      <div className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/tanushree-n-m-1a6b6a30a"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://leetcode.com/u/Tanushree_nm/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
        >
          <Code2 size={18} />
        </a>
      </div>

      <p className="mt-16 text-primary-foreground/40 text-sm">
        © 2025 Tanushree N M. All rights reserved.
      </p>
    </motion.div>
  </section>
);

export default ContactSection;
