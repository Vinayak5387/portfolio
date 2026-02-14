"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return(
        <nav className="w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-black">
                    <Link href="/"> <Image src="/images/sarwa-studio.svg" alt="sarwa studio" width={200} height={40} priority/>
                        
                    </Link>
                </div>
                <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
                    <Link href="/services" className="text-black font-semibold">Services</Link>
                    <Link href="/about" className="text-black font-semibold">About</Link>
                    <Link href="/blogs" className="text-black font-semibold">Blogs</Link>
                    <Link href="/contact" className=" border border-black font-semibold px-4 py-2 rounded-md text-black hover:bg-black hover:text-white transition duration-200">Contact</Link>
                </div>
            </div> 
        </nav>
    )
}