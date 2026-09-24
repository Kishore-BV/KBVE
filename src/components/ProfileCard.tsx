import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import RobotGearIcon from './icons/RobotGearIcon';

export interface ProfileCardProps {
  name?: string;
  title?: string;
  handle?: string;
  linkedinUrl?: string;
  status?: string;
  contactText?: string;
  avatarUrl?: string;
  miniAvatarUrl?: string;
  iconUrl?: string;
  grainUrl?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  onContactClick?: () => void;
  behindGlowEnabled?: boolean;
  behindGlowColor?: string;
  behindGlowSize?: string;
  innerGradient?: string;
  className?: string;
}

export default function ProfileCard({
  name = 'Kishore BV',
  title = 'Automation & Robotics Engineer',
  handle = 'kishorebv',
  linkedinUrl = 'https://www.linkedin.com/in/kishorebvla',
  status = 'Available',
  contactText = "Let's Talk",
  avatarUrl = '/assets/kishore-profile.png',
  miniAvatarUrl,
  iconUrl = '/assets/iconpattern.png',
  grainUrl,
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 1,
  onContactClick,
  behindGlowEnabled = true,
  behindGlowColor = 'rgba(197, 220, 235, 0.35)',
  behindGlowSize = '320px',
  innerGradient = 'linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(197,220,235,0.18) 100%)',
  className = '',
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  // Mouse coordinate motion values for spring-based 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Position within card (0 to 1) for reflection and glow
  const normalizedX = useMotionValue(0.5);
  const normalizedY = useMotionValue(0.5);

  // Spring physics for buttery smooth tilt
  const springConfig = { damping: 25, stiffness: 260, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Rotation transforms (-10 to +10 degrees max)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);

  // Glow position transforms hoisted to top-level
  const glowX = useTransform(smoothMouseX, [-0.5, 0.5], ['-70%', '-30%']);
  const glowY = useTransform(smoothMouseY, [-0.5, 0.5], ['-70%', '-30%']);

  // Cached bounding rect to prevent layout thrashing on every mousemove
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!enableTilt) return;
      let rect = rectRef.current;
      if (!rect && cardRef.current) {
        rect = cardRef.current.getBoundingClientRect();
        rectRef.current = rect;
      }
      if (!rect || rect.width === 0 || rect.height === 0) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = Math.max(0, Math.min(1, x / rect.width));
      const normY = Math.max(0, Math.min(1, y / rect.height));

      // Center offset from -0.5 to 0.5
      mouseX.set(normX - 0.5);
      mouseY.set(normY - 0.5);
    },
    [enableTilt, mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    rectRef.current = null;
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Handle optional mobile device orientation
  useEffect(() => {
    if (!enableMobileTilt) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      const clampedGamma = Math.max(-30, Math.min(30, e.gamma));
      const clampedBeta = Math.max(-30, Math.min(30, e.beta));
      mouseX.set((clampedGamma / 30) * 0.5 * mobileTiltSensitivity);
      mouseY.set((clampedBeta / 30) * 0.5 * mobileTiltSensitivity);
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [enableMobileTilt, mobileTiltSensitivity, mouseX, mouseY]);

  return (
    <div className={`relative select-none ${className}`} style={{ perspective: 1200 }}>
      {/* Behind-the-card interactive ambient glow */}
      {behindGlowEnabled && (
        <motion.div
          className="absolute pointer-events-none rounded-full blur-2xl transition-opacity duration-300 transform-gpu will-change-transform"
          style={{
            width: behindGlowSize,
            height: behindGlowSize,
            top: '50%',
            left: '50%',
            x: glowX,
            y: glowY,
            background: behindGlowColor,
            opacity: isHovered ? 0.75 : 0.4,
            zIndex: 0,
          }}
          aria-hidden="true"
        />
      )}

      {/* Main 3D Tilted Card Body */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-full rounded-2xl border border-[#E3DDD1] bg-[#FAF8F5]/95 shadow-xl shadow-neutral-900/5 backdrop-blur-md overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#171717]/10 transform-gpu will-change-transform"
      >
        {/* Card Inner Gradient Layer */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ background: innerGradient }}
          aria-hidden="true"
        />

        {/* Technical Pattern Overlay (iconUrl / CAD grid watermark) */}
        {iconUrl && (
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-multiply bg-center bg-cover"
            style={{ backgroundImage: `url(${iconUrl})` }}
            aria-hidden="true"
          />
        )}

        {/* Grain texture overlay if provided */}
        {grainUrl && (
          <div
            className="absolute inset-0 pointer-events-none opacity-20 bg-repeat"
            style={{ backgroundImage: `url(${grainUrl})` }}
            aria-hidden="true"
          />
        )}

        {/* Technical Corner Registration Marks (Engineering Blueprint aesthetic) */}
        <div className="absolute top-2.5 left-2.5 text-[9px] font-mono-code text-[#B0AAA0] pointer-events-none select-none">
          +
        </div>
        <div className="absolute top-2.5 right-2.5 text-[9px] font-mono-code text-[#B0AAA0] pointer-events-none select-none">
          +
        </div>
        <div className="absolute bottom-2.5 left-2.5 text-[9px] font-mono-code text-[#B0AAA0] pointer-events-none select-none">
          +
        </div>
        <div className="absolute bottom-2.5 right-2.5 text-[9px] font-mono-code text-[#B0AAA0] pointer-events-none select-none">
          +
        </div>

        {/* Subtle dynamic sheen reflection */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.45 : 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)',
          }}
          aria-hidden="true"
        />

        {/* CARD CONTENT */}
        <div className="relative p-3.5 sm:p-4 flex flex-col gap-3">
          {/* Top Bar: Engineering ID Pass Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-[#EBE7DF]/80">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded flex items-center justify-center bg-[#EFECE6] border border-[#DDD7CC] text-[#555]">
                <RobotGearIcon size={13} aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono-code font-semibold tracking-wider text-[#525252] uppercase">
                  GARUDA // NPD LAB
                </span>
                <span className="text-[7.5px] font-mono-code text-[#99948B] leading-none">
                  ENG ID: KBV-RND-25
                </span>
              </div>
            </div>
          </div>

          {/* Photo / Visual Portrait Area */}
          <div className="relative w-full aspect-[4/3.2] rounded-lg overflow-hidden bg-[#ECE8E0] border border-[#DFD9CE] shadow-inner group">
            {!imgFailed ? (
              <img
                src={avatarUrl}
                alt={name}
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.03]"
                loading="eager"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F5F2EC] to-[#E8E2D6] text-[#737373] p-3 text-center">
                <div className="w-12 h-12 rounded-full bg-[#DDD7CC] flex items-center justify-center text-[#171717] font-bold text-lg mb-1.5">
                  KBV
                </div>
                <span className="text-xs font-mono-code text-[#555]">Kishore BV</span>
                <span className="text-[9px] font-mono-code text-[#888]">Automation & Robotics</span>
              </div>
            )}

            {/* Subtle camera view-finder brackets on the portrait */}
            <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-white/60 pointer-events-none" />
            <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-white/60 pointer-events-none" />
            <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-white/60 pointer-events-none" />
            <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-white/60 pointer-events-none" />
          </div>

          {/* User Info Section */}
          {showUserInfo && (
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-1.5">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#171717] leading-tight">
                    {name}
                  </h3>
                  <p className="text-[11px] text-[#525252] font-medium mt-0.5">
                    {title}
                  </p>
                </div>
                <a
                  href={linkedinUrl || 'https://www.linkedin.com/in/kishorebvla'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-6 h-6 rounded flex items-center justify-center text-[#555] hover:text-[#0A66C2] bg-[#EFECE6]/80 hover:bg-[#EAE5DC] border border-[#DDD7CC] transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
                  title="Connect on LinkedIn"
                >
                  <Linkedin size={12} className="fill-current" />
                </a>
              </div>

              {/* Technical badges bar */}
              <div className="grid grid-cols-3 gap-1 pt-0.5 text-center">
                <div className="bg-[#EFECE6]/80 rounded p-1 border border-[#E3DDD1]">
                  <span className="block text-[7.5px] font-mono-code text-[#888] uppercase tracking-wider">DOMAIN</span>
                  <span className="block text-[9px] font-mono-code font-medium text-[#262626]">UAV & ROBOTICS</span>
                </div>
                <div className="bg-[#EFECE6]/80 rounded p-1 border border-[#E3DDD1]">
                  <span className="block text-[7.5px] font-mono-code text-[#888] uppercase tracking-wider">STAGE</span>
                  <span className="block text-[9px] font-mono-code font-medium text-[#262626]">CAD → FLIGHT</span>
                </div>
                <div className="bg-[#EFECE6]/80 rounded p-1 border border-[#E3DDD1]">
                  <span className="block text-[7.5px] font-mono-code text-[#888] uppercase tracking-wider">SPECIALTY</span>
                  <span className="block text-[9px] font-mono-code font-medium text-[#262626]">MECHANISMS</span>
                </div>
              </div>

              {/* Action / Contact Button */}
              <button
                type="button"
                onClick={onContactClick}
                className="mt-0.5 w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#171717] hover:bg-[#2A2A2A] text-[#FAF8F5] text-xs font-medium font-mono-code tracking-wide transition-colors cursor-pointer shadow-sm hover:shadow active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/40"
              >
                <span>{contactText}</span>
                <ArrowUpRight size={12} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
