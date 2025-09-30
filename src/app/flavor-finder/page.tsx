import { PageHeader } from '@/components/page-header';
import { FlavorFinder } from '@/components/flavor-finder';
import { placeholderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function FlavorFinderPage() {
  const bgImage = placeholderImages.find(p => p.id === 'flavor-finder-bg');

  return (
    <div className="relative">
       {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover opacity-20"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="relative z-10">
        <PageHeader
          title="Flavor Genius"
          description="Tell us what you like, and our AI-powered Flavor Genius will recommend the perfect scoop of joy just for you!"
        />
        <div className="container pb-16 md:pb-24">
          <FlavorFinder />
        </div>
      </div>
    </div>
  );
}
