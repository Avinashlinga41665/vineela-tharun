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

 {/* Codeweave Credit */}
          <div className="mt-10 text-center">

            <p className="text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]-light/30">
              Designed & Developed By
            </p>

            <a href="https://myportfolio-rouge-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
              <h4 className="mt-1 inline-block font-serif text-m tracking-[0.12em] text-gold-light transition hover:text-[#D4AF37]-light">
                Codeweave
              </h4>
            </a>

            <p className="text-white text-sm mt-2">
              Crafting modern digital experiences.
            </p>

          </div>
      </div>
    </footer>
  );
}