import { ArrowDownRight, Mail } from 'lucide-react';
import DecryptedText from './DecryptedText';
import { Scene } from './Scene';

interface HeroProps {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
}

export default function Hero({ name, role, headline, subheadline }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-10 sm:pt-14 md:pt-18 pb-16 sm:pb-24 border-b border-[#EBE7DF] overflow-hidden">
      {/* ThreeUI Landscape Snow Scene Background */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <Scene className="w-full h-full" />
        {/* Soft atmospheric gradient wash for pristine typographic contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F9F8F5]/92 via-[#F9F8F5]/80 to-[#F9F8F5]/35 pointer-events-none md:via-[#F9F8F5]/70 md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F9F8F5] via-[#F9F8F5]/70 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Status & Role Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#737373] bg-[#EFECE6]/90 backdrop-blur-xs px-2.5 py-1 rounded w-fit border border-[#E5E0D4]/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
            <span>Garuda Aerospace • New Product Dev</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono-code text-[#666666]">
            <span id="hero-role">{role}</span>
          </div>
        </div>

        {/* Decrypted Text Name / Display Title */}
        <h1 className="mb-4 sm:mb-6 select-none">
          <DecryptedText
            text={name || 'Kishore BV'}
            animateOn="inViewHover"
            revealDirection="start"
            sequential={true}
            speed={40}
            maxIterations={14}
            className="text-[#171717]"
            encryptedClassName="text-[#99948B] font-mono-code"
            parentClassName="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-[#171717] leading-none inline-block cursor-default"
          />
        </h1>

        {/* Core Statement */}
        <div className="max-w-3xl">
          <h2
            id="hero-headline"
            className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#171717] leading-[1.12] mb-6"
          >
            {headline}
          </h2>
          <p
            id="hero-subheadline"
            className="text-base sm:text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl font-normal"
          >
            {subheadline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4">
          <a
            id="hero-cta-work"
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded bg-[#171717] text-[#F9F8F5] hover:bg-[#2E2E2E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/40"
          >
            <span>View my work</span>
            <ArrowDownRight size={16} aria-hidden="true" />
          </a>
          <a
            id="hero-cta-contact"
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded border border-[#D5D0C5] text-[#262626] hover:border-[#171717] hover:bg-[#EFECE6]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/30"
          >
            <Mail size={15} className="text-[#737373]" aria-hidden="true" />
            <span>Get in touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
