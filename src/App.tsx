import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import AboutContact from "./sections/AboutContact";
import AboutMe from "./sections/AboutMe";
import NavBottom from "./sections/NavBottom";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen *:font-montserrat">
      <Header />
      <main className="grow">
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <AboutContact />
      </main>
      <Footer />
      <NavBottom />
    </div>
  );
}
