interface AdditionalProjectsProps {
  projects: string[];
}

export default function AdditionalProjects({ projects }: AdditionalProjectsProps) {
  return (
    <section id="additional-projects" className="py-14 sm:py-20 border-b border-[#EBE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          <div className="md:col-span-4">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E]">
              03 / Index
            </span>
            <h3 className="text-2xl font-serif-editorial text-[#171717] mt-1">
              Other Things I’ve Built
            </h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              Mechanisms, dynamic simulations, fabrication exercises, and competition robots developed through academic coursework, laboratory testing, and independent experimentation.
            </p>
          </div>
        </div>

        {/* Compact Editorial List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 pt-4 border-t border-[#EAE6DE]">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="py-2 flex items-baseline gap-3 border-b border-[#EFECE6] text-xs sm:text-sm text-[#2E2E2E]"
            >
              <span className="font-mono-code text-[11px] text-[#99948B] shrink-0">
                {(idx + 1).toString().padStart(2, '0')}
              </span>
              <span className="font-normal">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
