import React from "react";
import { motion } from "framer-motion";
import siteData from "../data/site.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 dark:bg-gray-800 px-2.5"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projets</h2>
        <p className="text-xl mb-5 text-center">
          Voici quelques exemples de mes projets parmi ceux qui sont sur GitHub
          et déployer.
        </p>
        <a
          href="https://github.com/CorentinDWWM"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mb-4 text-indigo-600 hover:underline dark:text-indigo-300"
        >
          Voir mon GitHub complet
        </a>
        <div className="grid gap-6 md:grid-cols-3">
          {siteData.map((p, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg"
              key={i}
            >
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="mb-4 text-sm">{p.description}</p>
              <div className="mb-4 text-xs text-indigo-600 dark:text-indigo-300">
                {p.tech.join(" · ")}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={p.github}
                  className="text-indigo-600 dark:text-indigo-300 hover:underline cursor-pointer"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={p.deploy}
                  className="text-gray-600 dark:text-gray-300 hover:underline cursor-pointer"
                  target="_blank"
                >
                  Site déployé
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
