import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CardProjectV2 from "@/components/card-project-v2";
import thelandlord from "../../public/thelandlord.png";
import timesheet from "../../public/timesheet.jpg";
import marinekeys from "../../public/marinekeys.png";
import dolphin from "../../public/dolphin.png";
import mbio7 from "../../public/mbio7.png";
import sakan from "../../public/sakan.jpg";
import sogecor from "../../public/sogecor.jpg";
import parcauto from "../../public/parcauto.png";
import truvisory from "../../public/truvisory.jpg";
import groupeagence from "../../public/groupeagence.jpg";
import kibbaroulama from "../../public/kibar-oulama-2.jpg";
import heilosante from "../../public/heilo.jpg";

export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background ">
      {/* lg:py-32 lg:px-16 */}
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-start px-8 py-16  ">
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary group"
            >
              <ChevronLeft
                size={16}
                className="group-hover:-translate-x-1 transition-translate duration-200"
              />
              <p>Aziz Ktata</p>
            </Link>
          </div>
          <h2 className="text-4xl font-bold">All Projects</h2>
        </div>
        <div className="flex flex-col gap-12  mx-auto w-full">
          <CardProjectV2
            subtitle="Kibar Oulama University"
            title="Modern Islamic E-Learning Platform"
            description={<>The organisation had an <a href="https://kibbarulmauni.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">existing website</a> that didn&apos;t do the curriculum justice. I scraped the full curriculum, rebuilt the platform from scratch, and delivered a modern e-learning experience — with progress tracking, a lesson player that saves your place, full-text search across all courses, a notes system, transcript viewer, and YouTube playlist integration. Built to make sacred knowledge easier to access, and compelling enough to keep students coming back.</>}
            imageSrc={kibbaroulama}
            liveDemo="https://kibbarulmauniversity.netlify.app/"
            techStack={["Next.js", "Tailwind CSS", "Turso"]}
            id="kibar-oulama"
          />
          {/* <CardProjectV2
            subtitle="Kibar Oulama University"
            title="E-learning Platform for Islamic Studies"
            description="E-learning Platform to facilitate the students of knowledge to learn Sharia, with a curriculum according to the College of Sharia at Muhammad bin Saud Islamic University, and the audios were selected for the sheikhs of senior scholars and on the university's curriculum."
            imageSrc={kibbaroulama}
            liveDemo="https://kibbarulmauniversity.netlify.app/"
            techStack={["Next.js", "Tailwind CSS", "TursoDB"]}
            id="kibar-oulama"
          /> */}
          <CardProjectV2
            subtitle="TheLandlord"
            title="Award-Winning PropTech Platform"
            description="Took a legacy codebase, slow, single-tenant rental platform and rebuilt it from the ground up — modernizing a Laravel legacy codebase, redesigning the entire manager interface, and migrating to a scalable multi-tenant architecture. Integrated 50+ booking channels via Rentals United, built a full CRM, owner portal, and analytics dashboards. Resolved critical security vulnerabilities, cut SQL queries from 1000+ to ~10 on key modules, and delivered 9 months of continuous support. The platform went on to be recognized at the Global Proptech & Contech Awards 2026 in Dubai."
            imageSrc={thelandlord}
            techStack={[
              "Laravel",
              "Inertia.js",
              "React",
              "Tailwind CSS",
              "MySQL",
            ]}
            objectLeft={true}
            inverted={true}
            id="thelandlord"
          />
          {/* <CardProjectV2
            subtitle="TheLandlord"
            title="Property Rental Management Platform"
            description="A scalable, multi-tenant property management platform designed for short-term rentals, recognized at the Global Proptech & Contech Awards 2026 in Dubai. 
             The system includes a certified channel manager connected to 50+ global booking platforms, end-to-end reservation management, owner and guest portals, online check-in, CRM, accounting, and automation features.
             "
            imageSrc={thelandlord}
            // link="https://example.com/thelandlord"
            techStack={[
              "Laravel",
              "inertia.js",
              "Tailwind CSS",
              "React",
              "MySQL",

            ]}
            objectLeft={true}
            inverted={true}
            id="thelandlord"

          /> */}
          {/* <CardProjectV2
            subtitle="SOGECOR"
            title="Société Générale de Commerce et de Représentation"
            description="SOGECOR is a Tunisian company, Specialist in industrial valves, steam control, and instrumentation for over 30 years."
            imageSrc={sogecor}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Sanity CMS",
              "Shadcn UI",
            ]}
            // github="https://github.com/azizktata/gaf-travel-events"
            liveDemo="https://sakan1.netlify.app/"
          /> */}
          <CardProjectV2
            subtitle="SOGECOR"
            title="B2B Industrial Sales Platform"
            description="SOGECOR had 30 years of expertise and zero web presence. Two meetings, one MVP delivered the next day, a closed deal, and a finished product in one week. The result: a full B2B platform with a 3000+ product catalog scraped from supplier sites, advanced technical search, an RFQ module for qualified leads, and centralized technical documentation — built not as a brochure, but as a lead generation engine that positions SOGECOR as a technical authority, not just a distributor."
            imageSrc={sogecor}
            techStack={["Next.js", "Tailwind CSS", "Sanity CMS", "Shadcn UI"]}
            liveDemo="https://sogecor.netlify.app/"
          />
          <CardProjectV2
            subtitle="Timesheet"
            title="Web-Based ERP for Professional Firms"
            description="A poorly designed desktop app with no real architecture, limited features, and zero scalability. Rebuilt it as a full web application — clean system design, modern UI, multi-tenant architecture, role-based access, and a packaging system. Ran live client sessions for iterative validation, handled deployment pipelines, and delivered full documentation. Teams now have a fast, reliable tool that actually fits how they work."
            imageSrc={timesheet}
            techStack={["Laravel", "React", "Tailwind CSS", "MySQL", "Docker"]}
            objectLeft={true}
            inverted={true}
            id="timesheet"
          />
          {/* <CardProjectV2
            subtitle="Timesheet"
            title="Accounting Timesheet System"
            description="A multi-tenant ERP and Time Tracking system designed for professional firms to streamline mission management and resource allocation. The platform features an automated planning engine with collaborative timelines, and comprehensive reporting for operational profitability and team productivity."
            imageSrc={timesheet}
            techStack={["Laravel", "React", "Tailwind CSS", "MySQL", "Docker"]}         
            objectLeft={true}
            id="timesheet"
                inverted={true}
          /> */}
          <CardProjectV2
            subtitle="SAKAN · سكن"
            title="Full-Stack Real Estate Marketplace"
            description="Client sent a reference site on Monday and wanted something equivalent by Friday. Delivered in 4 days — full design system, property listings with map and grid views, advanced filters, a 6-step listing publish flow, client dashboard, admin panel, and Google OAuth. Built on Next.js with a Laravel backend, deployed and fully functional. An ethical, halal real estate platform for Tunisia built for transparency, speed, and scale."
            imageSrc={sakan}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
              "Laravel",
              "MySQL",
            ]}
            liveDemo="https://sakan1.netlify.app/"
          />

          <CardProjectV2
            subtitle="Dolphin Équipements"
            title="Local Store, Professional Online Presence"
            description="The client needed to showcase his industrial equipment offer online — no e-commerce, just a fast, clean, credible catalog. Collaborated with a designer, implemented the full design in Next.js, integrated 100+ products into a headless WordPress CMS, and optimized navigation performance so customers find what they need instantly."
            imageSrc={dolphin}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "WordPress Headless CMS",
              "Shadcn UI",
            ]}
            github="https://github.com/azizktata/dolphine-equipements/tree/main"
            liveDemo="https://www.dolphinequipements.tn/"
            inverted={true}
          />
          {/* <CardProjectV2
            subtitle="Fire management company"
            title="Fire safety engineering company website"
            description="Designed and built a website for a Tunisian fire safety engineering company. The site features a clean, professional design that communicates the company’s expertise and reliability. Built with Next.js and Tailwind CSS, the site is fast, responsive, and easy to navigate — giving the client a strong online presence in a critical industry."
            imageSrc={dolphin}
            techStack={["Next.js", "CSS"]} */}

          {/* <CardProjectV2
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
              inverted={true}
          /> */}
          <CardProjectV2
            subtitle="Marine Keys"
            title="A Startup's First Digital Identity"
            description="The client had a logo, a color palette, and a vision. I built everything else — design system, photography direction, content structure, Figma mockups, and the full multilingual site. Marine Keys launched with a polished digital presence that reflects the premium nature of Mediterranean yachting, connected to a headless WordPress CMS for easy content management."
            imageSrc={marinekeys}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "i18n",
              "WordPress Headless CMS",
              "Shadcn UI",
            ]}
            github="https://github.com/azizktata/marine-keys/tree/main"
            liveDemo="https://www.marinekeys.com/fr"
          />
          {/* <CardProjectV2
            subtitle="Marine Keys"
            title="Elite Yachting Services"
            description="Tunisian startup that provides yachting  services including yacht charters, sales, and maintenance in the Mediterranean region."
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
           
          /> */}
          <CardProjectV2
            subtitle="Groupe Agence"
            title="Travel Agency Website with Live Booking Integration"
            description="Designed and built the full web presence for a Côte d'Ivoire-based travel agency — from requirements gathering to iterative Figma mockups to responsive frontend. Tested live third-party booking API integrations for flights and hotels, so customers go from browsing to booked without leaving the site. The client got a site that works as hard as their team does."
            imageSrc={groupeagence}
            techStack={["Next.js", "Tailwind CSS", "Shadcn UI", "Figma"]}
            liveDemo="https://groupe-agence.vercel.app/"
            objectLeft={true}
            inverted={true}
          />
          {/* <CardProjectV2
            subtitle="Groupe Agence"
            title="Travel & Tourism Agency"
            description="A travel and tourism agency based in Cote d'Ivoire, offering a variety of travel packages and services to customers. with third party booking engine API integration for flights and hotels."
            imageSrc={groupeagence}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Shadcn UI",
              "Figma",
            ]}
            // github="https://github.com/azizktata/groupe-agence"
            liveDemo="https://groupe-agence.vercel.app/"
            objectLeft={true}
             inverted={true}
          /> */}

          <CardProjectV2
            subtitle="HEILO SANTÉ"
            title="Clean Room Design & Installation"
            description="Deep-researched the business, the industry, and the client personas — then used that context to generate a sharp, conversion-ready website in under 6 hours. The client saw the MVP and was satisfied on the first presentation. A clean room company now has a site that communicates precision and technical authority before anyone picks up the phone."
            imageSrc={heilosante}
            techStack={["Next.js", "Tailwind CSS", "Figma", "Shadcn UI"]}
            liveDemo="https://helo-sante.netlify.app/"
            objectLeft={true}
          />
          {/* <CardProjectV2
            subtitle="HEILO SANTE"
            title="Clean Room Design & Installation"
            description="A Company expert in the design, manufacture and installation of clean rooms to the most demanding international standards."
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Figma",
              "Loveable",
              "Shadcn UI",
            ]}
            imageSrc={heilosante}
            liveDemo="https://helo-sante.netlify.app/"
            objectLeft={true}
           
          /> */}
          <CardProjectV2
            subtitle="Truvisory"
            title="Accounting & Advisory Firm"
            description="Researched the firm's positioning, services, and target clients, then built a site that makes the right first impression for an accounting and advisory business. MVP presented in 6 hours. Client satisfied on first review. Because trust is the product, the design had to be clean, professional, and impossible to doubt."
            imageSrc={truvisory}
            techStack={["Next.js", "Tailwind CSS", "Shadcn UI"]}
            liveDemo="https://truvisory.vercel.app/"
            inverted={true}
          />
          {/* <CardProjectV2
            subtitle="Truvisory"
            title="Accounting & Advisory Firm"
            description="Accounting and advisory firm based in Tunisia, offering services to businesses and individuals including auditing, tax consulting, and financial advisory."
            imageSrc={truvisory}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Loveable",
              "Shadcn UI",
            ]}
            liveDemo="https://truvisory.vercel.app/"
            inverted={true}
          /> */}
          <CardProjectV2
            subtitle="mBio7"
            title="Patented Technology Needs a Website That Opens Doors"
            description="Built the global marketing site for a French deep-tech startup behind a patented sustainable molded wood panel system. Multilingual, fast, and designed to speak to investors, architects, and buyers across markets. The site positions mBio7 as an innovation-first company — not just another construction materials supplier."
            imageSrc={mbio7}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "i18n",
              "Shadcn UI",
              "WordPress Headless CMS",
            ]}
            liveDemo="https://www.mbio7.com/en"
          />
          {/* <CardProjectV2
            subtitle="mBio7"
            title="Wood Panel Construction Material"
            description="Marketing website for a French startup to showcase their patented sustainable construction materials. Built the site from the ground up to support the company’s growth and present their molded wood panel technology to a global market"
            imageSrc={mbio7}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "I18n",
              "Shadcn UI",
              "Wordpress headless CMS",
            ]}
            liveDemo="https://www.mbio7.com/en"
          /> */}
          <CardProjectV2
            subtitle="ParcAuto"
            title="Car Rental Management System"
            description="Built this full-stack platform as a side project during my final-year internship — nights and weekends, alongside a 6-month engineering placement. Multiple client meetings, full requirements documentation, and a complete Angular + Spring Boot application delivered in 2 months. End-to-end fleet management: bookings, vehicle tracking, and operations — all in one system."
            imageSrc={parcauto}
            techStack={["Spring Boot", "Angular", "Tailwind CSS", "MySQL"]}
            github="https://github.com/azizktata/Car-Rental-Management/tree/main"
            inverted={true}
            objectLeft={true}
          />
        </div>
      </main>
    </div>
  );
}
{
  /* <CardProjectV2
            subtitle="Ramtec"
            title="E-commerce Platform"
            description="A modern e-commerce platform with a custom storefront and admin dashboard, supporting product management, cart, orders, and email automation."
            imageSrc={ramtec}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Prisma",
              "PostgreSQL",
              "NextAuth",
              "Redux",
            ]}
            github="https://github.com/azizktata/ramtec-ecommerce/tree/frontstore-v3"
            liveDemo="https://ramtec-ecommerce.vercel.app/"
            objectLeft={true}
            id="ramtec"
          /> */
}
{
  /* <CardProjectV2
            subtitle="GafVoyages.tn"
            title="Travel Agency Site"
            description="A travel agency website based in Tunisia offering a variety of travel packages and services to customers. with Sanity CMS for managing travel packages, bookings, and customer inquiries."
            imageSrc={gafvoyages}
            techStack={[
              "Next.js",
              "Tailwind CSS",
              "Sanity CMS",
              "Shadcn UI",
            ]}
            // github="https://github.com/azizktata/gaf-travel-events"
            liveDemo="https://www.gafvoyages.tn/"
            inverted={true}

          /> */
}
{
  /* 
        
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

          /> */
}
