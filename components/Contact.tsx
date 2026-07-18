"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    side: "Groom's Family",
    name: "Tharun",
    phone: "+919999999999",
    wa: "919999999999",
  },
  {
    side: "Bride's Family",
    name: "Vineela",
    phone: "+919912925316",
    wa: "919912925316",
  },
];

export default function Contact() {
  return (
    <section
      id="rsvp"
      className="relative overflow-hidden bg-[#FFF8F3] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#D4AF37]/50"
            initial={{
              y: "110vh",
              x: `${Math.random() * 100}vw`,
              opacity: 0,
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative mb-20 text-center"
        >

          {/* Floral */}
          <img
            src="/floral-top-left.png"
            alt=""
            className="absolute left-0 -top-10 w-24 opacity-25 md:w-40"
          />

          <img
            src="/floral-top-right.png"
            alt=""
            className="absolute right-0 -top-10 w-24 scale-x-[-1] opacity-25 md:w-40"
          />

          <p className="font-cormorant text-4xl text-[#B76E79] tracking-wider mb-3">
            VT
          </p>

          <h2 className="font-cormorant text-5xl text-primary md:text-6xl">
            R.S.V.P.
          </h2>

          <p className="mt-5 font-cormorant text-3xl text-[#8D9C38]">
            With Best Compliments
          </p>

          <p className="mt-2 text-xl font-semibold tracking-wide text-primary">
            Vineela & Tarun Families
          </p>

          <div className="mx-auto mt-8 h-[2px] w-20 bg-[#D4AF37]" />

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-muted">
            Your love, blessings, and presence will make our wedding
            celebration truly unforgettable. If you need any assistance before
            the big day, we're just a call or message away.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">

          {contacts.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .7,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[36px] border border-[#D4AF37]/15 bg-white/75 p-8 backdrop-blur-lg shadow-xl transition-all"
            >

              <div className="absolute inset-0 rounded-[36px] border border-white/30" />

              <div className="relative">

                <p className="mb-2 uppercase tracking-[0.25em] text-sm text-muted">
                  {person.side}
                </p>

                <h3 className="font-cormorant text-4xl text-primary">
                  {person.name}
                </h3>

                <div className="my-7 h-px bg-[#D4AF37]/15" />

                <a
                  href={`https://wa.me/${person.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 flex items-center justify-center gap-2 rounded-full bg-green-50 py-3 text-green-700 transition-all hover:bg-green-100"
                >
                  💬 Send Wishes on WhatsApp
                </a>

                <a
                  href={`tel:${person.phone}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/20 py-3 text-primary transition-all hover:bg-[#D4AF37]/10"
                >
                  📞 {person.phone}
                </a>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Closing Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >

          <div className="mx-auto mb-8 h-px w-40 bg-[#D4AF37]/30" />

          <p className="font-cormorant text-4xl text-primary leading-relaxed">
            We can't wait to celebrate this beautiful beginning
            together with you.
          </p>

          <p className="mt-6 text-lg text-muted italic leading-8">
            Your presence is the greatest blessing we could ask for.
            Thank you for being a cherished part of our journey.
          </p>

          <p className="mt-8 text-3xl">
            ✨🤍🌸
          </p>

        </motion.div>

      </div>
    </section>
  );
}