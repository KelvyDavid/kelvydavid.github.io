"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/lib/LanguageContext";

const navLinks = (t: any) => [
  { name: t.nav.about, href: "#about" },
  { name: t.nav.projects, href: "#projects" },
  { name: t.nav.skills, href: "#skills" },
  { name: t.nav.contact, href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/kelvydavid", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kelvydavid", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kelvydavid@example.com", label: "Email" },
];


export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const links = navLinks(t);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-panel m-4 rounded-2xl"
    >
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-display font-bold tracking-tighter">
          KD<span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Language Toggle */}
        <button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          className="px-3 py-1.5 glass-panel rounded-xl text-[10px] font-mono font-bold hover:bg-surface-high transition-all text-primary"
        >
          {language === "en" ? "ES" : "EN"}
        </button>

        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-surface-high transition-colors text-foreground/60 hover:text-primary"
            aria-label={link.label}
          >
            <link.icon size={18} />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
