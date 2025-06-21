export async function getData(endpoint) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch(`${baseUrl}/api/${endpoint}`, {
      // 🔁 Yeh change karo: static build ke liye
      cache: "force-cache", // or remove this line entirely for default caching
      // Next.js will allow it to run at build time now
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from ${endpoint}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getData error:", error);
    return null;
  }
}
