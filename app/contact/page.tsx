import ContactMe from "@/components/ContactMe"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import { FileDown } from "lucide-react"

const ContactPage = () => {
  return (
    <div className="bg-main h-screen w-full">
      <Navbar />
      <div className="pt-36 w-full flex justify-center">
        <div className="w-full md:w-1/2 text-muted flex items-center justify-center flex-col">
          <h1 className="text-neutral-200 first-line:font-medium text-5xl px-8 mb-12">
            Contact Me
          </h1>
          <div className="flex items-center">
            <div className="w-full flex flex-col gap-4">
              <Link href="https://www.linkedin.com/in/will-graham-4623022a8/" target="_blank">
                <Button className="flex gap-2 bg-main hover:bg-[hsl(196,21%,15%)] rounded-full">
                  <FontAwesomeIcon icon={faLinkedinIn} size="xl" className="text-white" />
                  <p className="text-neutral-400 pl-4 hidden sm:block">linkedin.com/in/will-graham-4623022a8/</p>
                  <p className="text-neutral-400 pl-4 block sm:hidden">LinkedIn</p>
                </Button>
              </Link>

              <Link href="https://github.com/WillGraham36" target="_blank">
                <Button className="flex gap-2 bg-main hover:bg-[hsl(196,21%,15%)] rounded-full">
                  <FontAwesomeIcon icon={faGithub} size="xl" className="text-white" />
                  <p className="text-neutral-400 pl-4 hidden sm:block">github.com/WillGraham36</p>
                  <p className="text-neutral-400 pl-4 block sm:hidden">GitHub</p>
                </Button>
              </Link>

              <Link href="mailto:wgraham1@umd.edu" target="_blank">
                <Button className="flex gap-2 bg-main hover:bg-[hsl(196,21%,15%)] rounded-full">
                  <FontAwesomeIcon icon={faEnvelope} size="xl" className="text-white" />
                  <p className="text-neutral-400 pl-4 hidden sm:block">willgraham367@gmail.com</p>
                  <p className="text-neutral-400 pl-4 block sm:hidden">Email</p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage