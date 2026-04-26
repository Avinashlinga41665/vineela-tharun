"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "events", "venue", "gallery", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] 
    bg-[#FFF8F3]/70 backdrop-blur-md border-b border-[#E5D7C6]">

      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">

<h1
  onClick={() => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="cursor-pointer font-[var(--font-playfair)] text-xl text-[#2C2C2C]"
>
  T & V
</h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`${
                active === sec
                  ? "text-[#D4AF37] font-medium"
                  : "text-gray-600 hover:text-[#D4AF37]"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

     {/* Side Drawer */}
<AnimatePresence>
  {open && (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-[75%] max-w-xs 
        bg-[#FFF8F3] z-50 shadow-xl p-6 flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-[var(--font-playfair)] text-lg">
            Menu
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 text-lg">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setOpen(false)}
              className={`transition ${
                active === sec
                  ? "text-[#D4AF37] font-medium border-l-4 border-[#D4AF37] pl-2"
                  : "text-gray-700"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </nav>
  );
}