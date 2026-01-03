"use client";

import React from "react";
import {
  ChevronLeft,
  Github,
  Linkedin,
  SquareArrowOutUpRight,
} from "lucide-react";
import Image from "next/image";
import thelandlord from "../public/thelandlord.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export default function CardProjectV2({ inverted = false }: { inverted?: boolean }) {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  if (isSmallScreen) {
    return (
      <div
        id="project-card-v2"
        className="relative shadow-md rounded-md overflow-hidden"
      >
        <div className="">
          <Image
            src={thelandlord}
            alt="Project Image"
            className="rounded-lg object-cover w-full h-100 sm:h-96 "
          />
        </div>
        <div className="bg-background/80 absolute inset-0"></div>
        <div className="absolute inset-0 self-center p-4 rounded-lg  px-6 sm:px-8 py-8 ">
          <p className="text-xs text-foreground font-medium">Saas Platform</p>
          <h3 className="text-xl font-bold mb-6 sm:mb-8">
            Property Rental Management
          </h3>
          <p className="text-sm mb-6 sm:mb-8 ">
            A comprehensive property management platform that streamlines rental
            processes for landlords and tenants. lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam scelerisque aliquam odio et
            faucibus.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary py-1 text-xs">
              Laravel
            </Badge>
            <Badge className="bg-primary/10 text-primary py-1 text-xs">
              React
            </Badge>
            <Badge className="bg-primary/10 text-primary py-1 text-xs">
              Tailwind CSS
            </Badge>
            <Badge className="bg-primary/10 text-primary py-1 text-xs">
              MySQL
            </Badge>
          </div>
          <div className="flex items-center gap-2 hidden sm:flex">
            <Github size={16} />
            <SquareArrowOutUpRight size={16} />
          </div>
          <div className="sm:hidden">
            <Button
              variant="outline"
              size="sm"
              className="w-fit text-primary border-primary text-xs hover:bg-primary/10"
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div  className="flex items-center">
        <div className={cn("flex flex-col items-start -mr-16 z-10 order-1", inverted && "flex-col items-end -ml-16 -mr-0 order-2")}>
          <div className={cn("mb-6 sm:mb-8", inverted && "text-right")}>
            <p className="text-xs text-foreground font-medium">Saas Platform</p>
            <h3 className="text-xl font-bold ">
              Property Rental Management
            </h3>
          </div>

          <div className="w-full max-w-md bg-background/80 rounded-md shadow-md mb-6 sm:mb-8 ">
            <p className="text-sm p-6">
              A comprehensive property management platform that streamlines
              rental processes for landlords and tenants. lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio
              et faucibus.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary py-1 text-xs">
              Laravel
            </Badge>
            <Badge className="bg-primary/10 text-primary py-1 text-xs">
              React
            </Badge>
            <Badge className="bg-primary/10 text-primary py-1 text-xs">
              Tailwind CSS
            </Badge>
            <Badge className="bg-primary/10 text-primary py-1 text-xs">
              MySQL
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Github size={24} />
            <SquareArrowOutUpRight size={24} />
          </div>
        </div>
        <div className={cn("max-w-md lg:max-w-lg xl:max-w-xl order-2", inverted && "order-1")}>
            <Image
                src={thelandlord}
                alt="Project Image"
                className="rounded-sm object-cover w-full h-110 sm:h-96"
              />
        </div>
      </div>
    );
  }
}
