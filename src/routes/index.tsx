import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";
import { Doctor } from "@/components/site/Doctor";
import { Testimonials } from "@/components/site/Testimonials";
import { BookingForm } from "@/components/site/BookingForm";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Toaster } from "@/components/ui/sonner";

const TITLE = "Sudhakar's Dental Clinic | Best Dentist in Gajuwaka, Vizag";
const DESCRIPTION =
  "Book appointments online at Sudhakar's Dental Clinic in Gajuwaka. Expert dental care: root canals, implants, teeth cleaning, cosmetic dentistry & more.";

const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Sudhakar's Dental Clinic",
  image: "/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Rd, Old Gajuwaka",
    addressLocality: "Gajuwaka",
    addressRegion: "Andhra Pradesh",
    postalCode: "530026",
    addressCountry: "IN",
  },
  telephone: "+91-8019713947",
  priceRange: "₹₹",
  openingHours: "Mo-Sa 09:00-21:00",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "70" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "dentist in gajuwaka, best dental clinic in visakhapatnam, root canal, dental implants, teeth cleaning, cosmetic dentistry, orthodontics, dental appointment online" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schema) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Doctor />
        <Testimonials />
        <BookingForm />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster richColors position="top-center" />
    </div>
  );
}
