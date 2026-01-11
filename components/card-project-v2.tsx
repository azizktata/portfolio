'use client';

import {
  SquareArrowOutUpRight,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { SiGithub } from "react-icons/si";
import { useEffect, useState } from "react";

export default function CardProjectV2({
  inverted = false,
  subtitle,
  title,
  description,
  imageSrc,
  techStack,
  github,
  liveDemo,
  objectLeft,
}: { inverted?: boolean; subtitle: string; title: string; description: string; imageSrc: StaticImageData; techStack: string[]; github?: string; liveDemo?: string; objectLeft?: boolean }) {

  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  if (isSmallScreen) {
    return (
      <div
        id="project-card-v2"
        className="relative shadow-md rounded-md overflow-hidden"
      >
        <div className="h-110 max-h-110 overflow-hidden relative">
          <Image
            src={imageSrc}
            alt="Project Image"
            className={cn("rounded-lg object-cover w-96 h-100", objectLeft && "object-left h-110")}
          />
        </div>
        <div className="bg-background/80 absolute inset-0"></div>
        <div className="absolute inset-0 self-center p-4 rounded-lg  px-6 sm:px-8 py-8 ">
          <p className="text-xs text-primary font-medium">{subtitle}</p>
          <h3 className="text-xl font-bold mb-6 sm:mb-8">
            {title}
          </h3>
          <p className="text-sm mb-6 sm:mb-8 ">
            {description}

          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech) => (
              <Badge key={tech} className="bg-primary-foreground text-primary py-1 text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2 hidden sm:flex">
            {
              github &&
              <Link href={github || "#"} target="_blank"
                rel="noopener noreferrer" className="text-sm underline underline-offset-4 text-foreground/70 hover:text-foreground">
                <SiGithub size={20} />
              </Link>
            }
            {
              liveDemo &&
              <Link href={liveDemo || "#"} target="_blank"
                rel="noopener noreferrer" className="text-sm underline underline-offset-4 text-foreground/70 hover:text-foreground">
                <SquareArrowOutUpRight size={20} />
              </Link>
            }
          </div>
          <div className="sm:hidden">
            {liveDemo &&
              <Link href={liveDemo || "#"} target="_blank"
                rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit text-primary border-primary text-xs hover:bg-primary-foreground"
                >
                  View Project
                </Button>
              </Link>
            }
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <div className={cn("flex flex-col items-start -mr-16 z-10 order-1", inverted && "flex-col items-end -ml-16 -mr-0 order-2")}>
          <div className={cn("mb-6 sm:mb-8", inverted && "text-right")}>
            <p className="text-sm text-foreground text-primary font-medium">{subtitle}</p>
            <h3 className="text-xl font-bold ">
              {title}
            </h3>
          </div>

          <div className="w-full md:max-w-lg lg:max-w-md bg-gray-300/10 backdrop-blur-lg shadow-md dark:bg-background-secondary/50 rounded-md  mb-6 sm:mb-8 ">
            <p className="text-sm p-6 leading-relaxed">
              {description}
            </p>
          </div>

          <div className={cn("flex flex-wrap gap-2 mb-4", inverted && "justify-end")}>
            {techStack.map((tech) => (
              <Badge key={tech} className="bg-primary-foreground text-primary py-1 text-xs z-10">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {
              github &&
              <Link href={github || "#"} target="_blank"
                rel="noopener noreferrer" className="text-sm underline underline-offset-4 text-foreground/70 hover:text-foreground">
                <SiGithub size={20} />
              </Link>
            }
            {
              liveDemo &&
              <Link href={liveDemo || "#"} target="_blank"
                rel="noopener noreferrer" className="text-sm underline underline-offset-4 text-foreground/70 hover:text-foreground">
                <SquareArrowOutUpRight size={20} />
              </Link>
            }
          </div>
        </div>
        <div className={cn("max-w-md lg:max-w-lg xl:max-w-xl order-2 overflow-hidden relative", inverted && "order-1")}>
          <Image
            src={imageSrc}
            alt="Project Image"
            className={cn("rounded-md object-cover w-full h-110 sm:h-96", objectLeft && "object-left")}
          />
          <div className={cn("absolute inset-0  bg-gradient-to-r from-white/30 dark:from-primary/20 via-primary/10 rounded-md", inverted && " bg-gradient-to-l")}></div>

        </div>
      </div>
    );
  }
}
