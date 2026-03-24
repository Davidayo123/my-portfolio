"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Davidayo123" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/david-ayotunde-a08b31219/",
  },
  { icon: Mail, label: "Email", href: "mailto:ayotundeferanmi09@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#5a5a72]">
          © {new Date().getFullYear()} David. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a5a72] hover:text-purple-400 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
