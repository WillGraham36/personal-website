import Image from 'next/image'
import React from 'react'

interface TechProps {
  name: string;
  src: string;
}
const Tech: React.FC<TechProps> = ({ name, src }) => {
  return (
    <div className='bg-[hsl(12,6%,17%)] hover:bg-[hsl(12,6%,23%)] transition-colors p-2 rounded-lg flex gap-4 w-full justify-center sm:justify-start items-center'>
      <div className='rounded-md w-9 h-full flex items-center justify-center'>
        <Image src={src} alt={name} width={35} height={35} className='w-full object-cover' />
      </div>
      <h2 className='text-lg text-primary'>{name}</h2>
    </div>
  )
}


const TechStack = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='w-full h-full max-w-6xl p-4'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-primary text-4xl font-medium'>Current Technologies</h1>
          <p className='text-neutral-500 hidden sm:block'>
            I have experience using many different technologies to build modern, full-stack applications <br/>
            Here are some of my main ones:
          </p>
        </div>
        <div className='mt-4 gap-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4'>
          <Tech name='React' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'/>

          <Tech name='NextJS' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'/>

          <Tech name='TypeScript' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' />
          
          <Tech name='Tailwind' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'/>

          <Tech name='Git' src='https://raw.githubusercontent.com/michaelkolesidis/tech-icons/3f4f5fbef9a8e5dae8dc9cab983472a9222993b9/icons/git/git-original.svg'/>

          <Tech name='MongoDB' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg'/>

          <Tech name='ExpressJS' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'/>

          <Tech name='SpringBoot' src='https://raw.githubusercontent.com/michaelkolesidis/tech-icons/3f4f5fbef9a8e5dae8dc9cab983472a9222993b9/icons/spring/spring-original.svg'/>
        </div>
      </div>
    </div>
  )
}

export default TechStack