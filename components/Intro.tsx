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
          <div className="fixed inset-0 bg-[#FFF8F3] z-[9998]" />

          {/* GOLD GLOW */}
          <motion.div
            className="fixed inset-0 z-[9999] pointer-events-none"
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(212,175,55,0.25), transparent 60%)",
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
            <h1 className="font-greatVibes text-4xl md:text-7xl text-[#2C2C2C]">
              Tarun
            </h1>

            <p className="text-[#D4AF37] tracking-[0.25em] my-2">
              ✨ Weds ✨
            </p>

            <h1 className="font-greatVibes text-4xl md:text-7xl text-[#2C2C2C] mt-3 mb-2">
              Vineela
            </h1>

            <button
              onClick={handleClick}
              className="px-6 md:px-8 py-3 
              border border-[#D4AF37] text-[#D4AF37] 
              rounded-full 
              hover:bg-[#D4AF37] hover:text-white 
              transition duration-300"
            >
              Open
            </button>
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
    const data = [...Array(6)].map(() => ({
      startX: Math.random() * 300,
      endX: Math.random() * 300,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }));

    setPetals(data);
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-pink-300 rounded-full opacity-70"
          initial={{ y: -50, x: p.startX }}
          animate={{ y: "100vh", x: p.endX }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
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
          className="absolute w-2 h-2 bg-[#D4AF37] rounded-full"
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