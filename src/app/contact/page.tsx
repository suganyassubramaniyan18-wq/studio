import { PageHeader } from '@/components/page-header';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: MapPin,
      text: '123 Sweet Street, Flavor Town, FT 54321',
    },
    {
      icon: Phone,
      text: '(123) 456-7890',
    },
    {
      icon: Mail,
      text: 'hello@scoopjoy.com',
    },
  ];

  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="We'd love to hear from you! Send us a message for inquiries, feedback, or just to say hello."
      />
      <div className="container pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold font-headline mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold font-headline mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <detail.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg text-muted-foreground">{detail.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-bold font-headline mb-4">Shop Hours</h3>
                <ul className="text-muted-foreground space-y-2">
                    <li><span className="font-semibold text-foreground">Monday - Friday:</span> 12pm - 9pm</li>
                    <li><span className="font-semibold text-foreground">Saturday - Sunday:</span> 11am - 10pm</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
