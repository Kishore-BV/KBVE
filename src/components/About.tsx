interface AboutProps {
  education: {
    degree: string;
    institution: string;
    completed: string;
    cgpa: string;
  };
  languages: string[];
}

export default function About({ education, languages }: AboutProps) {
  const interests = [
    'CAD Modelling',
    'Multicopters & UAVs',
    'Path Tracking Robots',
    'Mobile Manipulators',
    'Machine Learning Algorithms',
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#EBE7DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Section Label */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E]">
              04 / Background
            </span>
            <h2 className="text-3xl font-serif-editorial text-[#171717] mt-1">
              About
            </h2>
          </div>

          {/* Narrative & Credentials */}
          <div className="md:col-span-9 max-w-2xl space-y-6">
            <div className="prose prose-neutral text-base sm:text-lg text-[#2A2A2A] leading-relaxed space-y-4">
              <p>
                I completed my B.Tech in Automation and Robotics Engineering at Amrita Vishwa Vidyapeetham in June 2025.
              </p>
              <p>
                Most of the work I enjoy sits somewhere between mechanical design, robotics and experimentation. I like building something, testing it, finding what went wrong, changing it and trying again.
              </p>
              <p className="text-sm sm:text-base text-[#4D4D4D]">
                Outside engineering, I enjoy public speaking, community work and working with people—something I got plenty of practice doing while handling PR for Anokha Techfest.
              </p>
            </div>

            {/* Education & Academic Record */}
            <div className="pt-6 border-t border-[#EAE6DE] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E] block mb-1">
                  Education
                </span>
                <p className="text-sm font-medium text-[#171717]">
                  {education.degree}
                </p>
                <p className="text-xs text-[#555555] mt-0.5">
                  {education.institution}
                </p>
                <p className="text-xs font-mono-code text-[#737373] mt-1">
                  Completed {education.completed} · CGPA {education.cgpa}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E] block mb-1">
                  Languages
                </span>
                <p className="text-sm text-[#262626]">
                  {languages.join(' & ')}
                </p>
                <span className="text-xs font-mono-code uppercase tracking-wider text-[#8A867E] block mt-3 mb-1">
                  Core Engineering Interests
                </span>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {interests.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
