import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/api";
import StockBadge from "@/components/products/Stockbadge";
import { PageSkeleton } from "@/components/skeleton/Skeleton";
import { featuredProducts } from "@/lib/featuredProducts";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  // console.log("product", product);

  if (!product) notFound();

  const featured = featuredProducts.find((p) => p.id === Number(id));

  const title = featured?.title ?? product.title;
  const image = featured?.image ?? product.thumbnail;
  const price = featured?.price ?? product.price;
  const subtitle = featured?.subtitle ?? product.subtitle;

  return (
    <>
      <main className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8">
        <Image
          src={image}
          alt={title}
          width={500}
          height={200}
          priority
          className=" bg-white w-full rounded-md h-full "
        />
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold">{title}</h1>
            <div className="flex items-center justify-center bg-coral text-white rounded-full px-2 py-1">
              <h6>★ {product.rating}</h6>
            </div>
          </div>
          <span className="font-medium ">Category:</span>{" "}
          <span className="capitalize">{product.category}</span>
          <p className="text-white/90 ">{subtitle}</p>
        
          <h4 className=" font-semibold">${price}</h4>
          {/* live stock (client component) */}
          <StockBadge productId={product.id} initialStock={product.stock} />
        </div>
      </main>
      {/* <PageSkeleton variant="product" /> */}
    </>
  );
}
