import Link from "next/link";
import { Sprout, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-agri-bg dark:bg-[#0A120A] px-4 py-32">
      <div className="glass-card max-w-lg w-full p-8 sm:p-12 rounded-3xl border border-agri-primary/20 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-agri-primary/10 text-agri-primary dark:text-agri-accent flex items-center justify-center mx-auto mb-6">
          <Sprout className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest text-agri-primary dark:text-agri-accent uppercase bg-agri-light dark:bg-agri-dark px-3 py-1 rounded-full">
          {"404 Error"}
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-4 mb-2">
          {"Page Not Found"}
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          {"The agricultural plot or page you are looking for has been moved or doesn't exist in our ecosystem."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto gradient-button text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            {"Return Home"}
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold px-6 py-3 rounded-full text-sm border border-gray-200 dark:border-gray-700 inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {"Contact Support"}
          </Link>
        </div>
      </div>
    </div>
  );
}