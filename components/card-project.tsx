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
          <div className="flex items-center gap-1 group group-hover:text-blue-500 cursor-pointer mb-2 ">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-md font-semibold hover:text-blue-500">
                {title}
              </h3>
            </a>
            <ArrowUpRight
              size={16}
              className="group-hover:-translate-y-1 group-hover:text-blue-500 transition-transform"
            />
          </div>
          <p className="text-sm max-w-md text-foreground mb-4">{description}</p>

          <div className="flex items-center gap-2 flex-wrap hidden sm:flex">
            {techStack.map((tech) => (
              <Badge key={tech} className="bg-blue-500 text-white">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Image
          src={imageSrc}
          alt={title}
          width={250}
          height={100}
          className="rounded-md mb-4 sm:order-1"
        />

         <div className="flex items-center gap-2 flex-wrap sm:hidden">
            {techStack.map((tech) => (
              <Badge key={tech} className="bg-blue-500 text-white">
                {tech}
              </Badge>
            ))}
          </div>
      </div>
    </div>
  );
}
