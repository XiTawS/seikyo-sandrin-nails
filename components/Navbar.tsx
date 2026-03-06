"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Prestations", href: "#prestations" },
  { label: "Créations", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="font-display text-xl text-[var(--color-text)]">
            Sandr&apos;in Nails
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-rose-dark)] text-xs tracking-[0.15em] uppercase transition-colors duration-300">
                {l.label}
              </a>
            ))}
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-[var(--color-text)]">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-[var(--color-bg)]/98 flex flex-col items-center justify-center gap-10">
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href}
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
                exit={{ opacity: 0 }} onClick={() => setOpen(false)}
                className="font-display text-3xl text-[var(--color-text)]">
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}