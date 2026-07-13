import { time } from "./client-apis";

export const API_URL = "https://dummyjson.com/products";

//homepage apis
export async function getProducts(limit = 5) {
  const res = await fetch(`${API_URL}?limit=${limit}`, {
    next: { revalidate: time.hours  }, // 1 hr
  });
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

export async function getCategories(limit = 9) {
  const res = await fetch(`${API_URL}/categories`, {
    next: { revalidate: time.days }, // 1 day
  });
  if (!res.ok) throw new Error("Failed to load categories");
  const data = await res.json();
  return data.slice(0, limit);
}

//product detail page apis
export async function getProductById(id: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    next: { revalidate: time.hours }, 
  });

  if (res.status === 404) return null; // product not found
  if (!res.ok) throw new Error("Failed to load product");

  return res.json();
}