import AboutMe from "@/components/AboutMe"
import Navbar from "@/components/Navbar"
import Skills from "../../components/TechStack"

const AboutPage = () => {
  return (
    <div className="bg-main">
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