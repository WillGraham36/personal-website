import Image from "next/image"
import PFP from "../../../public/PFP.jpg";

const Header = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col md:flex-row">
        {/* <Image 
            src={PFP}
            alt="Will Graham"
            className="rounded-full max-w-[20%] h-auto"
        /> */}
        <div className="px-8 pb-20 md:pb-6 animate-fade-in">
            <h1 className="text-primary-foreground text-5xl md:text-8xl font-bold pb-4">
                Hi, I'm Will
            </h1>
            <h2 className="text-muted font-medium md:text-[35px] text-lg leading-8">
                I'm a Computer Science student at the University of Maryland <br/>and full-stack web developer
            </h2>
        </div>
    </div>
  )
}

export default Header