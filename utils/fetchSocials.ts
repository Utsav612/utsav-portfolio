import { Social } from "../typings";

export const fetchSocials = async (): Promise<Social[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    if (!res.ok) {
      throw new Error("Failed to fetch socials");
    }
    const data = await res.json();
    const socials: Social[] = data.socials;
    return socials;
  } catch (error) {

    console.error("Error fetching socials:", error);
    // Handle the error, such as showing a message to the user or retrying the request
    return []; // Return an empty array or handle it according to your application's logic
  }
};
