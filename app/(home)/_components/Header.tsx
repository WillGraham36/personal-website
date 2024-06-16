import Image from "next/image"
import PFP from "../../../public/PFP.jpg";

const Header = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
        <Image 
            src={PFP}
            alt="Will Graham"
            className="rounded-full"
        />
        <div className="px-8">
            <h1 className="text-primary-foreground text-[75px] font-bold">
                Hi, I'm Will
            </h1>
            <h2 className=" text-muted font-medium text-[30px]">
                I'm a Computer Science student at the University of Maryland <br/>and full-stack web developer
            </h2>
        </div>
    </div>
  )
}

export default Header