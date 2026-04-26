import Countdown from "@/components/Countdown";

export default function Hero() {
  return (
    <section className="py-20 px-6 flex flex-col items-center justify-center text-center bg-[#FFF8F3] min-h-[90vh]">

      {/* Ganesh Icon */}
      <div className="mb-6">
        <img
          src="/GaneshIcon.png"
          alt="Ganesh"
          className="w-20 h-20 mx-auto object-contain opacity-90"
        />
      </div>

      {/* Invitation Text */}
      <p className="uppercase tracking-widest text-sm text-gray-600 mb-4">
        You’re Invited
      </p>

      {/* Names */}
      <h1 className="font-[var(--font-playfair)] text-6xl md:text-7xl text-[#2C2C2C] mb-6 tracking-[0.05em] leading-tight">
        Tharun <span className="mx-3 text-[#D4AF37]">&</span> Vineela
      </h1>

      {/* Gold Divider */}
      <div className="w-16 h-[2px] bg-[#D4AF37] mb-6"></div>

      {/* Subtitle */}
      <p className="text-lg text-[#6B7280] max-w-md leading-relaxed mb-6">
        Together with love, we invite you to celebrate our wedding
      </p>

      {/* Date */}
      <p className="text-xl font-medium text-[#1F2937] mb-2">
        August 16, 2026
      </p>

      {/* Location */}
      <p className="text-md text-gray-600 mb-4">
        Hyderabad
      </p>
       <div className="text-sm font-medium text-[#1F2937] mb-2">
       <Countdown />
      </div>
      {/* Tagline */}
      <p className="text-sm text-gray-500 italic">
        ✨ Save the date and celebrate with us 💫
      </p>

    </section>
  );
}