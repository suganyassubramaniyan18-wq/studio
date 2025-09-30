import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero-1");
  const featuredProducts = products.slice(0, 3);
  const aboutImage = placeholderImages.find(p => p.id === "about-us");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter drop-shadow-lg">
            Every Scoop is a Joy
          </h1>
          <p className="max-w-xl md:text-xl text-lg text-primary-foreground/90 drop-shadow-md">
            Handcrafted ice cream made with love, fresh ingredients, and a sprinkle of happiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-transform hover:scale-105">
              <Link href="/flavor-finder">
                Find Your Perfect Flavor <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transition-transform hover:scale-105">
              <Link href="/products">
                Explore Our Menu
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Our Fan Favorites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Us Snippet */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
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
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                Our Sweet Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg mx-auto md:mx-0">
                ScoopJoy was born from a simple passion: to create the most delightful ice cream experiences. We believe in using only the finest ingredients to craft flavors that bring smiles to faces of all ages.
              </p>
              <Button asChild variant="link" className="text-lg">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
