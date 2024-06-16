"use client";
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useMediaQuery } from 'usehooks-ts'

const Navbar = () => {
    const router = useRouter();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const size = isMobile ? "sm" : "lg";

  return (
    <div className="w-full text-primary-foreground z-[99999] bg-offmain p-2 px-3 flex justify-center md:justify-between items-center top-0">
        {!isMobile &&
            <h1 className="text-3xl font-medium">Will Graham</h1>
        }
        <div>
            <Button size={size} variant={"ghost"} onClick={() => {router.push('./')}}>
                Home
            </Button>
            <Button size={size} variant={"ghost"} onClick={() => {router.push("./projects")}}>
                Projects
            </Button>
            <Button size={size} variant={"ghost"} onClick={() => {router.push("./about")}}>
                About
            </Button>
            <Button size={size} variant={"ghost"} onClick={() => {router.push("./contact")}}>
                Contact
            </Button>
        </div>
    </div>
  )
}

export default Navbar