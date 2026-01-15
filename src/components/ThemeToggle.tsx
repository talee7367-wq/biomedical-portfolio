"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-white"
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
