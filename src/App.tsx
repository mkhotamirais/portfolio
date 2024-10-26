import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import AboutContact from "./sections/AboutContact";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <Hero />
        <Experience />
        <Skills />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}
