"use client";

import { motion } from "framer-motion";
import Countdown from "@/components/Countdown";

export default function Hero() {
  return (
    <section
      id="home"
      className="section relative flex items-center justify-center min-h-[90vh]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#FFF8F3]" />

      {/* Soft Glow (matches intro vibe) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        className="container-custom relative z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* 🪔 Ganesh with subtle animation */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/GaneshIcon.png"
            alt="Ganesh"
            className="mx-auto object-contain opacity-90 w-16 md:w-20"
          />
        </motion.div>

        {/* Invite Text */}
        <p className="uppercase tracking-[0.3em] text-xs text-muted mb-4">
          You’re Invited
        </p>

        {/* ✨ Names (animated) */}
        <motion.h1
          className="text-5xl md:text-7xl leading-[1.2] mb-6 text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="font-greatVibes">
            Tharun
          </span>

          <span className="font-cormorant text-accent text-3xl md:text-4xl mx-3">
            &
          </span>

          <span className="font-greatVibes">
            Vineela
          </span>
        </motion.h1>

        {/* Gold Divider */}
        <div className="w-16 h-[1.5px] bg-[#D4AF37] mb-6" />

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#6B7280] max-w-lg leading-relaxed mb-5">
          Together with love, we invite you to celebrate our wedding
        </p>

        {/* Date */}
        <p className="text-lg md:text-xl font-medium text-[#1F2937]">
          August 23, 2026
        </p>

        {/* Location */}
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Hyderabad
        </p>

        {/* Countdown (boxed = premium feel) */}
        <div className="mb-6 px-6 py-4 rounded-xl border border-[#E5D7C6] bg-white/70 backdrop-blur-sm">
          <Countdown />
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-500 italic tracking-wide">
          ✨ Save the date and celebrate with us 💫
        </p>

      </motion.div>
    </section>
  );
}