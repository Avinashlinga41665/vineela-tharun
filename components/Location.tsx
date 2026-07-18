"use client";

import { motion } from "framer-motion";
import Countdown from "@/components/Countdown";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#faf6ef]"
    >
      {/* ============================= */}
      {/* Background Paper Texture */}
      {/* ============================= */}

      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('/paper-texture.jpg')",
        }}
      />

      {/* Watercolor Overlay */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at top,#fff8ef 0%,#f8efe1 45%,#f2e5d1 100%)",
        }}
      />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      {/* Top Left Floral */}
      <img
        src="/floral-top-left.png"
        alt=""
        className="absolute left-0 top-0 w-40 md:w-64 opacity-40 pointer-events-none select-none"
      />

      {/* Top Right Floral */}
      <img
        src="/floral-top-right.png"
        alt=""
        className="absolute right-0 top-0 w-40 md:w-64 opacity-40 pointer-events-none select-none scale-x-[-1]"
      />

      {/* Bottom Left Floral */}
      <img
        src="/floral-bottom-left.png"
        alt=""
        className="absolute bottom-0 left-0 w-44 md:w-72 opacity-40 pointer-events-none select-none"
      />

      {/* Bottom Right Floral */}
      <img
        src="/floral-bottom-right.png"
        alt=""
        className="absolute bottom-0 right-0 w-44 md:w-72 opacity-40 pointer-events-none select-none scale-x-[-1]"
      />

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#D4AF37]/70"
            initial={{
              opacity: 0,
              y: "100vh",
              x: `${Math.random() * 100}vw`,
            }}
            animate={{
              y: "-20vh",
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 14 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear",
            }}
          />
        ))}
      </div>      {/* ===================================== */}
      {/* Couple Sketches */}
      {/* ===================================== */}

      <motion.img
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.18, x: 0 }}
        transition={{ duration: 1.5 }}
        src="/left-sketch.png"
        alt=""
        className="
          hidden
          lg:block
          absolute
          left-6
          bottom-0
          w-[320px]
          xl:w-[380px]
          pointer-events-none
          select-none
          z-10
        "
      />

      <motion.img
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.18, x: 0 }}
        transition={{ duration: 1.5 }}
        src="/right-sketch.png"
        alt=""
        className="
          hidden
          lg:block
          absolute
          right-6
          bottom-0
          w-[320px]
          xl:w-[380px]
          pointer-events-none
          select-none
          z-10
        "
      />

      {/* Center Content */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6">

        <div className="max-w-4xl text-center">

          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="
              uppercase
              tracking-[0.45em]
              text-[#b18a2c]
              text-xs
              md:text-sm
              mb-6
            "
          >
            Together With Our Families
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ delay: .4, duration: .8 }}
            className="h-[2px] bg-[#D4AF37] mx-auto mb-10"
          />

          {/* Invitation Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="
              text-[#8b6a24]
              italic
              text-lg
              md:text-xl
              mb-5
            "
          >
            Joyfully Invite You To Celebrate
          </motion.p>

          {/* Bride Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .7 }}
            className="
              font-cormorant
              text-[#5A4533]
              text-6xl
              md:text-8xl
              leading-none
            "
          >
            Vineela
          </motion.h1>

          {/* Ampersand */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: .9 }}
            className="
              my-5
              font-cormorant
              text-[#C89B3C]
              text-5xl
              md:text-7xl
            "
          >
            &
          </motion.div>          {/* Groom Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="
              font-cormorant
              text-[#5A4533]
              text-6xl
              md:text-8xl
              leading-none
              mb-8
            "
          >
            Tharun
          </motion.h1>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-16 h-px bg-[#D4AF37]" />
            <span className="text-[#C89B3C] text-xl">❦</span>
            <div className="w-16 h-px bg-[#D4AF37]" />
          </motion.div>

          {/* Invitation Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="
              max-w-2xl
              mx-auto
              text-[#6d5846]
              text-base
              md:text-lg
              leading-8
              mb-10
            "
          >
            Request the honour of your gracious presence as we begin
            the most beautiful chapter of our lives together and
            celebrate our wedding with love, laughter and blessings.
          </motion.p>

          {/* Wedding Date */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="space-y-2 mb-12"
          >
            <p className="uppercase tracking-[0.35em] text-[#b18a2c] text-xs">
              Wedding Ceremony
            </p>

            <h2 className="font-cormorant text-[#5A4533] text-4xl md:text-5xl">
              Sunday
            </h2>

            <p className="text-[#8b6a24] text-lg md:text-xl tracking-widest">
              23 AUGUST 2026
            </p>

            <p className="text-[#6d5846] italic">
              Muhurtham • 11:30 AM
            </p>
          </motion.div>

          {/* Countdown Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="
              mx-auto
              max-w-3xl
              rounded-[32px]
              border
              border-[#D4AF37]/20
              bg-white/40
              backdrop-blur-xl
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              p-8
              mb-10
            "
          >
            <Countdown />
          </motion.div>          {/* Save The Date */}
          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
            className="mb-8"
          >
            <div
              className="
                inline-flex
                items-center
                gap-4
                rounded-full
                border
                border-[#D4AF37]/25
                bg-white/50
                px-8
                py-3
                backdrop-blur-md
              "
            >
              <div className="h-px w-10 bg-[#D4AF37]" />

              <span
                className="
                  uppercase
                  tracking-[0.35em]
                  text-xs
                  text-[#b18a2c]
                "
              >
                Save The Date
              </span>

              <div className="h-px w-10 bg-[#D4AF37]" />
            </div>
          </motion.div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="
              max-w-2xl
              mx-auto
              text-[#7a6652]
              italic
              text-base
              md:text-lg
              leading-8
              mb-14
            "
          >
            "Two hearts, one promise, and a lifetime of beautiful memories
            waiting to unfold. Your presence will make our celebration even
            more special."
          </motion.p>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 220 }}
            transition={{ delay: 2.4 }}
            className="mx-auto mb-10"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="h-px flex-1 bg-[#D4AF37]" />
              <span className="text-[#C89B3C] text-lg">✦</span>
              <span className="text-[#C89B3C] text-xl">❦</span>
              <span className="text-[#C89B3C] text-lg">✦</span>
              <div className="h-px flex-1 bg-[#D4AF37]" />
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="flex flex-col items-center"
          >
            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[#b18a2c]
                mb-3
              "
            >
              Scroll To Explore
            </span>

            <div
              className="
                h-14
                w-8
                rounded-full
                border-2
                border-[#D4AF37]/60
                flex
                justify-center
                pt-2
              "
            >
              <motion.div
                animate={{
                  y: [0, 16, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#D4AF37]
                "
              />
            </div>
          </motion.div>

        </div>
      </div>      {/* ================================ */}
      {/* Bottom Luxury Glow */}
      {/* ================================ */}

      <div
        className="
          absolute
          bottom-[-180px]
          left-1/2
          -translate-x-1/2
          h-[420px]
          w-[900px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[150px]
          pointer-events-none
        "
      />

      {/* Watercolor Bottom Fade */}
      <div
        className="
          absolute
          bottom-0
          inset-x-0
          h-40
          bg-gradient-to-t
          from-[#faf6ef]
          via-[#faf6ef]/70
          to-transparent
          pointer-events-none
        "
      />

      {/* Extra Floating Decorative Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`gold-${i}`}
            className="absolute rounded-full bg-[#D4AF37]/40"
            style={{
              width: `${4 + Math.random() * 5}px`,
              height: `${4 + Math.random() * 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Decorative Bottom Flourish */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 2.5 }}
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          text-[#C89B3C]
          text-5xl
          select-none
          pointer-events-none
        "
      >
        ❦
      </motion.div>

      {/* Soft Vignette */}
      <div
        className="
          absolute
          inset-0
          shadow-[inset_0_0_180px_rgba(0,0,0,0.05)]
          pointer-events-none
        "
      />

    </section>
  );
}