import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Root Canal Treatment",
  "Dental Implants",
  "Teeth Cleaning",
  "Tooth Replacement",
  "Braces & Aligners",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
  "Dental Surgery",
  "General Consultation",
];

const slots = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
];

const CLINIC_WHATSAPP = "918019713947";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", service: "", date: "", time: "", notes: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const msg = `Hi, I'd like to book an appointment at Sudhakar's Dental Clinic.%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service}%0A*Date:* ${form.date}%0A*Time:* ${form.time}%0A*Notes:* ${form.notes || "-"}`;
    window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${msg}`, "_blank");
    setSubmitted(true);
    toast.success("Appointment request sent! We'll confirm shortly.");
  };

  return (
    <section id="book" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[60rem] bg-primary/10 blur-3xl rounded-full" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">Book a Visit</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              Schedule your <span className="text-gradient">appointment</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Pick a date and time that works for you. We'll confirm your appointment via WhatsApp within minutes.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-teal" /> Mon – Sat · 9:00 AM – 9:00 PM</li>
              <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-teal" /> Instant WhatsApp confirmation</li>
              <li className="flex items-center gap-3"><Calendar className="h-4 w-4 text-teal" /> Reschedule anytime, no charges</li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 shadow-elevated space-y-5"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto h-14 w-14 rounded-full bg-teal/15 grid place-items-center">
                  <CheckCircle2 className="h-7 w-7 text-teal" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Request sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We've opened WhatsApp to confirm your booking. Our team will reach out shortly.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
                  Book another
                </Button>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full name *</Label>
                    <Input id="name" required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" required type="tel" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210" className="mt-1.5" />
                  </div>
                </div>

                <div>
                  <Label>Service *</Label>
                  <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select a treatment" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred date *</Label>
                    <Input id="date" required type="date" value={form.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setForm({ ...form, date: e.target.value })} className="mt-1.5" />
                  </div>
                  <div>
                    <Label>Preferred time *</Label>
                    <Select value={form.time} onValueChange={(v) => setForm({ ...form, time: v })}>
                      <SelectTrigger className="mt-1.5"><SelectValue placeholder="Pick a slot" /></SelectTrigger>
                      <SelectContent>
                        {slots.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Notes (optional)</Label>
                  <Textarea id="notes" rows={3} value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Anything we should know?" className="mt-1.5" />
                </div>

                <Button type="submit" size="lg" className="w-full h-12 bg-gradient-cta text-primary-foreground shadow-elevated gap-2">
                  <MessageCircle className="h-4 w-4" /> Confirm via WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By booking you agree to be contacted by the clinic on the provided number.
                </p>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
