import { ExperienceItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-[#EBE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
          <div className="md:col-span-3">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E]">
              01 / Experience
            </span>
            <h2 className="text-2xl font-serif-editorial text-[#171717] mt-1">
              Engineering Work
            </h2>
          </div>
          <div className="md:col-span-9">
            <p className="text-sm text-[#666666] max-w-xl">
              Hands-on engineering within New Product Development, working with customized UAV assemblies, structural integration, and prototype field validation.
            </p>
          </div>
        </div>

        {/* Editorial Timeline - Columnar layout */}
        <div className="divide-y divide-[#EAE6DE]">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              id={`experience-entry-${idx}`}
              className="py-8 first:pt-4 last:pb-4 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Left column: Date / Period */}
              <div className="md:col-span-3">
                <time className="text-xs font-mono-code font-medium text-[#737373] block">
                  {exp.period}
                </time>
                <div className="text-xs text-[#8A867E] mt-0.5">
                  {exp.organization}
                </div>
              </div>

              {/* Right column: Role and Description */}
              <div className="md:col-span-9 max-w-2xl">
                <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
                  <h3 className="text-base sm:text-lg font-semibold text-[#171717]">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono-code text-[#8A867E]">
                    · {exp.department}
                  </span>
                </div>

                <p className="text-sm sm:text-[15px] text-[#3D3D3D] leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-1.5">
                  {exp.keyWork.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-[13px] text-[#555555] flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8B2A6] mt-1.5 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
