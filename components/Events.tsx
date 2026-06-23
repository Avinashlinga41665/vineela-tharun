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

const [selected, setSelected] = useState<EventType | null>(null);

useEffect(() => {
const handleKey = (e: KeyboardEvent) => {
if (e.key === "Escape") {
setSelected(null);
}
};

```
window.addEventListener("keydown", handleKey);

return () => {
  window.removeEventListener("keydown", handleKey);
};
```

}, []);

return ( <section
   id="events"
   className="py-20 bg-[#FFF8F3]"
 > <div className="container mx-auto px-4 md:px-6">

```
    <div className="text-center mb-14">
      <h2 className="font-cormorant text-5xl md:text-6xl text-primary">
        Wedding Events
      </h2>

      <p className="mt-3 text-accent tracking-[0.25em] uppercase text-xs md:text-sm">
        Celebrate Every Moment With Us
      </p>
    </div>

    {/* Event Cards */}
    <div className="grid md:grid-cols-3 gap-6">
      {events.map((event, i) => (
        <motion.div
          key={event.id}
          layoutId={`card-${event.id}`}
          onClick={() => setSelected(event)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.04 }}
          className="
            bg-white
            rounded-3xl
            p-6
            shadow-lg
            cursor-pointer
            border
            border-transparent
            hover:border-[#D4AF37]
            transition-all
          "
        >
          <h3 className="font-cormorant text-2xl text-primary mb-2">
            {event.name}
          </h3>

          <p className="text-muted">
            {event.date}
          </p>

          <p className="text-muted text-sm">
            {event.time}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Modal */}
    <AnimatePresence>
      {selected && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
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
              max-w-lg
              bg-white
              rounded-3xl
              p-6
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
                h-56
                object-cover
                rounded-2xl
                mb-6
              "
            />

            <h3 className="font-cormorant text-3xl text-primary mb-3">
              {selected.name}
            </h3>

            <p className="text-muted mb-2">
              {selected.date} • {selected.time}
            </p>

            <p className="text-muted leading-relaxed mb-6">
              {selected.desc}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="
                px-6
                py-2
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
          </motion.div>
        </>
      )}
    </AnimatePresence>

  </div>
</section>

);
}
