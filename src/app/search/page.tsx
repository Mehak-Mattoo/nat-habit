import React, { Suspense } from "react";
import SearchPage from "@/components/SearchPage";
import { Metadata } from "next";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { q } = await searchParams;
  if (q?.trim()) {
    return {
      title: `Nat Habit - Search results for "${q}"`,
    };
  }
  return {
    title: "Nat Habit - Search",
  };
}

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchPage />
      </Suspense>
    </>
  );
}
