"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Davidayo123" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/david-ayotunde-a08b31219/?trk=opento_sprofile_details" },
  { icon: Mail, label: "Email", href: "mailto:ayotundeferanmi09@gmail.com" },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Using Web3Forms — free, no-backend contact form service
      // Replace YOUR_ACCESS_KEY with your actual Web3Forms access key from https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "03eb5f3c-e52e-4a14-840c-9d34ceab8cb1", // ← Replace with your Web3Forms key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 flex flex-col justify-center items-center">
      {/* Background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-600/[0.05] blur-[120px] pointer-events-none" />

      <div ref={ref} className="section-container relative z-10 w-full">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-28 space-y-8"
        >
          <span className="section-badge">
            <Mail size={14} />
            Get in Touch
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s{" "}
            <span className="gradient-text">work together</span>
          </h2>

          <div className="flex justify-center w-full">
            <p className="text-[#8888a0] max-w-lg mx-auto text-center leading-relaxed">
              I&apos;m currently looking to join a cross-functional team that
              values improving people&apos;s lives through intelligent technology.
              Have a project in mind? Let&apos;s talk.
            </p>
          </div>
          <br />
        </motion.div>

        {/* Contact grid: Form + Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
        >
          {/* ── Contact Form (3 cols) ── */}
          <div className="lg:col-span-3 glass-card gradient-border-top p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#8888a0]"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-[#5a5a72] text-sm focus:outline-none focus:border-purple-500/30 focus:bg-white/[0.05] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#8888a0]"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-[#5a5a72] text-sm focus:outline-none focus:border-purple-500/30 focus:bg-white/[0.05] transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#8888a0]"
                >
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-[#5a5a72] text-sm focus:outline-none focus:border-purple-500/30 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full glow-button glow-button-primary justify-center !py-4 text-base ${status === "sent"
                  ? "!bg-green-600 !shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                  : ""
                  } ${status === "sending" ? "opacity-80 cursor-wait" : ""}`}
              >
                {status === "idle" && (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
                {status === "sending" && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <Send size={18} />
                    Failed — Try Again
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── Info Card (2 cols) ── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick contact card */}
            <div className="glass-card gradient-border-top p-8 space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Contact</h3>

              <div className="space-y-4">
                <a
                  href="mailto:ayotundeferanmi09@gmail.com"
                  className="flex items-center gap-3 text-[#8888a0] hover:text-purple-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/15 group-hover:border-purple-500/20 transition-all">
                    <Mail size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5a5a72] mb-0.5">Email</div>
                    <div className="text-sm text-white">ayotundeferanmi09@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-[#8888a0]">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center">
                    <ArrowUpRight size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5a5a72] mb-0.5">
                      Response Time
                    </div>
                    <div className="text-sm text-white">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links card */}
            <div className="glass-card gradient-border-top p-8 space-y-4">
              <h3 className="text-lg font-semibold text-white">Find Me Online</h3>
              <div className="flex flex-col gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[#8888a0] hover:text-purple-400 hover:bg-purple-500/8 hover:border-purple-500/12 transition-all duration-300 group"
                  >
                    <social.icon size={18} />
                    <span className="text-sm font-medium">{social.label}</span>
                    <ArrowUpRight
                      size={14}
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
