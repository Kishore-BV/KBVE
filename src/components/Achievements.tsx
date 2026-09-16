import { AchievementItem } from '../types';

interface AchievementsProps {
  achievements: AchievementItem[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  return (
    <section id="achievements" className="py-16 sm:py-24 border-b border-[#EBE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E]">
              06 / Recognition
            </span>
            <h2 className="text-3xl font-serif-editorial text-[#171717] mt-1">
              Awards & Competitions
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              Technical competitions and robotics symposiums testing autonomous navigation, mechanism fabrication under resource constraints, and combat robotics.
            </p>
          </div>
        </div>

        {/* Clean Editorial Table / Row list */}
        <div className="divide-y divide-[#EAE6DE] border-t border-b border-[#EAE6DE]">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline text-sm"
            >
              <div className="sm:col-span-5">
                <span className="font-medium text-[#171717]">
                  {item.title}
                </span>
                <span className="block sm:hidden text-xs text-[#737373]">
                  {item.institution}
                </span>
              </div>
              <div className="sm:col-span-3">
                <span className="inline-block text-xs font-mono-code text-[#D96B27] font-medium bg-[#F4EDE4] px-2 py-0.5 rounded">
                  {item.award}
                </span>
              </div>
              <div className="hidden sm:block sm:col-span-3 text-xs text-[#666666]">
                {item.institution}
              </div>
              <div className="sm:col-span-1 text-right font-mono-code text-xs text-[#8A867E]">
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
