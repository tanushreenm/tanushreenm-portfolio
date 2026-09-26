import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Code2 } from "lucide-react";

const links = ["About", "Education", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`font-display font-bold text-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          TNM
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`text-sm font-medium accent-underline transition-colors ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {l}
            </button>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://www.linkedin.com/in/tanushree-n-m-1a6b6a30a"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                scrolled ? "border-border text-muted-foreground hover:text-accent hover:border-accent" : "border-primary-foreground/30 text-primary-foreground/70 hover:text-accent hover:border-accent"
              }`}
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://leetcode.com/u/Tanushree_nm/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                scrolled ? "border-border text-muted-foreground hover:text-accent hover:border-accent" : "border-primary-foreground/30 text-primary-foreground/70 hover:text-accent hover:border-accent"
              }`}
            >
              <Code2 size={14} />
            </a>
          </div>
        </div>

        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <button key={l} onClick={() => scrollTo(l)} className="block text-sm font-medium text-muted-foreground hover:text-foreground w-full text-left">
                  {l}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <a href="https://www.linkedin.com/in/tanushree-n-m-1a6b6a30a" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent flex items-center gap-2">
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a href="https://leetcode.com/u/Tanushree_nm/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent flex items-center gap-2">
                  <Code2 size={14} /> LeetCode
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
