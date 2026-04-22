import Image, { StaticImageData } from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CardProject({
  index,
  title,
  description,
  imageSrc,
  link,
  techStack,
}: {
  index: number;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  link?: string;
  techStack: string[];
}) {
  const isInternal = link?.startsWith("/");
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    isInternal ? (
      <Link href={link!}>{children}</Link>
    ) : (
      <a href={link} target="_blank" rel="noopener noreferrer">{children}</a>
    );

  return (
    <div className="group/card group-hover/list:opacity-50 hover:!opacity-100 transition-opacity duration-200 mb-2">
      <Wrapper>
        <div className="flex gap-5 p-4 rounded-lg hover:bg-card transition-colors duration-200 cursor-pointer">
          {/* Index number */}
          <span className="text-[10px] font-mono text-primary/60 mt-1 w-5 shrink-0 select-none">
            {String(index).padStart(2, "0")}
          </span>

          {/* Content */}
          <div className="flex flex-col gap-3 flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold leading-snug group-hover/card:text-primary transition-colors duration-200">
                {title}
              </h3>
              <ArrowUpRight
                size={14}
                className="shrink-0 mt-0.5 text-muted-foreground group-hover/card:text-primary group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 transition-all duration-200"
              />
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
              {description}
            </p>

            {/* Image */}
            <Image
              src={imageSrc}
              alt={title}
              className="rounded-md object-cover object-left w-full h-36 opacity-80 group-hover/card:opacity-100 transition-opacity duration-200"
            />

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
