"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Skills } from "@/components/Skills";
import { Differentiation } from "@/components/Differentiation";
import { Contact } from "@/components/Contact";

import { useLanguage } from "@/lib/LanguageContext";

const techData = [
  {
    techStack: ["Next.js", "PostgreSQL", "Redis", "Docker", "Event-Driven"],
    achievements: [
      "Optimized SKU lookup performance by 60%",
      "Implemented real-time logistics tracking",
      "Seamless multi-warehouse synchronization"
    ],
    imagePath: "/projects/ecommerce.png",
    githubUrl: "https://github.com/kelvydavid/ecommerce-platform",
  },
  {
    techStack: ["React", "ArcGIS", "PostGIS", "Python", "FastAPI"],
    achievements: [
      "Reduced delivery times by 15%",
      "Processed 1M+ spatial data points daily",
      "Interactive ArcGIS-based dispatch dashboard"
    ],
    imagePath: "/projects/gis.png",
    githubUrl: "https://github.com/kelvydavid/gis-logistics-optimizer",
  },
  {
    techStack: ["Next.js", "AWS", "Kubernetes", "Node.js", "Tailwind CSS"],
    achievements: [
      "Zero-downtime multi-tenant isolation",
      "Automated 90% of maintenance scheduling",
      "Comprehensive asset health analytics"
    ],
    imagePath: "/projects/saas.png",
    githubUrl: "https://github.com/kelvydavid/industrial-maintenance-saas",
  },
];

export default function Home() {
  const { t } = useLanguage();

  const projects = techData.map((data, i) => ({
    ...data,
    ...t.projects.items[i],
  }));

  return (
    <main className="flex flex-col gap-32 pb-32">
      <Navbar />
      
      <Hero />
      
      <section id="about" className="px-6 max-w-7xl mx-auto py-24 border-y border-outline-variant">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-primary">{t.about.title}</h2>
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl font-display font-medium leading-tight">
              {t.about.subtitle}
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.projects.title}</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold">{t.projects.subtitle}</h3>
        </div>
        
        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} {...project} index={idx} />
          ))}
        </div>
      </section>

      <Skills />
      
      <Differentiation />
      
      <Contact />
    </main>
  );
}
