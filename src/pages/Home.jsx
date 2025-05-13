import { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import SkillsSection from "../components/SkillsSection";
import Timeline from "../components/Timeline";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  if (!isReady) return null;

  return (
    <div className="bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white font-sans scroll-smooth">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Intro */}
        <Intro />

        {/* À propos */}
        <AboutMe />

        {/* Parcours */}
        <Timeline />

        {/* Projets */}

        <Projects />

        {/* Compétences */}
        <SkillsSection />

        {/* Contact */}
        <Contact />

        <footer className="py-6 text-center text-sm bg-gray-200 dark:bg-gray-900 dark:border-gray-700 ombre-top">
          © {new Date().getFullYear()} Delaforge Corentin — Tous droits
          réservés.
        </footer>
      </motion.div>
    </div>
  );
}
