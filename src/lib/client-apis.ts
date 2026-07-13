import { API_URL } from "./api";

export const time = {
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
};

export const stockQuery = (productId: number) => ({
  queryKey: ["stock", productId],
  queryFn: () => fetchProductStock(productId),
  staleTime: 0, // data is considered fresh for 0 ms
  refetchInterval: 30 * time.seconds, // automatically refetch every 30 s
});

export const searchQuery = (q: string) => ({
  queryKey: ["search", q],
  queryFn: () => searchProducts(q),
  staleTime: 2 * time.minutes,
  gcTime: 10 * time.minutes,
  enabled: q.trim().length >= 2,
});

export async function fetchProductStock(productId: number) {
  const res = await fetch(`${API_URL}/${productId}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch stock");
  const data = await res.json();
  return data.stock as number;
}

export async function searchProducts(q: string) {
  const res = await fetch(`${API_URL}/search?q=${encodeURIComponent(q)}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}
