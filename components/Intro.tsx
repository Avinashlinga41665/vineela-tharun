"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


export default function Intro({
  show,
  onOpen,
}: {
  show: boolean;
  onOpen: () => void;
}) {
  const handleClick = () => {
    onOpen();
  };

  return (
    
    <AnimatePresence mode="wait" initial={false}>
      
      {show && (
        <>
          {/* BACKGROUND */}
<div className="fixed inset-0 z-[9998]">
  <img
    src="/Wedding1.jpeg"
    alt=""
    className="w-full h-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-black/40" />
</div>

          {/* GOLD GLOW */}
          <motion.div
            className="fixed inset-0 z-[9999] pointer-events-none"
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(212,175,55,0.35), transparent 60%)",
            }}
          />

          {/* GOLD PARTICLES */}
          <Particles />

          {/* PETALS */}
          <Petals />

          {/* ================= DESKTOP PANELS ================= */}
         <div className="hidden md:block">
          
  <motion.div
    className="fixed top-0 left-0 w-1/2 h-full bg-[#FFF8F3] z-[10000]
    shadow-[5px_0_30px_rgba(0,0,0,0.05)]"
    initial={{ x: 0 }}
    exit={{ x: "-100%" }}
    transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1] }}
  />

  <motion.div
    className="fixed top-0 right-0 w-1/2 h-full bg-[#FFF8F3] z-[10000]
    shadow-[-5px_0_30px_rgba(0,0,0,0.05)]"
    initial={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1] }}
  />
</div>

          {/* ================= MOBILE PANELS ================= */}
          <div className="md:hidden">
            <motion.div
              className="fixed top-0 left-0 w-full h-1/2 bg-[#FFF8F3] z-[10000]"
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1] }}
            />

            <motion.div
              className="fixed bottom-0 left-0 w-full h-1/2 bg-[#FFF8F3] z-[10000]"
              initial={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1] }}
            />
          </div>

          {/* ================= CENTER CONTENT ================= */}
         <motion.div
  className="fixed inset-0 z-[10001] flex flex-col items-center justify-center text-center px-6"
  initial={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
>
  <motion.img
    src="/GaneshIcon.png"
    alt="Ganesh"
    className="w-16 md:w-24 mb-6 opacity-90"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  />

  <h1 className="font-greatVibes text-4xl md:text-7xl text-[#2C2C2C]">
    Tharun
  </h1>

  <p className="text-[#D4AF37] tracking-[0.25em] my-2">
    ✨ Weds ✨
  </p>

  <h1 className="font-greatVibes text-4xl md:text-7xl text-[#2C2C2C] mt-3">
    Vineela
  </h1>

  <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500 mt-4 mb-8">
    Wedding Invitation
  </p>

  <motion.button
    onClick={handleClick}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="
      px-8 py-3
      rounded-full
      bg-[#D4AF37]
      text-white
      font-medium
      shadow-lg
      hover:shadow-[#D4AF37]/30
      transition-all duration-300
    "
  >
    Open Invitation
  </motion.button>
</motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ================= PETALS ================= */
function Petals() {
  const [petals, setPetals] = useState<
    { startX: number; endX: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const data = [...Array(8)].map(() => ({
      startX: Math.random() * window.innerWidth,
      endX: Math.random() * window.innerWidth,
      duration: 5 + Math.random() * 3,
      delay: Math.random() * 2,
    }));

    setPetals(data);
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-4 bg-[#D4AF37]/60 rounded-full rotate-45"
          initial={{
            y: -50,
            x: p.startX,
          }}
          animate={{
            y: "110vh",
            x: p.endX,
            rotate: [45, 90, 180, 270],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ================= PARTICLES ================= */
function Particles() {
  const [particles, setParticles] = useState<
    { x: number; y: number }[]
  >([]);

  useEffect(() => {
    const data = [...Array(8)].map(() => ({
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
    }));

    setParticles(data);
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none flex items-center justify-center">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]"
          initial={{ scale: 0, opacity: 1 }}
          exit={{
            scale: 1,
            x: p.x,
            y: p.y,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
}