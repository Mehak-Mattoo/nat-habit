import CategoryList from "@/components/CatagoryList";
import ProductGrid from "@/components/ProductGrid";
import { getCategories, getProducts } from "@/lib/api";
import { PageSkeleton } from "@/components/skeleton/Skeleton";

export default async function Home() {

    const [{ products }, categories] = await Promise.all([
      getProducts(8),
      getCategories(),
    ]);
    const featured = [...products]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="max-w-6xl mx-auto p-4 space-y-8">
        <CategoryList categories={categories} />

        {/* <PageSkeleton variant="home" /> */}

        <h3 className="text-2xl font-semibold">Featured</h3>
        <ProductGrid products={featured} />

        <h3 className="text-2xl font-semibold">All products</h3>
        <ProductGrid products={products} /> {/* All products */}
      </main>
    </div>
  );
}
