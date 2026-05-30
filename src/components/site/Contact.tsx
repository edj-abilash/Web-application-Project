import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="glass rounded-3xl p-8 shadow-glass">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">Visit Us</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Find us in <span className="text-gradient">Gajuwaka</span>
            </h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground flex-none"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-muted-foreground">Main Rd, Old Gajuwaka, Visakhapatnam, Andhra Pradesh 530026</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground flex-none"><Phone className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:+918019713947" className="text-muted-foreground hover:text-primary">+91 80197 13947</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground flex-none"><Mail className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">care@sudhakardentalclinic.com</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-cta grid place-items-center text-primary-foreground flex-none"><Clock className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Timings</div>
                  <div className="text-muted-foreground">Mon – Sat: 9:00 AM – 9:00 PM<br/>Sunday: By appointment</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-elevated border border-border/50 min-h-[400px]">
            <iframe
              title="Sudhakar's Dental Clinic location"
              src="https://www.google.com/maps?q=Old+Gajuwaka,+Visakhapatnam,+Andhra+Pradesh+530026&output=embed"
              width="100%" height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
