"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden bg-[#FFF8F3]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#FFF8F3]" />

      {/* Soft Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">

        {/* Title */}
        <h2 className="section-title">
          Need Help?
        </h2>

        {/* Subtitle */}
        <p className="text-muted mb-12 max-w-md mx-auto leading-relaxed">
          For directions or any assistance, feel free to reach out anytime
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">

          {[
            {
              role: "Groom",
              name: "Tharun",
              phone: "+919999999999",
              wa: "919999999999",
            },
            {
              role: "Bride",
              name: "Vineela",
              phone: "+919912925316",
              wa: "919912925316",
            },
          ].map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -4,
              }}
              className="card p-7 text-center bg-white/80 backdrop-blur-sm
              hover:shadow-xl transition duration-300"
            >

              {/* Role */}
              <p className="text-sm tracking-wide text-muted uppercase mb-2">
                {person.role}
              </p>

              {/* Name */}
              <h3 className="font-cormorant text-2xl text-primary mb-5">
                {person.name}
              </h3>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${person.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2
                text-green-600 hover:text-green-700 transition mb-3"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${person.phone}`}
                className="flex items-center justify-center gap-2
                text-primary hover:text-[#D4AF37] transition"
              >
                <span>📞</span>
                <span>{person.phone}</span>
              </a>

            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-muted mt-10 italic tracking-wide"
        >
          ✨ We’re happy to help you reach the venue 💫
        </motion.p>

      </div>
    </section>
  );
}