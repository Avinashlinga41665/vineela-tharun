"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Intro show={showIntro} onOpen={() => setShowIntro(false)} />

      {!showIntro && (
        <>
          {/* Your entire website */}
          <Navbar />
          <Hero />
          <Location />
          <Footer />
        </>
      )}
    </>
  );
}