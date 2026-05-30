import { motion } from "framer-motion";
import {
  Stethoscope,
  Smile,
  Sparkles,
  Baby,
  Scissors,
  Activity,
  Wrench,
  HeartPulse,
} from "lucide-react";

const services = [
  { icon: Activity, title: "Root Canal Treatment", desc: "Painless, precise endodontic care to save your natural tooth." },
  { icon: Wrench, title: "Dental Implants", desc: "Permanent tooth replacement with titanium implants." },
  { icon: Sparkles, title: "Teeth Cleaning", desc: "Professional scaling & polishing for a fresh, healthy smile." },
  { icon: Smile, title: "Tooth Replacement", desc: "Bridges, crowns and dentures restored to perfection." },
  { icon: Stethoscope, title: "Braces & Aligners", desc: "Modern orthodontics including clear aligners." },
  { icon: HeartPulse, title: "Cosmetic Dentistry", desc: "Veneers, whitening and smile makeovers." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle, friendly dental care for children." },
  { icon: Scissors, title: "Dental Surgery", desc: "Safe extractions and oral surgical procedures." },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest">
            Our Services
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Comprehensive dental care, <span className="text-gradient">all under one roof</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From preventive checkups to advanced implants, every treatment is delivered with precision and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative glass rounded-2xl p-6 shadow-glass hover:-translate-y-1 hover:shadow-elevated transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground shadow-glass mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
