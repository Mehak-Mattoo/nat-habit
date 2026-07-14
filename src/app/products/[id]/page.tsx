import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/api";
import StockBadge from "@/components/products/Stockbadge";
import { featuredProducts } from "@/lib/featuredProducts";
import { Metadata } from "next";
import { Star } from "lucide-react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) {
    return { title: "Product not found" };
  }
  const featured = featuredProducts.find((p) => p.id === Number(id));
  const title = featured?.title ?? product.title;
  const description = (featured?.description ?? product.description).slice(0, 160);
  const image = featured?.image ?? product.thumbnail;
  return {
    title, 
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  // console.log("product", product);

  if (!product) notFound();

  const featured = featuredProducts.find((p) => p.id === Number(id));

  const title = featured?.title ?? product.title;
  const image = featured?.image ?? product.images?.[0] ?? product.thumbnail;
  const price = featured?.price ?? product.price;
  const description = featured?.description ?? product.description;
  const category = featured?.category ?? product.category;

  return (
    <>
      <main className="max-w-6xl mx-auto p-4 grid sm:grid-cols-2 gap-8">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-4"
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">{title}</h1>
            <div className="flex items-center justify-center gap-1 bg-coral text-white rounded-full px-2 py-1">
              <p>{product.rating}</p>
             <div className="flex items-center justify-center"> <Star className="w-4 h-4" fill="currentColor" /> </div>
            </div>
          </div>
          <span className="font-medium ">Category:</span>{" "}
          <span className="capitalize">{category}</span>
          <p className=" ">{description}</p>
          <p className=" font-semibold">${price}</p>

          <StockBadge productId={product.id} initialStock={product.stock} />
        </div>
      </main>
    </>
  );
}
