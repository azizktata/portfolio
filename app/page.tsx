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
import sakan from "../public/sakan.jpg";
import sogecor from "../public/sogecor.jpg";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background bg-ambient relative">

      <main className="flex min-h-screen w-full max-w-6xl xl:max-w-7xl flex-col justify-between px-8 md:px-6 items-start md:flex-row md:gap-16 relative z-10">

        {/* Left — identity column, sticky */}
        <div
          id="left"
          className="flex flex-col pt-16 lg:mb-0 lg:sticky lg:top-0 md:py-24 md:w-1/2 mb-16 md:min-h-screen md:justify-between"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-6 opacity-80">
              Web Design & Development
            </p>
            <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold tracking-tight leading-[0.95] mb-8 text-foreground">
              Aziz<br />Ktata
            </h1>
            <p className="text-base max-w-sm text-muted-foreground leading-relaxed mb-10">
               I help businesses build fast, modern websites that attract clients and convert visitors — from brand identity to production.

            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/AzizKtata__Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="font-semibold"
                >
                  View resume
                </Button>
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Work together →
              </Link>
            </div>
          </div>

          {/* Availability badge pinned to bottom of left col on desktop */}
          <div className="hidden md:flex items-center gap-2.5 mt-16">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs text-muted-foreground">Available for new projects</span>
          </div>
        </div>

        {/* Right — content column */}
        <div id="right" className="flex flex-col md:py-24 max-w-2xl w-full">

          {/* About */}
          <section className="mb-16">
            <h2 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-6">About</h2>
            <div className="flex flex-col gap-4">
              <p className="text-sm max-w-xl text-foreground leading-relaxed">
                I build digital products that perform — from complex platforms to
                conversion-focused marketing sites. I take ownership of the full
                cycle: strategy, design, development, and delivery.
              </p>
              <p className="text-sm max-w-xl text-foreground leading-relaxed">
                My work spans SaaS platforms, B2B tools, marketplaces, and brand
                websites — built with Laravel, React, Next.js, and everything in
                between. Clients range from Tunisian startups to international
                companies, and the standard is always the same: fast, scalable,
                and built to last.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <TechStack />
          </section>

          {/* Experience */}
          <section id="experience" className="mb-16">
            <h2 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-8">Experience</h2>
            <div className="flex flex-col gap-4 group/list">
              <CardExperiance
                timeline="2025 – Present"
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
                timeline="2024 · 6 mo"
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
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-16">
            <h2 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-8">Projects</h2>
            <div className="group/list">
              <CardProject
                index={1}
                title="Modern Islamic E-Learning Platform"
                description="The curriculum existed. The scholars' audios existed. The website didn't do them justice. Rebuilt the platform from scratch with progress tracking, a lesson player, full-text search, notes system, and YouTube playlist integration."
                imageSrc={kibbaroulama}
                techStack={["Next.js", "Tailwind CSS", "Turso"]}
                link="https://kibbarulmauniversity.netlify.app/"
              />
              <CardProject
                index={2}
                title="Award-Winning PropTech Platform"
                description="Rebuilt a broken rental platform from the ground up — new architecture, new design, 50+ booking channel integrations, full CRM, and critical security fixes. Recognized at the Global Proptech & Contech Awards 2026 in Dubai."
                imageSrc={thelandlord}
                techStack={["Laravel", "Inertia.js", "React", "Tailwind CSS", "MySQL"]}
                link="/projects#thelandlord"
              />
              <CardProject
                index={3}
                title="B2B Industrial Sales Platform"
                description="Turned 30 years of expertise into a lead generation engine — 3000+ product catalog, technical search, RFQ module, and full documentation hub. MVP delivered in one day, full product in one week."
                imageSrc={sogecor}
                techStack={["Next.js", "Tailwind CSS", "Sanity CMS", "Shadcn UI"]}
                link="https://sogecor.netlify.app/"
              />
              <CardProject
                index={4}
                title="Full-Stack Real Estate Marketplace"
                description="Client wanted a Mubawab-level platform by Friday. Delivered in 4 days — map & grid listings, client dashboard, admin panel, and full Laravel backend."
                imageSrc={sakan}
                techStack={["Next.js", "TypeScript", "Laravel", "MySQL"]}
                link="https://sakan1.netlify.app/"
              />
            </div>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="w-fit hover:bg-primary/10 mt-2 mb-4 md:mb-0">
                View all projects <ArrowUpRight size={16} className="ml-2" />
              </Button>
            </Link>
          </section>

          {/* Contact */}
          <section id="contact" className="mb-24">
            <h2 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-8">Work Together</h2>
            <div className="max-w-sm">
              <ContactForm />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
