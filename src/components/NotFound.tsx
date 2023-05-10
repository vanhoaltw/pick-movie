import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="min-h-screen max-w-5xl mx-auto my-10 relative">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/notfound.svg" alt="Not found" height={320} width={400} />
        <h1 className="text-4xl font-bold">Lost your way?</h1>
        <p className="text-slate-400">
          Oops! This is awkward. You are looking for something that {"doesn't"}
          actually exist.
        </p>
        <Link href="/">
          <button
            type="button"
            className="focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-purple-600 hover:bg-purple-700 focus:ring-purple-900 flex items-center gap-2"
          >
            <FaChevronLeft /> Back to home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
