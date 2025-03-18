export interface ProjectData {
  "domain-name": string;
  "logo-url": string;
  "company-name": string;
  "website-type": string;
  tools: string[];
  "web-description": string;
  jobdesk: string;
}

export type ProjectsData = Omit<ProjectData, "company-name" | "jobdesk" | "logo-url">;

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
