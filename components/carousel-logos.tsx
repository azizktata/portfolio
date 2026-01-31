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

import LogoLoopRaw from "@/components/LogoLoop";

export default function CarouselLogos() {
  const LogoLoop = LogoLoopRaw as any;

  const frontTechLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    // figma logo example
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  ];
  const backTechLogos = [
    // Add backend technology logos here
    // Example: laravel, spring boot, prisma, mysql, postgresql
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    {
      node: <SiSpringboot />,
      title: "Spring Boot",
      href: "https://spring.io/projects/spring-boot",
    },
    { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    {
      node: <SiPostgresql />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
  ];

  const devopsTechLogos = [
    // Add devops technology logos here
    // Example: docker, kubernetes, aws, azure, gcp
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    // github logo example
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },

    {
      node: <SiKubernetes />,
      title: "Kubernetes",
      href: "https://kubernetes.io",
    },
    { node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiGooglecloud />, title: "GCP", href: "https://cloud.google.com" },
  ];
  
    return (
      <div className="hidden lg:flex flex-col gap-4 max-w-md max-h-72 px-2">
        {/* Frontend Stack */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground w-20 shrink-0">Frontend</span>
          <div className="relative overflow-hidden max-h-16">
            <LogoLoop
              logos={frontTechLogos}
              speed={30}
              direction="right"
              logoHeight={32}
              gap={32}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Frontend technologies"
            />
          </div>
        </div>

        {/* Backend Stack */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground w-20 shrink-0">Backend</span>
          <div className="relative overflow-hidden max-h-16">
            <LogoLoop
              logos={backTechLogos}
              speed={25}
              direction="left"
              logoHeight={32}
              gap={32}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Backend technologies"
            />
          </div>
        </div>

        {/* DevOps Stack */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground w-20 shrink-0">DevOps</span>
          <div className="relative overflow-hidden max-h-16">
            <LogoLoop
              logos={devopsTechLogos}
              speed={35}
              direction="right"
              logoHeight={32}
              gap={32}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="DevOps technologies"
            />
          </div>
        </div>
      </div>
    );
  
}
