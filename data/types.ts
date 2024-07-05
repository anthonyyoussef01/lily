import {StaticImageData} from "next/image";

export interface WorkExperience {
    company: string;
    link?: string;
    badges: string[];
    title: string;
    logo: StaticImageData;
    start: string;
    end?: string | null;
    description: string;
}

export interface Education {
    school: string;
    degree: string;
    start: string;
    end: string;
}

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    link?: any;
    logo: any;
}

export interface ResumeData {
    name: string;
    initials: string;
    location: string;
    locationLink: string;
    about: string;
    summary: string;
    avatarUrl: string;
    developerWebsiteUrl: string;
    contact: {
        email: string;
        tel: string;
        social: Array<{
            name: string;
            url: string;
            icon: any;
        }>;
    };
    education: Education[];
    work: WorkExperience[];
    skills: string[];
    projects: Project[];
}