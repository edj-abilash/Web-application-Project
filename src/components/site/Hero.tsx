import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Star, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 glow-hero pointer-events-none" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-secondary mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted dental care in Gajuwaka
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground">
              Your Smile Deserves{" "}
              <span className="text-gradient">Expert Care</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Advanced dental treatments with compassionate care. From routine cleanings to dental implants — experience modern dentistry done right.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book">
                <Button size="lg" className="bg-gradient-cta text-primary-foreground hover:opacity-95 shadow-elevated gap-2 h-12 px-6">
                  <Calendar className="h-4 w-4" /> Book Appointment
                </Button>
              </a>
              <a href="tel:+918019713947">
                <Button size="lg" variant="outline" className="gap-2 h-12 px-6 glass border-primary/30">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-teal text-teal" />
                  ))}
                </div>
                <span className="font-medium">4.9 · 70+ Google reviews</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Sterilized & modern equipment
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border/50">
              <img
                src={heroImg}
                alt="Modern interior of Sudhakar's Dental Clinic in Gajuwaka"
                width={1600}
                height={1200}
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-4 sm:left-6 glass rounded-2xl p-4 shadow-glass max-w-[230px]"
            >
              <div className="text-3xl font-bold text-gradient">15+</div>
              <div className="text-xs text-muted-foreground">Years of trusted dental expertise</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 right-2 sm:right-6 glass rounded-2xl px-4 py-3 shadow-glass"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
                <span className="text-xs font-medium">Open today · 9 AM – 9 PM</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
