import { profile } from "../lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="kontak"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24 md:px-16"
    >
      <Reveal className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-cyan-400/10 p-10 text-center md:p-14">
        <h2 className="text-3xl font-black md:text-5xl">
          Punya project atau ide?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-gray-300">
          Ceritakan kebutuhan bisnismu. Saya siap membantu membangun website,
          aplikasi akuntansi, atau sistem ERP yang sesuai.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-purple-600 px-7 py-3 font-semibold shadow-lg shadow-purple-500/30 transition hover:-translate-y-0.5 hover:bg-purple-700"
          >
            Chat via WhatsApp
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/20 px-7 py-3 transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Kirim Email
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">📍 {profile.location}</p>
      </Reveal>
    </section>
  );
}