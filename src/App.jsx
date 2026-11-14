import {
  Hero,
  Navbar,
  Projects,
  Bio,
  Skills,
  Experience,
  ContactForm,
  Footer,
} from "./components/index";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "./components/SmoothScroll";
import Marquee from "./components/Marquee";
function App() {
  return (
    <div className="relative antialiased container">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Marquee />
        <Projects />
        <Bio />
        <Skills />
        <Experience />
        <ContactForm />
        <Footer />
      </div>

      <SmoothScroll />
      <Toaster />
    </div>
  );
}

export default App;
