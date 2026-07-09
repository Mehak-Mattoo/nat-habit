export default function ProductNotFound() {
  return (
    <main className="max-w-6xl mx-auto p-8 text-center">
      <h1 className="text-2xl font-semibold">Product not found</h1>
      <p className="text-zinc-600 mt-2">
        The product you are looking for does not exist.
      </p>
      <a href="/" className="inline-block mt-4 underline">
        Back to home
      </a>
    </main>
  );
}
