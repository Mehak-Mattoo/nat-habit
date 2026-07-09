import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { routes } from "@/lib/routes";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={routes.productId(product.id)}
      className=" rounded-lg border-2 border-brown"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={300}
      />

      <div className="flex flex-col gap-2 p-3 bg-green text-white ">
        <div className="flex items-center justify-between">
          <h5 className="">{product.title}</h5>

          <div className="flex items-center justify-center bg-coral text-white rounded-full px-2 py-1">
            <h6>★ {product.rating}</h6>
          </div>
        </div>
        <h5>${product.price}</h5>
      </div>
    </Link>
  );
}
