"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-container/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-surface-high border border-outline-variant text-xs font-mono uppercase tracking-widest text-primary mb-6">
            Senior Engineer
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-8">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#projects" 
              className="group relative px-8 py-4 bg-primary text-on-primary font-semibold rounded-2xl glow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              {t.hero.ctaProjects}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-4 glass-panel font-semibold rounded-2xl hover:bg-surface-high transition-all"
            >
              {t.hero.ctaContact}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
