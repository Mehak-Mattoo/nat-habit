import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/api";
import StockBadge from "@/components/products/Stockbadge";
import { PageSkeleton } from "@/components/skeleton/Skeleton";
import { featuredProducts } from "@/lib/featuredProducts";
import { Metadata } from "next";

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
    title, // becomes "Fresh Netraa Eye Cream | Nat Habit"
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
  const image = featured?.image ?? product.thumbnail;
  const price = featured?.price ?? product.price;
  const description = featured?.description ?? product.description;

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
              <p>★ {product.rating}</p>
            </div>
          </div>
          <span className="font-medium ">Category:</span>{" "}
          <span className="capitalize">{product.category}</span>
          <p className=" ">{description}</p>
        
          <p className=" font-semibold">${price}</p>
          {/* live stock (client component) */}
          <StockBadge productId={product.id} initialStock={product.stock} />
        </div>
      </main>
      {/* <PageSkeleton variant="product" /> */}
    </>
  );
}
