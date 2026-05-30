import { motion } from "framer-motion";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";
import doctor from "@/assets/doctor.jpg";

export function Doctor() {
  return (
    <section id="about" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-elevated border border-border/50 max-w-md mx-auto">
              <img src={doctor} alt="Dr. Sudhakar — Lead Dentist" width={900} height={1100} loading="lazy" className="w-full" />
            </div>
            <div className="absolute -bottom-4 left-4 sm:left-12 glass rounded-2xl p-4 shadow-glass">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-teal" />
                <div className="text-sm font-semibold">BDS, MDS</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">Meet the Doctor</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              Dr. Sudhakar — <span className="text-gradient">15+ years</span> of expertise
            </h2>
            <p className="mt-5 text-muted-foreground">
              Dr. Sudhakar leads our practice with a passion for precision dentistry and patient comfort.
              Trained in advanced endodontics and implantology, he combines modern technology with a gentle,
              personalised approach for every patient.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Specialist in implants and root canals",
                "Member, Indian Dental Association",
                "Continuous training in modern techniques",
                "Trusted by 12,000+ patients across Vizag",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal flex-none mt-0.5" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="glass rounded-xl p-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <div className="mt-2 text-sm font-semibold">BDS, MDS</div>
                <div className="text-xs text-muted-foreground">Qualified Dental Surgeon</div>
              </div>
              <div className="glass rounded-xl p-4">
                <Award className="h-5 w-5 text-teal" />
                <div className="mt-2 text-sm font-semibold">15+ Years</div>
                <div className="text-xs text-muted-foreground">Clinical Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
