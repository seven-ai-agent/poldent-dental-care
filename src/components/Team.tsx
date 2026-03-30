const team = [
  { name: "Kamil Moczyński", gdc: "184895", role: "Endodontist", speciality: "Root Canal Treatment", image: "/team/kamil-moczynski.jpg" },
  { name: "Anna Turo", gdc: "", role: "Aesthetic Dentistry", speciality: "Cosmetic Treatments", image: "/team/anna-turo.jpg" },
  { name: "Karolina Maluga-Siek", gdc: "", role: "Oral Surgeon & Implantologist", speciality: "Implants & Oral Surgery", image: "/team/karolina-maluga-siek.jpg" },
  { name: "Marcin Piekara", gdc: "", role: "Orthodontist", speciality: "Braces & Aligners", image: "/team/marcin-piekara.jpg" },
  { name: "Katarzyna Matuszczak", gdc: "275867", role: "General Dentist", speciality: "General Dentistry", image: "/team/katarzyna-matuszczak.png" },
  { name: "Helen Lakomska", gdc: "277945", role: "General Dentist", speciality: "General Dentistry", image: "/team/helen-lakomska.jpg" },
  { name: "Aiman Sinjab", gdc: "107357", role: "General Dentist", speciality: "Cosmetic & Restorative", image: "/team/aiman-sinjab.jpg" },
  { name: "Kristina Eriksone", gdc: "148176", role: "Clinical Dental Technician", speciality: "Dentures & Prosthetics", image: "/team/kristina-eriksone.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">Meet Our Experts</h2>
          <p className="text-lg text-text-light leading-relaxed">Our experienced team of professionals specialise in endodontics, orthodontics, dental surgery, cosmetic dentistry and more.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(m => (
            <div key={m.name} className="group bg-warm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/5] overflow-hidden bg-primary-light">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-primary-dark">{m.name}</h3>
                <p className="text-accent text-sm font-medium mb-1">{m.role}</p>
                <p className="text-text-light text-xs">{m.speciality}</p>
                {m.gdc && <p className="text-text-light/50 text-xs mt-2">GDC: {m.gdc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
