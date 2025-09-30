import type { Product } from "@/types";
import { Award, Cake, Truck } from "lucide-react";

export const products: Product[] = [
  {
    id: "vanilla-bean",
    name: "Classic Vanilla Bean",
    description: "Creamy and rich, made with real vanilla beans for a timeless flavor.",
    price: 4.50,
    imageId: "product-vanilla"
  },
  {
    id: "dutch-chocolate",
    name: "Decadent Dutch Chocolate",
    description: "A deep, intense chocolate flavor that will satisfy any chocoholic's craving.",
    price: 5.00,
    imageId: "product-chocolate"
  },
  {
    id: "strawberry-bliss",
    name: "Strawberry Bliss",
    description: "Packed with sun-ripened strawberries, a sweet and refreshing classic.",
    price: 4.75,
    imageId: "product-strawberry"
  },
  {
    id: "mint-chip-crush",
    name: "Mint Chip Crush",
    description: "Cool mint ice cream loaded with crunchy dark chocolate chips.",
    price: 5.25,
    imageId: "product-mint"
  },
  {
    id: "pistachio-perfection",
    name: "Pistachio Perfection",
    description: "A nutty and aromatic flavor made with high-quality roasted pistachios.",
    price: 5.50,
    imageId: "product-pistachio"
  },
  {
    id: "coffee-kick",
    name: "Coffee Kick",
    description: "A smooth and energizing ice cream infused with freshly brewed coffee.",
    price: 5.25,
    imageId: "product-coffee"
  },
  {
    id: "ube-dream",
    name: "Ube Dream",
    description: "A unique, sweet, and nutty flavor from the popular purple yam.",
    price: 5.50,
    imageId: "product-ube"
  },
  {
    id: "mango-madness",
    name: "Mango Madness Sorbet",
    description: "A vibrant, dairy-free sorbet bursting with tropical mango flavor.",
    price: 5.00,
    imageId: "product-mango"
  },
];

export const services = [
  {
    id: "catering",
    title: "Event Catering",
    description: "Bring the joy of ScoopJoy to your special events! We offer full-service catering for weddings, corporate events, and parties. Our team will handle everything from setup to scooping.",
    icon: Truck
  },
  {
    id: "parties",
    title: "Birthday Parties",
    description: "Host an unforgettable birthday party at our shop! We provide a fun and festive atmosphere, delicious ice cream, and activities for kids of all ages. Contact us to book your celebration.",
    icon: Cake
  },
  {
    id: "custom",
    title: "Custom Creations",
    description: "Dreaming of a unique ice cream cake or a specific flavor? Our team loves a challenge! We work with you to create custom cakes, pies, and even new flavors for any occasion.",
    icon: Award
  }
];

export const galleryImageIds = [
  "gallery-1", "gallery-2", "gallery-3", "gallery-4", "gallery-5", "gallery-6"
];

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Works', href: '/works' },
  { name: 'Contact Us', href: '/contact' },
];
