import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Github,
  Linkedin,
  SquareArrowOutUpRight,
} from "lucide-react";
import Image from "next/image";
import thelandlord from "../../public/thelandlord.png";
import Link from "next/link";
import CardProjectV2 from "@/components/card-project-v2";

export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background ">
      {/* lg:py-32 lg:px-16 */}
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-start px-8 py-16  ">
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary">

            <ChevronLeft size={16} />
            <p>Aziz Ktata</p>
            </Link>
          </div>
          <h2 className="text-4xl font-bold">All Projects</h2>
        </div>
        <div className="flex flex-col gap-12  mx-auto">
          
          <CardProjectV2 />
          <CardProjectV2 inverted={true} />
        </div>
      </main>
    </div>
  );
}
