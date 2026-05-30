import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass shadow-glass" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-cta text-primary-foreground font-bold shadow-glass">
              S
            </span>
            <div className="leading-tight">
              <div className="font-semibold text-foreground">Sudhakar's</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Dental Clinic
              </div>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <a href="tel:+918019713947">
              <Button variant="ghost" size="sm" className="gap-2">
                <Phone className="h-4 w-4" /> Call
              </Button>
            </a>
            <a href="#book">
              <Button size="sm" className="bg-gradient-cta text-primary-foreground hover:opacity-95 shadow-glass">
                Book Appointment
              </Button>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 shadow-glass animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#book" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-gradient-cta text-primary-foreground">
                    Book Appointment
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
