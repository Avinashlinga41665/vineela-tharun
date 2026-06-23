"use client";

import { motion } from "framer-motion";

export default function Location() {
return ( 
<section
   id="venue"
   className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-[#faf7f2]">
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

  <div className="container mx-auto px-4 md:px-6 relative z-10">

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
        Venue
      </h2>

      <p className="relative mt-3 text-accent tracking-[0.25em] uppercase text-xs md:text-sm">
        Join Us On Our Special Day
      </p>

      <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-5" />
    </div>

    {/* Venue Photo */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        relative
        overflow-hidden
        rounded-[36px]
        shadow-2xl
        mb-10
        group
      "
    >
      <img
        src="/venue.jpeg"
        alt="Madhura Banquet Halls"
        className="
          w-full
          h-[280px]
          md:h-[550px]
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/60
          via-black/20
          to-transparent
        "
      />

      <div
        className="
          absolute
          inset-0
          border
          border-white/10
          rounded-[36px]
        "
      />
    </motion.div>

    {/* Venue Info */}
    <div className="text-center mb-10">
      <h3 className="font-cormorant text-3xl md:text-4xl text-primary mb-3">
        Madhura Banquet Halls
      </h3>

      <p className="text-muted text-base md:text-lg">
        Nagole, Hyderabad, Telangana
      </p>

      <p className="mt-4 text-sm italic text-muted">
        ✨ We can't wait to celebrate with you ✨
      </p>
    </div>

    {/* Maps Button */}
    <div className="flex justify-center mb-12">
      <motion.a
        whileHover={{
          y: -2,
          scale: 1.03,
        }}
        whileTap={{ scale: 0.98 }}
        href="https://maps.app.goo.gl/wVNKwY4hwWzZthfB7"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-8
          py-3
          rounded-full
          bg-[#D4AF37]
          text-white
          shadow-lg
          hover:shadow-xl
          hover:shadow-[#D4AF37]/30
          transition-all
          duration-300
        "
      >
        📍 Open Maps
      </motion.a>
    </div>

    {/* Embedded Map */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <div
        className="
          overflow-hidden
          rounded-[32px]
          shadow-xl
          border
          border-[#D4AF37]/10
        "
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.50216843121!2d78.37191405234665!3d17.417032576792977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1a2e52a7deb%3A0x508c12bffb78d343!2sSai%20Madhura%20Banquet%20Halls%20-%20in%20Vanasthalipuram!5e0!3m2!1sen!2sin!4v1782116833420!5m2!1sen!2sin"
          className="w-full h-[250px] md:h-[350px]"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>

  </div>
</section>

);
}
