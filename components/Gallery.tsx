export default function Gallery() {
  const images = [
    "https://source.unsplash.com/400x400/?wedding",
    "https://source.unsplash.com/401x400/?couple",
    "https://source.unsplash.com/402x400/?engagement",
    "https://source.unsplash.com/403x400/?love",
  ];

  return (
    <section className="py-16 px-6 text-center bg-white">

      <h2 className="text-3xl font-serif mb-10 text-[#2C2C2C]">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl">
            <img
              src={src}
              className="w-full h-48 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

    </section>
  );
}