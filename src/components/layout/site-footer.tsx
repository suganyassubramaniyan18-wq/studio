import Link from "next/link";
import { IceCream, Twitter, Instagram, Facebook } from "lucide-react";
import { navLinks } from "@/lib/data";

export function SiteFooter() {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <IceCream className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">ScoopJoy</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Handcrafted ice cream made with love and the finest ingredients.
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>123 Sweet Street</li>
                <li>Flavor Town, FT 54321</li>
                <li>(123) 456-7890</li>
                <li>hello@scoopjoy.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} aria-label={social.name} className="text-muted-foreground hover:text-foreground transition-colors">
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ScoopJoy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
