import { Toaster } from "react-hot-toast";
import {
  Navbar,
  Hero,
  ProofBar,
  Projects,
  About,
  Experience,
  ContactForm,
  Footer,
} from "./components/index";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Projects />
        <About />
        <Experience />
        <ContactForm />
      </main>
      <Footer />

      <SmoothScroll />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
