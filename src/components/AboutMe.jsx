import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800 px-2.5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">À propos</h2>
        <p className="mb-4">
          Je suis un passionné de développement web et mobile. J’aime concevoir
          des interfaces intuitives, accessibles et performantes. Curieux et
          rigoureux, je suis toujours à la recherche de nouveaux défis pour
          améliorer mes compétences.
        </p>
        <p>
          Mon objectif est de créer des expériences numériques de qualité, que
          ce soit pour des startups, des projets personnels ou des entreprises.
        </p>
      </div>
    </section>
  );
}
