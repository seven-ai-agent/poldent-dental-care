import { Stethoscope, Sparkles, Crown, SmilePlus, Syringe, Scissors, Droplets, ShieldCheck, Baby, Wrench } from "lucide-react";

const treatments = [
  { icon: Stethoscope, title: "General Dentistry", desc: "Comprehensive examinations, check-ups, fillings, extractions and preventive care for the whole family.", featured: false },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Veneers, composite bonding, crowns and bridges to enhance the look of your teeth with natural-looking results.", featured: true },
  { icon: Syringe, title: "Endodontics", desc: "Specialist root canal treatment using SmartOPTIC microscope and nickel-titanium rotary files for precise outcomes.", featured: true },
  { icon: Scissors, title: "Orthodontics", desc: "Damon self-ligating braces, fixed appliances, removable appliances and clear aligners for straighter teeth.", featured: true },
  { icon: SmilePlus, title: "Dental Implants", desc: "Titanium implants placed by our specialist oral surgeon, supporting single teeth, bridges or dentures.", featured: true },
  { icon: Droplets, title: "Teeth Whitening", desc: "BlancOne Click (15 min, from £105), BlancOne Touch and home whitening kits for a brighter smile.", featured: false },
  { icon: Crown, title: "Crowns & Prosthetics", desc: "Metal-porcelain and zirconium crowns, bridgework, acrylic, Valplast and chrome-cobalt dentures.", featured: false },
  { icon: Wrench, title: "Oral Surgery", desc: "Surgical extractions, wisdom teeth removal, frenectomy, fibroma removal and apicectomy procedures.", featured: false },
  { icon: ShieldCheck, title: "Hygiene & Prevention", desc: "Scaling, air polishing, professional cleaning and advanced periodontal treatment to protect your gums.", featured: false },
  { icon: Baby, title: "Children's Dentistry", desc: "Fluoride varnish, fissure sealants, fillings and gentle extractions for milk teeth — building healthy habits early.", featured: false },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">Complete Dental Care</h2>
          <p className="text-lg text-text-light leading-relaxed">From routine check-ups to advanced specialist treatments, everything you need under one roof at both our Leeds and Wakefield clinics.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map(t => (
            <div key={t.title} className={`group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${t.featured ? "ring-2 ring-accent/30" : "border border-gray-100"}`}>
              {t.featured && <div className="absolute -top-3 right-6 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">Specialist</div>}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${t.featured ? "bg-accent/10 text-accent" : "bg-primary-light text-primary"} group-hover:bg-primary group-hover:text-white`}>
                <t.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary-dark mb-3">{t.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#pricing" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">View full price list →</a>
        </div>
      </div>
    </section>
  );
}
