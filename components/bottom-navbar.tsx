"use client";

import { Mail, Home, FolderKanban } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SiGithub, SiLinkedin } from "react-icons/si";

const navLinks = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/projects", icon: FolderKanban, label: "Projects" },
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
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={cn(
          "flex items-center gap-0.5 px-2.5 py-2 rounded-full",
          "bg-background/80 dark:bg-card/90",
          "backdrop-blur-xl",
          "border border-border",
          "shadow-xl shadow-black/8 dark:shadow-black/30"
        )}
      >
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className={cn(
                "relative px-3 py-2 rounded-full transition-all duration-150 text-xs font-medium flex items-center gap-1.5",
                active
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <link.icon className="w-3.5 h-3.5" />
              <span>{link.label}</span>
            </Link>
          );
        })}

        <div className="w-px h-4 bg-border mx-1" />

        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={cn(
              "p-2.5 rounded-full transition-all duration-150",
              "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            <link.icon className="w-3.5 h-3.5" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
