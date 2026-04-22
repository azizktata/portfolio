import React from "react";

export default function CardExperiance({
  timeline,
  position,
  description,
  techStack,
}: {
  timeline: string;
  position: string;
  description: string[];
  techStack: string[];
}) {
  return (
    <div className="group/card group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-200">
      <div className="flex p-2 rounded-lg hover:bg-card flex-col gap-2 md:flex-row md:p-4 md:gap-5  transition-colors duration-200">
        {/* Timeline */}
        <span className="text-[12px] font-mono text-muted-foreground whitespace-nowrap w-20 shrink-0 mt-0.5 leading-relaxed">
          {timeline}
        </span>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <h4 className="text-base sm:text-md font-semibold leading-snug group-hover/card:text-primary transition-colors duration-200">
            {position}
          </h4>

          <ul className="flex flex-col gap-2">
            {description.map((point, index) => (
              <li key={index} className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[0.45em] before:w-1 before:h-1 before:rounded-full before:bg-primary/50">
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
