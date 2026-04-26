export default function Events() {
  const events = [
    { name: "Haldi", date: "Dec 10", time: "Morning" },
    { name: "Mehendi", date: "Dec 11", time: "Evening" },
    { name: "Reception", date: "Dec 12", time: "Night" },
  ];

  return (
    <section className="py-16 px-6 text-center bg-white">

      {/* Title */}
      <h2 className="text-3xl font-serif mb-12 text-[#2C2C2C]">
        Wedding Events
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl border border-[#E5D7C6] shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#1F2937]">
              {event.name}
            </h3>

            <p className="text-gray-600">
              {event.date}
            </p>

            <p className="text-gray-500">
              {event.time}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}