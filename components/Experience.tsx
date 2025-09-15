import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

interface ExperienceProps {
  imgSrc: string;
  title: string;
  position: string;
  date: string;
  points: string[];
  padding?: boolean;
}
const Experience: React.FC<ExperienceProps> = ({
  imgSrc,
  title,
  position,
  date,
  points,
  padding = false
}) => {
  return (
    <div className='w-full flex gap-2 pl-[22px] pt-4 mb-4'>
      <div className='bg-main border-2 border-border rounded-full w-12 h-12 flex items-center flex-shrink-0 justify-center overflow-hidden'>
        <Image src={imgSrc} alt={title} width={50} height={50} className={`w-full h-full object-cover ${padding && 'p-2'}`} />
      </div>
      <div className='flex flex-col'>
        <h3 className='text-lg'>{title}</h3>
        <p className='text-sm text-neutral-500'>{position}</p>
        <p className='text-sm text-neutral-500'>{date}</p>
        <ul className='list-disc pl-5 pt-1'>
          {points.map((point, i) => (
            <li className='text-neutral-300' key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const ExperienceAndEducation = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='w-full h-full max-w-6xl p-4'>
        <h1 className='text-primary text-4xl font-medium pb-4'>Experience & Education</h1>
        <Tabs defaultValue="Work" className="w-full">
          <TabsList className='w-full bg-offmain'>
            <TabsTrigger value="Work" className='w-full data-[state=active]:bg-primary-foreground'>Work</TabsTrigger>
            <TabsTrigger value="Education" className='w-full data-[state=active]:bg-primary-foreground'>Education</TabsTrigger>
          </TabsList>
          <TabsContent value="Work">
            <div className='border-2 rounded-md border-border flex flex-col relative gap-1'>
              <div className='w-12 min-h-full border-r-2 border-border absolute -z-10'></div>
              <Experience 
                imgSrc='/logos/radian-logo.png'
                title='Radian'
                position='Software Engineer Intern'
                date='June – August 2025'
                padding={true}
                points={[
                  'Reduced API errors and improved reliability by strengthening GraphQL endpoints in Express.js',
                  'Expanded system flexibility by exposing GraphQL services as REST APIs with Prisma and PostgreSQL',
                  'Streamlined workflows across teams by introducing and training staff on new project management software'
                ]} />

              <Experience 
                imgSrc='/logos/lxaer-logo.png'
                title='LX Aer'
                position='Software Engineer Intern'
                date='August 2024 – June 2025'
                points={[
                  'Accelerated site performance by optimizing multi-page load times through SSR, dynamic imports, and caching',
                  'Improved reliability by fixing a long-standing auth bug that prevented encrypted content access',
                  'Built and delivered an admin dashboard in React that empowered clients to manage users and reduced overhead'
                ]} />

              <Experience 
                imgSrc='/logos/constellation-logo.png'
                title='Constellation Technologies'
                position='Frontend Engineer Intern'
                date='July 2024 – January 2025'
                points={[
                  'Improved site speed and responsiveness by optimizing caching and reducing blocking requests',
                  'Developed React/Firebase dashboards to help student entrepreneurs track operations and growth',
                  'Cut delivery times in half by introducing modular project design for faster development cycles'
                ]} />
            </div>
          </TabsContent>


          <TabsContent value="Education">
            <div className='border-2 rounded-md border-border flex flex-col relative gap-1'>
              <div className='w-12 min-h-full border-r-2 border-border absolute -z-10'></div>
              <Experience
                imgSrc='/logos/umd-logo.png'
                title='University of Maryland, College Park'
                position='Bachelor of Science in Computer Science; Specialization in machine learning'
                date='August 2023 - May 2027'
                points={[
                  'Courses: Data Structures, Algorithms, Organization of Programming Languages, Web Programming, Databases',
                  'GPA: 3.98 / 4.0'
                ]} />
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  )
}

export default ExperienceAndEducation