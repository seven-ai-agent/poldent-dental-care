"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#pricing", label: "Prices" },
  { href: "#reviews", label: "Reviews" },
  { href: "#locations", label: "Locations" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif font-bold text-lg transition-colors ${scrolled ? "bg-primary text-white" : "bg-white/20 backdrop-blur-sm text-white"}`}>P</div>
          <div>
            <span className={`font-serif text-xl font-semibold ${scrolled ? "text-primary-dark" : "text-white"}`}>Poldent</span>
            <span className={`block text-xs tracking-wider uppercase ${scrolled ? "text-text-light" : "text-white/70"}`}>Dental Care</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map(l => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors ${scrolled ? "text-text hover:text-primary" : "text-white/90 hover:text-white"}`}>{l.label}</a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:01132491119" className={`flex items-center gap-2 text-sm font-medium ${scrolled ? "text-primary" : "text-white"}`}>
            <Phone className="w-4 h-4" />0113 249 1119
          </a>
          <a href="#locations" className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg">Book Now</a>
        </div>

        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-primary-dark" : "text-white"}`}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            {nav.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-text hover:text-primary hover:bg-primary-light rounded-lg font-medium">{l.label}</a>
            ))}
            <div className="pt-4 border-t mt-4 space-y-3">
              <a href="tel:01132491119" className="flex items-center gap-2 px-4 py-3 text-primary font-medium"><Phone className="w-4 h-4" />0113 249 1119</a>
              <a href="#locations" onClick={() => setOpen(false)} className="block text-center bg-accent text-white px-5 py-3 rounded-full font-semibold">Book Now</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
