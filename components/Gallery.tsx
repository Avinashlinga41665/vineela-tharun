"use client";

import { useState } from "react";

export default function Gallery() {
  const images = [
    { label: "Bride", src: "/bride.jpg" },
    { label: "Groom", src: "/groom.jpg" },
  ];

  return (
    <section id="gallery" className="py-20 px-6 text-center bg-white">

      {/* Title */}
      <h2 className="text-3xl font-serif mb-12 text-[#2C2C2C]">
        Gallery
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-16">

  {/* Bride */}
  <div className="flex flex-col md:flex-row items-center gap-8">

    {/* Image */}
    <div className="w-full md:w-1/2">
      <img
        src="/bride.jpg"
        className="rounded-2xl shadow-md w-full h-80 object-cover"
      />
    </div>

    {/* Text */}
    <div className="text-left md:w-1/2">
      <h3 className="font-[var(--font-playfair)] text-3xl text-[#2C2C2C]">
        Vineela
      </h3>
      <p className="text-[#D4AF37] mt-2">Bride</p>
      <p className="text-gray-500 mt-2">
        Job
      </p>
    </div>

  </div>

  {/* Groom (reverse = diagonal feel) */}
  <div className="flex flex-col md:flex-row-reverse items-center gap-8">

    {/* Image */}
    <div className="w-full md:w-1/2">
      <img
        src="/groom.jpg"
        className="rounded-2xl shadow-md w-full h-80 object-cover"
      />
    </div>

    {/* Text */}
    <div className="text-left md:w-1/2">
      <h3 className="font-[var(--font-playfair)] text-3xl text-[#2C2C2C]">
        Tharun
      </h3>
      <p className="text-[#D4AF37] mt-2">Groom</p>
      <p className="text-gray-500 mt-2">
        Job
      </p>
    </div>

  </div>

</div>

    </section>
  );
}

function ImageCard({ src, label }: { src: string; label: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className="group overflow-hidden rounded-2xl border border-[#E5D7C6] bg-[#FFFDFB] shadow-sm hover:shadow-lg transition duration-300">

      {/* Image */}
      <img
        src={imgSrc}
        alt={label}
        onError={() => setImgSrc("/fallback.jpg")}
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Label */}
      <div className="py-4">
        <p className="font-[var(--font-playfair)] text-lg text-[#2C2C2C]">
          {label}
        </p>
      </div>

    </div>
  );
}