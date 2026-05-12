export default function Home() {
  const skills = [
    "HTML",
    "CSS",
    "PHP",
    "Java",
    "JavaScript",
    "C++",
  ];

  const portfolios = [
    {
      title: "Web",
      desc: "Website Company profile, Personal website, artikel langsung japri saja.",
      image: "website.png",
    },
    {
      title: "Aplikasi Akuntansi",
      desc: "Aplikasi Keuangan Perusahaan maupun UMKM, saat ini sudah membantu 5 Bisnis UMKM untuk Grow.",
      image: "akuntansi.png",
    },
    {
      title: "ERP Perusahaan",
      desc: "Sistem Lengkap ERP perusahaan dengan batasan akses masing masing per-bagian kerja.",
      image: "ERP.png",

    },
  ];

  return (
    <main className="bg-[#050816] text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 md:px-16 py-20 border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* FOTO */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-40"></div>

              <div className="relative w-64 h-64 rounded-full border-[6px] border-purple-500 overflow-hidden shadow-[0_0_80px_rgba(168,85,247,0.5)]">
                <img
                  src="1.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <p className="text-lg text-purple-300 mb-2">Halo, Saya</p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Abdillah
              <br />
              Syakir
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
              Web Developer dan Software Enthusiast yang fokus membangun
              website modern, Website ERP, dan aplikasi Akuntansi yang bermanfaat.
            </p>

            {/* KONTAK */}
            <div className="mt-8 space-y-3 text-gray-300">
              <p>📍 Pekalongan, Indonesia</p>
              <p>📞 089666625759</p>
              <p>✉️ abdlhsyakir@gmail.com</p>
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-semibold shadow-lg shadow-purple-500/30">
                Lihat Portofolio
              </button>

              <a
                href="https://wa.me/6289666625759"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition inline-block"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-16 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black">
            Bahasa Pemrograman
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-400 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`flex items-center ${index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
                  }`}
              >
                <div className="w-full md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-black text-xl">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">{skill}</h3>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="px-6 md:px-16 py-24 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            Portofolio
          </h2>

          <p className="text-gray-400 mt-4">
            Beberapa project yang pernah saya kerjakan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolios.map((item) => (
            <div
              key={item.title}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition duration-300"
            >
              <div className="h-52 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 flex items-center justify-center text-5xl font-black">
                <img
                  src={item.image}
                  alt={item.title}
                  
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-6 px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition">
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-white/10">
        © 2026 Syakir Abdillah. All rights reserved.
      </footer>
    </main>
  );
}