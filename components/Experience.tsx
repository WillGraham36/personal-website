import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

interface ExperienceProps {
  imgSrc?: string;
  initials?: string;
  title: string;
  position: string;
  date: string;
  points: string[];
  padding?: boolean;
}
const Experience: React.FC<ExperienceProps> = ({
  imgSrc,
  initials,
  title,
  position,
  date,
  points,
  padding = false
}) => {
  return (
    <div className='w-full flex items-start gap-2 pl-[22px] pr-4 pt-4 mb-4 text-left'>
      <div className='bg-main border-2 border-border rounded-full w-12 h-12 flex items-center flex-shrink-0 justify-center overflow-hidden'>
        {imgSrc ? (
          <Image src={imgSrc} alt={title} width={50} height={50} className={`w-full h-full object-cover ${padding ? 'p-2' : ''}`} />
        ) : (
          <span aria-hidden="true" className="text-sm font-semibold text-neutral-200">{initials}</span>
        )}
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
        <h1 className='text-primary text-4xl font-medium pb-4 text-center sm:text-left'>Experience & Education</h1>
        <Tabs defaultValue="Work" className="w-full">
          <TabsList className='w-full bg-offmain'>
            <TabsTrigger value="Work" className='w-full data-[state=active]:bg-primary-foreground'>Work</TabsTrigger>
            <TabsTrigger value="Education" className='w-full data-[state=active]:bg-primary-foreground'>Education</TabsTrigger>
          </TabsList>
          <TabsContent value="Work">
            <div className='border-2 rounded-md border-border flex flex-col relative gap-1'>
              <div className='w-12 min-h-full border-r-2 border-border absolute -z-10'></div>
              <Experience
                imgSrc='/logos/capital-one-logo.jpg'
                title='Capital One'
                position='Software Engineer Intern'
                date='June - August 2026'
                points={[
                  'Built a performance analysis tool used by 2,000+ engineers daily to uncover performance, SEO, and runtime issues missed by existing tooling across Card pages serving millions of customers',
                  'Cut local build times by 80% (from 5s to 1s) by eliminating unnecessary rebuilds, reducing repeated delays during development and multi-step AI agent workflows',
                  'Led a 5-engineer pod in architecting concurrent data flows across Chrome page, background, and storage contexts, ensuring reliable collection and persistence of continuous performance data',
                  'Redesigned an internal live-testing tool with JSON validation, persistent drafts, and actionable errors, making manual feature testing faster and more reliable'
                ]} />

              <Experience
                imgSrc='/logos/exiger-logo.jpg'
                title='Exiger @ App Dev Club'
                position='Technical Project Lead'
                date='September 2025 - May 2026'
                points={[
                  "Led 12 engineers across front and backend development of Exiger's supplier portal, owning technical architecture and coordinating directly with company PMs and senior SWEs",
                  'Architected an agentic web scraper that automated supplier onboarding by discovering company websites and generating structured profiles, saving hundreds of hours of manual research',
                  'Designed a multi-organization access model enabling customer users to manage multiple supplier relationships while securely isolating supplier accounts, data, and workflows'
                ]} />

              <Experience
                imgSrc='/logos/radian-logo.png'
                title='Radian'
                position='Backend Engineer Intern'
                date='June - August 2025'
                padding={true}
                points={[
                  'Improved data accuracy by 35% by implementing rule-based input validation in GraphQL and Express.js, preventing submission of malformed business data',
                  'Exposed GraphQL endpoints as RESTful APIs using Prisma and PostgreSQL, automating partner data submissions and replacing manual workflows',
                  'Drove rollout of new data validation workflows across engineering and product teams, presenting technical implementation and business impact to company leadership'
                ]} />

              <Experience
                imgSrc='/logos/mitre-logo.jpg'
                title='MITRE @ App Dev Club'
                position='Frontend Developer (Contract)'
                date='February - May 2025'
                points={[
                  'Developed a frontend application for efficiently analyzing malware with Next.js, integrating with Elasticsearch and Kibana for secure file uploads, dynamic tool selection, and easy data visualization'
                ]} />

              <Experience
                imgSrc='/logos/lxaer-logo.png'
                title='LX Aer'
                position='Frontend Engineer Intern'
                date='August 2024 - June 2025'
                points={[
                  'Reduced multi-page load times by 30% using Next.js server-side rendering, dynamic imports, and API caching',
                  'Eliminated client crashes when accessing encrypted content by resolving a legacy authentication token handling bug'
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