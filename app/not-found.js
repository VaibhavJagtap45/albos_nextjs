import Link from "next/link";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
  path: "/404",
});

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
      <p className="text-xl text-slate-500 mb-8 max-w-md">
        Oops! The page you're searching for seems to have gone missing or has moved.
      </p>
      <Link 
        href="/" 
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold transition-transform shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        Back to Home
      </Link>
    </div>
  );
}
