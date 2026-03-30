import { Shield, Microscope, Heart, Users, CheckCircle } from "lucide-react";

const values = [
  { icon: Heart, title: "Patient-Centred Care", desc: "We promote proper dental hygiene and encourage preventive techniques to help our patients maintain a healthy smile." },
  { icon: Microscope, title: "State-of-the-Art Equipment", desc: "Our practices use the latest advances in dentistry, including CBCT 3D scanners and SmartOPTIC endodontic microscopes." },
  { icon: Users, title: "Polish-Speaking Team", desc: "Our experienced Polish-speaking clinicians ensure clear communication and a comfortable experience for the whole community." },
  { icon: Shield, title: "Specialist Expertise", desc: "Our team includes specialists in cosmetic dentistry, endodontics, orthodontics and oral surgery — all under one roof." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Poldent</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-dark mt-3 mb-6">Comprehensive Private Dentistry</h2>
          <p className="text-lg text-text-light leading-relaxed">
            Founded in 2008 in Wakefield, Poldent Dental Care has grown to serve over 30,000 patients across two locations in West Yorkshire. We provide personalised dental treatments in a friendly, relaxed atmosphere with a full range of specialist services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map(v => (
            <div key={v.title} className="group bg-warm rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary-light">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <v.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary-dark mb-2">{v.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary-dark rounded-3xl p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h3 className="font-serif text-3xl font-bold text-white mt-3 mb-6">Experience, Professionalism & Trust</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Our dedicated dental professionals provide comprehensive, personalised dental treatments using the latest advances in the field. Continuous professional development through regular training and seminars ensures we stay at the forefront of dental care.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Cosmetic dentistry", "Orthodontics & aligners", "Dental implants", "Root canal treatment", "Oral surgery", "0% finance available"].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white/80 text-sm">{i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block rounded-2xl min-h-[350px] bg-gradient-to-br from-primary/20 via-accent/10 to-primary-dark/30 flex items-center justify-center">
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-10">
                  <div className="text-7xl mb-4">🦷</div>
                  <p className="text-white/60 font-serif text-xl italic">Experience, Professionalism & Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
