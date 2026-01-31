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
  { icon: <SiReact className="size-3.5" />, name: "React", href: "https://react.dev" },
  { icon: <SiNextdotjs className="size-3.5" />, name: "Next.js", href: "https://nextjs.org" },
  { icon: <SiTypescript className="size-3.5" />, name: "TypeScript", href: "https://www.typescriptlang.org" },
  { icon: <SiTailwindcss className="size-3.5" />, name: "Tailwind", href: "https://tailwindcss.com" },
  { icon: <SiFigma className="size-3.5" />, name: "Figma", href: "https://www.figma.com" },
];

const backendStack: TechItem[] = [
  { icon: <SiLaravel className="size-3.5" />, name: "Laravel", href: "https://laravel.com" },
  { icon: <SiSpringboot className="size-3.5" />, name: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { icon: <SiPrisma className="size-3.5" />, name: "Prisma", href: "https://www.prisma.io" },
  { icon: <SiMysql className="size-3.5" />, name: "MySQL", href: "https://www.mysql.com" },
  { icon: <SiPostgresql className="size-3.5" />, name: "PostgreSQL", href: "https://www.postgresql.org" },
];

const devopsStack: TechItem[] = [
  { icon: <SiDocker className="size-3.5" />, name: "Docker", href: "https://www.docker.com" },
  { icon: <SiKubernetes className="size-3.5" />, name: "Kubernetes", href: "https://kubernetes.io" },
  { icon: <SiAmazon className="size-3.5" />, name: "AWS", href: "https://aws.amazon.com" },
  { icon: <SiGooglecloud className="size-3.5" />, name: "GCP", href: "https://cloud.google.com" },
  { icon: <SiGithub className="size-3.5" />, name: "GitHub", href: "https://github.com" },
];

function TechBadge({ item }: { item: TechItem }) {
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-primary-foreground text-primary hover:bg-primary/10 transition-colors"
    >
      {item.icon}
      {item.name}
    </Link>
  );
}
function StackRow({ label, items }: { label: string; items: TechItem[] }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] text-gray-400 font-mono shrink-0">
        {`// ${label.toLowerCase()}`}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <TechBadge key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="flex flex-col gap-3 max-w-xl">
      <StackRow label="Frontend" items={frontendStack} />
      <StackRow label="Backend" items={backendStack} />
      <StackRow label="DevOps" items={devopsStack} />
    </div>
  );
}
