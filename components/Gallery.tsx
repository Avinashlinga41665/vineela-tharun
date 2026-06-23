"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
"/Wedding1.jpeg",
"/Wedding2.jpeg",
"/Wedding3.jpeg",
"/Gallery.jpeg",
"/Wedding4.jpeg",
"/Wedding5.jpeg",
"/Wedding6.jpeg",
"/Wedding7.jpeg",
"/Wedding8.jpeg",
"/Wedding9.jpeg",
];

export default function Gallery() {
const [selectedImage, setSelectedImage] = useState<string | null>(null);

return ( <section
   id="gallery"
   className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-[#faf7f2]"
 >
{/* Global Gold Glow */} <div
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


  {/* Floating Gold Particles */}
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

      {/* Heading Glow */}
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
          pointer-events-none
        "
      />

      <h2 className="relative font-cormorant text-5xl md:text-6xl text-primary">
        Gallery
      </h2>

      <p className="relative mt-3 text-accent tracking-[0.25em] uppercase text-xs md:text-sm">
        Moments We'll Cherish Forever
      </p>

      <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-5" />
    </div>

    {/* Featured Image */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        rounded-[36px]
        shadow-2xl
        mb-10
        cursor-pointer
        group
      "
      onClick={() => setSelectedImage(photos[0])}
    >
      <img
        src={photos[0]}
        alt=""
        className="
          w-full
          h-[320px]
          md:h-[650px]
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

      {/* Luxury Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/60
          via-black/25
          to-transparent
        "
      />

      {/* Border */}
      <div
        className="
          absolute
          inset-0
          rounded-[36px]
          border
          border-white/10
        "
      />

      <div className="absolute bottom-8 left-8 text-white">
        <h3 className="font-cormorant text-3xl md:text-5xl">
          A Journey of Love
        </h3>

        <p className="mt-2 text-white/90">
          Capturing moments that last forever
        </p>
      </div>
    </motion.div>

    {/* Gallery Counter */}
    <div className="text-center mb-8">
      <p className="text-accent uppercase tracking-[0.2em] text-xs md:text-sm">
        {photos.length} Precious Memories
      </p>
    </div>

    {/* Gallery Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {photos.slice(1).map((photo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => setSelectedImage(photo)}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            shadow-lg
            cursor-pointer
            group
          "
        >
          <img
            src={photo}
            alt={`Gallery ${index + 1}`}
            loading="lazy"
            className="
              w-full
              h-56
              md:h-80
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/40
              via-transparent
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            "
          />
        </motion.div>
      ))}
    </div>

    {/* Lightbox */}
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="
            fixed
            inset-0
            z-50
            bg-black/95
            flex
            items-center
            justify-center
            p-4
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              top-6
              right-6
              text-white
              text-4xl
              z-50
            "
          >
            ×
          </button>

          <motion.img
            src={selectedImage}
            alt=""
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="
              max-h-[90vh]
              max-w-[95vw]
              rounded-3xl
              shadow-2xl
            "
          />
        </motion.div>
      )}
    </AnimatePresence>

  </div>
</section>

);
}
