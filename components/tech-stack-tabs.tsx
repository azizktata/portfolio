'use client';

import { useState } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiLaravel,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiDocker,
  SiGithub,
  SiKubernetes,
  SiAmazon,
  SiGooglecloud,
} from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";

type TechItem = {
  icon: React.ReactNode;
  name: string;
  href: string;
};

const stacks: Record<string, TechItem[]> = {
  Frontend: [
    { icon: <SiReact />, name: "React", href: "https://react.dev" },
    { icon: <SiNextdotjs />, name: "Next.js", href: "https://nextjs.org" },
    { icon: <SiTypescript />, name: "TypeScript", href: "https://www.typescriptlang.org" },
    { icon: <SiTailwindcss />, name: "Tailwind", href: "https://tailwindcss.com" },
    { icon: <SiFigma />, name: "Figma", href: "https://www.figma.com" },
  ],
  Backend: [
    { icon: <SiLaravel />, name: "Laravel", href: "https://laravel.com" },
    { icon: <SiSpringboot />, name: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
    { icon: <SiPrisma />, name: "Prisma", href: "https://www.prisma.io" },
    { icon: <SiMysql />, name: "MySQL", href: "https://www.mysql.com" },
    { icon: <SiPostgresql />, name: "PostgreSQL", href: "https://www.postgresql.org" },
  ],
  DevOps: [
    { icon: <SiDocker />, name: "Docker", href: "https://www.docker.com" },
    { icon: <SiKubernetes />, name: "Kubernetes", href: "https://kubernetes.io" },
    { icon: <SiAmazon />, name: "AWS", href: "https://aws.amazon.com" },
    { icon: <SiGooglecloud />, name: "GCP", href: "https://cloud.google.com" },
    { icon: <SiGithub />, name: "GitHub", href: "https://github.com" },
  ],
};

const tabs = Object.keys(stacks);

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <div className="flex flex-col gap-4 max-w-md">
      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-muted/30 rounded-lg w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
              activeTab === tab
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-wrap gap-3">
        {stacks[activeTab].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
          >
            <span className="text-base">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
