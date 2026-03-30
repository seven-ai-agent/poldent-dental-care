import { Phone, Calendar, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="absolute top-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">Polish-Speaking Dentists in Leeds & Wakefield</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Affordable <span className="text-accent">Dentistry</span> You Can Trust
          </h1>

          <p className="text-xl text-white/80 leading-relaxed mb-6 max-w-2xl">
            Poldent Dental Care provides comprehensive private dental care in Leeds and Wakefield. Experienced professionals, state-of-the-art equipment, and a friendly Polish-speaking team.
          </p>

          {/* Special offer */}
          <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-2xl px-6 py-4 mb-10 max-w-lg">
            <p className="text-accent font-bold text-lg">Dental Examination — £30 <span className="text-white/60 text-sm font-normal">(Leeds only)</span></p>
            <p className="text-white/70 text-sm">50% off for new and existing patients at our Leeds clinic</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#locations" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5">
              <Calendar className="w-5 h-5" />Book an Appointment
            </a>
            <a href="tel:01132491119" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium transition-all">
              <Phone className="w-5 h-5" />0113 249 1119
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { n: "30,000", s: "+", l: "Patients Served" },
              { n: "8", s: "+", l: "Expert Clinicians" },
              { n: "2", s: "", l: "Clinic Locations" },
              { n: "18", s: "yrs", l: "Since 2008" },
            ].map(s => (
              <div key={s.l} className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white">{s.n}<span className="text-accent">{s.s}</span></div>
                <div className="text-white/60 text-sm mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
