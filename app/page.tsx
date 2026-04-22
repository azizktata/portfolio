import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import thelandlord from "../public/thelandlord.png";
import kibbaroulama from "../public/kibar-oulama.jpg";
import ramtec from "../public/ramtec-1.png";
import timesheet from "../public/timesheet-1.png";
import CardProject from "@/components/card-project";
import Link from "next/link";
import CardExperiance from "@/components/card-experiance";
import TechStack from "@/components/tech-stack";
import ContactForm from "@/components/contact-form";
import mbio7 from "../public/mbio7.png";
import sakan from "../public/sakan.jpg";
import sogecor from "../public/sogecor.jpg";

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

      <main className="flex min-h-screen w-full max-w-6xl xl:max-w-7xl flex-col justify-between px-8 md:px-6 items-start md:flex-row md:gap-16  relative z-10">
        <div
          id="left"
          className="flex flex-col pt-16 lg:mb-0 lg:sticky lg:top-0 md:py-24  md:w-1/2 mb-16 "
        >
          <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-1">
            Aziz Ktata
          </h1>
          <h3 className="text-lg font-medium mb-6 md:mb-8">
            Full stack developer
          </h3>
          <p className="text-sm md:text-md max-w-lg text-foreground mb-8">
            I design, build, and ship scalable web platforms.
          </p>
          <div className="flex gap-4 mb-4 md:mb-6">
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
            {/* <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/aziz-ktata-4ab8a01b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 text-primary/80 hover:text-foreground"
              >
                <SiLinkedin size={20} className="" />
              </Link>
              <Link
                href="https://github.com/azizktata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 text-primary/80 hover:text-foreground"
              >
                <SiGithub size={20} className="" />
              </Link>
            </div> */}
          </div>
          <div className="mt-8 w-full max-w-sm">
            <ContactForm />
          </div>
        </div>
        <div id="right" className="flex flex-col md:py-24 max-w-2xl">
          <h2 className="uppercase font-bold text-md mb-6">About</h2>
          <div className="mb-8 flex flex-col gap-4">
            <p className="text-sm max-w-xl md:max-w-md lg:max-w-xl text-foreground leading-relaxed">
              I build digital products that perform — from complex platforms to
              conversion-focused marketing sites. I take ownership of the full
              cycle: strategy, design, development, and delivery.
            </p>
            <p className="text-sm max-w-xl md:max-w-md lg:max-w-xl text-foreground leading-relaxed">
              My work spans SaaS platforms, B2B tools, marketplaces, and brand
              websites — built with Laravel, React, Next.js, and everything in
              between. Clients range from Tunisian startups to international
              companies, and the standard is always the same: fast, scalable,
              and built to last.
            </p>
          </div>
          <div className="mb-12">
            <TechStack />
          </div>
          <div id="experience" className="mb-12 ">
            <h2 className="uppercase font-bold text-md mb-6">Experience</h2>
            <div className="flex flex-col gap-6 items-stretch group/list">
              <CardExperiance
                timeline="2025 - Present"
                position="Full Stack Developer @ Asis.tn"
                description={[
                  "Rebuilt legacy Laravel platforms into modern, scalable web applications — handling architecture, UI/UX redesign, multi-tenant migrations, and production deployment end-to-end.",
                  "Delivered marketing websites and B2B platforms for clients across Tunisia and internationally, from first meeting to live product.",
                  "Cut critical query loads from 1000+ to ~10, resolved security vulnerabilities, and implemented caching strategies that measurably improved performance.",
                  "Provided ongoing production support across multiple live platforms — bug fixes, feature rollouts, and system stability under real usage.",
                ]}
                techStack={[
                  "Laravel",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Figma",
                  "MySQL",
                  "WordPress",
                  "Prisma",
                  "Netlify",
                  "OVH",
                  "Docker",
                  "GitHub",
                ]}
              />
              <CardExperiance
                timeline="2024 / 6 months"
                position="Full Stack Developer Intern @ Sofrecom"
                description={[
                  "Built a complaint management SPA in an Agile team using Spring Boot and Angular, with JWT-based role access control.",
                  "Integrated and fine-tuned an LLM to automate complaint categorization and generate intelligent customer support responses — reducing manual handling time.",
                  "Implemented CI/CD pipelines with GitLab and Ansible, automating testing and deployment across the development lifecycle.",
                ]}
                techStack={[
                  "Springboot",
                  "Angular",
                  "TypeScript",
                  "PostgreSQL",
                  "GitLab",
                  "Ansible",
                ]}
              />
              {/* <CardExperiance
                timeline="2022 / 1 month"
                position="DevOps intern @ Tunisie Telecom"
                description={[
                  "Deployed backend service using Docker and Kubernetes on Google Cloud Platform.",
                  "Configured Prometheus and Grafana to monitor cloud infrastructure and applications, providing real-time alerts.",
                ]}
                techStack={[
                  "Docker",
                  "Kubernetes",
                  "GCP",
                  "Prometheus",
                  "Grafana",
                  "Linux",
                ]}
              /> */}
            </div>
          </div>
          <div id="projects" className="">
            <h2 className="text-md font-bold mb-6 uppercase">Projects</h2>
            <div className="group/list">
              <CardProject
                title="Award-Winning PropTech Platform"
                description="Rebuilt a broken rental platform from the ground up — new architecture, new design, 50+ booking channel integrations, full CRM, and critical security fixes. Recognized at the Global Proptech & Contech Awards 2026 in Dubai."
                imageSrc={thelandlord}
                techStack={[
                  "Laravel",
                  "Inertia.js",
                  "React",
                  "Tailwind CSS",
                  "MySQL",
                ]}
                link="/projects#thelandlord"
              />
              <CardProject
                title="B2B Industrial Sales Platform"
                description="Turned 30 years of expertise into a lead generation engine — 3000+ product catalog, technical search, RFQ module, and full documentation hub. MVP delivered in one day, full product in one week."
                imageSrc={sogecor}
                techStack={[
                  "Next.js",
                  "Tailwind CSS",
                  "Sanity CMS",
                  "Shadcn UI",
                ]}
                link="https://sogecor.netlify.app/"
              />
              <CardProject
                title="Full-Stack Real Estate Marketplace"
                description="Client wanted a Mubawab-level platform by Friday. Delivered in 4 days — map & grid listings, client dashboard, admin panel, and full Laravel backend. Designed, built, and deployed end-to-end."
                imageSrc={sakan}
                techStack={["Next.js", "TypeScript", "Laravel", "MySQL"]}
                link="https://sakan1.netlify.app/"
              />
              <CardProject
                title="Global Marketing Site for Deep-Tech Startup"
                description="Built the multilingual international website for a French startup with a patented sustainable construction technology — designed to open doors with investors, architects, and buyers worldwide."
                imageSrc={mbio7}
                techStack={[
                  "Next.js",
                  "Tailwind CSS",
                  "i18n",
                  "WordPress Headless CMS",
                ]}
                link="https://mbio7.com/"
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
