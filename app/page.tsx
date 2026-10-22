import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { profile } from "../lib/data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />

      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </main>
  );
}