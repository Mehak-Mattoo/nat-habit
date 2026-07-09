type PageSkeletonProps = {
  variant?: "home" | "product";
};

function Block({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-lg bg-zinc-200/80 ${className}`} />
  );
}

export function PageSkeleton({ variant = "home" }: PageSkeletonProps) {
  if (variant === "product") {
    return (
      <main className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8">
        <Block className="h-[400px] md:h-[500px] w-[30vw]" />
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <Block className="h-8 w-4/5" />
            <Block className="h-8 w-16 rounded-full" />
          </div>
          <Block className="h-5 w-1/3" />
          <Block className="h-24 w-full" />
          <Block className="h-8 w-24" />
          <Block className="h-6 w-32" />
        </div>
      </main>
    );
  }

  // home variant
  return (
    <main className="max-w-6xl mx-auto p-4  space-y-8">
      <Block className="h-8 w-32" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Block key={i} className="h-56 w-full" />
        ))}
      </div>
      <Block className="h-8 w-40" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Block key={i} className="h-56 w-full" />
        ))}
      </div>
    </main>
  );
}
