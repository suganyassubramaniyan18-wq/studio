import { PageHeader } from '@/components/page-header';
import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Bring a scoop of joy to your next event. We offer a range of services to make any occasion sweeter."
      />
      <div className="container pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="text-center flex flex-col">
              <CardHeader className="items-center">
                <div className="bg-primary/20 p-4 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="outline">
                  <Link href="/contact">Inquire Now</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
