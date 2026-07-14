import { FeaturedProduct, featuredProducts } from "@/lib/featuredProducts";
import { routes } from "@/lib/routes";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <>
      <h2 className=" font-medium">Featured</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featuredProducts.map((product: FeaturedProduct, index: number) => (
          <Link
            key={product.id}
            href={routes.productId(product.id)}
            className=" bg-white relative rounded-lg group border-2 flex flex-col justify-between  border-brown"
          >
            <div className="relative w-full h-40 sm:h-48 md:h-72 overflow-hidden rounded-t-md">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
                className="object-contain w-full h-full group-hover:scale-95 transition-transform duration-300"
              />
            </div>

            <div className="absolute right-2 top-2">
              <div className="flex items-center justify-center bg-coral text-white rounded-full px-2 py-1">
                <span>Featured </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-3 bg-green-dark rounded-b-md group-hover:bg-green transition-colors duration-300 text-white ">
              <div className="flex items-center justify-between">
                <p className="">{product.title}</p>
              </div>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
