import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const ContactMe = () => {
  return (
    <div className="h-full w-full text-muted flex items-center justify-center flex-col">
        <h1 className="text-muted font-medium text-[50px] underline-offset-8 underline">
            Contact Me
        </h1>
        <div className="flex flex-col text-[30px] gap-y-8 pt-4">
            <Button variant={"darkGhost"} className="p-10 justify-start">
                <a href="mailto:wgraham1@umd.edu" target="_blank" className="flex items-center px-3 gap-x-3">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" className="bg-[#1e3936] border-[#1e3936] rounded-full border-8 p-2" />
                    <h2 className="text-[25px] font-medium">willgraham367@gmail.com</h2>
                </a>
            </Button>
            <Button variant={"darkGhost"} className="p-10 justify-start">
            <a href="https://github.com/WillGraham36" target="_blank" className="flex items-center px-3 gap-x-3">
                    <FontAwesomeIcon icon={faGithub} size="3x" className="bg-[#1e3936] border-[#1e3936] rounded-full border-8 p-2"/>
                    <h2 className="text-[25px] font-medium">github.com/WillGraham36</h2>
                </a>
            </Button>
            <Button variant={"darkGhost"} className="p-10 justify-start">
            <a href="https://www.linkedin.com/in/will-graham-4623022a8/" target="_blank" className="flex items-center px-3 gap-x-3">
                    <FontAwesomeIcon icon={faLinkedinIn} size="3x" className="bg-[#1e3936] border-[#1e3936] rounded-full border-8 p-2"/>
                    <h2 className="text-[25px] font-medium">linkedin.com/in/will-graham-4623022a8/</h2>
                </a>
            </Button>
        </div>
    </div>
  )
}

export default ContactMe