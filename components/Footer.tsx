export default function Footer() {
  return (
    <footer className="section bg-[#1F1F1F] text-center text-white">

      <div className="container-custom">

        {/* Names */}
        <h2 className="font-cormorant text-2xl mb-2">
          Tharun 
          <span className="text-[#D4AF37] mx-2">&</span>
          Vineela
        </h2>

        {/* Date */}
        <p className="text-gray-400 mb-4">
          August 23, 2026
        </p>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4" />

        {/* Credit */}
        <p className="text-gray-500 text-sm">
          Designed & Developed by{" "}
          <a
            href="https://myportfolio-rouge-zeta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline"
          >
            CodeWeave
          </a>
        </p>

      </div>
    </footer>
  );
}