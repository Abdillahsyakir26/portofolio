"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { profile, stats } from "../lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-32 md:px-16 md:pt-40"
    >
      {/* Latar bercahaya yang bergerak pelan */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[auto_1fr]">
        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full bg-purple-500 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-64 w-64 overflow-hidden rounded-full border-[6px] border-purple-500 shadow-[0_0_80px_rgba(168,85,247,0.5)] md:h-72 md:w-72"
            >
              <Image
                src={profile.photo}
                alt={`Foto ${profile.name}`}
                width={288}
                height={288}
                priority
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* TEKS */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-2 text-lg text-purple-300">
            Halo, saya
          </motion.p>

          <motion.h1
            variants={item}
            className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-xl font-semibold text-gray-200"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg leading-relaxed text-gray-400"
          >
            {profile.intro}
          </motion.p>

          <motion.p variants={item} className="mt-5 text-gray-400">
            📍 {profile.location}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portofolio"
              className="rounded-full bg-purple-600 px-7 py-3 font-semibold shadow-lg shadow-purple-500/30 transition hover:-translate-y-0.5 hover:bg-purple-700"
            >
              Lihat Portofolio
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Hubungi Saya
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-3xl font-black text-transparent md:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-gray-400">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}