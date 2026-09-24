import React from 'react';

interface RobotGearIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export default function RobotGearIcon({
  size = 14,
  className = '',
  ...props
}: RobotGearIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Antennas */}
      {/* Middle antenna */}
      <line x1="50" y1="23" x2="50" y2="15" />
      <circle cx="50" cy="13" r="3.5" fill="currentColor" stroke="none" />
      {/* Left antenna */}
      <line x1="41" y1="23" x2="35" y2="15" />
      <circle cx="33" cy="13" r="3.5" fill="currentColor" stroke="none" />
      {/* Right antenna */}
      <line x1="59" y1="23" x2="65" y2="15" />
      <circle cx="67" cy="13" r="3.5" fill="currentColor" stroke="none" />

      {/* Left ear bolt */}
      <path d="M 23 35 C 16 35 16 47 23 47" />
      {/* Right ear bolt */}
      <path d="M 77 35 C 84 35 84 47 77 47" />

      {/* Head Outline */}
      <rect x="23" y="23" width="54" height="34" rx="8" />

      {/* Visor / Screen */}
      <rect x="29" y="28" width="42" height="16" rx="4" />

      {/* Eyes */}
      <circle cx="39" cy="36" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="61" cy="36" r="3.2" fill="currentColor" stroke="none" />

      {/* Friendly Smile */}
      <path d="M 43 50 Q 50 55 57 50" />

      {/* Neck */}
      <line x1="43" y1="57" x2="43" y2="64" />
      <line x1="57" y1="57" x2="57" y2="64" />

      {/* Torso Outline */}
      <path d="M 43 64 L 28 64 C 21 64 19 69 19 76 L 19 92 L 64 92" />

      {/* Chest Rivet */}
      <circle cx="27" cy="74" r="2.5" />

      {/* Chest Horizon Line */}
      <line x1="19" y1="82" x2="52" y2="82" />

      {/* Gear Cogwheel on lower right */}
      {/* Gear central hole */}
      <circle cx="68" cy="73" r="7.5" />

      {/* Gear rim and 6 teeth */}
      <path d="
        M 64.5 53.5 L 71.5 53.5 L 72.8 57.5 C 75.2 58.5 77.4 59.9 79.3 61.6 L 83.1 60.1 L 86.6 66.2 L 83.5 69.1 C 83.8 70.4 84 71.7 84 73 C 84 74.3 83.8 75.6 83.5 76.9 L 86.6 79.8 L 83.1 85.9 L 79.3 84.4 C 77.4 86.1 75.2 87.5 72.8 88.5 L 71.5 92.5 L 64.5 92.5 L 63.2 88.5 C 60.8 87.5 58.6 86.1 56.7 84.4 L 52.9 85.9 L 49.4 79.8 L 52.5 76.9 C 52.2 75.6 52 74.3 52 73 C 52 71.7 52.2 70.4 52.5 69.1 L 49.4 66.2 L 52.9 60.1 L 56.7 61.6 C 58.6 59.9 60.8 58.5 63.2 57.5 Z
      " />
    </svg>
  );
}
