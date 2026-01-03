import React from "react";
import { Badge } from "./ui/badge";

export default function CardExperiance({
    timeline,
    position,
    description,
    techStack
}: {
    timeline: string;
    position: string;
    description: string;
    techStack: string[];
}) {
  return (
    <div id="experiance-card" className="flex gap-6">
      <h3 className="text-foreground/80 font-light text-sm whitespace-nowrap w-24 mt-1 ">
        {timeline}
      </h3>
      <div className="flex flex-col items-start gap-4">
        <h4 className="font-bold text-lg">{position}</h4>
        <p className="text-sm max-w-lg text-foreground">
          {description}
         
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} className="bg-primary/10 text-primary py-1 text-xs">
              {tech}
            </Badge>
          ))}
       
      </div>
      </div>
    </div>
  );
}
