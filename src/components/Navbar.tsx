"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Facebook, Sun, Moon } from "lucide-react";
import { personalData } from "@/constants/data";

import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-4 shadow-lg !border-none !border-0" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO: SVG Integration */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          {/* SVG Icon part */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-10 h-10 md:w-11 md:h-11">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" /> {/* Cyan/Blue */}
                <stop offset="100%" stopColor="#A855F7" /> {/* Purple */}
              </linearGradient>
            </defs>
            <g stroke="url(#logoGrad)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* "M" Component */}
              <path d="M 40,150 L 40,60 L 85,110 L 130,60" />
              {/* "H" Component */}
              <path d="M 130,60 L 130,150 M 130,105 L 170,105 M 170,60 L 170,150" />
            </g>
            {/* Minimal Code Tag Accents (< > Code Aesthetic) */}
            <path d="M 25,115 L 10,100 L 25,85" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 175,85 L 190,100 L 175,115" stroke="#A855F7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* Logo Name Typography */}
          <div className="flex flex-col justify-center select-none">
            <span className="text-lg md:text-xl font-black tracking-wider dark:text-white transition-colors uppercase font-sans">
              Mehedi <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hasan</span>
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-slate-300 dark:text-slate-400 uppercase -mt-1">
              Full Stack Dev
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            {dark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-slate-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-blue-500"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a href={personalData.socials.github} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400">
                  <Github size={24} />
                </a>
                <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400">
                  <Linkedin size={24} />
                </a>
                <a href={personalData.socials.facebook} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}