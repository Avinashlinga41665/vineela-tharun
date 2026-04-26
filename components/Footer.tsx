export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-center py-10 px-6 text-white">

      {/* Couple (main focus still) */}
      <h2 className="text-2xl font-serif mb-2">
        Tharun & Vineela
      </h2>

      <p className="text-gray-400 mb-4">
        December 12, 2026
      </p>

      <div className="w-10 h-[2px] bg-[#D4AF37] mx-auto my-4"></div>

      {/* Company credit */}
      <p className="text-gray-500 text-sm">
        Designed & Developed by{" "}
        <span className="text-[#D4AF37] font-medium">
          CodeWeave {}
        </span>
      </p>

    </footer>
  );
}