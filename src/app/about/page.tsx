import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <>
      <PageHeader
        title="Our Sweet Story"
        description="Discover the passion and people behind ScoopJoy."
      />
      <div className="container pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4">From a Dream to a Scoop Shop</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                It all started with a simple, shared dream: to create and share the most delicious, joy-inducing ice cream imaginable. Our founders, lifelong friends and dessert enthusiasts, spent years perfecting their craft in a home kitchen, experimenting with flavors and obsessing over the quality of every single ingredient.
              </p>
              <p>
                At ScoopJoy, we believe that ice cream is more than just a dessert; it's a vehicle for happiness. It's the taste of a carefree childhood summer, the sweet ending to a perfect date, and the comforting treat on a tough day. That's why we pour our hearts into every batch.
              </p>
              <p>
                We source our milk and cream from local dairies, use sun-ripened fruits, and find the richest chocolates. Our mission is to build a community around our love for exceptional ice cream, creating a welcoming space where friends and families can gather, make memories, and enjoy a moment of pure joy.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={500}
                height={500}
                className="rounded-lg shadow-xl object-cover aspect-square"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
