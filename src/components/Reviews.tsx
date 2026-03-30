import { Star, Quote } from "lucide-react";

const reviews = [
  { text: "I have been a patient with Poldent in Harehills Leeds for a couple of years. I am a pretty nervous patient but the team are absolutely superb.", author: "tony9L9L", rating: 5 },
  { text: "Lovely dentist. Everything explained step by step. Professional care in a very friendly atmosphere.", author: "Damian Gęga", rating: 5 },
  { text: "Wonderful experience. Staff were incredibly helpful and accommodating.", author: "Monika Duraj", rating: 5 },
  { text: "A very good doctor — everything was done perfectly and gently.", author: "Robierto Cav", rating: 5 },
  { text: "Best dentist. Amazing staff, professional service and very good prices.", author: "Hollice Meade", rating: 5 },
  { text: "Full professionalism. Everything clearly explained and painless treatment.", author: "Pawel Bohdziewicz", rating: 5 },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Patient Reviews</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">What Our Patients Say</h2>
          <p className="text-lg text-text-light">Rated 4.2/5 from 41+ reviews. Real feedback from real patients.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-warm rounded-2xl p-7 hover:shadow-lg transition-all">
              <Quote className="w-8 h-8 text-accent/20 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-text leading-relaxed mb-5 italic text-sm">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="font-serif font-bold text-primary text-sm">{r.author[0]}</span>
                </div>
                <span className="text-sm font-medium text-primary-dark">{r.author}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-gray-100">
          {[
            { label: "GDC Registered", icon: "✓" },
            { label: "CQC Inspected", icon: "🛡️" },
            { label: "68 Birdeye Reviews", icon: "⭐" },
            { label: "0% Finance Available", icon: "💳" },
          ].map(b => (
            <div key={b.label} className="flex items-center gap-2 text-text-light">
              <span className="text-xl">{b.icon}</span>
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
