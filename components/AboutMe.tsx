"use client";
import { useMediaQuery } from 'usehooks-ts'

const AboutMe = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    const aboutMeString = "I am a full-stack web developer studying Computer Science at the University of Maryland. I have experience with React, NextJS, and many other technologies. Currently I am looking for internships and other opportunities to further my career in software development"

    const funFactString = "I love hiking and being in nature, I often times code in the woods behind my dorm as I find it more relaxing than a library or my room. I also really enjoy playing video games and have a strong interest in modding them"


  return (
    <div className="flex items-center w-full h-full justify-center flex-col gap-y-10">
        <h1 className="text-muted font-medium text-[50px] border-b-2 px-4">
            About Me
        </h1>
        <div className="p-5 rounded-lg mx-[10%] md:mx-[20%]">
            <h3 className="text-muted font-medium text-lg md:text-[35px] md:leading-10 lg:text-[25px] xl:text-[35px] text-center">    
                {aboutMeString}
            </h3>
        </div>
        {!isMobile && 
            <div className="p-5 rounded-lg mx-[10%] md:mx-[20%]">
                <h3 className="text-muted font-medium text-lg md:text-[35px] md:leading-10 lg:text-[25px] xl:text-[35px] text-center">    
                    <h3 className='underline underline-offset-4 pb-2'>Some fun facts about me: </h3>
                    <span> {funFactString} </span>
                </h3>
            </div>}
    </div>
  )
}

export default AboutMe