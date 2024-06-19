import { Project } from "../typings";

export const fetchProjects = async(): Promise<Project[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.statusText} (status: ${res.status})`);
    }
    const data = await res.json();
    const projects: Project[] = data.projects;
    console.log('fetching projects', projects);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};
