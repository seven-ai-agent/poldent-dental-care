import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center font-serif font-bold text-accent text-lg">P</div>
              <div>
                <span className="font-serif text-lg font-semibold">Poldent</span>
                <span className="block text-xs text-white/50 tracking-wider uppercase">Dental Care</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">Comprehensive private dental care in Leeds and Wakefield. Polish-speaking team. Founded 2008, serving 30,000+ patients.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Leeds Clinic</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>Unit 3-4, Dock Green Court, Stanley Rd, Leeds LS9 7BF</span></div>
              <a href="tel:01132491119" className="flex items-center gap-2 hover:text-accent"><Phone className="w-4 h-4" />0113 249 1119</a>
              <a href="mailto:poldentleeds@poldent.co.uk" className="flex items-center gap-2 hover:text-accent"><Mail className="w-4 h-4" />poldentleeds@poldent.co.uk</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Wakefield Clinic</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>6 Rishworth Street, Wakefield WF1 3BY</span></div>
              <a href="tel:07927079307" className="flex items-center gap-2 hover:text-accent"><Phone className="w-4 h-4" />0792 707 9307</a>
              <a href="mailto:poldent@poldent.co.uk" className="flex items-center gap-2 hover:text-accent"><Mail className="w-4 h-4" />poldent@poldent.co.uk</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {["General Dentistry", "Orthodontics", "Dental Implants", "Endodontics", "Cosmetic Dentistry", "Teeth Whitening", "Oral Surgery", "Children's Dentistry"].map(s => (
                <li key={s}><a href="#services" className="hover:text-accent transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Poldent Dental Care. The Poldent Group Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-white/40 text-xs">
            <span>GDC Registered</span>
            <span>CQC Inspected</span>
            <span>0% Finance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
