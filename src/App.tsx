import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import AdditionalProjects from './components/AdditionalProjects';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {
  PERSONAL_INFO,
  EXPERIENCES,
  FEATURED_PROJECTS,
  ADDITIONAL_PROJECTS,
  SKILL_GROUPS,
  ACHIEVEMENTS,
} from './data/portfolioData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F5] text-[#191919] flex flex-col font-normal antialiased selection:bg-[#EAE4D9]">
      <Navigation name={PERSONAL_INFO.name} />

      <main id="main-content" className="flex-1">
        <Hero
          name={PERSONAL_INFO.name}
          role={PERSONAL_INFO.role}
          headline={PERSONAL_INFO.headline}
          subheadline={PERSONAL_INFO.subheadline}
        />

        <Introduction text={PERSONAL_INFO.introParagraph} />

        <Experience experiences={EXPERIENCES} />

        <FeaturedProjects projects={FEATURED_PROJECTS} />

        <AdditionalProjects projects={ADDITIONAL_PROJECTS} />

        <About
          education={PERSONAL_INFO.education}
          languages={PERSONAL_INFO.languages}
        />

        <Skills skillGroups={SKILL_GROUPS} />

        <Achievements achievements={ACHIEVEMENTS} />

        <Leadership />

        <Contact email={PERSONAL_INFO.email} />
      </main>

      <Footer name={PERSONAL_INFO.name} role={PERSONAL_INFO.role} />
    </div>
  );
}
