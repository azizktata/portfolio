import Image, { StaticImageData } from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";

export default function CardProject({
  title,
  description,
  imageSrc,
  link,
  techStack,
}: {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  link?: string;
  techStack: string[];
}) {
  return (
    <div id="project" className="flex flex-col mb-12">
      <div className="flex flex-col items-start sm:flex-row sm:gap-6">
        <div className="flex flex-col sm:order-2">
          <div className="flex items-center gap-1 group group-hover:text-primary/80 cursor-pointer mb-2 ">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-md font-semibold hover:text-primary/80">
                {title}
              </h3>
            </a>
            <ArrowUpRight
              size={16}
              className="group-hover:-translate-y-1 group-hover:text-primary/80 transition-transform"
            />
          </div>
          <p className="text-sm max-w-md text-foreground mb-4">{description}</p>

          <div className="flex items-center gap-2 flex-wrap hidden sm:flex">
            {techStack.map((tech) => (
              <Badge key={tech}  className="bg-primary/10 text-primary py-1 text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className=""> 

        <Image
          src={imageSrc}
          alt={title}
        
          className="rounded-md object-cover mb-4 sm:order-1 w-56 h-24"
          />
          </div>

         <div className="flex items-center gap-2 flex-wrap sm:hidden">
            {techStack.map((tech) => (
              <Badge key={tech}  className="bg-primary/10 text-primary py-1 text-xs">
                {tech}
              </Badge>
            ))}
          </div>
      </div>
    </div>
  );
}
