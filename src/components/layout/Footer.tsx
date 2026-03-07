import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {SITE_NAME}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/40">
              Building fast, thoughtful software in San Francisco.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
                Pages
              </p>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
                Connect
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Github size={14} /> GitHub
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a
                  href={SOCIAL_LINKS.email}
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Mail size={14} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-6 text-xs text-white/25">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
