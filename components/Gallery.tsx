"use client";

import { useState } from "react";

export default function Gallery() {
  const people = [
    {
      name: "Vineela",
      role: "Bride",
      job: "Job",
      img: "/bride.jpg",
    },
    {
      name: "Tharun",
      role: "Groom",
      job: "Job",
      img: "/groom.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-6 text-center bg-white">
      
      {/* Title */}
      <h2 className="text-3xl font-serif mb-12 text-[#2C2C2C]">
        Gallery
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">

        {people.map((p, i) => (
          <ProfileCard key={i} {...p} reverse={i === 1} />
        ))}

      </div>
    </section>
  );
}

function ProfileCard({
  name,
  role,
  job,
  img,
  reverse,
}: {
  name: string;
  role: string;
  job: string;
  img: string;
  reverse?: boolean;
}) {
  const [imgSrc, setImgSrc] = useState(img);

  return (
    <div
      className={`rounded-2xl border border-[#E5D7C6] bg-[#FFFDFB] shadow-sm hover:shadow-lg transition duration-300 overflow-hidden`}
    >
      {/* Image */}
      <img
        src={imgSrc}
        onError={() => setImgSrc("/fallback.jpg")}
        className="w-full h-72 object-cover"
        alt={name}
      />

      {/* Content */}
      <div className="p-6 text-center">

        <h3 className="font-[var(--font-playfair)] text-2xl text-[#2C2C2C]">
          {name}
        </h3>

        <p className="text-[#D4AF37] mt-2">{role}</p>

        <p className="text-gray-500 mt-1 text-sm">{job}</p>

      </div>
    </div>
  );
}