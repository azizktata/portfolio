"use client";

import { Mail, Home, FolderKanban } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useEffect, useRef } from "react";

const navLinks = [
  {
    href: "/",
    icon: Home,
    label: "Home",
  },
  {
    href: "/projects",
    icon: FolderKanban,
    label: "Projects",
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/aziz-ktata-4ab8a01b8/",
    icon: SiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/azizktata",
    icon: SiGithub,
    label: "GitHub",
  },
  {
    href: "mailto:azizktata77@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export function BottomNavbar() {

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={cn(
          "flex items-center gap-1 px-6 py-1 rounded-full",
          "bg-gray-100/40 dark:bg-white/5",
          "backdrop-blur-md",
          "border border-gray/20 dark:border-white/10",
          "shadow-lg shadow-black/5"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className={cn(
              "p-2.5 rounded-full transition-all duration-200",
              "hover:bg-white/20 dark:hover:bg-white/15",
              "text-foreground/70 hover:text-foreground"
            )}
          >
            <link.icon className="w-5 h-5" />
          </Link>
        ))}
        <div className="w-px h-5 bg-foreground/20 mx-1" />
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={cn(
              "p-2.5 rounded-full transition-all duration-200",
              "hover:bg-white/20 dark:hover:bg-white/15",
              "text-foreground/70 hover:text-foreground"
            )}
          >
            <link.icon className="w-5 h-5" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
