import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import thelandlord from "../public/thelandlord.png";
import ramtec from "../public/ramtec-1.png";
import timesheet from "../public/timesheet-1.png";
import CardProject from "@/components/card-project";
import Link from "next/link";
import CardExperiance from "@/components/card-experiance";
import { SiGithub, SiLinkedin } from "react-icons/si";
import CarouselLogosClient from "@/components/carousel-logos-wrapper";
import CarouselLogos from "@/components/carousel-logos";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative">
      {/* lg:py-32 lg:px-16 */}

      <div
        className="
    pointer-events-none
    absolute inset-x-0 bottom-0 h-5/6
    dark:bg-[radial-gradient(ellipse_at_bottom,rgba(0,152,255,0.2),transparent_70%)]
    "
      />

      <main className="flex min-h-screen w-full max-w-6xl flex-col justify-between px-8 md:px-6 items-start md:flex-row md:gap-16  relative z-10">
        <div
          id="left"
          className="flex flex-col pt-16 lg:mb-0 lg:sticky lg:top-0 md:py-24  md:w-1/2 mb-16 "
        >
          <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-1">
            Aziz Ktata
          </h1>
          <h3 className="text-lg font-medium mb-6 md:mb-8">Full stack developer</h3>
          <p className="text-sm md:text-md max-w-lg text-foreground mb-8">
            I design, build, and ship scalable web platforms.
          </p>
          <div className="flex gap-4 mb-4 md:mb-12">
            <Link
              href="/AzizKtata__Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              // className="w-fit bg-primary/80 text-white"
            >
            <Button
              variant="default"
              size="lg"
              className="w-fit bg-primary/80 text-white"
              
            >
              View resume
            </Button>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/aziz-ktata-4ab8a01b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 text-primary/80 hover:text-foreground"
              >
                <SiLinkedin size={20} className="" />
              </Link>
              <Link
                href="https://github.com/aziz-ktata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 text-primary/80 hover:text-foreground"
              >
                <SiGithub size={20} className="" />
              </Link>
            </div>
          </div>
          <CarouselLogos/>
        </div>
        <div id="right" className="flex flex-col md:py-24 ">
          <h2 className="uppercase font-bold text-md mb-6">About</h2>
          <div className="mb-12 flex flex-col gap-4">
            <p className="text-sm max-w-xl md:max-w-md lg:max-w-xl text-foreground leading-relaxed">
              I’m passionate about turning ideas into reliable, well-crafted
              digital products. I enjoy working on complex problems, designing
              clean architectures, and building solutions that are both
              user-focused and technically sound.
            </p>
            <p className="text-sm max-w-xl md:max-w-md lg:max-w-xl text-foreground leading-relaxed">
              I specialize in designing and building scalable web platforms from
              architecture to production. I worked with Laravel, React,
              Next.js, Springboot & Angular, delivering solutions for SaaS, e-commerce, and
              multi-tenant applications.
            </p>
          </div>
          <div id="experiance" className="mb-12">
            <h2 className="uppercase font-bold text-md mb-6">Experiance</h2>
            <div className="flex flex-col gap-6 items-stretch group/list">
              <CardExperiance
                timeline="2025 - Present"
                position="Full Stack Developer @ Asis.tn"
                description={[
                  "Developed responsive, SEO-friendly website with Next.js, TailwindCSS, and WordPress as a headless CMS.",
                  "Migrated legacy laravel systems, delivering full UI/UX redesigns, and implementing multi-tenant architectures",
                  "Improved applications performance by optimizing database queries, implementing caching strategies and enhancing code maintainability.",
                  "Provided continuous production support for ~9 months resolving bugs, performance issues, and feature requests.",
                ]}
                techStack={["Laravel", "React", "Next.js", "Tailwind CSS", "Figma", "MySQL", 'WordPress', "Prisma", "Netlify", "OVH", "Docker", "GitHub"]}
              />
              <CardExperiance
                timeline="2024 / 6 months"
                position="Full stack developer intern @ Sofrecom"
                description={[
                  "Collaborated in an Agile team to develop a web application for managing complaints data using Springboot and Angular.",
                  "Fine-tuned & integrated LLM for complaints categorization and response generation for improved customer support.",
                  "Implemented CI/CD pipelines using GitLab and Ansible to automate testing and deployment processes.",
                ]}
                techStack={["Springboot", "Angular", "TypeScript", "PostgreSQL", 'GitLab', "Ansible"]}
              />
              <CardExperiance
                timeline="2022 / 1 month"
                position="DevOps intern @ Tunisie Telecom"
                description={[
                  "Deployed backend service using Docker and Kubernetes on Google Cloud Platform.",
                  "Configured Prometheus and Grafana for monitoring cloud infrastructure and applications.",
                ]}
                techStack={["Docker", "Kubernetes", "GCP", "Prometheus", "Grafana", "Linux"]}
              />
            </div>
          </div>
          <div id="projects" className="">
            <h2 className="text-md font-bold mb-6 uppercase">Projects</h2>
            <div className="group/list">
              <CardProject
                title="Built property rental management system"
                description="A multi-tenant SaaS platform for property rental management, includes a certified channel manager connected to 50+ global booking platforms, end-to-end reservation management, owner and guest portals, online check-in, CRM, accounting, and automation features."
                // The system includes a certified channel manager connected to 50+ global booking platforms, end-to-end reservation management, owner and guest portals, online check-in, CRM, accounting, and automation features.
                imageSrc={thelandlord}
                // link="https://new-manager.thelandlord.tn/dashboard"
                techStack={["Laravel", "React", "Tailwind CSS", "MySQL"]}
              />
              <CardProject
                title="Built timesheet accounting system"
                description="timesheet accounting system that simplifies tracking and managing employee work hours for accurate payroll processing."
                imageSrc={timesheet}
                techStack={["Laravel", "React", "Tailwind CSS", "MySQL", "Docker"]}
              />
              <CardProject
                title="Built e-commerce platform"
                description="A modern e-commerce solution with a user-friendly storefront, admin dashboard, and general features like product management and shopping cart"
                imageSrc={ramtec}
                techStack={[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Prisma",
                  "PostgreSQL",
                  "NextAuth",
                  "Redux",
                ]}
              />
            </div>

            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="w-fit hover:bg-primary/10 mb-4 md:mb-0"
              >
                View all projects <ArrowUpRight size={16} className=" ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
