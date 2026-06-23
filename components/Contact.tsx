"use client";

import { motion } from "framer-motion";

export default function Contact() {
return ( <section
   id="contact"
   className="relative overflow-hidden py-24 bg-[#FFF8F3]"
 >
{/* Gold Glow */} <div
     className="
       absolute
       top-20
       left-1/2
       -translate-x-1/2
       w-[600px]
       h-[600px]
       bg-[#D4AF37]/5
       rounded-full
       blur-3xl
       pointer-events-none
     "
   />

  {/* Floating Particles */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#D4AF37]/60 rounded-full"
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

  <div className="container-custom relative z-10">

    {/* Heading */}
    <div className="relative text-center mb-16">

      {/* Title Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-72
          h-72
          bg-[#D4AF37]/10
          rounded-full
          blur-3xl
        "
      />

      {/* Floral Left */}
      <img
        src="/floral-top-left.png"
        alt=""
        className="
          absolute
          left-0
          -top-10
          w-24
          md:w-40
          opacity-25
          pointer-events-none
        "
      />

      {/* Floral Right */}
      <img
        src="/floral-top-right.png"
        alt=""
        className="
          absolute
          right-0
          -top-10
          w-24
          md:w-40
          opacity-25
          scale-x-[-1]
          pointer-events-none
        "
      />

      <h2 className="relative font-cormorant text-5xl md:text-6xl text-primary">
        Need Help?
      </h2>

      <p className="relative mt-3 text-muted max-w-md mx-auto leading-relaxed">
        For directions or any assistance, feel free to reach out anytime
      </p>

      <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-5" />
    </div>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

      {[
        {
          role: "Groom",
          name: "Tharun",
          phone: "+919999999999",
          wa: "919999999999",
        },
        {
          role: "Bride",
          name: "Vineela",
          phone: "+919912925316",
          wa: "919912925316",
        },
      ].map((person, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
          }}
          whileHover={{
            y: -8,
          }}
          className="
            relative
            bg-white/80
            backdrop-blur-md
            rounded-[32px]
            p-8
            shadow-xl
            border
            border-[#D4AF37]/10
            hover:border-[#D4AF37]/30
            transition-all
          "
        >
          <div
            className="
              absolute
              inset-0
              rounded-[32px]
              border
              border-white/20
              pointer-events-none
            "
          />

          <p className="text-sm tracking-[0.2em] text-muted uppercase mb-3">
            {person.role}
          </p>

          <h3 className="font-cormorant text-3xl text-primary mb-6">
            {person.name}
          </h3>

          <a
            href={`https://wa.me/${person.wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-2
              mb-4
              py-3
              rounded-full
              bg-green-50
              text-green-700
              hover:bg-green-100
              transition-all
            "
          >
            💬 WhatsApp
          </a>

          <a
            href={`tel:${person.phone}`}
            className="
              flex
              items-center
              justify-center
              gap-2
              py-3
              rounded-full
              border
              border-[#D4AF37]/20
              text-primary
              hover:bg-[#D4AF37]/10
              transition-all
            "
          >
            📞 {person.phone}
          </a>
        </motion.div>
      ))}
    </div>

    {/* Bottom Note */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="
        text-sm
        text-muted
        mt-12
        italic
        tracking-wide
        text-center
      "
    >
      ✨ We’re happy to help you reach the venue 💫
    </motion.p>

  </div>
</section>

);
}
