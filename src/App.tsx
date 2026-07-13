import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import PcBuildProject from "./components/PcBuildProject";
import StatelessVaultProject from "./components/StatelessVaultProject";
import SeeHandshakeProject from "./components/SeeHandshakeProject";
import { pcBuild, statelessVault, seeHandshake } from "./data/resume";

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}

export default function App() {
  const hash = useHashRoute();
  const isPcBuild = hash === pcBuild.hash;
  const isStatelessVault = hash === statelessVault.hash;
  const isSeeHandshake = hash === seeHandshake.hash;

  // Scroll to the top when entering a dedicated project page.
  useEffect(() => {
    if (isPcBuild || isStatelessVault || isSeeHandshake) window.scrollTo(0, 0);
  }, [isPcBuild, isStatelessVault, isSeeHandshake]);

  return (
    <>
      <Navbar />
      {isPcBuild ? (
        <main>
          <PcBuildProject />
        </main>
      ) : isStatelessVault ? (
        <main>
          <StatelessVaultProject />
        </main>
      ) : isSeeHandshake ? (
        <main>
          <SeeHandshakeProject />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Skills />
        </main>
      )}
      <Footer />
    </>
  );
}
