import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border rounded-lg p-3 hover:shadow"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={300}
      />
      <h3 className="font-medium">{product.title}</h3>
      <p>${product.price}</p>
      <p className="text-sm text-yellow-600">★ {product.rating}</p>
    </Link>
  );
}



