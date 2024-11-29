"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { ExternalLink } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  githubLink: string;
  websiteLink?: string;
  techList: string[];
}

const Card = ({
  title,
  description,
  image,
  githubLink,
  websiteLink,
  techList,
}: CardProps) => {
  return (
    <div className="max-w-lg max-h-svh border-2 border-neutral-800 rounded-lg hover:scale-105 transition-transform transform">
      <div className="h-[240px] rounded-t-lg w-full">
        <Image 
          src={image} 
          width={1024}
          height={768}
          alt={`${title} cover image`}
          className="rounded-t-lg object-cover w-full h-full"
        />
      </div>
          <div className="px-5 pb-5 pt-[13px] border-t-2 border-neutral-800 relative">
            <h5 className="mb-2 text-2xl font-bold tracking-tight w-3/4">{title}</h5>
            <p className="mb-2 text-neutral-400">{description}</p>

            <div className="absolute top-4 right-4 flex gap-2">
              <Link href={githubLink} target="_blank" className="hover:bg-neutral-600 p-[2px] w-7 h-7 rounded-full flex items-center justify-center transition-colors" title="Github">
                <FontAwesomeIcon icon={faGithub} size="lg" className="text-white" />
              </Link>
              {websiteLink ? (
                <Link href={websiteLink} target="_blank" className="hover:bg-neutral-600 p-1 rounded-full flex items-center justify-center transition-colors" title="Project Website">
                  <ExternalLink size={20} className="text-white" />
                </Link>
              ) : null}
            </div>
          </div>

        <div>
          
        <div className="px-5 pb-5 flex flex-wrap gap-2">
          {techList.map((tech, index) => (
            <div key={index} className="text-neutral-300 bg-neutral-800 px-3 py-1 rounded-2xl">{tech}</div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default Card