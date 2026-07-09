import { API_URL } from "./api";

export const stockQuery = (productId: number) => ({
  queryKey: ["stock", productId],
  queryFn: () => fetchProductStock(productId),
  staleTime: 0, // data is considered fresh for 0 ms
  refetchInterval: 30000, // automatically refetch every 30 s
});

export const searchQuery = (q: string) => ({
  queryKey: ["search", q],
  queryFn: () => searchProducts(q),
  staleTime: 0,
  enabled: q.length > 0,
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
