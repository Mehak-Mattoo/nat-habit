import { routes } from "@/lib/routes";
import Link from "next/link";

  export default function ProductNotFound() {
  return (
    <main className="max-w-6xl mx-auto gap-3 flex flex-col p-8 text-center">
      <h1 className=" font-medium">Product not found</h1>
      <p className="">
        The product you are looking for does not exist.
      </p>
      <Link href={routes.home} className=" underline">
        Back to home
      </Link>
    </main>
  );
}
