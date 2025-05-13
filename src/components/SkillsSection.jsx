import React from "react";
import SkillsCarrousel from "./SkillsCarrousel";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gray-200 dark:bg-gray-900 px-2.5">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Compétences</h2>
        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Voici les technologies que j’utilise régulièrement :
        </p>
        <SkillsCarrousel />
      </div>
    </section>
  );
}
