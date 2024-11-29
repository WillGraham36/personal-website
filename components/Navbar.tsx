"use client";
import Link from "next/link";
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const Navbar = () => {
  return (
    <header className="w-full z-[999] bg-offmain p-2 px-3 flex justify-center items-center gap-10 top-0">
      <Link href='/' className='underline-offset-8 text-gray-400 hover:text-white transition-colors hover:underline'>
        Home
      </Link>
      <Link href='/projects' className='underline-offset-8 text-gray-400 hover:text-white transition-colors hover:underline'>
        Projects
      </Link>
      <Link href='/contact' className='underline-offset-8 text-gray-400 hover:text-white transition-colors hover:underline'>
        Contact
      </Link>
    </header>
  )
}

export default Navbar