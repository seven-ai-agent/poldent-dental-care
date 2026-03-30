import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Pricing />
      <Reviews />
      <Locations />
      <Footer />
    </main>
  );
}
