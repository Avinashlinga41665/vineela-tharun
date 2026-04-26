"use client";

import { useState } from "react";

export default function Gallery() {
  const images = [
    "https://source.unsplash.com/400x400/?wedding",
    "https://source.unsplash.com/401x400/?couple",
    "https://source.unsplash.com/402x400/?engagement",
    "https://source.unsplash.com/403x400/?love",
  ];

  return (
    <section id="gallery" className="py-20 px-6 text-center bg-white">

      {/* Title */}
      <h2 className="text-3xl font-serif mb-12 text-[#2C2C2C]">
        Gallery
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {images.map((src, i) => (
          <ImageCard key={i} src={src} />
        ))}
      </div>

    </section>
  );
}

function ImageCard({ src }: { src: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div  className="overflow-hidden rounded-2xl border border-[#E5D7C6] bg-[#FFFDFB] shadow-sm hover:shadow-lg transition duration-300">

      <img
        src={imgSrc}
        alt="gallery"
        onError={() => setImgSrc("/fallback.jpg")} // ✅ fallback
        className="w-full h-48 object-cover hover:scale-110 transition duration-500"
      />

    </div>
  );
}