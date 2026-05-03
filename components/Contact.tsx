export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden bg-[#FFF8F3]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FFF8F3]/95" />

      {/* Content */}
      <div className="container-custom relative z-10">

        {/* Title */}
        <h2 className="section-title">
          Need Help?
        </h2>

        {/* Subtitle */}
        <p className="text-muted mb-10">
          For directions or any assistance, feel free to reach out
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">

          {/* Groom */}
          <div className="card p-6 text-center">

            <p className="text-sm text-muted">Groom</p>

            <p className="font-cormorant text-lg text-primary mb-2">
              Tharun
            </p>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="block text-green-600 mb-2"
            >
              💬 WhatsApp
            </a>

            <a href="tel:+919999999999" className="text-primary">
              📞 +91 99999 99999
            </a>
          </div>

          {/* Bride */}
          <div className="card p-6 text-center">

            <p className="text-sm text-muted">Bride</p>

            <p className="font-cormorant text-lg text-primary mb-2">
              Vineela
            </p>

            <a
              href="https://wa.me/919912925316"
              target="_blank"
              className="block text-green-600 mb-2"
            >
              💬 WhatsApp
            </a>

            <a href="tel:+919912925316" className="text-primary">
              📞 +91 9912925316
            </a>
          </div>

        </div>

        {/* Note */}
        <p className="text-sm text-muted mt-10 italic">
          We’re happy to help you reach the venue 😊
        </p>

      </div>
    </section>
  );
}