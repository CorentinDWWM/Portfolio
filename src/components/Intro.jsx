import React from "react";
import { motion } from "framer-motion";
import AnimatedTitles from "./AnimatedTitles";

export default function Intro() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-20 gap-5 px-2.5"
    >
      <div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
          Bonjour, je m'appelle
        </p>
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Delaforge Corentin
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
          et je suis
        </p>
        <AnimatedTitles />
        <p className="mt-6 text-gray-700 dark:text-gray-400">
          Je conçois des applications modernes, performantes et accessibles.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <motion.a
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Voir mes projets
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Me contacter
        </motion.a>
      </div>
    </section>
  );
}
