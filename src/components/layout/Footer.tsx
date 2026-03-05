import SocialLinks from "@/components/shared/SocialLinks";
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <p
              className="text-lg font-bold text-text"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {SITE_NAME}
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              Building things that matter.
            </p>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
