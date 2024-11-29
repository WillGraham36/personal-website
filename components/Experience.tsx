import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

interface ExperienceProps {
  imgSrc: string;
  title: string;
  position: string;
  date: string;
  points: string[];
}
const Experience: React.FC<ExperienceProps> = ({
  imgSrc,
  title,
  position,
  date,
  points
}) => {
  return (
    <div className='w-full flex gap-2 pl-[22px] pt-4 mb-4'>
      <div className='bg-main border-2 border-border rounded-full w-12 h-12 flex items-center flex-shrink-0 justify-center overflow-hidden'>
        <Image src={imgSrc} alt={title} width={50} height={50} className='w-full h-full object-cover' />
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
                imgSrc='/lxaer-logo.png'
                title='LX Aer'
                position='Software Developer Intern'
                date='August 2024 - Present'
                points={[
                  'Improved page load times by 15% using Next.js dynamic imports to defer loading of non-critical components',
                  'Developed an admin dashboard used by 8 organizations to manage 50+ users, which improved administrative efficiency by 25% with bulk imports from .csv files and user management features',
                  'Integrated Google Drive file picker into React app, enabling seamless file selection and cloud storage access'
                ]} />
              <Experience 
                imgSrc='/constellation-logo.png'
                title='Constellation Technologies'
                position='Full-stack Developer Intern'
                date='July 2024 - Present'
                points={[
                  'Developed 3 dashboard pages using React and Firebase to assist student entrepreneurs in launching startups',
                  'Increased mobile page load times by 20% by optimizing API calls and implementing mobile-first web design',
                  'Reduced code delivery times by 4 days by restructuring the project directory and improving code organization',
                  'Collaborated with a team of 11 developers using Git for code integration and to ensure smooth project delivery',
                ]} />
            </div>
          </TabsContent>


          <TabsContent value="Education">
            <div className='border-2 rounded-md border-border flex flex-col relative gap-1'>
              <div className='w-12 min-h-full border-r-2 border-border absolute -z-10'></div>
              <Experience
                imgSrc='/umd-logo.png'
                title='University of Maryland, College Park'
                position='Bachelor of Science in Computer Science; Specialization in machine learning'
                date='August 2023 - May 2027'
                points={[
                  'Courses: Data Structures, Algorithms, Object Oriented Programming II, Organizaiton of Programming Languages',
                  'GPA: 3.96'
                ]} />
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  )
}

export default ExperienceAndEducation