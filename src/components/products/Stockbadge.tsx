"use client";

import { useQuery } from "@tanstack/react-query";
import { stockQuery } from "@/lib/client-apis";

export default function StockBadge({
  productId,
  stock,
}: {
  productId: number;
  stock: number;
}) {
  const { data= stock , isLoading , error } = useQuery(
    stockQuery(productId),
  );

  if (isLoading) return <p>Checking stock...</p>;

  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <p>
      <span className="font-medium">Stock:</span>{" "}
      {stock > 0 ? `${stock} left` : "Out of stock"}
    </p>
  );
}
