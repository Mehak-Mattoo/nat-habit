import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { routes } from "@/lib/routes";
import { Star } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={routes.productId(product.id)}
      className=" relative rounded-lg group border-2 flex flex-col justify-between  border-brown"
    >
      <div className="relative w-full h-40 sm:h-48 md:h-72 overflow-hidden rounded-t-md">
        <Image
          src={product.images?.[0] ?? product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
          className="object-contain w-full h-full group-hover:scale-95 transition-transform duration-300"
        />
      </div>
      <div className="absolute top-2 right-2">
        <div className="flex items-center justify-center gap-1  bg-coral-dark text-white rounded-full px-2 py-1">
          <p>{product.rating.toFixed(1)} </p>
          <div className="flex items-center justify-center">
          
            <Star className="w-4 h-4" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 bg-green-dark rounded-b-md group-hover:bg-green-dark transition-colors duration-300 text-amber-100 ">
        <div className="flex flex-col ">
          <p className="font-medium">{product.title}</p>
          <p className=" text-white">{product.description.slice(0, 100)}...</p>
        </div>
        <p className="font-semibold">${product.price}</p>
      </div>
    </Link>
  );
}
