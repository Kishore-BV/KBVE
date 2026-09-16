import { useState } from 'react';
import { ChevronDown, FileText, Wrench } from 'lucide-react';
import { Project } from '../types';

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [expandedId, setExpandedId] = useState<string | null>('mobile-robotic-system');

  const toggleProject = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-[#EBE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#171717]">
          <div>
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E]">
              02 / Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-editorial text-[#171717] mt-1">
              Selected Electronics, Controls & Systems Engineering Projects
            </h2>
          </div>
        </div>

        {/* Project Rows Table / Accordion */}
        <div className="divide-y divide-[#E6E2D9]">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                id={`project-item-${project.id}`}
                className={`transition-colors duration-150 ${
                  isExpanded ? 'bg-[#F4F2EC]/70' : 'hover:bg-[#F6F4EE]/50'
                }`}
              >
                {/* Clickable Row Header */}
                <button
                  type="button"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`project-details-${project.id}`}
                  className="w-full text-left py-6 px-2 sm:px-4 flex items-center justify-between gap-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]/30 rounded"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8 flex-1 min-w-0">
                    <span className="font-mono-code text-xs sm:text-sm text-[#8A867E] group-hover:text-[#171717] transition-colors shrink-0">
                      {project.number}
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 min-w-0 flex-wrap">
                      <h3
                        className={`text-lg sm:text-xl font-medium tracking-tight text-[#171717] transition-transform duration-200 ${
                          isExpanded ? 'translate-x-1 font-semibold' : 'group-hover:translate-x-1'
                        }`}
                      >
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <span className="text-xs sm:text-sm font-normal text-[#666666] italic">
                          — {project.subtitle}
                        </span>
                      )}
                      <span className="text-xs sm:text-sm text-[#8A867E] shrink-0 font-normal">
                        · {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                    <span className="hidden sm:inline font-mono-code text-xs text-[#8A867E]">
                      {project.year}
                    </span>
                    <div
                      className={`w-7 h-7 rounded flex items-center justify-center border border-[#D5D0C5] text-[#555] group-hover:border-[#171717] group-hover:text-[#171717] transition-all duration-200 ${
                        isExpanded ? 'rotate-180 bg-[#171717] text-[#F9F8F5] border-[#171717]' : ''
                      }`}
                    >
                      <ChevronDown size={15} aria-hidden="true" />
                    </div>
                  </div>
                </button>

                {/* Expanded Project Content */}
                {isExpanded && (
                  <div
                    id={`project-details-${project.id}`}
                    role="region"
                    aria-labelledby={`project-item-${project.id}`}
                    className="px-2 sm:px-6 pb-8 pt-2 transition-all"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pt-4 border-t border-[#E6E2D9]">
                      {/* Left: Scope, Implementation, Notes & Manuscript */}
                      <div className="md:col-span-7 space-y-5">
                        {/* Verified Core Contributions / Responsibilities */}
                        {project.coreContributions && project.coreContributions.length > 0 && (
                          <div>
                            <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E] mb-2">
                              Engineering Scope & Implementation
                            </h4>
                            <ul className="space-y-2">
                              {project.coreContributions.map((point, cIdx) => (
                                <li
                                  key={cIdx}
                                  className="text-xs sm:text-sm text-[#242424] flex items-start gap-2.5 leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#171717] mt-2 shrink-0" aria-hidden="true" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.details?.engineeringNote && (
                          <div className="p-3.5 rounded bg-[#ECE8E0] border border-[#DDD8CE] text-xs text-[#423E37]">
                            <div className="flex items-center gap-1.5 font-semibold text-[#171717] mb-1">
                              <Wrench size={13} className="text-[#D96B27]" aria-hidden="true" />
                              <span>Engineering Note</span>
                            </div>
                            <p className="leading-relaxed">
                              {project.details.engineeringNote}
                            </p>
                          </div>
                        )}

                        {/* Publication Info if applicable */}
                        {project.publication && (
                          <div className="p-3.5 rounded bg-[#FAF9F6] border border-[#D5D0C5] text-xs">
                            <div className="flex items-center gap-1.5 font-semibold text-[#171717] mb-1">
                              <FileText size={13} className="text-[#171717]" aria-hidden="true" />
                              <span>Research Manuscript</span>
                            </div>
                            <p className="font-medium text-[#222222]">
                              “{project.publication.title}”
                            </p>
                            <span className="inline-block mt-1 font-mono-code text-[11px] text-[#8A6600] bg-[#FFF8E6] border border-[#E8D9B0] px-2 py-0.5 rounded">
                              Status: {project.publication.status}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Right: Architecture, Focus Areas & Sub-systems */}
                      <div className="md:col-span-5 space-y-5">
                        {project.details && (
                          <div>
                            <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E] mb-2">
                              System Architecture & Focus Areas
                            </h4>
                            <ul className="space-y-1.5">
                              {project.details.focusAreas.map((focus, fIdx) => (
                                <li
                                  key={fIdx}
                                  className="text-xs sm:text-[13px] text-[#4F4F4F] flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D96B27] mt-1.5 shrink-0" aria-hidden="true" />
                                  <span>{focus}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Themes / Tags */}
                        <div>
                          <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E] mb-2">
                            Sub-systems & Disciplines
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.themes.map((theme, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-xs font-mono-code px-2 py-1 rounded bg-[#EAE6DE] text-[#4A4A4A] border border-[#DDD8CE]"
                              >
                                {theme}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
