import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({
  className = "",
  iconSize = 20,
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary transition-colors hover:text-primary"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary transition-colors hover:text-primary"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        href={SOCIAL_LINKS.email}
        className="text-text-secondary transition-colors hover:text-primary"
        aria-label="Email"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
}
