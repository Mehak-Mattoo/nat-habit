export default function CategoryList({
  categories,
}: {
  categories: { slug: string; name: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <h6
          key={c.slug}
          className="px-3 py-1 bg-brown text-white rounded-full "
        >
          {c.name}
        </h6>
      ))}
    </div>
  );
}
