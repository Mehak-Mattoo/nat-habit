import { routes } from "@/lib/routes"
import Link from "next/link"


export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h2 className=" font-bold">404 - Page Not Found</h2>
          <p className="">The page you are looking for does not exist.</p>
          <Link href={routes.home} className="inline-block mt-4 underline">
            Back to home
          </Link>
    </div>
  )
}