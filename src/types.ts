export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  year: string;
  summary: string;
  coreContributions?: string[];
  themes: string[];
  publication?: {
    title: string;
    status: string;
  };
  details?: {
    overview: string;
    focusAreas: string[];
    engineeringNote?: string;
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  department: string;
  description: string;
  keyWork: string[];
}

export interface AchievementItem {
  title: string;
  category: string;
  award: string;
  institution: string;
  year: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}
