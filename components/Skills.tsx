"use client";

import { motion } from "framer-motion";
import { Database, Layout, Server, Map } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";


export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.categories.backend,
      icon: Server,
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Microservices", "gRPC"],
    },
    {
      title: t.skills.categories.frontend,
      icon: Layout,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    },
    {
      title: t.skills.categories.architecture,
      icon: Database,
      skills: ["System Design", "AWS", "Docker", "Kubernetes", "CI/CD", "Event-Driven", "Scalability"],
    },
    {
      title: t.skills.categories.geospatial,
      icon: Map,
      skills: ["ArcGIS", "PostGIS", "Leaflet", "GeoJSON", "Route Optimization", "Spatial Analysis"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.skills.title}</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">{t.skills.subtitle}</h3>
        </div>
        <p className="text-foreground/40 max-w-sm">
          A blend of specialized geospatial knowledge and industrial-grade software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-surface-low border border-outline-variant hover:border-primary/20 transition-all group"
          >
            <category.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="text-xl font-display font-semibold mb-6">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-surface-high rounded-full text-xs font-mono text-foreground/60 transition-colors hover:text-primary hover:bg-surface-highest"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
