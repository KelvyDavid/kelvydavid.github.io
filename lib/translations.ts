export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      title: "Full Stack Engineer building scalable e-commerce & geospatial systems",
      subtitle: "Focusing on PostgreSQL, microservices, and high-performance applications where digital precision meets physical reality.",
      ctaProjects: "View Projects",
      ctaContact: "Get in touch",
    },
    about: {
      title: "About the Engineer",
      subtitle: "A decade of experience building systems where digital precision meets physical reality.",
      description: "Based at the intersection of full-stack development and specialized geospatial systems, I architect industrial-grade solutions for e-commerce, logistics, and maintenance management. My approach prioritizes backend robustness without sacrificing a refined frontend experience.",
    },
    projects: {
      title: "Featured Work",
      subtitle: "Solving complex problems with elegant architecture.",
      problemLabel: "The Problem",
      architectureLabel: "Architecture",
      codeButton: "Code",
      caseStudyButton: "Case Study",
      items: [
        {
          title: "Scalable E-commerce Platform",
          problem: "A high-traffic marketplace needing robust inventory management and logistics synchronization for over 2,000 SKUs.",
          architecture: "Microservices architecture utilizing Node.js and PostgreSQL with specialized indexing. Integrated with event-driven logic.",
        },
        {
          title: "GIS Logistics Optimizer",
          problem: "Complex route optimization and spatial data processing for large-scale urban delivery fleets.",
          architecture: "ArcGIS-integrated spatial engine with PostGIS for complex geospatial queries and Dijkstra/A* algorithms.",
        },
        {
          title: "SaaS Maintenance Platform",
          problem: "Multi-tenant solution to track assets and schedule preventive maintenance with localized support.",
          architecture: "Multi-tenant cloud architecture with isolated schemas per client and automated scheduling workers.",
        }
      ]
    },
    skills: {
      title: "Technical DNA",
      subtitle: "My stack is built for durability, scale, and spatial intelligence.",
      categories: {
        backend: "Backend & Cloud",
        frontend: "Frontend & UI",
        geospatial: "Geospatial (GIS)",
        architecture: "Architecture",
      }
    },
    contact: {
      title: "Let's build the next generation of infrastructure.",
      subtitle: "Currently open to senior roles and high-impact consultancy projects.",
      cta: "Let's Talk",
    },
    differentiation: {
      title: "Why Me",
      subtitle: "Where Engineering meets Real-World Geography.",
      description: "Most developers treat data as flat records in a database. I treat data as living entities in a physical space. By combining deep full-stack proficiency with specialized GIS expertise, I build systems that don't just process transactions—they optimize physical movement and infrastructure.",
      items: [
        { title: "Software Engineering", desc: "Rigorous microservices and scalable logic." },
        { title: "Geospatial Systems", desc: "Complex routing and spatial data processing." },
        { title: "Real-World Infrastructure", desc: "Systems designed for logistics and physical assets." },
      ],
      stats: "Specialized Projects",
      status: "Real-time Tracking Active",
    },
    footer: {
      text: "Architect Portfolio — Built with Next.js & Tailwind",
    }
  },
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      title: "Ingeniero Full Stack creando sistemas de e-commerce y geoespaciales escalables",
      subtitle: "Enfocado en PostgreSQL, microservicios y aplicaciones de alto rendimiento donde la precisión digital encuentra la realidad física.",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Contactar",
    },
    about: {
      title: "Sobre el Ingeniero",
      subtitle: "Una década de experiencia construyendo sistemas donde la precisión digital se encuentra con la realidad.",
      description: "Situado en la intersección del desarrollo full-stack y sistemas geoespaciales especializados, diseño soluciones de grado industrial para e-commerce, logística y gestión de mantenimiento. Mi enfoque prioriza la robustez del backend sin sacrificar una experiencia frontend refinada.",
    },
    projects: {
      title: "Trabajos Destacados",
      subtitle: "Resolviendo problemas complejos con arquitectura elegante.",
      problemLabel: "El Problema",
      architectureLabel: "Arquitectura",
      codeButton: "Código",
      caseStudyButton: "Caso de Estudio",
      items: [
        {
          title: "Plataforma de E-commerce Escalable",
          problem: "Un marketplace de alto tráfico que requiere una gestión robusta de inventarios y sincronización logística para más de 2,000 SKUs.",
          architecture: "Arquitectura de microservicios utilizando Node.js y PostgreSQL con indexación especializada. Integrado con lógica orientada a eventos.",
        },
        {
          title: "Optimizador Logístico GIS",
          problem: "Optimización de rutas complejas y procesamiento de datos espaciales para flotas de entrega urbana a gran escala.",
          architecture: "Motor espacial integrado con ArcGIS y PostGIS para consultas geoespaciales complejas y algoritmos Dijkstra/A*.",
        },
        {
          title: "Plataforma SaaS de Mantenimiento",
          problem: "Solución multi-inquilino para rastrear activos y programar mantenimiento preventivo con soporte regional.",
          architecture: "Arquitectura en la nube multi-inquilino con esquemas aislados por cliente y trabajadores de programación automatizados.",
        }
      ]
    },
    skills: {
      title: "DNA Técnico",
      subtitle: "Mi stack está construido para la durabilidad, escala e inteligencia espacial.",
      categories: {
        backend: "Backend y Cloud",
        frontend: "Frontend y UI",
        geospatial: "Geoespacial (GIS)",
        architecture: "Arquitectura",
      }
    },
    contact: {
      title: "Construyamos la próxima generación de infraestructura.",
      subtitle: "Actualmente abierto a roles senior y proyectos de consultoría de alto impacto.",
      cta: "Hablemos",
    },
    differentiation: {
      title: "Por qué yo",
      subtitle: "Donde la Ingeniería se encuentra con la Geografía Real.",
      description: "La mayoría de los desarrolladores tratan los datos como registros planos en una base de datos. Yo trato los datos como entidades vivas en un espacio físico. Al combinar una profunda competencia full-stack con experiencia GIS especializada, construyo sistemas que no solo procesan transacciones, sino que optimizan el movimiento físico y la infraestructura.",
      items: [
        { title: "Ingeniería de Software", desc: "Microservicios rigurosos y lógica escalable." },
        { title: "Sistemas Geoespaciales", desc: "Rutas complejas y procesamiento de datos espaciales." },
        { title: "Infraestructura Real", desc: "Sistemas diseñados para logística y activos físicos." },
      ],
      stats: "Proyectos Especializados",
      status: "Seguimiento en Tiempo Real Activo",
    },
    footer: {
      text: "Portafolio de Arquitecto — Construido con Next.js y Tailwind",
    }
  }
};
