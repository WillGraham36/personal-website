import Card from "./Card";
import { promises as fs } from 'fs';

const Projects = async () => {

    const file = await fs.readFile(process.cwd() + '/app/projects/projects-list.json', 'utf8');
    const data: { [key: string]: any }[] = JSON.parse(file);
    
    // project fields
    //
    // id: string;
    // name: string;
    // title: string;
    // description: string;
    // image: string;
    // technologies: string[];
    // github: string;
    // website: string;
    //


    return (
        <div className="flex items-end justify-center flex-wrap pt-16 gap-10">
            {Object.entries(data).map((project) => {
                return (
                    <Card 
                        title={project[1].title} 
                        description={project[1].description} 
                        image={project[1].image} 
                        url={project[0]} 
                        key={project[1].title}
                    />
                )
            })}
        </div>
    )


}

export default Projects