export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 px-6 text-center bg-[#FFF8F3]"
    >


      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#FFF8F3]/95"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Title */}
        <h2 className="text-3xl font-serif mb-6 text-[#2C2C2C]">
          Need Help?
        </h2>

        <p className="text-gray-600 mb-10">
          For directions or any assistance, feel free to reach out
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">

          {/* Groom */}
          <div className="p-6 rounded-2xl border border-[#E5D7C6] bg-white shadow-sm">
            <p className="text-sm text-gray-500">Groom</p>
            <p className="font-[var(--font-playfair)] text-lg text-black mb-2">Tharun</p>

            <a href="https://wa.me/919999999999" target="_blank" className="block text-green-600 mb-2">
              💬 WhatsApp
            </a>

            <a href="tel:+919999999999" className="text-[#2C2C2C]">
              📞 +91 99999 99999
            </a>
          </div>

          {/* Bride */}
          <div className="p-6 rounded-2xl border border-[#E5D7C6] bg-white shadow-sm">
            <p className="text-sm text-gray-500">Bride</p>
            <p className="font-[var(--font-playfair)] text-lg text-black mb-2">Vineela</p>

            <a href="https://wa.me/919912925316" target="_blank" className="block text-green-600 mb-2">
              💬 WhatsApp
            </a>

            <a href="tel:+919912925316" className="text-[#2C2C2C]">
              📞 +91 9912925316
            </a>
          </div>

        </div>

        {/* Note */}
        <p className="text-sm text-gray-500 mt-10 italic">
          We’re happy to help you reach the venue 😊
        </p>

      </div>
    </section>
  );
}