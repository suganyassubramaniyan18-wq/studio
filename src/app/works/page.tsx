import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { galleryImageIds } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images';

export default function WorksPage() {
  const galleryImages = galleryImageIds.map(id => 
    placeholderImages.find(p => p.id === id)
  ).filter(Boolean);

  return (
    <>
      <PageHeader
        title="Our Sweet Creations"
        description="A gallery of our finest work, from custom cakes to delightful sundaes. Get inspired for your next treat!"
      />
      <div className="container pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => image && (
            <div key={index} className="relative aspect-video overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
