"use client";
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter();

  return (
    <div className="w-full text-primary-foreground z-[99999] bg-offmain p-2 px-3 flex justify-between items-center">
        <h1 className="text-3xl font-medium">Will Graham</h1>
        <div>
            <Button size={"lg"} variant={"ghost"} onClick={() => {router.push('./')}}>
                Home
            </Button>
            <Button size={"lg"} variant={"ghost"} onClick={() => {router.push("./projects")}}>
                Projects
            </Button>
            <Button size={"lg"} variant={"ghost"} onClick={() => {router.push("./about")}}>
                About
            </Button>
            <Button size={"lg"} variant={"ghost"} onClick={() => {router.push("./contact")}}>
                Contact
            </Button>
        </div>
    </div>
  )
}

export default Navbar