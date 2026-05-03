"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type EventType = {
  id: number;
  name: string;
  date: string;
  time: string;
  desc: string;
  img: string;
};

export default function Events() {
  const [selected, setSelected] = useState<EventType | null>(null);

  const events: EventType[] = [
    {
      id: 1,
      name: "Haldi",
      date: "Aug 10",
      time: "Morning",
      desc: "A joyful ceremony full of colors and laughter.",
      img: "/Haldi.png",
    },
    {
      id: 2,
      name: "Mehendi",
      date: "Aug 11",
      time: "Evening",
      desc: "Music, dance and mehendi celebration.",
      img: "/Mehendi.png",
    },
    {
      id: 3,
      name: "Reception",
      date: "Aug 12",
      time: "Night",
      desc: "Join us for a grand celebration.",
      img: "/Reception.png",
    },
  ];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="events" className="section bg-[#FFF8F3]">

      {/* Title */}
      <h2 className="section-title">
        Wedding Events
      </h2>

      {/* Cards */}
      <div className="container-custom grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <motion.div
            key={event.id}
            layoutId={`card-${event.id}`}
            onClick={() => setSelected(event)}
            whileHover={{ scale: 1.03 }}
            className="card card-hover cursor-pointer p-6 bg-white hover:border-[#D4AF37]"
          >
            <h3 className="font-cormorant text-xl text-primary mb-2">
              {event.name}
            </h3>

            <p className="text-muted mb-1">{event.date}</p>
            <p className="text-muted text-sm">{event.time}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Card */}
            <motion.div
              layoutId={`card-${selected.id}`}
              className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-lg 
              -translate-x-1/2 -translate-y-1/2 
              card bg-white p-6 shadow-xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={selected.img}
                alt={selected.name}
                onError={(e) =>
                  ((e.target as HTMLImageElement).src = "/fallback.jpg")
                }
                className="rounded-xl mb-6 w-full h-56 object-cover"
              />

              {/* Content */}
              <h3 className="font-cormorant text-2xl text-primary mb-3">
                {selected.name}
              </h3>

              <p className="text-muted mb-2">
                {selected.date} • {selected.time}
              </p>

              <p className="text-muted mb-6 leading-relaxed">
                {selected.desc}
              </p>

              {/* Button */}
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-2 border border-[#D4AF37] text-[#D4AF37] 
                rounded-full hover:bg-[#D4AF37] hover:text-white transition"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}