import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ModeContext } from "../context/ModeContext";
import links from "../data/links.json";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const { theme, toggleTheme } = useContext(ModeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-black dark:text-white">
          Delaforge Corentin
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:underline text-black dark:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-center">
          <button onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === "light" ? (
              <Sun className="w-5 h-5 text-black dark:text-white mr-2" />
            ) : (
              <Moon className="w-5 h-5 text-black dark:text-white mr-2" />
            )}
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-white"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2 text-sm">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="block py-2 border-b border-gray-200 dark:border-gray-700 hover:underline text-black dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
