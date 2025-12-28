export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  current: boolean;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Fluente';
}

export interface ResumeData {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  summary: string;
  photoUrl: string | null;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Skill[];
}

export enum TemplateType {
  VITAE = 'vitae', // Old Classic (Serif)
  MINIMAL = 'minimal', // Executive (Clean Sans)
  MODERN = 'modern', // Sidebar + Photo
  CREATIVE = 'creative', // Bold Header Color
  TECH = 'tech' // Developer/Modern Focus
}

export const INITIAL_DATA: ResumeData = {
  fullName: '',
  jobTitle: '',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  website: '',
  summary: '',
  photoUrl: null,
  experience: [],
  education: [],
  skills: [],
  languages: []
};