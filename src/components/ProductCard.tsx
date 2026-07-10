import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { routes } from "@/lib/routes";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={routes.productId(product.id)}
      className=" relative rounded-lg group border-2 flex flex-col justify-between  border-brown"
    >
      <div className="relative w-full h-40 sm:h-48 md:h-72 overflow-hidden rounded-t-md">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
          className="object-contain w-full h-full group-hover:scale-95 transition-transform duration-300"
        />
      </div>
      <div className="absolute top-2 right-2">
        <div className="flex items-center justify-center bg-coral text-white rounded-full px-2 py-1">
          <h6>{product.rating.toFixed(1)} ★ </h6>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 bg-green/80 rounded-b-md group-hover:bg-green transition-colors duration-300 text-white ">
        <div className="flex flex-col ">
          <h5 className="">{product.title}</h5>
          <h6 className=" text-white/90">
            {product.description.slice(0, 100)}...
          </h6>
        </div>
        <h5>${product.price}</h5>
      </div>
    </Link>
  );
}
