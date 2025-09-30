import { PageHeader } from "@/components/page-header";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Flavorsssss"
        description="Explore our delightful collection of handcrafted ice creams. Each flavor is made with love and the finest ingredients."
      />
      <div className="container pb-16 md:pb-24">
         <div className="flex justify-center mb-12">
            <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
                <Link href="/flavor-finder">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Can't decide? Let our Flavor Genius help!
                </Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
