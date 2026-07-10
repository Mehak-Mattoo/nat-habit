import { FeaturedProduct, featuredProducts } from "@/lib/featuredProducts";
import { routes } from "@/lib/routes";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <>
      <h3 className=" font-medium">Featured</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featuredProducts.map((product: FeaturedProduct) => (
          <Link
            key={product.id}
            href={routes.productId(product.id)}
            className=" bg-white relative rounded-lg group border-2 flex flex-col justify-between  border-brown"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="group-hover:scale-95 mx-auto object-contain w-full rounded-t-md h-full transition-transform duration-300"
            />

            <div className="absolute right-2 top-2">
              <div className="flex items-center justify-center bg-coral text-white rounded-full px-2 py-1">
                <h6>Featured </h6>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-3 bg-green/80 rounded-b-md group-hover:bg-green transition-colors duration-300 text-white ">
              <div className="flex items-center justify-between">
                <h5 className="">{product.title}</h5>
              </div>
              <h5>${product.price}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
