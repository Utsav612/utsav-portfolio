import { Social } from "../typings";

export const fetchSocials = async (): Promise<Social[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    if (!res.ok) {
      throw new Error(`Failed to fetch socials: ${res.statusText} (status: ${res.status})`);
    }
    const data = await res.json();
    const socials: Social[] = data.socials;
    console.log('fetching socials', socials);
    return socials;
  } catch (error) {
    console.error('Error fetching socials:', error);
    return [];
  }
};
