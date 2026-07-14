import { API_URL } from "./api";

const time = { //in ms
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
};

export const stockQuery = (productId: number) => ({
  queryKey: ["stock", productId],
  queryFn: () => fetchProductStock(productId),
  staleTime: 0,
  refetchInterval: 30 * time.second , // automatically refetch every 30 s
});

export const searchQuery = (q: string) => ({
  queryKey: ["search", q],
  queryFn: () => searchProducts(q),
  staleTime: 2 * time.minute ,
  gcTime: 10 * time.minute ,
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
