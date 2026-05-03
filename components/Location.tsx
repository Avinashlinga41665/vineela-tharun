export default function Location() {
  return (
    <section
      id="venue"
      className="section relative overflow-hidden bg-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95" />

      {/* Content */}
      <div className="container-custom relative z-10">

        {/* Title */}
        <h2 className="section-title">
          Venue
        </h2>

        {/* Venue Name */}
        <p className="font-cormorant text-xl text-primary mb-2">
          Taj Palace
        </p>

        {/* Location */}
        <p className="text-muted mb-8">
          Hyderabad, India
        </p>

        {/* Map */}
        <div className="flex justify-center mb-8">
          <div className="card overflow-hidden bg-white shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              width="420"
              height="260"
              className="block"
            />
          </div>
        </div>

        {/* Button */}
        <a
          href="https://maps.google.com/?q=Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border border-[#D4AF37] text-[#D4AF37] 
          rounded-full hover:bg-[#D4AF37] hover:text-white transition"
        >
          Open in Maps
        </a>

      </div>
    </section>
  );
}