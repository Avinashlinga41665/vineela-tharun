export default function Location() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden py-20 px-6 text-center bg-white"
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Title */}
        <h2 className="text-3xl font-serif mb-6 text-[#2C2C2C]">
          Venue
        </h2>

        <p className="text-lg text-gray-700 mb-2 font-medium">
          Taj Palace
        </p>

        <p className="text-gray-500 mb-8">
          Hyderabad, India
        </p>

        {/* Map */}
        <div className="flex justify-center mb-8">
          <div className="rounded-2xl overflow-hidden border border-[#E5D7C6] shadow-md bg-white">
            <iframe
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              width="400"
              height="250"
              className="block"
            ></iframe>
          </div>
        </div>

        {/* Button */}
        <a
          href="https://maps.google.com/?q=Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border border-[#D4AF37] text-[#D4AF37] 
          rounded-full hover:bg-[#D4AF37] hover:text-white transition duration-300"
        >
          Open in Maps
        </a>

      </div>
    </section>
  );
}