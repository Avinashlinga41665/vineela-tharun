"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "gallery", "events", "venue", "contact"];

export default function Navbar() {
const [active, setActive] = useState("home");
const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const observers: IntersectionObserver[] = [];

sections.forEach((id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setActive(id);
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(el);
  observers.push(observer);
});

return () => observers.forEach((obs) => obs.disconnect());

}, []);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 20);
};

window.addEventListener("scroll", handleScroll);

return () =>
  window.removeEventListener("scroll", handleScroll);

}, []);

return (
<nav
className={`
fixed
top-0
left-0
w-full
z-[999]
backdrop-blur-md
border-b
border-[#E5D7C6]
transition-all
duration-300

    ${
      scrolled
        ? "bg-[#FFF8F3]/90 shadow-lg"
        : "bg-[#FFF8F3]/70"
    }
  `}
>
  {/* Gold Glow */}
  <div
    className="
      absolute
      left-1/2
      top-0
      -translate-x-1/2
      w-96
      h-24
      bg-[#D4AF37]/5
      blur-3xl
      pointer-events-none
    "
  />

  {/* Container */}
  <div className="container-custom flex justify-between items-center py-3 relative z-10">

    {/* Logo */}
    <h1
      onClick={() => {
        document.getElementById("home")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="
        cursor-pointer
        font-cormorant
        text-xl
        md:text-2xl
        text-primary
        tracking-widest
        ml-4
      "
    >
      <span className="hidden md:inline">
        Tharun{" "}
        <span className="text-[#D4AF37]">&</span>{" "}
        Vineela
      </span>

      <span className="md:hidden">
        T <span className="text-[#D4AF37]">&</span> V
      </span>
    </h1>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-8 text-sm">

      {sections.map((sec) => (
        <a
          key={sec}
          href={`#${sec}`}
          className={`
            relative
            group
            transition-all

            ${
              active === sec
                ? "text-[#D4AF37]"
                : "text-muted hover:text-[#D4AF37]"
            }
          `}
        >
          {sec.charAt(0).toUpperCase() + sec.slice(1)}

          <span
            className={`
              absolute
              left-0
              -bottom-1
              h-[2px]
              bg-[#D4AF37]
              transition-all
              duration-300

              ${
                active === sec
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }
            `}
          />
        </a>
      ))}
    </div>

    {/* Mobile Button */}
    <button
      className="
        md:hidden
        text-2xl
        text-primary
        mr-4
      "
      onClick={() => setOpen(true)}
    >
      ☰
    </button>
  </div>

  {/* Mobile Drawer */}
  <AnimatePresence>
    {open && (
      <>
        {/* Overlay */}
        <motion.div
          className="
            fixed
            inset-0
            bg-black/40
            backdrop-blur-sm
            z-40
          "
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
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          className="
            fixed
            top-0
            right-0
            h-screen
            w-[75%]
            max-w-xs
            bg-[#FFF8F3]
            z-50
            shadow-xl
            p-6
            flex
            flex-col
          "
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-10">

            <h2 className="font-cormorant text-2xl text-primary">
              Menu
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="text-xl text-primary"
            >
              ✕
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col gap-6">

            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setOpen(false)}
                className={`
                  text-lg
                  transition-all

                  ${
                    active === sec
                      ? "text-[#D4AF37] border-l-4 border-[#D4AF37] pl-3 font-medium"
                      : "text-muted pl-4"
                  }
                `}
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
