"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/ProductGrid";
import { searchQuery } from "@/lib/client-apis";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("q") ?? "";
  const [input, setInput] = useState(searchTerm);

  useEffect(() => {
    setInput(searchTerm);
  }, [searchTerm]);

  const { data, isFetching, isError, error } = useQuery({
    ...searchQuery(searchTerm),
    placeholderData: (prev) => prev, // show the previous results until the new ones arrive.
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
  }

  const products = data?.products ;

  return (
    <main className="max-w-6xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Search</h1>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search products..."
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button type="submit" className="border rounded-lg px-4 py-2">
          Search
        </button>
      </form>

      {!searchTerm && (
        <p className="text-zinc-600">Type a keyword to search products.</p>
      )}

      {searchTerm && isFetching && <p>Searching...</p>}

      {searchTerm && isError && (
        <p className="text-red-600">{(error as Error).message}</p>
      )}

      {searchTerm && !isFetching && !isError && products.length > 0 && (
        <>
          <p className="text-zinc-600">
            {products.length} result(s) for "{searchTerm}"
          </p>
          <ProductGrid products={products} />
        </>
      )}

      {searchTerm && !isFetching && !isError && products.length === 0 && (
        <p className="text-zinc-600">
          No products found for "{searchTerm}".
        </p>
      )}
    </main>
  );
}