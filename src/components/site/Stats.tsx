import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.8, ease: "easeOut" });
  }, [inView, mv, to]);
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 15, suffix: "+", label: "Years of Practice" },
  { value: 12000, suffix: "+", label: "Happy Patients" },
  { value: 70, suffix: "+", label: "Google Reviews" },
  { value: 25, suffix: "+", label: "Treatments Offered" },
];

export function Stats() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 md:p-12 shadow-elevated relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-primary-foreground/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
