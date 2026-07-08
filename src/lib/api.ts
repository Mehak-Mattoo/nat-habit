const API_URL = "https://dummyjson.com/products";


export async function getProducts(limit = 5) {
  const res = await fetch(`${API_URL}?limit=${limit}`, {
    next: { revalidate: 3600 }, // 1 hour
  });
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${API_URL}/categories`, {
    next: { revalidate: 86400 }, // 1 day
  });
  if (!res.ok) throw new Error("Failed to load categories");
  return res.json();
}
