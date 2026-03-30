"use client";
import { useState } from "react";

const categories = [
  {
    name: "General",
    items: [
      { treatment: "New Patient Registration", price: "FREE" },
      { treatment: "New Patient Examination (incl. 2 bitewings)", price: "£65" },
      { treatment: "Regular Examination / Check-Up (incl. 2 bitewings)", price: "£55" },
      { treatment: "Dental Consultation", price: "£55" },
      { treatment: "Consultation + Treatment Plan", price: "£75" },
      { treatment: "Exam + Treatment Plan + OPG", price: "£99" },
      { treatment: "Local Anaesthesia", price: "FREE" },
      { treatment: "Digital X-Ray (single)", price: "£15" },
      { treatment: "Panoramic X-Ray (OPG)", price: "£55" },
      { treatment: "Toothache Relief", price: "£55–£130" },
      { treatment: "Nightguard", price: "£130" },
    ],
  },
  {
    name: "Hygiene",
    items: [
      { treatment: "Scaling & Polishing", price: "£80/session" },
      { treatment: "Air Polishing", price: "£80/session" },
      { treatment: "Professional Cleaning (scaling + air polish + instruction)", price: "£90–£115" },
      { treatment: "Advanced Periodontal Cleaning (with anaesthetic)", price: "£110–£135" },
    ],
  },
  {
    name: "Cosmetic",
    items: [
      { treatment: "Temporary White Filling", price: "from £45" },
      { treatment: "Cosmetic White Filling", price: "£130–£215" },
      { treatment: "Composite & Fiber Post Restoration", price: "£175–£210" },
      { treatment: "BlancOne Click Whitening (NEW)", price: "£105" },
      { treatment: "BlancOne Touch Whitening (NEW)", price: "£350" },
      { treatment: "Home Whitening Kit", price: "£280" },
      { treatment: "Composite Veneer (per tooth)", price: "£230–£290" },
      { treatment: "Porcelain/Ceramic Veneer (per tooth)", price: "from £530" },
    ],
  },
  {
    name: "Endodontics",
    items: [
      { treatment: "Root Canal Extirpation", price: "£130" },
      { treatment: "Root Canal Treatment (specialist)", price: "£425–£515" },
      { treatment: "Root Canal Through Crown/Bridge", price: "£495–£575" },
      { treatment: "Re-Root Canal Treatment", price: "£550–£645" },
    ],
  },
  {
    name: "Surgery",
    items: [
      { treatment: "Surgeon Consultation", price: "£65" },
      { treatment: "Tooth Extraction (incisor)", price: "£115" },
      { treatment: "Tooth Extraction (premolar/molar)", price: "£130–£180" },
      { treatment: "Surgical Extraction", price: "from £195" },
      { treatment: "Wisdom Tooth Extraction", price: "£295–£420" },
      { treatment: "Apicectomy (root end surgery)", price: "from £380" },
    ],
  },
  {
    name: "Prosthetics",
    items: [
      { treatment: "Metal-Porcelain Crown/Bridge (each)", price: "from £530" },
      { treatment: "Zirconium Crown/Bridge (each)", price: "from £640" },
      { treatment: "Inlay/Onlay", price: "from £530" },
      { treatment: "Acrylic Denture", price: "from £750" },
      { treatment: "Valplast Flexible Denture", price: "from £850" },
      { treatment: "Chrome-Cobalt Denture", price: "from £980" },
    ],
  },
  {
    name: "Children",
    items: [
      { treatment: "Fluoride Varnish", price: "£35" },
      { treatment: "Fissure Sealant", price: "£45" },
      { treatment: "Filling in Milk Tooth", price: "£75" },
      { treatment: "Extraction of Milk Tooth", price: "£65–£85" },
    ],
  },
];

export default function Pricing() {
  const [active, setActive] = useState(0);

  return (
    <section id="pricing" className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Prices</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">Transparent Pricing</h2>
          <p className="text-lg text-text-light leading-relaxed">Clear, upfront pricing with no hidden fees. 0% finance available for treatments.</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button key={cat.name} onClick={() => setActive(i)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === i ? "bg-primary text-white shadow-lg" : "bg-white text-text hover:bg-primary-light border border-gray-200"}`}>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Price table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-3xl mx-auto">
          <div className="px-6 py-4 bg-primary-dark flex justify-between">
            <span className="text-white font-semibold text-sm">Treatment</span>
            <span className="text-white font-semibold text-sm">Price</span>
          </div>
          <div className="divide-y divide-gray-50">
            {categories[active].items.map((item, i) => (
              <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-warm transition-colors">
                <span className="text-text text-sm pr-4">{item.treatment}</span>
                <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-text-light text-sm">A deposit of £50 is required for appointments. £100 for appointments of 1 hour or longer.</p>
          <p className="text-text-light text-sm">Please provide 48 hours notice for cancellations.</p>
          <p className="text-xs text-text-light/60">Prices last updated 31.10.2025 — fees updating from 1 April 2026</p>
        </div>
      </div>
    </section>
  );
}
