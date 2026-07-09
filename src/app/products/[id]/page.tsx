import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/api";
import StockBadge from "@/components/products/Stockbadge";
import { PageSkeleton } from "@/components/skeleton/Skeleton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  // console.log("product", product);

  if (!product) notFound();

  return (
    <>
      <main className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={600}
          height={600}
          className="rounded-lg"
          priority
        />
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold">{product.title}</h1>
            <div className="flex items-center justify-center bg-coral text-white rounded-full px-2 py-1">
              <h6>★ {product.rating}</h6>
            </div>
          </div>
          <span className="font-medium ">Category:</span>{" "}
          <span className="capitalize">{product.category}</span>
          <p className="text-zinc-600 ">{product.description}</p>
          <p></p>
          <h4 className=" font-semibold">${product.price}</h4>
          {/* live stock (client component) */}
          <StockBadge productId={product.id} initialStock={product.stock} />
        </div>
      </main>
      {/* <PageSkeleton variant="product" /> */}
    </>
  );
}
