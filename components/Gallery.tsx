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
    <section id="gallery" className="section bg-white">
      
      {/* Title */}
      <h2 className="section-title">
        Gallery
      </h2>

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
  job,
  img,
}: {
  name: string;
  role: string;
  job: string;
  img: string;
}) {
  const [imgSrc, setImgSrc] = useState(img);

  return (
    <div className="card card-hover overflow-hidden">

      {/* Image */}
      <img
        src={imgSrc}
        onError={() => setImgSrc("/fallback.jpg")}
        className="w-full h-72 object-cover"
        alt={name}
      />

      {/* Content */}
      <div className="p-6 text-center">

        <h3 className="font-cormorant text-2xl text-primary">
          {name}
        </h3>

        <p className="text-accent mt-2">{role}</p>

        <p className="text-muted mt-1 text-sm">{job}</p>

      </div>
    </div>
  );
}