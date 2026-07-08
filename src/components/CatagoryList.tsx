export default function CategoryList({
  categories,
}: {
  categories: { slug: string; name: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <span
          key={c.slug}
          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
        >
          {c.name}
        </span>
      ))}
    </div>
  );
}
