"use client";

import { useQuery } from "@tanstack/react-query";
import { stockQuery } from "@/lib/client-apis";

export default function StockBadge({
  productId,
  initialStock,
}: {
  productId: number;
  initialStock: number;
}) {
  const { data: stock = initialStock, isLoading } = useQuery(
    stockQuery(productId),
  );

  if (isLoading) return <p>Checking stock...</p>;

  return (
    <p>
      <span className="font-medium">Stock:</span>{" "}
      {stock > 0 ? `${stock} available` : "Out of stock"}
    </p>
  );
}
