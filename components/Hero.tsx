"use client";

import { motion } from "framer-motion";
import Countdown from "@/components/Countdown";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('Wedding1.jpeg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gold Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
            initial={{
              y: "100vh",
              x: `${Math.random() * 100}vw`,
              opacity: 0,
            }}
            animate={{
              y: "-20vh",
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        {/* Invite */}
        <p className="uppercase tracking-[0.4em] text-white/80 text-xs mb-6">
          You're Invited
        </p>

        {/* Names */}
        <motion.h1
          className="text-white leading-none mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="block font-greatVibes text-7xl md:text-[8rem] lg:text-[9rem]">
            Tharun
          </span>

          <span className="block text-[#D4AF37] text-4xl md:text-5xl my-2">
            &
          </span>

          <span className="block font-greatVibes text-7xl md:text-[8rem] lg:text-[9rem]">
            Vineela
          </span>
        </motion.h1>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mb-8" />

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
          Together with our families, we invite you to celebrate the beginning of our forever.
        </p>

        {/* Date */}
        <p className="text-2xl md:text-3xl text-white font-medium">
          August 23, 2026
        </p>

        <p className="text-white/80 mb-8 mt-2">
          Hyderabad, Telangana
        </p>



        {/* Venue */}
        <div className="mb-8">
          <p className="text-white text-lg mb-4">
            📍 Madhura Banquet Halls, Nagole
          </p>

          <div className="flex justify-center mt-4 mb-10">
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        href="https://maps.app.goo.gl/wVNKwY4hwWzZthfB7"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-8
          py-3
          rounded-full
          bg-[#D4AF37]
          text-black
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-300
        "
      >
          Open Maps
      </motion.a>
    </div>
        </div>
        {/* Countdown */}
        <div className="inline-block mb-8 rounded-2xl border border-[#D4AF37]/30 bg-white/10 backdrop-blur-md px-8 py-5">
          <Countdown />
        </div>
        {/* Tagline */}
        <p className="text-white/80 italic tracking-wide">
          ✨ Save the Date & Celebrate With Us ✨
        </p>
      </motion.div>
    </section>
  );
}