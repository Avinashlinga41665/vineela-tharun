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
const events: EventType[] = [
{
id: 1,
name: "Haldi",
date: "Aug 10",
time: "Morning",
desc: "A joyful ceremony full of colors, blessings, and laughter as we begin our wedding celebrations.",
img: "/Haldi.png",
},
{
id: 2,
name: "Mehendi",
date: "Aug 11",
time: "Evening",
desc: "An evening filled with music, dance, traditions, and beautiful mehendi designs.",
img: "/Mehendi.png",
},
{
id: 3,
name: "Reception",
date: "Aug 12",
time: "Night",
desc: "Join us for a grand celebration as we share our joy and happiness with family and friends.",
img: "/Reception.png",
},
];

const [selected, setSelected] = useState<EventType | null>(null);

useEffect(() => {
const handleKey = (e: KeyboardEvent) => {
if (e.key === "Escape") {
setSelected(null);
}
};


window.addEventListener("keydown", handleKey);

return () => {
  window.removeEventListener("keydown", handleKey);
};


}, []);

return ( <section
   id="events"
   className="relative overflow-hidden py-24 bg-[#FFF8F3]"
 >
{/* Gold Glow */} <div
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

  {/* Floating Particles */}
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
        Wedding Events
      </h2>

      <p className="relative mt-3 text-accent tracking-[0.25em] uppercase text-xs md:text-sm">
        Celebrate Every Moment With Us
      </p>

      <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-5" />
    </div>

    {/* Event Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {events.map((event, i) => (
        <motion.div
          key={event.id}
          layoutId={`card-${event.id}`}
          onClick={() => setSelected(event)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className="
            group
            bg-white
            rounded-[32px]
            overflow-hidden
            shadow-xl
            cursor-pointer
            border
            border-[#D4AF37]/10
            hover:border-[#D4AF37]/40
            transition-all
          "
        >
          <div className="relative overflow-hidden">
            <img
              src={event.img}
              alt={event.name}
              className="
                w-full
                h-60
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-black/15" />

            <div
              className="
                absolute
                top-4
                right-4
                bg-white/90
                backdrop-blur-sm
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
              "
            >
              {event.date}
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-cormorant text-3xl text-primary mb-2">
              {event.name}
            </h3>

            <p className="text-muted">
              {event.time}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Modal */}
    <AnimatePresence>
      {selected && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          />

          <motion.div
            layoutId={`card-${selected.id}`}
            className="
              fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-50
              w-[92%]
              max-w-xl
              bg-white
              rounded-[32px]
              overflow-hidden
              shadow-2xl
            "
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.img}
              alt={selected.name}
              className="
                w-full
                h-72
                object-cover
              "
            />

            <div className="p-8">
              <h3 className="font-cormorant text-4xl text-primary mb-3">
                {selected.name}
              </h3>

              <p className="text-muted mb-4">
                {selected.date} • {selected.time}
              </p>

              <p className="text-muted leading-relaxed mb-8">
                {selected.desc}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-[#D4AF37]
                  text-[#D4AF37]
                  hover:bg-[#D4AF37]
                  hover:text-white
                  transition-all
                "
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

  </div>
</section>


);
}
