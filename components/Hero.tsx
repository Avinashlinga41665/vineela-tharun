export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-[#FFF8F3]">

      <div className="center">
       
          <div className="overflow-hidden rounded-xl">
            <img
              src={"Ganeshicon.png"}
              className="w-full h-48 object-cover hover:scale-110 transition duration-500"
            />
          </div>
          </div>


      <p className="uppercase tracking-widest text-sm  text-gray-700 mb-4">
        You’re Invited
      </p>

      <h1 className="text-5xl md:text-6xl font-serif mb-4 text-[#2C2C2C]">
        Tharun & Vineela
      </h1>

      <div className="w-16 h-[2px] bg-[#D4AF37] mb-6"></div>

      <p className="text-gray-600 text-lg mb-4 max-w-md text-[#6B7280]">
        Together with their families, request the pleasure of your presence
      </p>

      <p className="text-xl font-medium text-[#1F2937]">
        December 12, 2026
      </p>

    </section>
  );
}