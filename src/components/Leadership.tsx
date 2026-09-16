import { LEADERSHIP_AND_ACTIVITIES } from '../data/portfolioData';

export default function Leadership() {
  const { role, event, years, description, otherActivities } = LEADERSHIP_AND_ACTIVITIES;

  return (
    <section id="leadership" className="py-16 sm:py-24 border-b border-[#EBE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E]">
              07 / Initiatives
            </span>
            <h2 className="text-3xl font-serif-editorial text-[#171717] mt-1">
              Leadership & Community
            </h2>
          </div>

          <div className="md:col-span-9 max-w-2xl space-y-6">
            <div>
              <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
                <h3 className="text-base sm:text-lg font-semibold text-[#171717]">
                  {role}
                </h3>
                <span className="text-xs font-mono-code text-[#737373]">
                  · {event} ({years})
                </span>
              </div>
              <p className="text-sm sm:text-[15px] text-[#3D3D3D] leading-relaxed">
                {description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#EAE6DE]">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E] block mb-2">
                Beyond the Workbench
              </span>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                {otherActivities.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
