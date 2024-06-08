import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-slate-700">
        <div className="flex justify-around h-32 items-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={130}
            height={37}
            priority
          />
          <ul className="flex sm:relative absolute sm:mt-0 mt-32">
            <Link href="/" className="p-4 hover:text-green-500">Home</Link>
            <Link href="/signIn" className="p-4 hover:text-green-500">Sign In</Link>
            <Link href="/signIn" className="p-4 hover:text-green-500">Sign Up</Link>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}