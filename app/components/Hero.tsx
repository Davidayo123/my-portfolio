"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* ── Cosmic glow orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-transparent blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-blue-600/10 blur-[100px] animate-blob" />
        <div className="absolute bottom-[15%] right-[10%] w-72 h-72 rounded-full bg-purple-500/10 blur-[100px] animate-blob-delay-2" />
        <div className="absolute bottom-[30%] left-[30%] w-48 h-48 rounded-full bg-pink-500/5 blur-[80px] animate-blob-delay-4" />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/40"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="section-badge">
            <Terminal size={14} />
            <span>Available for Work</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.08]"
        >
          Hi, I&apos;m David.
          <br />
          <span className="gradient-text">AI Engineer.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center w-full"
        >
          <p className="text-base sm:text-lg md:text-xl text-[#8888a0] text-center max-w-2xl mx-auto leading-relaxed">
            Transforming complex challenges into scalable, intelligent solutions.
            Specializing in machine learning, full-stack engineering, and data-driven
            innovation to build impactful software.
          </p>
        </motion.div>
        <br />
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-12 mt-8"
        >
          <a href="#projects" className="glow-button glow-button-primary">
            <Sparkles size={18} />
            View Projects
            <ArrowUpRight size={18} />
          </a>
          <a href="#contact" className="glow-button glow-button-ghost">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
