import Image from "next/image";
import { store } from "../lib/data";
import Reveal from "./Reveal";

export default function Store() {
  return (
    <section
      id="toko"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-14 text-center">
                  <h2 className="text-4xl font-black md:text-5xl">Toko Sandang </h2>
                  <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
                  <p>Toko Sandang yang menjamin kualitas produk. dikelola dengan sepenuh hati.</p>
                 
                </Reveal>
        <Reveal>
            
          <a
            href={store.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-orange-400/60 hover:bg-orange-500/10 md:flex-row"
          >
            <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20 md:h-28 md:w-40">
              <Image
                src={store.image}
                alt={store.title}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold md:text-2xl">{store.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{store.desc}</p>
            </div>

            <span className="shrink-0 rounded-full bg-orange-500 px-6 py-3 font-semibold shadow-lg shadow-orange-500/30 transition group-hover:bg-orange-600">
              {store.button} →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}