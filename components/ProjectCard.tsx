"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

interface ProjectCardProps {
  title: string;
  problem: string;
  architecture: string;
  techStack: string[];
  achievements: string[];
  imagePath: string;
  githubUrl: string;
  index: number;
}

export function ProjectCard({
  title,
  problem,
  architecture,
  techStack,
  achievements,
  imagePath,
  githubUrl,
  index,
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24"
    >
      {/* Visual Content (Diagram/Screenshot Placeholder) */}
      <div className="lg:col-span-7 relative aspect-video rounded-3xl overflow-hidden bg-surface-low border border-outline-variant group-hover:border-primary/20 transition-colors">
        <Image 
          src={imagePath} 
          alt={title} 
          fill 
          className="object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-6 left-6 flex gap-2">

          {techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="px-3 py-1 bg-surface/80 backdrop-blur-md rounded-full text-[10px] font-mono uppercase tracking-wider border border-outline-variant">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Info Content */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-2">{t.projects.problemLabel}</h4>
            <p className="text-foreground/70 leading-relaxed">{problem}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-2">{t.projects.architectureLabel}</h4>
            <div className="p-4 rounded-2xl bg-surface-low border border-outline-variant text-sm font-light leading-relaxed">
              {architecture}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-surface-high rounded-lg text-xs font-medium text-foreground/60">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 flex gap-4">
            <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container transition-colors">
              {t.projects.caseStudyButton} <ExternalLink size={16} />
            </button>
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-foreground/40 hover:text-foreground transition-colors"
            >
              {t.projects.codeButton} <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
