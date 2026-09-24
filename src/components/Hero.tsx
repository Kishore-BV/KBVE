import { ArrowDownRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import DecryptedText from './DecryptedText';
import ProfileCard from './ProfileCard';
import { Scene } from './Scene';

interface HeroProps {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
}

export default function Hero({ name, role, headline, subheadline }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative border-b border-[#EBE7DF] overflow-hidden flex items-center"
    >
      {/* ThreeUI Landscape Scene Background */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <Scene className="w-full h-full" />
        {/* Soft atmospheric gradient wash for pristine typographic contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F9F8F5]/94 via-[#F9F8F5]/85 to-[#F9F8F5]/45 pointer-events-none md:via-[#F9F8F5]/80 md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F9F8F5] via-[#F9F8F5]/70 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content: Parallel Two-Column Layout within Normal Website Grid */}
      <div
        className="
          relative z-10
          mx-auto
          w-full
          max-w-5xl
          px-4
          sm:px-6
          md:px-8
          py-8
          sm:py-10
          md:py-12
          grid
          grid-cols-1
          md:grid-cols-12
          items-center
          gap-6
          lg:gap-8
        "
      >
        {/* LEFT COLUMN: Dominant Introduction (Parallel to Card) */}
        <div className="md:col-span-7 flex flex-col justify-center">
          {/* Decrypted Text Name / Display Title */}
          <h1 className="mb-2 sm:mb-3 select-none">
            <DecryptedText
              text={name || 'Kishore BV'}
              animateOn="inViewHover"
              revealDirection="start"
              sequential={true}
              speed={35}
              maxIterations={14}
              className="text-[#171717]"
              encryptedClassName="text-[#99948B] font-mono-code"
              parentClassName="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-[#171717] leading-none inline-block cursor-pointer"
              title="Hover or click to decrypt"
            />
          </h1>

          {/* Core Statement & Description */}
          <div className="space-y-3">
            <h2
              id="hero-headline"
              className="font-serif-editorial text-2xl sm:text-3xl font-normal tracking-tight text-[#171717] leading-[1.18]"
            >
              {headline}
            </h2>
            <p
              id="hero-subheadline"
              className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-xl font-normal"
            >
              {subheadline}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
            <a
              id="hero-cta-work"
              href="#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-lg bg-[#171717] text-[#F9F8F5] hover:bg-[#2E2E2E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/40 shadow-xs"
            >
              <span>View my work</span>
              <ArrowDownRight size={15} aria-hidden="true" />
            </a>
            <a
              id="hero-cta-contact"
              href="#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-lg border border-[#D5D0C5] text-[#262626] bg-[#F9F8F5]/60 hover:border-[#171717] hover:bg-[#EFECE6]/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/30"
            >
              <Mail size={14} className="text-[#737373]" aria-hidden="true" />
              <span>Get in touch</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Engineering Profile Pass Card (Parallel) */}
        <div className="md:col-span-5 flex w-full items-center justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full max-w-[260px] sm:max-w-[280px]"
          >
            <ProfileCard
              name="Kishore BV"
              title="Automation & Robotics Engineer"
              handle="kishorebv"
              linkedinUrl="https://www.linkedin.com/in/kishorebvla"
              status="Available"
              contactText="Let's Talk"
              avatarUrl="/assets/kishore-profile.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              iconUrl="/assets/iconpattern.png"
              behindGlowEnabled={true}
              behindGlowSize="240px"
              innerGradient="linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(197,220,235,0.18) 100%)"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
