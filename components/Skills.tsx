"use client";

import { motion } from "motion/react";
import { skillGroups } from "../lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="skill"
      className="scroll-mt-20 border-t border-white/10 px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl font-black md:text-5xl">Bahasa Pemrograman</h2>
          <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
          <p className="mt-5 text-gray-400">
            Teknologi yang saya pakai untuk membangun produk digital.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 text-xl">
                    {group.icon}
                  </span>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                </div>

                <ul className="space-y-5">
                  {group.items.map((skill, si) => (
                    <li key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + si * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}