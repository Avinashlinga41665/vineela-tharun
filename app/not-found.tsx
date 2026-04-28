export const metadata = {
  title: "Page Not Found | Tharun & Vineela Wedding",
  verification: {
    google: "XYZ123",
  },
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#FFF8F3]">

      <img src="/GaneshIcon.png" alt="Ganesh" className="mx-auto object-contain opacity-90"/>
       {/* Title */}
      <h1 className="font-[var(--font-playfair)] text-6xl text-[#2C2C2C] mb-4">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl text-gray-700 mb-4">
        Page Not Found
      </h2>

      {/* Message */}
      <p className="text-gray-500 mb-8 max-w-md">
        Looks like this page wandered off from the wedding celebrations 💫
      </p>

      {/* Button */}
      <a
        href="/"
        className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] 
        rounded-full hover:bg-[#D4AF37] hover:text-white transition"
      >
        Back to Invitation
      </a>

    </section>
  );
}