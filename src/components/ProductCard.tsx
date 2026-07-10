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
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
        className="group-hover:scale-95 mx-auto object-contain bg-white w-full rounded-t-md h-full transition-transform duration-300"
      />
      <div className="absolute top-2 right-2">
        <div className="flex items-center justify-center bg-coral text-white rounded-full px-2 py-1">
          <h6>{product.rating.toFixed(1)} ★ </h6>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 bg-green/80 rounded-b-md group-hover:bg-green transition-colors duration-300 text-white ">
        <div className="flex items-center justify-between">
          <h5 className="">{product.title}</h5>
        </div>
        <h5>${product.price}</h5>
      </div>
    </Link>
  );
}
