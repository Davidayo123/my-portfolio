"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, FolderOpen, Cpu } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "3+", label: "Years Experience" },
  { icon: FolderOpen, value: "15+", label: "Projects Built" },
  { icon: Cpu, value: "10+", label: "Technologies" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="relative min-h-screen py-20 flex flex-col justify-center items-center">
      <div ref={ref} className="section-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 space-y-8"
        >
          <span className="section-badge">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Passionate about building{" "}
            <span className="gradient-text">intelligent solutions</span>
          </h2>
          <div className="flex justify-center w-full">
            <p className="text-[#8888a0] max-w-2xl mx-auto text-center text-base sm:text-lg leading-relaxed">
              I&apos;m a self-driven AI Engineer with a strong background in
              machine learning, deep learning, and full-stack development. I
              specialize in crafting production-grade systems — from RAG pipelines
              and NLP models to energy grid optimization and real-time analytics
              dashboards.
            </p>
          </div>
        </motion.div>


      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
            className="glass-card gradient-border-top p-10 text-center group"
          >
            <stat.icon
              size={28}
              className="mx-auto mb-5 text-purple-400 group-hover:text-purple-300 transition-colors"
            />
            <div className="text-3xl md:text-4xl font-extrabold gradient-text">
              {stat.value}
            </div>
            <div className="mt-3 text-sm text-[#8888a0] font-medium tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </section >
  );
}
