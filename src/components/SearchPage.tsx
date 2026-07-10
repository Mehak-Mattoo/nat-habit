"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/ProductGrid";
import { searchQuery } from "@/lib/client-apis";
import FeaturedProducts from "./FeaturedProducts";
import { Search, X } from "lucide-react";
import { routes } from "@/lib/routes";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("q") ?? "";
  const [input, setInput] = useState(searchTerm);

  useEffect(() => {
    setInput(searchTerm);
  }, [searchTerm]);

  const { data, isLoading, isError, error } = useQuery({
    ...searchQuery(searchTerm),
    placeholderData: (prev) => prev, // show the previous results until the new ones arrive.
  });

  useEffect(() => {
    const trimmedInput = input.trim();

    const timer = setTimeout(() => {
      const current = searchParams.get("q") ?? "";

      // only update URL if it actually changed
      if (trimmedInput === current) return;

      router.replace(
        trimmedInput
          ? `${routes.search}?q=${encodeURIComponent(trimmedInput)}`
          : routes.search,
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [input, router, searchParams]);

  const products = data?.products ?? [];

  return (
    <main className="max-w-6xl mx-auto p-4 space-y-8">
      <h1 className="sr-only">Search</h1>
      <div className="flex flex-1 w-full gap-2">
        <div className="relative flex-1">
          {
            <Search className="absolute left-2 top-2.5 text-brown-dark md:size-5 size-4" />
          }
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search hair oils, serums and more..."
            className="w-full border pl-9 rounded-lg px-3 py-2"
          />
          {input && (
            <X
              className="absolute right-2 top-2 hover:bg-gray-200 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setInput("");
                router.replace(routes.search);
              }}
            />
          )}
        </div>
      </div>

      {!searchTerm && <FeaturedProducts />}

      {searchTerm && isLoading && <p>Searching...</p>}

      {searchTerm && isError && (
        <p className="text-red-600">{(error as Error).message}</p>
      )}

      {searchTerm && !isLoading && !isError && !!products.length && (
        <>
          <p className="text-foreground">
            {products.length} matching result(s) for <b>"{searchTerm}"</b>
          </p>
          <ProductGrid products={products} />
        </>
      )}

      {searchTerm && !isLoading && !isError && !products.length && (
        <p className="text-foreground">
          No products found for <b>"{searchTerm}"</b>.
        </p>
      )}
    </main>
  );
}
