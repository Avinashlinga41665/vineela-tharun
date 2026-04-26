export default function Location() {
  return (
    <section className="py-16 px-6 text-center bg-[#FFF8F3]">

      <h2 className="text-3xl font-serif mb-6 text-[#2C2C2C]">Venue</h2>

      <p className="mb-6 text-gray-600">
        Taj Palace, Hyderabad
      </p>

      <div className="flex justify-center mb-6">
        <iframe
          src="https://www.google.com/maps?q=Hyderabad&output=embed"
          width="400"
          height="250"
          className="rounded-xl border shadow"
        ></iframe>
      </div>

      <a
        href="https://maps.google.com/?q=Hyderabad"
        target="_blank"
        className="inline-block px-6 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-white transition"
      >
        Open in Maps
      </a>

    </section>
  );
}