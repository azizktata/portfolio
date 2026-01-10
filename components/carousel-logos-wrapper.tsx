'use client';

import dynamic from 'next/dynamic';

const CarouselLogos = dynamic(
  () => import('./carousel-logos'),
  { ssr: false }
);

export default function CarouselLogosClient() {
  return <CarouselLogos />;
}
