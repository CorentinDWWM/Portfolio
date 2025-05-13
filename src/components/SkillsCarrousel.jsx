import { motion } from "framer-motion";
import skills from "../data/skills.json";

export default function SkillsCarrousel() {
  // Duplique les items pour créer une boucle fluide
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="overflow-hidden w-full bg-gray-100 dark:bg-gray-800 py-10">
      <motion.div
        className="flex gap-12 min-w-fit"
        animate={{
          x: ["0%", "-50%"], // Déplace de 0% à -50% (moitié des éléments)
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // Durée de l'animation
            ease: "linear", // Mouvement fluide
          },
        }}
        style={{ display: "flex", width: "200%" }} // Double la largeur pour contenir les éléments dupliqués
      >
        {duplicatedSkills.map((tech, i) => (
          <div key={i} className="min-w-[120px] flex flex-col items-center">
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-16 h-16 object-contain"
            />
            <span className="mt-2 text-gray-700 dark:text-gray-200 text-sm">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
