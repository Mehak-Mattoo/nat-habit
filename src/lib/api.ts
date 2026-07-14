
export const API_URL = "https://dummyjson.com/products";

 const time = { //in seconds
  minute: 60,
  hour: 60 * 60,
  day: 24 * 60 * 60,
};


//homepage apis
export async function getProducts(limit = 5) {
  const res = await fetch(`${API_URL}?limit=${limit}`, {
    next: { revalidate: time.hour }, 
  });
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

export async function getCategories(limit = 9) {
  const res = await fetch(`${API_URL}/categories`, {
    next: { revalidate: time.day },
  });
  if (!res.ok) throw new Error("Failed to load categories");
  const data = await res.json();
  return data.slice(0, limit);
}

//product detail page apis
export async function getProductById(id: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    next: { revalidate: time.hour }, 
  });

  if (res.status === 404) return null; // product not found
  if (!res.ok) throw new Error("Failed to load product");

  return res.json();
}