import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
