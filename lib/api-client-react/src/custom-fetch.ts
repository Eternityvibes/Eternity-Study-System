// Custom fetch wrapper used by orval-generated hooks
export async function customFetch<T>(
  url: string,
  options: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
