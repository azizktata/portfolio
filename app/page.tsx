import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import thelandlord from "../public/thelandlord.png";
import CardProject from "@/components/card-project";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background ">
      {/* lg:py-32 lg:px-16 */}
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between px-8  sm:items-start md:flex-row md:gap-16 lg:gap-32">
        <div id="left" className="flex flex-col pt-16 lg:mb-0 lg:sticky lg:top-0 md:py-32 md:w-1/2">
          <h1 className="text-5xl font-bold tracking-wider mb-1">Aziz Ktata</h1>
          <h3 className="text-lg mb-4">Full stack developer</h3>
          <p className="text-sm max-w-lg text-foreground mb-12">
            I design, build web applications for businesses 
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="w-fit text-primary border-primary hover:bg-primary/10"
            >
              View resume
            </Button>
            <div className="flex items-center gap-2">
              <Linkedin />
              <Github />
            </div>
          </div>
        </div>
        <div id="right" className="flex flex-col py-32 ">
          <h2 className="uppercase font-bold text-md mb-6">About</h2>
          <p className="text-sm max-w-xl md:max-w-md text-foreground mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>

          <div id="projects" className="">
            <h2 className="text-md font-bold mb-6 uppercase">Projects</h2>

            <CardProject
              title="Built property rental management system"
              description="A comprehensive property management platform that streamlines rental processes for landlords and tenants."
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
              description="E-commerce platform that offers seamless online shopping experiences with secure payment gateways and user-friendly interfaces."
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
        </div>
      </main>
    </div>
  );
}
