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

type StackCard = {
  label: string;
  items: TechItem[];
  className?: string;
};

const stacks: StackCard[] = [
  {
    label: "Frontend",
    className: "col-span-2 row-span-2",
    items: [
      { icon: <SiReact />, name: "React", href: "https://react.dev" },
      { icon: <SiNextdotjs />, name: "Next.js", href: "https://nextjs.org" },
      { icon: <SiTypescript />, name: "TypeScript", href: "https://www.typescriptlang.org" },
      { icon: <SiTailwindcss />, name: "Tailwind", href: "https://tailwindcss.com" },
      { icon: <SiFigma />, name: "Figma", href: "https://www.figma.com" },
    ],
  },
  {
    label: "Backend",
    className: "col-span-2",
    items: [
      { icon: <SiLaravel />, name: "Laravel", href: "https://laravel.com" },
      { icon: <SiSpringboot />, name: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
      { icon: <SiPrisma />, name: "Prisma", href: "https://www.prisma.io" },
      { icon: <SiMysql />, name: "MySQL", href: "https://www.mysql.com" },
      { icon: <SiPostgresql />, name: "PostgreSQL", href: "https://www.postgresql.org" },
    ],
  },
  {
    label: "DevOps",
    className: "col-span-2",
    items: [
      { icon: <SiDocker />, name: "Docker", href: "https://www.docker.com" },
      { icon: <SiKubernetes />, name: "Kubernetes", href: "https://kubernetes.io" },
      { icon: <SiAmazon />, name: "AWS", href: "https://aws.amazon.com" },
      { icon: <SiGooglecloud />, name: "GCP", href: "https://cloud.google.com" },
      { icon: <SiGithub />, name: "GitHub", href: "https://github.com" },
    ],
  },
];

function BentoCard({ stack }: { stack: StackCard }) {
  return (
    <div
      className={cn(
        "group relative p-4 rounded-xl bg-muted/20 border border-muted/40 hover:border-muted-foreground/20 transition-colors",
        stack.className
      )}
    >
      <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/70">
        {stack.label}
      </span>
      <div className="flex flex-wrap gap-2 mt-3">
        {stack.items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <span className="text-sm">{item.icon}</span>
            <span className="text-xs font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function TechStackBento() {
  return (
    <div className="grid grid-cols-2 gap-2 max-w-md">
      {stacks.map((stack) => (
        <BentoCard key={stack.label} stack={stack} />
      ))}
    </div>
  );
}
