"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    family: "Bride's Family",
    name: "Vineela",
    phone: "+91 9912925316",
    whatsapp: "919912925316",
  },
  {
    family: "Groom's Family",
    name: "Tharun",
    phone: "+91 9999999999",
    whatsapp: "919999999999",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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

      {/* White Overlay */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom,#fffefc 0%,#fbf8f2 45%,#f8f2e8 100%)",
        }}
      />

      {/* ===================================== */}
      {/* Temple Background */}
      {/* ===================================== */}

      <motion.img
        src="/temple-outline.png"
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: .08 }}
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

      {/* Gold Glow */}

      <div
        className="
          absolute
          left-1/2
          top-36
          -translate-x-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#D4AF37]/10
          blur-[170px]
        "
      />      {/* ===================================== */}
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

          top-[35px]
          left-[-70px]
          w-[220px]

          md:top-[30px]
          md:left-[-100px]
          md:w-[320px]

          lg:left-[-125px]
          lg:w-[390px]

          xl:left-[-140px]
          xl:w-[430px]

          pointer-events-none
          select-none
        "
      />

      <motion.img
        src="/banana-left.png"
        alt=""
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          absolute
          scale-x-[-1]

          top-[35px]
          right-[-70px]
          w-[220px]

          md:top-[30px]
          md:right-[-100px]
          md:w-[320px]

          lg:right-[-125px]
          lg:w-[390px]

          xl:right-[-140px]
          xl:w-[430px]

          pointer-events-none
          select-none
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
        transition={{ duration: .8 }}
        className="
          absolute
          left-1/2
          top-14
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
        "
      />

      {/* ===================================== */}
      {/* Floating Petals */}
      {/* ===================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(12)].map((_, i) => (

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
              duration: 15 + Math.random() * 6,
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

        {/* Main Heading */}

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
          R.S.V.P
        </motion.h2>

        {/* Sub Heading */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="
            mt-5
            uppercase
            tracking-[0.35em]
            text-[#B38834]
            text-xs
            md:text-sm
          "
        >
          With Best Compliments
        </motion.p>

        {/* Gold Divider */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="flex justify-center my-8"
        >
          <img
            src="/gold-divider.png"
            alt=""
            className="w-60 md:w-72"
          />
        </motion.div>

        {/* Family Name */}

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .5 }}
          className="
            font-cormorant
            text-[#5A4533]
            text-4xl
            md:text-5xl
            leading-tight
          "
        >
          Vineela & Tharun
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .6 }}
          className="
            mt-3
            uppercase
            tracking-[0.3em]
            text-[#B38834]
            text-sm
          "
        >
          Families
        </motion.p>

        {/* Message */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .7 }}
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
          Your gracious presence and blessings
          will make our wedding celebration
          truly memorable. If you require any
          assistance before the wedding day,
          please feel free to contact either family.
        </motion.p>        {/* ===================================== */}
        {/* Contact Panels */}
        {/* ===================================== */}

        <div
          className="
            mt-20
            grid
            gap-10
            lg:grid-cols-2
          "
        >

          {contacts.map((person, index) => (

            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: index * .15,
              }}
              className="
                relative

                rounded-[36px]

                border
                border-[#D4AF37]/20

                bg-white/60

                backdrop-blur-xl

                shadow-[0_20px_60px_rgba(0,0,0,.08)]

                px-10
                py-12
              "
            >

              {/* Top Ornament */}

              <div className="flex justify-center mb-6">

                <img
                  src="/gold-divider.png"
                  alt=""
                  className="w-40 opacity-80"
                />

              </div>

              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  text-[#B38834]
                  text-center
                "
              >
                {person.family}
              </p>

              <h3
                className="
                  mt-5
                  text-center

                  font-cormorant

                  text-[#4B3725]

                  text-4xl
                "
              >
                {person.name}
              </h3>

              <div
                className="
                  mx-auto
                  my-8

                  h-px
                  w-24

                  bg-[#D4AF37]/25
                "
              />

              {/* Phone */}

              <a
                href={`tel:${person.phone}`}
                className="
                  mb-4

                  flex
                  items-center
                  justify-center
                  gap-3

                  rounded-full

                  border
                  border-[#D4AF37]/20

                  py-4

                  text-[#5A4533]

                  transition-all
                  duration-300

                  hover:bg-[#D4AF37]/10
                "
              >
                📞 {person.phone}
              </a>              {/* WhatsApp */}

              {/* <a
                href={`https://wa.me/${person.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3

                  rounded-full

                  bg-[#C89B3C]

                  py-4

                  text-white

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_12px_35px_rgba(212,175,55,.30)]
                "
              >
                💬 Send Wishes on WhatsApp
              </a> */}

            </motion.div>

          ))}

        </div>

        {/* ===================================== */}
        {/* Thank You */}
        {/* ===================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="
            mx-auto
            mt-24
            max-w-3xl
            text-center
          "
        >

          <img
            src="/gold-divider.png"
            alt=""
            className="mx-auto mb-8 w-56"
          />

          <h3
            className="
              font-cormorant
              text-[#4B3725]
              text-4xl
              md:text-5xl
            "
          >
            Thank You
          </h3>

          <p
            className="
              mt-8
              leading-9
              text-[#6B5946]
              md:text-lg
            "
          >
            Your presence and blessings are the
            greatest gifts we could ask for.
            We look forward to celebrating this
            beautiful occasion with you and your family.
          </p>

          <p
            className="
              mt-8
              text-[#B38834]
              tracking-[0.35em]
              uppercase
              text-xs
            "
          >
            See You At The Wedding
          </p>

        </motion.div>

      </div>

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
      {/* Sacred Cows */}
      {/* ===================================== */}

      <img
        src="/cow-left.png"
        alt=""
        className="
          absolute
          left-0
          bottom-0
          w-[170px]
          lg:w-[210px]
          scale-x-[-1]
          pointer-events-none
          select-none
        "
      />

      <img
        src="/cow-left.png"
        alt=""
        className="
          absolute
          right-0
          bottom-0
          w-[170px]
          lg:w-[210px]
          pointer-events-none
          select-none
        "
      />

      {/* Bottom Glow */}

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

          blur-[160px]

          pointer-events-none
        "
      />

    </section>
  );
}