import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Where is Sudhakar's Dental Clinic located?", a: "We're on Main Road, Old Gajuwaka, Visakhapatnam, Andhra Pradesh 530026." },
  { q: "What are your timings?", a: "We're open Monday to Saturday, 9:00 AM – 9:00 PM. Sunday by appointment only." },
  { q: "Do you offer painless treatments?", a: "Yes. We use modern anesthesia and minimally invasive techniques to make every procedure as comfortable as possible." },
  { q: "Do you accept walk-ins?", a: "We do — but we strongly recommend booking online or via WhatsApp to skip the wait." },
  { q: "What does a dental implant cost?", a: "Implant pricing varies based on the case. Book a consultation for a transparent treatment plan and quote." },
];

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest">FAQ</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Questions, <span className="text-gradient">answered</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass rounded-2xl px-5 border-0 shadow-glass">
              <AccordionTrigger className="text-left hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
