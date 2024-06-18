import AboutMe from "@/components/AboutMe"
import Navbar from "@/components/Navbar"
import Skills from "./_components/Skills"

const AboutPage = () => {
  return (
    <div className="bg-main h-screen w-full">
      <Navbar />
      <div className="pt-36 bg-main">
        <AboutMe/>
        <div className="flex justify-center pt-20 bg-main ">
          <Skills/>
        </div>
      </div>
    </div>
  )
}

export default AboutPage