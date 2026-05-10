"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const people = [
    {
      name: "Vineela",
      role: "Bride",
      img: "/bride.jpg",
    },
    {
      name: "Tharun",
      role: "Groom",
      img: "/groom.jpg",
    },
  ];

  return (
    <section id="gallery" className="section bg-white">

      {/* Title */}
      <h2 className="section-title">Gallery</h2>

      <div className="container-custom grid gap-8 md:grid-cols-2">
        {people.map((p, i) => (
          <ProfileCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

function ProfileCard({
  name,
  role,
  img,
}: {
  name: string;
  role: string;
  img: string;
}) {
  const [imgSrc, setImgSrc] = useState(img);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="card card-hover overflow-hidden group"
    >

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={imgSrc}
          onError={() => setImgSrc("/fallback.jpg")}
          className="w-full h-80 object-cover transition duration-700 group-hover:scale-105"
          alt={name}
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-6 text-center">

        <h3 className="font-cormorant text-2xl text-primary">
          {name}
        </h3>

        <p className="text-accent mt-2 tracking-wide">{role}</p>

      </div>
    </motion.div>
  );
}