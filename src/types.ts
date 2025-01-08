export interface ProjectData {
  "domain-name": string;
  "logo-url": string;
  "company-name": string;
  "website-type": string;
  tools: string[];
  hosting: string;
  "web-description": string;
  jobdesk: string;
}

export interface Skill {
  title: string;
  imgUrl: string;
  type: string;
}

export interface Exp {
  job: string;
  company: string;
  date: string;
  description: string;
}
