"use client";

import Countdown from "@/components/Countdown";

export default function Hero() {
  return (
    <section
      id="home"
      className="section relative flex items-center justify-center min-h-[80vh]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FFF8F3]/90" />

      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col items-center">

        {/* Ganesh */}
        <div className="mb-6">
          <img
            src="/GaneshIcon.png"
            alt="Ganesh"
            className="mx-auto object-contain opacity-90"
          />
        </div>

        {/* Invite Text */}
        <p className="uppercase tracking-[0.2em] text-xs text-muted mb-4">
          You’re Invited
        </p>

        {/* Names */}
        <h1 className="text-5xl md:text-7xl leading-[1.2] mb-6 text-primary">

          <span className="font-greatVibes">
            Tharun
          </span>

          <span className="font-cormorant text-accent text-3xl md:text-4xl mx-3">
            &
          </span>

          <span className="font-greatVibes">
            Vineela
          </span>

        </h1>

        {/* Divider */}
        <div className="w-20 h-0.5 bg-[#D4AF37] mb-6" />

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#6B7280] max-w-lg leading-relaxed mb-5">
          Together with love, we invite you to celebrate our wedding
        </p>

        {/* Date */}
        <p className="text-lg md:text-xl font-medium text-[#1F2937]">
          August 23, 2026
        </p>

        {/* Location */}
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Hyderabad
        </p>

        {/* Countdown */}
        <div className="mb-6">
          <Countdown />
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-500 italic tracking-wide mb-2">
          ✨ Save the date and celebrate with us 💫
        </p>

      </div>
    </section>
  );
}