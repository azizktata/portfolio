'use client';

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

type TechItem = {
  icon: React.ReactNode;
  name: string;
  href: string;
};

const frontendStack: TechItem[] = [
  { icon: <SiReact />, name: "React", href: "https://react.dev" },
  { icon: <SiNextdotjs />, name: "Next.js", href: "https://nextjs.org" },
  { icon: <SiTypescript />, name: "TypeScript", href: "https://www.typescriptlang.org" },
  { icon: <SiTailwindcss />, name: "Tailwind", href: "https://tailwindcss.com" },
  { icon: <SiFigma />, name: "Figma", href: "https://www.figma.com" },
];

const backendStack: TechItem[] = [
  { icon: <SiLaravel />, name: "Laravel", href: "https://laravel.com" },
  { icon: <SiSpringboot />, name: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { icon: <SiPrisma />, name: "Prisma", href: "https://www.prisma.io" },
  { icon: <SiMysql />, name: "MySQL", href: "https://www.mysql.com" },
  { icon: <SiPostgresql />, name: "PostgreSQL", href: "https://www.postgresql.org" },
];

const devopsStack: TechItem[] = [
  { icon: <SiDocker />, name: "Docker", href: "https://www.docker.com" },
  { icon: <SiKubernetes />, name: "Kubernetes", href: "https://kubernetes.io" },
  { icon: <SiAmazon />, name: "AWS", href: "https://aws.amazon.com" },
  { icon: <SiGooglecloud />, name: "GCP", href: "https://cloud.google.com" },
  { icon: <SiGithub />, name: "GitHub", href: "https://github.com" },
];

function TechIcon({ item }: { item: TechItem }) {
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center size-10 rounded-lg bg-muted/30 text-muted-foreground hover:bg-muted hover:text-foreground transition-all hover:scale-110"
    >
      <span className="text-lg">{item.icon}</span>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-medium bg-foreground text-background rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {item.name}
      </span>
    </Link>
  );
}

function StackSection({ label, items }: { label: string; items: TechItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <TechIcon key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackIcons() {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <StackSection label="Frontend" items={frontendStack} />
      <StackSection label="Backend" items={backendStack} />
      <StackSection label="DevOps" items={devopsStack} />
    </div>
  );
}
