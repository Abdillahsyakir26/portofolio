"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { categories, profile, type Category, type Project } from "../lib/data";
import Reveal from "./Reveal";

type Selected = { project: Project; category: Category };

export default function Portfolio() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Selected | null>(null);

  // Tutup panel dengan tombol Esc dan kunci scroll halaman saat panel terbuka.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section
      id="portofolio"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-14 text-center">
          <h2 className="text-4xl font-black md:text-5xl">Portofolio</h2>
          <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
          <p className="mt-5 text-gray-400">
            Pilih kategori untuk melihat project, lalu klik project untuk
            melihat detailnya.
          </p>
        </Reveal>

        <div className="space-y-4">
          {categories.map((cat, i) => {
            const isOpen = openId === cat.id;
            return (
              <Reveal key={cat.id} delay={i * 0.08}>
                <div
                  className={`overflow-hidden rounded-3xl border bg-white/5 transition-colors duration-300 ${
                    isOpen ? "border-purple-500/50" : "border-white/10"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : cat.id)}
                    className="flex w-full items-center gap-5 p-5 text-left transition hover:bg-white/5"
                  >
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20">
                      <Image
                        src={cat.image}
                        alt=""
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold md:text-2xl">
                        {cat.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">{cat.desc}</p>
                      <p className="mt-2 text-xs text-purple-300">
                        {cat.projects.length} project
                      </p>
                    </div>

                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20"
                    >
                      ▾
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 border-t border-white/10 p-5">
                          {cat.projects.map((project, pi) => (
                            <motion.li
                              key={project.title}
                              initial={{ opacity: 0, x: -16 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + pi * 0.06 }}
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  setSelected({ project, category: cat })
                                }
                                className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:border-purple-500/50 hover:bg-purple-500/10"
                              >
                                <span className="font-semibold">
                                  {project.title}
                                </span>
                                <span className="text-sm text-purple-300 transition group-hover:translate-x-1">
                                  Lihat detail →
                                </span>
                              </button>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* PANEL DETAIL (meluncur dari kanan) */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />

            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label={selected.project.title}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 300 }}
              className="fixed right-0 top-0 z-[70] h-full w-full max-w-md overflow-y-auto border-l border-white/10 bg-[#0a0f24] p-8"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Tutup"
                className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
              >
                ✕
              </button>

              <p className="text-sm text-purple-300">
                {selected.category.title}
              </p>
              <h3 className="mt-1 text-3xl font-black">
                {selected.project.title}
              </h3>

              <div className="relative mt-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20">
                <Image
                  src={selected.category.image}
                  alt={selected.project.title}
                  fill
                  sizes="(max-width: 448px) 100vw, 448px"
                  className="object-cover"
                />
              </div>

              <p className="mt-6 leading-relaxed text-gray-300">
                {selected.project.desc}
              </p>

              <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-gray-400">
                Teknologi
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {selected.project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href={`${profile.whatsapp}?text=${encodeURIComponent(
                  `Halo, saya tertarik dengan ${selected.project.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block rounded-full bg-purple-600 px-6 py-3 text-center font-semibold shadow-lg shadow-purple-500/30 transition hover:bg-purple-700"
              >
                Tanya via WhatsApp
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}