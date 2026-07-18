"use client";

import { motion } from "framer-motion";
import Countdown from "@/components/Countdown";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fbf8f2]"
    >

      {/* ===================================== */}
      {/* Paper Texture */}
      {/* ===================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('/paper-texture.jpg')",
        }}
      />

      {/* Soft Temple Cream Overlay */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom,#fffdf8 0%,#faf6ef 35%,#f8f1e5 100%)",
        }}
      />

      {/* ===================================== */}
      {/* Temple Background */}
      {/* ===================================== */}

      <motion.img
        src="/temple-outline.png"
        alt=""
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 2 }}
        className="
          absolute
          left-1/2
          top-12
          -translate-x-1/2
          w-[1300px]
          max-w-none
          pointer-events-none
          select-none
        "
      />

      {/* ===================================== */}
      {/* Gold Glow Behind Temple */}
      {/* ===================================== */}

      <div
        className="
          absolute
          left-1/2
          top-52
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[150px]
        "
      />

      {/* ===================================== */}
      {/* Banana Leaves */}
      {/* ===================================== */}

<motion.img
  src="/banana-left.png"
  alt=""
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="
    absolute

    /* Mobile (keep your current look) */
    top-[47px]
    left-[-70px]
    w-[220px]

    /* Tablet */
    md:top-[43px]
    md:left-[-105px]
    md:w-[320px]

    /* Laptop */
    lg:top-[47px]
    lg:left-[-125px]
    lg:w-[390px]

    /* Desktop */
    xl:top-[43px]
    xl:left-[-140px]
    xl:w-[430px]

    pointer-events-none
    select-none
    z-0
  "
/>
<motion.img
  src="/banana-left.png"
  alt=""
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="
    absolute
scale-x-[-1]
    /* Mobile (keep your current look) */
    top-[47px]
    right-[-70px]
    w-[220px]

    /* Tablet */
    md:top-[43px]
    md:right-[-105px]
    md:w-[320px]

    /* Laptop */
    lg:top-[47px]
    lg:right-[-125px]
    lg:w-[390px]

    /* Desktop */
    xl:top-[43px]
    xl:right-[-140px]
    xl:w-[430px]

    pointer-events-none
    select-none
    z-0
  "
/>  
      {/* ===================================== */}
      {/* Gold Ganesha Emblem */}
      {/* ===================================== */}

      <motion.img
        src="/ganesha-emblem.png"
        alt="Lord Ganesha"
        initial={{ opacity: 0, scale: .8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="
          absolute
          left-1/2
          top-14
          -translate-x-1/2
          w-28
          md:w-36
          drop-shadow-[0_0_30px_rgba(212,175,55,.35)]
          pointer-events-none
          select-none
          z-20
        "
      />

      {/* Soft Glow Behind Ganesha */}

      <div
        className="
          absolute
          left-1/2
          top-24
          -translate-x-1/2
          h-40
          w-40
          rounded-full
          bg-[#D4AF37]/20
          blur-[70px]
          pointer-events-none
        "
      />

      {/* ===================================== */}
      {/* Sacred Cows */}
      {/* ===================================== */}

<motion.img
  src="/cow-left.png"
  alt=""
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: .8 }}
  className="
    absolute
scale-x-[-1]

    left-[-10px]
    bottom-[-5px]
    w-[100px]

    sm:left-0
    sm:bottom-[-5px]
    sm:w-[200px]

    md:left-2
    md:bottom-[-10px]
    md:w-[200px]

    lg:left-4
    lg:bottom-[-12px]
    lg:w-[200px]

    xl:left-0
    xl:bottom-[-15px]
    xl:w-[200px]

    pointer-events-none
    select-none
    z-110
  "
/>

<motion.img
  src="/cow-left.png"
  alt=""
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: .8 }}
  className="
    absolute

    right-[-10px]
    bottom-[-5px]
    w-[100px]

    sm:right-0
    sm:bottom-[-5px]
    sm:w-[200px]

    md:right-2
    md:bottom-[-10px]
    md:w-[200px]

    lg:right-4
    lg:bottom-[-12px]
    lg:w-[200px]

    xl:right-0
    xl:bottom-[-15px]
    xl:w-[200px]

    pointer-events-none
    select-none
    z-110
  "
/>

      {/* ===================================== */}
      {/* Flower Petals */}
      {/* ===================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(18)].map((_, i) => (
          <motion.img
            key={i}
            src="/petal.png"
            alt=""
            className="absolute w-8 opacity-90"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [0, -20, 20, -15, 0],
              rotate: [0, 120, 240, 360],
              opacity: [0, .8, .8, 0],
            }}
            transition={{
              duration: 14 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}

      </div>      {/* ===================================== */}
      {/* Hero Content */}
      {/* ===================================== */}

      <div className="relative z-30 flex min-h-screen items-center justify-center px-6">

        <div className="w-full max-w-5xl text-center">

          {/* Telugu Heading */}

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="
              text-[#8c6a2a]
              text-xl
              md:text-2xl
              tracking-[0.25em]
              mb-5
            "
          >
            శ్రీ
          </motion.p>

          {/* Decorative Divider */}

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: .3 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-24 bg-[#C6A04B]" />

            <span className="text-[#D4AF37] text-xl">
              ❦
            </span>

            <div className="h-px w-24 bg-[#C6A04B]" />
          </motion.div>

          {/* Couple Names */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .5 }}
            className="
              font-cormorant
              text-[#4B3725]
              text-6xl
              md:text-8xl
              font-semibold
              tracking-wide
            "
          >
            Vineela
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: .8 }}
            className="
              text-[#C9A13F]
              text-4xl
              md:text-6xl
              my-4
            "
          >
            ♥
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .9 }}
            className="
              font-cormorant
              text-[#4B3725]
              text-6xl
              md:text-8xl
              font-semibold
              tracking-wide
            "
          >
            Tharun
          </motion.h1>

          {/* Family Text */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="
              mt-10
              uppercase
              tracking-[0.35em]
              text-[#A07A38]
              text-xs
              md:text-sm
            "
          >
            Together With Their Families
          </motion.p>

          {/* Invitation Message */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[#655241]
              leading-9
              text-base
              md:text-lg
            "
          >
            Request the pleasure of your gracious presence
            and blessings as they unite in the sacred bond of
            marriage and begin a beautiful journey together.
          </motion.p>          {/* ===================================== */}
          {/* Wedding Details */}
          {/* ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-14 space-y-3"
          >

            <p
              className="
                uppercase
                tracking-[0.35em]
                text-[#A9853D]
                text-xs
                md:text-sm
              "
            >
              Wedding Ceremony
            </p>

            <h2
              className="
                font-cormorant
                text-[#523E2F]
                text-5xl
                md:text-6xl
                font-semibold
              "
            >
              Sunday
            </h2>

            <p
              className="
                text-[#8B6A2D]
                tracking-[0.25em]
                text-lg
                md:text-2xl
              "
            >
              23 AUGUST 2026
            </p>

            <p
              className="
                italic
                text-[#6F5A46]
                text-lg
              "
            >
              Muhurtham • 11:30 AM
            </p>

          </motion.div>

          {/* Decorative Divider */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="flex justify-center my-6"
          >
            <img
              src="/gold-divider.png"
              alt=""
              className="w-60 opacity-80"
            />
          </motion.div>

          {/* ===================================== */}
          {/* Countdown Card */}
          {/* ===================================== */}

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9 }}
            className="
              mx-auto
              max-w-4xl
              rounded-[36px]
              border
              border-[#D4AF37]/30
              bg-white/55
              backdrop-blur-xl
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              p-8
            "
          >

            <Countdown />

          </motion.div>

          {/* ===================================== */}
          {/* Action Buttons */}
          {/* ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
            className="
              mt-12
              flex
              flex-wrap
              justify-center
              gap-5
            "
          >

            <a
              href="#events"
              className="
                rounded-full
                border
                border-[#CFA84D]
                bg-[#CFA84D]
                px-10
                py-4
                text-sm
                tracking-[0.2em]
                uppercase
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Wedding Details
            </a>

            <a
              href="#venue"
              className="
                rounded-full
                border
                border-[#CFA84D]
                bg-white/60
                backdrop-blur
                px-10
                py-4
                text-sm
                tracking-[0.2em]
                uppercase
                text-[#8A6931]
                transition-all
                duration-300
                hover:bg-[#CFA84D]
                hover:text-white
              "
            >
              View Venue
            </a>

          </motion.div>          {/* ===================================== */}
          {/* Couple Portrait */}
          {/* ===================================== */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 1 }}
            className="
              relative
              mt-20
              flex
              justify-center
            "
          >

            {/* Gold Glow */}

            <div
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                h-[380px]
                w-[380px]
                rounded-full
                bg-[#D4AF37]/15
                blur-[90px]
              "
            />



          </motion.div>

          {/* ===================================== */}
          {/* Temple Mist */}
          {/* ===================================== */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-52
              bg-gradient-to-t
              from-[#fbf8f2]
              via-[#fbf8f2]/70
              to-transparent
              pointer-events-none
            "
          />




          

        </div>

      </div>      {/* ===================================== */}
      {/* Bottom Golden Glow */}
      {/* ===================================== */}

      <div
        className="
          absolute
          bottom-[-220px]
          left-1/2
          -translate-x-1/2
          h-[500px]
          w-[1100px]
          rounded-full
          bg-[#D4AF37]/12
          blur-[180px]
          pointer-events-none
        "
      />

      {/* ===================================== */}
      {/* Bottom Fade */}
      {/* ===================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-40
          bg-gradient-to-t
          from-[#fbf8f2]
          via-[#fbf8f2]/80
          to-transparent
          pointer-events-none
        "
      />

      {/* ===================================== */}
      {/* Luxury Dust Particles */}
      {/* ===================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(14)].map((_, i) => (

          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37]/40"
            style={{
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              opacity: [.15, .8, .15],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />

        ))}

      </div>

      {/* ===================================== */}
      {/* Side Soft Shadows */}
      {/* ===================================== */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          w-24
          bg-gradient-to-r
          from-[#000]/5
          to-transparent
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          inset-y-0
          right-0
          w-24
          bg-gradient-to-l
          from-[#000]/5
          to-transparent
          pointer-events-none
        "
      />

      {/* ===================================== */}
      {/* Soft Vignette */}
      {/* ===================================== */}

      <div
        className="
          absolute
          inset-0
          shadow-[inset_0_0_180px_rgba(0,0,0,.05)]
          pointer-events-none
        "
      />

      {/* ===================================== */}
      {/* Final Traditional Ornament */}
      {/* ===================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: .18 }}
        transition={{ delay: 2.8 }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-[#C89B3C]
          text-6xl
          select-none
          pointer-events-none
        "
      >
        ❦
      </motion.div>

    </section>
  );
}