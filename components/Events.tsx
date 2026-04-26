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

  /* ✅ Close on ESC key */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="py-20 px-6 text-center bg-white">

      <h2 className="text-3xl font-serif mb-12 text-[#2C2C2C]">
        Wedding Events
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <motion.div
            key={event.id}
            layoutId={`card-${event.id}`}
            onClick={() => setSelected(event)}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer p-8 rounded-2xl 
            border border-[#E5D7C6] 
            bg-[#F8F1EC] 
            shadow-sm 
            hover:shadow-lg 
            hover:border-[#D4AF37] 
            transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#1F2937]">
              {event.name}
            </h3>

            <p className="text-gray-600 mb-1">{event.date}</p>
            <p className="text-gray-500">{event.time}</p>
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

            {/* Expanding Card */}
            <motion.div
              layoutId={`card-${selected.id}`}
              className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-lg 
              -translate-x-1/2 -translate-y-1/2 
              bg-white rounded-2xl p-6 shadow-xl"
              initial={{ rotateY: -6, scale: 0.95 }}
              animate={{ rotateY: 0, scale: 1 }}
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
              <h3 className="text-2xl font-serif mb-3 text-[#2C2C2C]">
                {selected.name}
              </h3>

              <p className="text-gray-600 mb-2">
                {selected.date} • {selected.time}
              </p>

              <p className="text-gray-500 mb-6 leading-relaxed">
                {selected.desc}
              </p>

              {/* Close */}
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