"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    url: string;
}

const Card = ({
    title,
    description,
    image,
    url
}: CardProps) => {
    const href = "/projects/" + url;
  return (
    <Link href={href}>
        <div className="max-w-lg max-h-svh bg-white hover:border rounded-lg hover:scale-105 transition-transform transform">
            <div className="h-[240px] rounded-t-lg">
                <Image 
                    src={image} 
                    width={1024}
                    height={768}
                    alt="Caprice Cover Image" 
                    className="rounded-t-lg w-full h-full object-cover"
                />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{description}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card