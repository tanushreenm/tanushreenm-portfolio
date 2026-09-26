import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Phone, MapPin, Download } from "lucide-react";

const HeroSection = () => {
  const fullText = "Turning Ideas into Intelligent Software Solutions";

  const [displayText, setDisplayText] = useState("");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
        setShowText(true);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay opacity-85" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6"
        >
          Tanushree N M
        </motion.h1>
        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="text-lg md:text-xl font-medium text-primary-foreground/80 mb-6 tracking-wide"
>
  Aspiring Software Engineer <span className="mx-2 text-purple-400"></span>
</motion.p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/70 mb-10">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> Chennai, Tamil Nadu
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} /> +91 7824049290
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={14} /> tanushreenmurugan@gmail.com
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="#about"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-lg hover:scale-105 transition-transform"
          >
            Explore Portfolio
          </a>

          <a
            href="/Tanushree_resume.pdf"
            download
            className="px-8 py-3 rounded-xl border border-white/40 text-white font-medium backdrop-blur-md hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>

        {/* Animated Text BELOW Buttons */}
        {showText && (
         
         <motion.h2
  initial={{ opacity: 0, y: 40, scale: 0.0 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1, delay: 0.0, ease: "easeOut" }}
  className="mt-10 text-xl md:text-2xl font-semibold tracking-wide"
>
  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
    Turning Ideas into Intelligent Software Solutions
  </span>
</motion.h2>
          
        )}
      </div>
    </section>
  );
};

export default HeroSection;