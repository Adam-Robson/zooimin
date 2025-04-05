"use client";

import "@/_components/theme-button.css";
import { useTheme } from "@/_contexts/ThemeProvider";
import { FiMoon,  FiSun } from "react-icons/fi";
const SunIcon = () => (
  <FiSun size={44} />
);

const MoonIcon = () => (
  <FiMoon size={44}/>
);

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-button"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
