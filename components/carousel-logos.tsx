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
import LogoLoop from "@/components/LogoLoop";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function CarouselLogos() {
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

  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  if (isSmallScreen) {
    return (
      <div className="relative overflow-hidden  flex flex-col gap-6 max-w-md max-h-64">
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={frontTechLogos}
          speed={30}
          direction="right"
          logoHeight={36}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          // fadeOut
          // fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={backTechLogos}
          speed={30}
          direction="left"
          logoHeight={36}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          // fadeOut
          // fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={devopsTechLogos}
          speed={40}
          direction="right"
          logoHeight={36}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          // fadeOut
          // fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    );
  } else {
    return (
      <div className="relative overflow-hidden  flex gap-16  max-w-md max-h-64 px-2">
        {/* Basic horizontal loop */}
        <LogoLoop
          logos={frontTechLogos}
          speed={30}
          direction="up"
          logoHeight={36}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          // fadeOut
          // fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={backTechLogos}
          speed={30}
          direction="down"
          logoHeight={36}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          // fadeOut
          // fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
        <LogoLoop
          logos={devopsTechLogos}
          speed={40}
          direction="up"
          logoHeight={36}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          // fadeOut
          // fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    );
  }
}
