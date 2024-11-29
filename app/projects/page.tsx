import Navbar from "@/components/Navbar"
import Projects from "./_components/Projects";

const ProjectsPage = () => {
  return (
    <div className="bg-main h-full">
        <Navbar />
        <div className='flex items-center w-full h-full justify-center flex-col px-4'>
          <h1 className="text-neutral-200 font-medium text-5xl text-center pt-36">
              Personal Projects
          </h1>
        </div>
        <div className="px-3">
          <Projects isProjectPage />
        </div>
    </div>
  )
}

export default ProjectsPage