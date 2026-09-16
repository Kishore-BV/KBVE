import { SkillGroup } from '../types';

interface SkillsProps {
  skillGroups: SkillGroup[];
}

export default function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-[#EBE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
          <div className="md:col-span-3">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E]">
              05 / Capabilities
            </span>
            <h2 className="text-3xl font-serif-editorial text-[#171717] mt-1">
              Skills & Tools
            </h2>
          </div>
          <div className="md:col-span-9">
            <p className="text-sm text-[#666666] max-w-xl">
              Practical competencies across mechanical CAD, robotics sub-assemblies, unmanned aerial platforms, automation, and applied machine learning.
            </p>
          </div>
        </div>

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[#EAE6DE]">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E]">
                {group.name}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-sm text-[#262626] flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#171717]" aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
