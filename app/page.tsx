import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import thelandlord from "../public/thelandlord.png";
import CardProject from "@/components/card-project";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import CardExperiance from "@/components/card-experiance";
import CarouselLogos from "@/components/carousel-logos";
import { SiGithub, SiLinkedin } from "react-icons/si";

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
          <h3 className="text-lg font-medium mb-8">Full stack developer</h3>
          <p className="text-sm md:text-md max-w-lg text-foreground mb-8">
            I design, build, and ship scalable web platforms.
          </p>
          <div className="flex gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              className="w-fit bg-primary/80 text-white"
            >
              View resume
            </Button>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/aziz-ktata-927b9820b/"
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
          <CarouselLogos />
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
              Next.js, and Springboot delivering solutions for SaaS, e-commerce, and
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
                  "Developed responsive, SEO-friendly marketing sites with Next.js, TailwindCSS, and headless WordPress.",
                  "Migrating legacy laravel systems, delivering full UI/UX redesigns and implementing multi-tenant architectures",
                  "Optimized performance and integrations: reduced SQL queries, implemented caching, integrated third-party APIs",
                ]}
                techStack={["Laravel", "React", "Next.js", "Tailwind CSS", "MySQL"]}
              />
              <CardExperiance
                timeline="2024"
                position="Full stack developer intern @ Sofrecom"
                description={[
                  "Collaborated in an Agile team to develop a web application for managing telecom resources using Springboot and Angular.",
                  "Implemented RESTful APIs, designed database schemas, and created user-friendly UI components.",
                  "Participated in code reviews, testing, and deployment processes to ensure high-quality deliverables.",
                ]}
                techStack={["Springboot", "Angular", "TypeScript", "PostgreSQL"]}
              />
              <CardExperiance
                timeline="2022"
                position="DevOps intern @ Tunisie Telecom"
                description={[
                  "Deployed backend service using Docker and Kubernetes on Google Cloud Platform.",
                  "Used Prometheus and Grafana for monitoring cloud infrastructure and applications.",
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
                description="A multi-tenant SaaS platform for property rental management, featuring dashboards, CRM workflows, calendars, invoicing, messaging, and integration with external services and multi-channel publishing."
                imageSrc={thelandlord}
                link="https://new-manager.thelandlord.tn/dashboard"
                techStack={["Laravel", "React", "Tailwind CSS", "MySQL"]}
              />
              <CardProject
                title="Built timesheet accounting system"
                description="timesheet accounting system that simplifies tracking and managing employee work hours for accurate payroll processing."
                imageSrc={thelandlord}
                techStack={["Laravel", "React", "Tailwind CSS", "MySQL"]}
              />
              <CardProject
                title="Built e-commerce platform"
                description="A modern e-commerce solution with a user-friendly storefront, admin dashboard, and general features like product management and shopping cart"
                imageSrc={thelandlord}
                techStack={[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Prisma",
                  "PostgreSQL",
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
