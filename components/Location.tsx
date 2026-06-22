"use client";

import { motion } from "framer-motion";

export default function Location() {
return ( <section
   id="venue"
   className="py-20 bg-gradient-to-b from-white to-[#faf7f2] relative overflow-hidden"
 >
{/* Background Glow */} <div className="absolute inset-0 pointer-events-none"> <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-3xl rounded-full" /> </div>

```
  <div className="container mx-auto px-4 md:px-6 relative z-10">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="font-cormorant text-5xl md:text-6xl text-primary">
        Venue
      </h2>

      <p className="mt-3 text-accent tracking-[0.25em] uppercase text-xs md:text-sm">
        Join Us On Our Special Day
      </p>
    </div>

    {/* Venue Photo */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-[32px] shadow-2xl mb-10"
    >
      <img
        src="/venue.jpeg"
        alt="Madhura Banquet Halls"
        className="
          w-full
          h-[260px]
          md:h-[500px]
          object-cover
          hover:scale-105
          transition-all
          duration-700
        "
      />
    </motion.div>

    {/* Venue Details */}
    <div className="text-center mb-8">
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

    {/* Get Directions */}
    <div className="flex justify-center mb-10">
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
          text-white
          shadow-lg
          hover:shadow-xl
          transition-all
          duration-300
        "
      >
        📍 Get Directions
      </motion.a>
    </div>

    {/* Small Map */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto"
    >
      <div className="overflow-hidden rounded-3xl shadow-lg border border-[#E5D7C6]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.50216843121!2d78.37191405234665!3d17.417032576792977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1a2e52a7deb%3A0x508c12bffb78d343!2sSai%20Madhura%20Banquet%20Halls%20-%20in%20Vanasthalipuram!5e0!3m2!1sen!2sin!4v1782116833420!5m2!1sen!2sin"
          className="w-full h-[220px] md:h-[320px]"
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
