"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music2,
  VolumeX,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const sections = ["home", "venue", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Music */

  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

const fadeIn = () => {
  if (!audioRef.current) return;

  audioRef.current.volume = 0.05;

  let volume = 0.05;

  const interval = setInterval(() => {

    volume += 0.03;

    if (volume >= 0.35) {
      volume = 0.35;
      clearInterval(interval);
    }

    audioRef.current!.volume = volume;

  }, 400);
};
useEffect(() => {
  const startMusic = async () => {
    if (!audioRef.current || playing) return;

    try {
      await audioRef.current.play();
      fadeIn();
      setPlaying(true);
    } catch (err) {
      console.log(err);
    }

    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
  };

  document.addEventListener("click", startMusic);
  document.addEventListener("touchstart", startMusic);

  return () => {
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
  };
}, [playing]);

const toggleMusic = async () => {

  if (!audioRef.current) return;

  try {

    if (playing) {

      audioRef.current.pause();

    } else {

      await audioRef.current.play();

      fadeIn();

    }

    setPlaying(!playing);

  } catch (err) {
    console.log(err);
  }

};

  /* Active Section */

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);

      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          threshold: 0.55,
        }
      );

      observer.observe(el);

      observers.push(observer);
    });

    return () =>
      observers.forEach((o) => o.disconnect());

  }, []);

  /* Navbar Background */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: .6 }}
        className={`
          fixed
          top-0
          left-0
          w-full
          z-[999]

          border-b
          border-[#E7D8C3]

          backdrop-blur-xl

          transition-all
          duration-300

          ${
            scrolled
              ? "bg-[#FFF8F3]/95 shadow-xl"
              : "bg-[#FFF8F3]/75"
          }
        `}
      >        {/* Gold Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2

            h-20
            w-96

            rounded-full

            bg-[#D4AF37]/10

            blur-3xl

            pointer-events-none
          "
        />

        {/* Container */}

        <div
          className="
            relative
            z-20

            mx-auto

            flex
            items-center
            justify-between

            max-w-7xl

            px-6
            py-4
          "
        >

          {/* Logo */}

          <button
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="
              font-cormorant

              text-2xl

              tracking-[0.15em]

              text-[#4B3725]
            "
          >
            <span className="hidden md:block">
              Tharun{" "}
              <span className="text-[#C89B3C]">
                &
              </span>{" "}
              Vineela
            </span>

            <span className="md:hidden">
              T{" "}
              <span className="text-[#C89B3C]">
                &
              </span>{" "}
              V
            </span>

          </button>

          {/* Desktop Navigation */}

          <div
            className="
              hidden
              md:flex

              items-center

              gap-10
            "
          >

            {sections.map((sec) => (

              <button
                key={sec}
                onClick={() =>
                  document
                    .getElementById(sec)
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className={`
                  relative

                  text-sm

                  tracking-[0.12em]

                  transition-all

                  ${
                    active === sec
                      ? "text-[#C89B3C]"
                      : "text-[#6E5A47] hover:text-[#C89B3C]"
                  }
                `}
              >

                {sec.charAt(0).toUpperCase() +
                  sec.slice(1)}

                <span
                  className={`
                    absolute
                    left-0
                    -bottom-1

                    h-[2px]

                    bg-[#C89B3C]

                    transition-all
                    duration-300

                    ${
                      active === sec
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                />

              </button>

            ))}            {/* Music Button */}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMusic}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                border
                border-[#D4AF37]/20

                bg-white/70

                text-[#C89B3C]

                shadow-md

                transition-all
                duration-300

                hover:bg-[#C89B3C]
                hover:text-white
              "
            >
              {playing ? (
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                  }}
                >
                  <Music2 size={18} />
                </motion.div>
              ) : (
                <VolumeX size={18} />
              )}
            </motion.button>

            {/* Maps Button */}

<motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={() =>
    window.open(
      "https://maps.app.goo.gl/AGjjpEv1c4byyqjD9",
      "_blank"
    )
  }
  className="
    flex
    h-10
    w-10
    items-center
    justify-center

    rounded-full

    border
    border-[#D4AF37]/20

    bg-[#FFFDF9]/80

    text-[#C89B3C]

    shadow-md

    transition-all
    duration-300

    hover:bg-[#C89B3C]
    hover:text-white
    hover:scale-110
    hover:shadow-[0_0_25px_rgba(212,175,55,.45)]
  "
>
  <MapPin size={18} />
</motion.button>

          </div>

          {/* Mobile Right Controls */}

<div className="md:hidden flex items-center gap-3">

  {/* Music */}

  <button
    onClick={toggleMusic}
    className="
      text-[#C89B3C]
      transition-all
      duration-300
      hover:scale-110
    "
  >
    {playing ? (
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <Music2 size={22} />
      </motion.div>
    ) : (
      <VolumeX size={22} />
    )}
  </button>

  {/* Hamburger */}

  <button
    onClick={() => setOpen(true)}
    className="
      text-[#4B3725]
    "
  >
    <Menu size={28} />
  </button>

</div>

        </div>        {/* ===================================== */}
        {/* Mobile Drawer */}
        {/* ===================================== */}

        <AnimatePresence>
          {open && (
            <>
              {/* Overlay */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="
                  fixed
                  inset-0
                  bg-black/40
                  backdrop-blur-sm
                  z-40
                "
              />

              {/* Drawer */}

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                className="
                  fixed
                  top-0
                  right-0

                  h-screen
                  w-[78%]
                  max-w-xs

                  bg-[#FFF8F3]

                  shadow-2xl

                  z-50

                  p-8
                "
              >

                {/* Header */}

                <div className="flex items-center justify-between mb-10">

                  <h2 className="font-cormorant text-3xl text-[#4B3725]">
                    Menu
                  </h2>

                  <button
                    onClick={() => setOpen(false)}
                    className="text-[#4B3725]"
                  >
                    <X size={24} />
                  </button>

                </div>

                {/* Links */}

                <div className="flex flex-col gap-6">

                  {sections.map((sec) => (

                    <button
                      key={sec}
                      onClick={() => {
                        document
                          .getElementById(sec)
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });

                        setOpen(false);
                      }}
                      className={`
                        text-left

                        text-lg

                        transition-all

                        ${
                          active === sec
                            ? "text-[#C89B3C]"
                            : "text-[#5F4B39]"
                        }
                      `}
                    >
                      {sec.charAt(0).toUpperCase() +
                        sec.slice(1)}
                    </button>

                  ))}

                </div>

                {/* Divider */}

                <div className="my-10 h-px bg-[#D4AF37]/20" />


      

                {/* Maps */}

                <button
                  onClick={() => {
                    document
                      .getElementById("venue")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });

                    setOpen(false);
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3

                    rounded-xl

                    border
                    border-[#D4AF37]/20

                    px-4
                    py-3

                    text-[#4B3725]

                    hover:bg-[#D4AF37]/10
                  "
                >
                  <MapPin size={18} />

                 Venue

                </button>

              </motion.div>

            </>
          )}
        </AnimatePresence>

      </motion.nav>

    </>
  );
}