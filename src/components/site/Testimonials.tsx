import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Srinivas Molleti",
    review:
      "Treatment received: Teeth cleaning, root canals and dental implants. The entire experience was smooth and the doctor explained every step clearly. Highly recommended.",
  },
  {
    name: "Pushpa Khulayi",
    review:
      "Excellent service by the doctor and the staff. Felt at ease throughout the visit and the clinic is spotless and modern.",
  },
  {
    name: "Sreenivas N",
    review:
      "My wife underwent damaged tooth replacement and root canal treatment. Very satisfied with the precision and aftercare provided.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-widest">
            Patient Stories
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Loved by patients <span className="text-gradient">across Vizag</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 shadow-glass relative hover:-translate-y-1 transition-transform"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-teal text-teal" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">“{t.review}”</p>
              <div className="mt-5 pt-5 border-t border-border/60 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-cta grid place-items-center text-primary-foreground font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Patient</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
