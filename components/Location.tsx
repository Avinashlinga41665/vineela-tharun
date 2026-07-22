"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden bg-[#fbf8f2] py-32"
    >
      {/* ===================================== */}
      {/* Paper Texture */}
      {/* ===================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: "url('/paper-texture.jpg')",
        }}
      />

      {/* Soft White Overlay */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom,#fffefb 0%,#fbf8f2 40%,#f8f2e8 100%)",
        }}
      />

      {/* ===================================== */}
      {/* Temple Background */}
      {/* ===================================== */}

      <motion.img
        src="/temple-outline.png"
        alt=""
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: .10, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[1300px]
          max-w-none
          pointer-events-none
          select-none
        "
      />

      {/* Temple Glow */}

      <div
        className="
          absolute
          left-1/2
          top-44
          -translate-x-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[170px]
          pointer-events-none
        "
      />

      {/* ===================================== */}
      {/* Banana Leaves */}
      {/* ===================================== */}

      <motion.img
        src="/banana-left.png"
        alt=""
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          absolute

          top-[40px]
          left-[-70px]
          w-[220px]

          md:top-[35px]
          md:left-[-100px]
          md:w-[320px]

          lg:left-[-125px]
          lg:w-[390px]

          xl:left-[-140px]
          xl:w-[430px]

          pointer-events-none
          select-none
          z-0
        "
      />      <motion.img
        src="/banana-left.png"
        alt=""
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          absolute
          scale-x-[-1]

          top-[40px]
          right-[-70px]
          w-[220px]

          md:top-[35px]
          md:right-[-100px]
          md:w-[320px]

          lg:right-[-125px]
          lg:w-[390px]

          xl:right-[-140px]
          xl:w-[430px]

          pointer-events-none
          select-none
          z-0
        "
      />

      {/* ===================================== */}
      {/* Ganesha */}
      {/* ===================================== */}

      <motion.img
        src="/ganesha-emblem.png"
        alt=""
        initial={{ opacity: 0, scale: .8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          absolute
          left-1/2
          top-16
          -translate-x-1/2
          w-24
          md:w-32
          pointer-events-none
          select-none
          z-20
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-20
          -translate-x-1/2
          h-36
          w-36
          rounded-full
          bg-[#D4AF37]/20
          blur-[70px]
          pointer-events-none
        "
      />

      {/* ===================================== */}
      {/* Floating Petals */}
      {/* ===================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(14)].map((_, i) => (

          <motion.img
            key={i}
            src="/petal.png"
            alt=""
            className="absolute w-6"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [0, -15, 20, -10, 0],
              rotate: [0, 180, 360],
              opacity: [0, .8, .8, 0],
            }}
            transition={{
              duration: 14 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
          />

        ))}

      </div>

      {/* ===================================== */}
      {/* Main Content */}
      {/* ===================================== */}

      <div className="relative z-30 mx-auto max-w-5xl px-6 text-center">        {/* ===================================== */}
        {/* Telugu Heading */}
        {/* ===================================== */}

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="
            text-[#A67C2E]
            text-xl
            md:text-2xl
            tracking-[0.35em]
            mb-5
          "
        >
          శ్రీ
        </motion.p>

        {/* Section Title */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="
            font-cormorant
            text-[#4B3725]
            text-5xl
            md:text-7xl
            font-semibold
          "
        >
          Wedding Venue
        </motion.h2>

        {/* Gold Divider */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="flex justify-center my-8"
        >
          <img
            src="/gold-divider.png"
            alt=""
            className="w-60 md:w-72"
          />
        </motion.div>

        {/* Venue Name */}

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="
            font-cormorant
            text-[#5A4533]
            text-4xl
            md:text-6xl
            leading-tight
          "
        >
          Sri Madhura
          <br />
          Banquet Hall
        </motion.h3>

        {/* City */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .5 }}
          className="
            mt-5
            uppercase
            tracking-[0.35em]
            text-[#B38834]
            text-sm
          "
        >
          Vanasthalipuram • Hyderabad
        </motion.p>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .6 }}
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-[#6B5946]
            leading-9
            text-base
            md:text-lg
          "
        >
          We warmly invite you to join us at
          <span className="font-semibold text-[#8B6A2D]">
            {" "}Sri Madhura Banquet Hall{" "}
          </span>
          as we celebrate our wedding amidst the
          blessings of our families, friends and loved ones.
        </motion.p>        {/* ===================================== */}
        {/* Venue Information Card */}
        {/* ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .7 }}
          className="
            mt-20
            mx-auto
            max-w-4xl
            rounded-[36px]
            border
            border-[#D4AF37]/20
            bg-white/60
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            overflow-hidden
          "
        >

          {/* Top */}

          <div className="px-10 py-12">

            {/* Address */}

            <div className="mb-10">

              <p className="uppercase tracking-[0.3em] text-[#B38834] text-xs mb-3">
                Venue Address
              </p>

              <h4
                className="
                  font-cormorant
                  text-[#4B3725]
                  text-3xl
                  md:text-4xl
                  mb-4
                "
              >
                Sri Madhura Banquet Hall
              </h4>

              <p
                className="
                  text-[#6A5745]
                  leading-8
                  text-base
                  md:text-lg
                "
              >
                3rd floor, Bommidi Elite Towers
                <br />
                NTR Circle, Golden Tobaco Colony, Prashanth Nagar
                <br />
                Hyderabad,
                Telangana.
              </p>

            </div>

            {/* Divider */}

            <div className="flex justify-center my-8">

              <img
                src="/gold-divider.png"
                alt=""
                className="w-48 opacity-80"
              />

            </div>

            {/* Date Time Grid */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-10
              "
            >

              <div>

                <p className="uppercase tracking-[0.3em] text-[#B38834] text-xs mb-3">
                  Wedding Date
                </p>

                <h5
                  className="
                    font-cormorant
                    text-[#4B3725]
                    text-3xl
                  "
                >
                  23 August 2026
                </h5>

                <p className="text-[#7A6652] mt-2">
                  Sunday
                </p>

              </div>

              <div>

                <p className="uppercase tracking-[0.3em] text-[#B38834] text-xs mb-3">
                  Muhurtham
                </p>

                <h5
                  className="
                    font-cormorant
                    text-[#4B3725]
                    text-3xl
                  "
                >
                  11:23 AM
                </h5>

                <p className="text-[#7A6652] mt-2">
                  Followed by Lunch
                </p>

              </div>

            </div>

          </div>          {/* ===================================== */}
          {/* Bottom Divider */}
          {/* ===================================== */}

          <div className="flex justify-center pb-10">

            <img
              src="/gold-divider.png"
              alt=""
              className="w-48 opacity-80"
            />

          </div>

        </motion.div>

        {/* ===================================== */}
        {/* Google Maps Button */}
        {/* ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .9 }}
          className="
            mt-16
            flex
            justify-center
          "
        >

          <a
            href="https://maps.app.goo.gl/THtnHf2mX4XUkHYy6"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-4

              rounded-full

              border
              border-[#D4AF37]/40

              bg-[#C89B3C]

              px-10
              py-5

              text-white

              uppercase
              tracking-[0.25em]
              text-sm

              shadow-[0_15px_40px_rgba(212,175,55,.25)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(212,175,55,.35)]
            "
          >

            <span className="text-xl">
              📍
            </span>

            Get Directions

          </a>

        </motion.div>

        {/* ===================================== */}
        {/* Helpful Note */}
        {/* ===================================== */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="
            mx-auto
            mt-8
            max-w-xl

            text-center

            text-[#75624E]
            italic

            leading-8
          "
        >
          We look forward to celebrating this
          joyous occasion with your presence.
          Wishing you a pleasant journey to
          the venue.
        </motion.p>

      </div>

      {/* ===================================== */}
      {/* Temple Mist */}
      {/* ===================================== */}

      <div
        className="
          absolute
          bottom-0
          inset-x-0
          h-56

          bg-gradient-to-t

          from-[#fbf8f2]
          via-[#fbf8f2]/70
          to-transparent

          pointer-events-none
        "
      />

      {/* ===================================== */}
      {/* Bottom Glow */}
      {/* ===================================== */}

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
      />      {/* ===================================== */}
      {/* Sacred Cows */}
      {/* ===================================== */}

      <motion.img
        src="/cow-left.png"
        alt=""
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="
          absolute

          left-[-10px]
          bottom-[-10px]

          w-[110px]

          sm:w-[150px]
          md:w-[180px]
          lg:w-[210px]

          scale-x-[-1]

          pointer-events-none
          select-none
        "
      />

      <motion.img
        src="/cow-left.png"
        alt=""
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="
          absolute

          right-[-10px]
          bottom-[-10px]

          w-[110px]

          sm:w-[150px]
          md:w-[180px]
          lg:w-[210px]

          pointer-events-none
          select-none
        "
      />

      {/* ===================================== */}
      {/* Flower Bed */}
      {/* ===================================== */}

      <img
        src="/flower-bed.png"
        alt=""
        className="
          absolute
          bottom-0
          left-0
          w-full
          pointer-events-none
          select-none
          opacity-90
        "
      />

      {/* ===================================== */}
      {/* Floating Gold Dust */}
      {/* ===================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(12)].map((_, i) => (

          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37]/40"
            style={{
              width: `${4 + Math.random() * 4}px`,
              height: `${4 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [.2, .8, .2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />

        ))}

      </div>

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
      {/* Bottom Ornament */}
      {/* ===================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: .15 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2

          text-[#C89B3C]
          text-5xl

          pointer-events-none
          select-none
        "
      >
        ❦
      </motion.div>

    </section>
  );
}