"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="glass-panel p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">{t.contact.title}</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-12">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:kelvydavid@example.com" 
              className="flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-2xl font-bold hover:scale-[1.05] active:scale-[0.98] transition-all"
            >
              <Mail size={20} /> {t.contact.cta}
            </a>
            
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/kelvydavid", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/kelvydavid", label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-panel rounded-2xl hover:bg-surface-high transition-colors text-foreground/60 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-foreground/20 tracking-widest uppercase">
        <p>{t.footer.text}</p>
        <div className="flex gap-8">
          <button className="hover:text-foreground transition-colors">Privacy Policy</button>
          <button className="hover:text-foreground transition-colors">Terms of Service</button>
        </div>
      </footer>
    </section>
  );
}
