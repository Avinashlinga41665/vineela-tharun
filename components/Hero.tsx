import Countdown from "@/components/Countdown";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 px-6 flex flex-col items-center justify-center text-center min-h-[90vh]"
    >


      {/* Soft overlay (VERY IMPORTANT) */}
      <div className="absolute inset-0 bg-[#FFF8F3]/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Ganesh Icon */}
        <div className="mb-4">
          <img
            src="/GaneshIcon.png"
            alt="Ganesh"
            className="mx-auto object-contain opacity-90"
          />
        </div>

        {/* Invitation Text */}
        <p className="uppercase tracking-widest text-sm text-gray-600 mb-3">
          You’re Invited
        </p>

        {/* Names */}
        <h1 className="font-greatVibes text-5xl md:text-7xl text-[#2C2C2C] tracking-[0.05em] leading-tight"> Tarun<span className="font-cormorant text-[#D4AF37] text-4xl md:text-5xl mx-2">&</span>Vineela</h1> 
        {/* Gold Divider */}
        <div className="w-20 h-[2px] bg-[#D4AF37] mb-5 mr-6"></div>

        {/* Subtitle */}
        <p className="text-lg text-[#6B7280] max-w-md leading-relaxed mb-5">
          Together with love, we invite you to celebrate our wedding
        </p>

        {/* Date */}
        <p className="text-xl font-medium text-[#1F2937] mb-1">
          August 23, 2026
        </p>

        {/* Location */}
        <p className="text-md text-gray-600 mb-3">
          Hyderabad
        </p>

        {/* Countdown */}
        <div className="mb-3">
          <Countdown />
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-500 italic">
          ✨ Save the date and celebrate with us 💫
        </p>

      </div>
      
    </section>
  );
}