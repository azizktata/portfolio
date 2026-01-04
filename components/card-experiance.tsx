import React from "react";
import { Badge } from "./ui/badge";

export default function CardExperiance({
  timeline,
  position,
  description,
  techStack,
}: {
  timeline: string;
  position: string;
  description: string;
  techStack: string[];
}) {
  return (
    <div className="">
      <div
        id="experiance-card"
        className="
        group flex flex-col sm:flex-row sm:gap-6 group/card hover:bg-gray-50 hover:backdrop-blur-lg hover:drop-shadow-sm dark:hover:bg-white/10  p-3 rounded-md transition-all duration-200 group-hover/list:opacity-60 hover:opacity-100"
      >
        <h3 className="text-foreground/80 font-light text-sm whitespace-nowrap w-24 mt-1 ">
          {timeline}
        </h3>
        <div className="flex flex-col items-start gap-4">
          <h4 className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{position}</h4>
          <p className="text-sm max-w-lg text-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                className="bg-primary/10 text-primary py-1 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
