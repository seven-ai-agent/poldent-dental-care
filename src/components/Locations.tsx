import { MapPin, Phone, Mail, Clock } from "lucide-react";

const clinics = [
  {
    city: "Leeds",
    address: ["Unit 3-4, Dock Green Court", "Stanley Road", "Leeds LS9 7BF"],
    phone: "0113 249 1119",
    email: "poldentleeds@poldent.co.uk",
    hours: [
      { day: "Monday – Friday", time: "9:00 – 17:00" },
      { day: "Saturday", time: "By appointment (hygienist)" },
      { day: "Sunday", time: "Closed" },
    ],
    lunch: "Closed for lunch: 13:00 – 13:30",
    highlight: "CBCT 3D Scanner Available",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356!2d-1.5209!3d53.7967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c7e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sPoldent+Dental+Care!5e0!3m2!1sen!2suk!4v1700000000000",
  },
  {
    city: "Wakefield",
    address: ["6 Rishworth Street", "Wakefield", "WF1 3BY, West Yorkshire"],
    phone: "0792 707 9307",
    email: "poldent@poldent.co.uk",
    hours: [
      { day: "Monday – Sunday", time: "9:00 – 17:00" },
    ],
    lunch: "Closed for lunch: 13:00 – 13:30 (excl. Wednesdays)",
    highlight: "Open 7 Days a Week",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356!2d-1.5009!3d53.6856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487967023fb8fe57%3A0xf80f3352e82069af!2s6+Rishworth+St%2C+Wakefield+WF1+3BY!5e0!3m2!1sen!2suk!4v1700000000000",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-primary-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Locations</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">Visit Us</h2>
          <p className="text-lg text-white/70">Two convenient locations across West Yorkshire. New patient registration is free — book your first visit today.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {clinics.map(c => (
            <div key={c.city} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="h-48">
                <iframe src={c.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title={`Poldent ${c.city}`} />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-2xl font-bold text-white">{c.city}</h3>
                  <span className="bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">{c.highlight}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="text-white/80 text-sm">{c.address.map((l, i) => <span key={i}>{l}<br /></span>)}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                    <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-white/80 text-sm hover:text-accent transition-colors">{c.phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                    <a href={`mailto:${c.email}`} className="text-white/80 text-sm hover:text-accent transition-colors">{c.email}</a>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-white font-semibold text-sm">Opening Hours</span>
                  </div>
                  {c.hours.map(h => (
                    <div key={h.day} className="flex justify-between py-1.5">
                      <span className="text-white/70 text-sm">{h.day}</span>
                      <span className="text-accent text-sm font-medium">{h.time}</span>
                    </div>
                  ))}
                  <p className="text-white/40 text-xs mt-2">{c.lunch}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New patient CTA */}
        <div className="mt-12 text-center">
          <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 max-w-xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-white mb-3">New Patients Welcome</h3>
            <p className="text-white/70 text-sm mb-4">Registration is free. Please bring a valid photo ID (passport, driving licence) to your first appointment. A £50 deposit secures your booking.</p>
            <a href="tel:01132491119" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg">
              <Phone className="w-4 h-4" />Call to Book — 0113 249 1119
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
