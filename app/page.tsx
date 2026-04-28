"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#FFF8F3] to-[#FDEFEF] min-h-screen flex items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-[#F1E4D8] overflow-hidden"
      >
        <Navbar/>
        <Hero />
        <Gallery/>
        <Events />
        <Location />
        <Contact/>
        <Footer/>
      </motion.div>

    </main>
  );
}