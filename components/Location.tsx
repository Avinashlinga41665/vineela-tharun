"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="venue"
      className="section relative overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft Gold Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-[#D4AF37]/10 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">

        {/* Title */}
        <h2 className="section-title">
          Venue
        </h2>

        {/* Venue Name */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-cormorant text-3xl text-primary mb-2"
        >
          Taj Palace
        </motion.h3>

        {/* Address */}
        <p className="text-muted mb-10 tracking-wide">
          Hyderabad, India
        </p>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div
            className="relative overflow-hidden rounded-3xl 
            border border-[#E5D7C6] 
            shadow-lg bg-white"
          >

            {/* subtle top fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10" />

            <iframe
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              className="block w-[320px] h-[240px] md:w-[500px] md:h-[320px]"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Small Note */}
        <p className="text-sm text-muted mb-6 italic">
          ✨ We can’t wait to celebrate with you 💫
        </p>

        {/* Button */}
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          href="https://maps.google.com/?q=Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 
          px-7 py-3 
          border border-[#D4AF37] 
          text-[#D4AF37] 
          rounded-full 
          hover:bg-[#D4AF37] hover:text-white 
          transition duration-300"
        >
          📍 Open in Maps
        </motion.a>

      </div>
    </section>
  );
}