import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/api";
import StockBadge from "@/components/products/Stockbadge";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  console.log("product", product);

  if (!product) notFound(); 

  return (
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
          <p className="text-yellow-600">★ {product.rating}</p>
        </div>
        <p className="text-zinc-600">{product.description}</p>
        <p>
          <span className="font-medium">Category:</span> {product.category}
        </p>
        <h4 className="text-2xl font-semibold">${product.price}</h4>

        {/* live stock (client component) */}
        <StockBadge productId={product.id} initialStock={product.stock} />
      </div>
    </main>
  );
}
