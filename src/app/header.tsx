import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
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
                <Link href="/contato" className="p-4 hover:text-green-500">Contato</Link>
            </ul>
        </div>
    )
}