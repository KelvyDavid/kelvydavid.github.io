"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Cpu } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function Differentiation() {
  const { t } = useLanguage();

  const items = [
    { ...t.differentiation.items[0], icon: Cpu },
    { ...t.differentiation.items[1], icon: Globe },
    { ...t.differentiation.items[2], icon: Zap },
  ];

  return (
    <section className="py-24 px-6 bg-surface-low rounded-[4rem] mx-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.differentiation.title}</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              {t.differentiation.subtitle}
            </h3>
            <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
              {t.differentiation.description}
            </p>
            
            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square glass-panel rounded-full flex items-center justify-center p-12 overflow-hidden">
               <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <span className="text-6xl text-primary font-bold">10+</span>
                   <p className="text-xs font-mono uppercase tracking-widest text-foreground/40 mt-2">{t.differentiation.stats}</p>
                 </div>
               </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 p-4 glass-panel rounded-2xl animate-bounce duration-[3000ms]">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-xs font-mono">{t.differentiation.status}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
