import Image from "next/image";
import PFP from "../../../public/PFP.jpg";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="w-full flex-1 flex justify-center items-center flex-col px-5 py-16 sm:px-8">
      <div className="w-full max-w-3xl animate-fade-in flex flex-col gap-2">
        <h1 className="text-white text-4xl sm:text-5xl font-bold">Hi, I&apos;m Will</h1>
        <h2 className="text-neutral-400 font-medium text-xl">
          I&apos;m a Computer Science student at the University of Maryland{" "}
          <br />
          and a full-stack web developer
        </h2>
        <div className="w-full flex flex-row flex-wrap gap-2 items-center">
          <Link href="/resume.pdf" target="_blank">
            <Button className="flex gap-2 bg-main hover:bg-[hsl(196,21%,15%)] text-white">
              Resume <FileDown size={24} />
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/will-graham-4623022a8/"
            target="_blank"
          >
            <Button className="flex gap-2 bg-main hover:bg-[hsl(196,21%,15%)] rounded-full">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="xl"
                className="text-white"
              />
            </Button>
          </Link>

          <Link href="https://github.com/WillGraham36" target="_blank">
            <Button className="flex gap-2 bg-main hover:bg-[hsl(196,21%,15%)] rounded-full">
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                className="text-white"
              />
            </Button>
          </Link>

          <Link href="mailto:wgraham1@umd.edu" target="_blank">
            <Button className="flex gap-2 bg-main hover:bg-[hsl(196,21%,15%)] rounded-full">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="xl"
                className="text-white"
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
