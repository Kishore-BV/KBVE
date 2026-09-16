import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

interface ContactProps {
  email: string;
}

export default function Contact({ email }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-[#EBE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E] block mb-3">
            08 / Contact
          </span>
          <h2
            id="contact-headline"
            className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl text-[#171717] tracking-tight leading-[1.1] mb-6"
          >
            Got an interesting engineering problem?
          </h2>
          <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed mb-8 max-w-xl">
            I’m interested in robotics, UAV systems, automation and hands-on product-development roles.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <a
              id="contact-email-link"
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded bg-[#171717] text-[#F9F8F5] hover:bg-[#2E2E2E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/40"
            >
              <Mail size={16} aria-hidden="true" />
              <span>Say hello</span>
            </a>

            <button
              id="copy-email-button"
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address to clipboard"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-3 rounded border border-[#D5D0C5] text-[#262626] hover:border-[#171717] hover:bg-[#EFECE6]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/30 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-600" aria-hidden="true" />
                  <span className="text-emerald-700 font-mono-code text-xs">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={15} className="text-[#737373]" aria-hidden="true" />
                  <span className="font-mono-code text-xs text-[#525252]">{email}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
