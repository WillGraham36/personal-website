"use client";

const AboutMe = () => {

    const aboutMeString = "I am a full-stack web developer with a passion for making websites and using AI. I have experience with many different technologies in front and back end development. Currently, I am looking for internships and would love to connect so please reach out!"


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
    </div>
  )
}

export default AboutMe