'use client';

import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';

const CardProjectV2 = dynamic(
    () => import('./card-project-v2'),
    { ssr: false }
);

export default function CardProjectV2Client({
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
    return <CardProjectV2
        inverted={inverted}
        subtitle={subtitle}
        title={title}
        description={description}
        imageSrc={imageSrc}
        techStack={techStack}
        github={github}
        liveDemo={liveDemo}
        objectLeft={objectLeft}
    />;
}
