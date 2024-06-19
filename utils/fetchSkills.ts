import { Skill } from "../typings";

export const fetchSkills = async(): Promise<Skill[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
    if (!res.ok) {
      throw new Error(`Failed to fetch skills: ${res.statusText} (status: ${res.status})`);
    }
    const data = await res.json();
    const skills: Skill[] = data.skills;
    console.log('fetching skills', skills);
    return skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};
