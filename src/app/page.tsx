import CategoryList from "@/components/CatagoryList";
import ProductGrid from "@/components/ProductGrid";
import { getCategories, getProducts } from "@/lib/api";
import { PageSkeleton } from "@/components/skeleton/Skeleton";
import FeaturedProducts from "@/components/FeaturedProducts";

export default async function Home() {
  const [{ products }, categories] = await Promise.all([
    getProducts(8),
    getCategories(),
  ]);

  // const products = await getProducts(8);
  // const categories = await getCategories();

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="max-w-6xl mx-auto p-4 space-y-8">
        <h1 className="sr-only">Nat Habit Store</h1>
        <CategoryList categories={categories} />
        {/* <PageSkeleton variant="home" /> */}
        <FeaturedProducts />
        <h2 className=" font-medium">All products</h2>
        <ProductGrid products={products} /> {/* All products */}
      </main>
    </div>
  );
}
