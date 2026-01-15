"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const base = pathname === "/" ? "" : "/";

  const isActive = (href: string) => {
    if (href.startsWith("#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-slate-200">
          BioProfile
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`${base}${item.href}`}
              className={`transition hover:text-slate-900 dark:hover:text-white ${
                isActive(item.href) ? "text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/academic" className="btn-secondary">
            Academic
          </Link>
          <Link href="/industry" className="btn-primary">
            Industry
          </Link>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={`${base}${item.href}`}
                onClick={() => setOpen(false)}
                className={`transition hover:text-slate-900 dark:hover:text-white ${
                  isActive(item.href) ? "text-primary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/academic" onClick={() => setOpen(false)} className="btn-secondary w-full">
              Academic
            </Link>
            <Link href="/industry" onClick={() => setOpen(false)} className="btn-primary w-full">
              Industry
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
