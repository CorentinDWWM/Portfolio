import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TITLES = [
  "Développeur Web & Web Mobile",
  "Concepteur d’applications",
  "Développeur Front-End",
  "Développeur Back-End",
];

export default function AnimatedTitles() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState([]);

  useEffect(() => {
    // Découpe et anime le titre
    const current = TITLES[index].split("");
    setDisplayedText(current);

    // Change de titre toutes les 3 secondes
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.h2
      key={index}
      className="text-3xl sm:text-4xl font-bold text-center min-h-[60px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
