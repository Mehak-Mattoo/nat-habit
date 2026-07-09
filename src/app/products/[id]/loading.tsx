export default function ProductLoading() {
  return (
    <main className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8 animate-pulse">
      <div className="bg-zinc-200 h-[400px] rounded-lg" />
      <div className="space-y-4">
        <div className="bg-zinc-200 h-8 rounded" />
        <div className="bg-zinc-200 h-24 rounded" />
        <div className="bg-zinc-200 h-6 w-1/3 rounded" />
        <div className="bg-zinc-200 h-8 w-1/4 rounded" />
      </div>
    </main>
  );
}
