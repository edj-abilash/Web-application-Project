import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-cta text-primary-foreground font-bold">S</span>
              <div>
                <div className="font-semibold">Sudhakar's Dental Clinic</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Gajuwaka · Visakhapatnam</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Premium dental care delivered with precision and warmth. Trusted by thousands of families across Vizag.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#testimonials" className="hover:text-primary">Reviews</a></li>
              <li><a href="#book" className="hover:text-primary">Book Appointment</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 flex-none" />Main Rd, Old Gajuwaka, Vizag 530026</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+918019713947">+91 80197 13947</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" />care@sudhakardentalclinic.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Sudhakar's Dental Clinic. All rights reserved.</div>
          <div>Crafted with care in Visakhapatnam.</div>
        </div>
      </div>
    </footer>
  );
}
