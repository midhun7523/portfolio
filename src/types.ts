export interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  category: 'ml' | 'bio' | 'web' | 'research';
  status: 'Live' | 'In Progress' | 'Research';
  description: string;
  longDescription?: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  keyFeatures?: string[];
  techStack: string[];
  link?: string;
  linkLabel?: string;
  github?: string;
  hasInteractiveDemo?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights?: string[];
  skillsLearned: string[];
}

export interface EducationItem {
  years: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  scoreOrFocus?: string;
  coreSubjects: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface DiseaseRecord {
  disease: string;
  riskLevel: 'Low' | 'Moderate' | 'Critical';
  requiredSymptoms: string[];
  confidenceScore: number;
  clinicalSummary: string;
  recommendedAction: string;
  modelVotes: {
    randomForest: number;
    naiveBayes: number;
    decisionTree: number;
  };
}
