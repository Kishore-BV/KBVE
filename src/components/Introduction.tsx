interface IntroductionProps {
  text: string;
}

export default function Introduction({ text }: IntroductionProps) {
  return (
    <section id="introduction-section" className="py-12 sm:py-16 border-b border-[#EBE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="md:col-span-3">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E]">
              Approach
            </span>
          </div>
          <div className="md:col-span-9 max-w-2xl">
            <p className="text-base sm:text-lg text-[#333333] leading-relaxed mb-6 font-normal">
              {text}
            </p>
            {/* Disciplined sequence representation: subtle text breadcrumb, not flashy infographic */}
            <div
              id="engineering-cycle-note"
              className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-[#706B62] pt-3 border-t border-[#EAE6DE]"
            >
              <span className="font-semibold text-[#171717]">Process:</span>
              <span>Idea</span>
              <span className="text-[#A8A399]">→</span>
              <span>CAD</span>
              <span className="text-[#A8A399]">→</span>
              <span>Prototype</span>
              <span className="text-[#A8A399]">→</span>
              <span>Integration</span>
              <span className="text-[#A8A399]">→</span>
              <span>Testing</span>
              <span className="text-[#A8A399]">→</span>
              <span className="text-[#D96B27] font-medium">Refinement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
