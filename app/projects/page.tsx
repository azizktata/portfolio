import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Github,
  Linkedin,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import CardProjectV2 from "@/components/card-project-v2";
import thelandlord from "../../public/thelandlord.png";
import ramtec from "../../public/ramtec-1.png";
import timesheet from "../../public/timesheet-1.png";
import marinekeys from "../../public/marinekeys.png";
import dolphin from "../../public/dolphin.png";
import mbio7 from "../../public/mbio7.png";
import skyflow from "../../public/skyflow.png";
import epigreenvision from "../../public/epigreenvision.png";
import gafvoyages from "../../public/gafvoyages.png";

export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background ">
      {/* lg:py-32 lg:px-16 */}
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-start px-8 py-16  ">
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 text-primary group">

              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-translate duration-200" />
              <p>Aziz Ktata</p>
            </Link>
          </div>
          <h2 className="text-4xl font-bold">All Projects</h2>
        </div>
        <div className="flex flex-col gap-12  mx-auto">
          <CardProjectV2
            subtitle="TheLandlord"
            title="Property Management Platform"
            description="A comprehensive property management platform that streamlines rental processes for landlords and tenants."
            imageSrc={thelandlord}
            link="https://example.com/thelandlord"
            techStack={[
              "Laravel",
              "inertia.js",
              "Tailwind CSS",
              "React",
              "MySQL",

            ]}
            github="https://github.com/username/thelandlord"
            liveDemo="https://example.com/thelandlord"
          />
          <CardProjectV2
            subtitle="Timesheet"
            title="Accounting Timesheet System"
            description="timesheet accounting system that simplifies tracking and managing employee work hours for accurate payroll processing."
            imageSrc={timesheet}
            techStack={["Laravel", "React", "Tailwind CSS", "MySQL", "Docker"]}
            github="https://github.com/username/timesheet"
            liveDemo="https://example.com/timesheet"
            inverted={true}
          />
          <CardProjectV2
            subtitle="Ramtec"
            title="E-commerce Platform"
            description="A SaaS e-commerce platform that empowers businesses to create and manage their online stores with ease, offering a seamless shopping experience for customers."
            imageSrc={ramtec}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Prisma",
              "PostgreSQL",
              "NextAuth",
              "Redux",
            ]}
            github="https://github.com/username/ecommerce"
            liveDemo="https://example.com/ecommerce"

          />

          <CardProjectV2
            subtitle="Marine Keys"
            title="Elite Yachting Services"
            description="Marketing site for startup company that provides yachting services, delivery, crew, and maintenance."
            imageSrc={marinekeys}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "I18n",
              "Wordpress headless CMS",
              "Shadcn UI",
            ]}
            github="https://github.com/azizktata/marine-keys/tree/main"
            liveDemo="https://www.marinekeys.com/fr"
            inverted={true}
          />
          <CardProjectV2
            subtitle="Dolphin Equipements"
            title="Industrial Equipment Distribution"
            description="Tunisian company specialized in the distribution of hydraulic, pneumatic, and industrial maintenance equipment."
            imageSrc={dolphin}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Wordpress headless CMS",
              "Shadcn UI",
            ]}
            github="https://github.com/azizktata/dolphine-equipements/tree/main"
            liveDemo="https://www.dolphinequipements.tn/"
          />
          <CardProjectV2
            subtitle="mBio7"
            title="Wood Panel Construction Material"
            description="Molded wood panel that enables easy and rapid construction of sustainable buildings patented product developed by WoodWise company."
            imageSrc={mbio7}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "I18n",
              "Shadcn UI",
            ]}
            github="https://github.com/azizktata/mbio7"
            liveDemo="https://mbio7.vercel.app/en"
            inverted={true}
          />
          <CardProjectV2
            subtitle="GafVoyages.tn"
            title="Travel Agency Site"
            description="A travel agency website based in Tunisia offering a variety of travel packages and services to customers."
            imageSrc={gafvoyages}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Sanity headless CMS",
              "Shadcn UI",
            ]}
            github="https://github.com/azizktata/gaf-travel-events"
            liveDemo="https://www.gafvoyages.tn/"
          

          />
          <CardProjectV2
            subtitle="SkyFlow"
            title="Import Export Enterprise"
            description="Import export company for various products with global suppliers and customers."
            imageSrc={skyflow}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Wordpress headless CMS",
              "Shadcn UI",
            ]}
            github="https://github.com/azizktata/sky-flow"
            liveDemo="https://www.skyflows.com.tn/"
              inverted={true}
          />
          <CardProjectV2
            subtitle="EpiGreenVision"
            title="Science-based R&D enterprise"
            description="Science-based applied physics and R&D company specializing in innovative solutions for energy efficiency and environmental sustainability."
            imageSrc={epigreenvision}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Wordpress headless CMS",
              "Shadcn UI",
            ]}
            github="https://github.com/azizktata/epi-green-vision"
            liveDemo="https://www.epigreenvision.com/"

          />
        </div>
      </main>
    </div>
  );
}
