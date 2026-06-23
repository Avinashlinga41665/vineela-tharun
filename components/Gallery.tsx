"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
"/Wedding1.jpeg", // Hero Image
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
   className="py-20 bg-linear-to-b from-white to-[#faf7f2]"
 > <div className="container mx-auto px-4 md:px-6">

```
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="font-cormorant text-5xl md:text-6xl text-primary">
        Gallery
      </h2>

      <p className="mt-3 text-accent tracking-[0.25em] uppercase text-xs md:text-sm">
        Moments We'll Cherish Forever
      </p>
    </div>

    {/* Hero Image */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        overflow-hidden
        rounded-[32px]
        shadow-xl
        mb-6
        cursor-pointer
      "
      onClick={() => setSelectedImage(photos[0])}
    >
      <img
        src={photos[0]}
        alt="Hero"
        className="
          w-full
          h-[280px]
          md:h-[600px]
          object-cover
          transition
          duration-700
          hover:scale-105
        "
      />
    </motion.div>

    {/* Masonry Layout */}
    <div className="columns-2 md:columns-3 gap-4 space-y-4">

      {photos.slice(1).map((photo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            break-inside-avoid
            overflow-hidden
            rounded-[24px]
            shadow-lg
            cursor-pointer
            group
          "
          onClick={() => setSelectedImage(photo)}
        >
          <img
            src={photo}
            alt={`Gallery ${index + 1}`}
            loading="lazy"
            className="
              w-full
              h-auto
              block
              transition-all
              duration-700
              group-hover:scale-105
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
            bg-black/90
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
          <motion.img
            src={selectedImage}
            alt=""
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="
              max-h-[90vh]
              max-w-[95vw]
              rounded-2xl
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
    