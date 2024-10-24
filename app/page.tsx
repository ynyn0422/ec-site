import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold">Welcome to My E-commerce Site!</h1>
        <p className="text-lg">Discover amazing products below:</p>

        <Link href="/pages/products" className="text-blue-500 hover:underline">
          Go to Products
        </Link>
      </main>
    </div>
  );
}
