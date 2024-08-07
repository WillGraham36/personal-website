import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const Skill = (name: string, src: string, whiteBg?: boolean) => {
    return (
        <div className='text-center font-medium text-xl text-muted'>
            <Image src={src} alt={name} width={100} height={100} className={cn('rounded-xl', whiteBg && 'bg-white ') } />
            <h3 className='pt-4'>{name}</h3>
        </div>  
    )  
}

const Skills = () => {
  return (
    <div className='flex items-center w-full h-full justify-center flex-col'>
        <h1 className="text-muted font-medium text-[50px] border-b-2 px-4 text-center max-w-[90%]">
            My Tech Stack
        </h1>
        <div className='flex justify-center flex-wrap max-w-6xl gap-10 py-10 pb-20'>
            {Skill("TypeScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg")}
            {Skill("React", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg")}
            {Skill("Next.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg")}
            {Skill("Tailwind", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg")}
            {Skill("MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg")}
            {Skill("ExpressJS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", true)}
            {Skill("CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg")}
            {Skill("Git / GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", true)}
            {Skill("Java", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg")}
            {Skill("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg")}
            {/* {Skill("", "")} */}
        </div>
    </div>
  )
}

export default Skills