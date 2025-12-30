const BASE_URL = process.env.VELYN_API_BASE_URL || "http://localhost:4000";

export async function apiGet(path: string) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}
