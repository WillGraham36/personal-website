import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { promises as fs } from 'fs';
import Image from 'next/image';
import { Undo2 } from 'lucide-react';
import Link from 'next/link';
import ProjectData from '../projects-list.json';

const technology = (name: string) => {
	return (
		<div className='bg-main rounded-lg'>
			<h3 className='text-center font-medium text-xl text-muted p-3 px-5'>
				{name}
			</h3>
		</div>
	)
}

const ProjectPage = async ({ 
	params 
}: {
	params: { projectId: string }
}) => {


	const data = JSON.parse(JSON.stringify(ProjectData));
	const project = data[params.projectId];
	
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

	const hasWebsite = project.website !== '';

	return (
		<div className="bg-main h-full">
			<Navbar />
			<div className='flex items-center w-full h-full justify-center flex-col px-4'>
				<h1 className="text-muted font-medium text-[50px] border-b-2 text-center pt-36 px-4">
					{project.name}
				</h1>
				<div className='bg-[#1e3936] p-6 rounded-lg w-full md:w-[80%] my-8'>
					<h3 className='text-muted font-medium text-lg md:text-2xl text-center'>
						{project.description}
					</h3>
					<div className='w-full flex justify-center items-center flex-col md:flex-row gap-4 py-8'>
						<a href={project.github} target='_blank'>
							<Button 
								size={hasWebsite ? "xl" : "xxl"} 
								variant={'defaultBG'} 
							>
								GitHub	
							</Button>
						</a>
						{hasWebsite && 
							<a href={project.website} target='_blank'>
								<Button size={"xl"} variant={'defaultBG'}>
									Website
								</Button>
							</a>
						}
					</div>
					<Image 
						src={project.image} 
						sizes='(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1024px'
						width={1024}
  						height={768}
						alt="Caprice Cover Image" 
						className="rounded-lg w-full h-full object-cover"
					/>
					<div className='flex items-center w-full h-full justify-center flex-col pt-6'>
						<h1 className="text-muted font-medium text-[40px] md:text-[50px] border-b-2 text-center">
							Technologies Used
						</h1>
						<div className='flex justify-center flex-wrap max-w-6xl gap-8 py-10'>
							{project.technologies.map((tech: string) => technology(tech))}
						</div>
					</div>
					<Link href='/projects'>
						<Button className='flex items-center justify-center gap-3'>
							<Undo2 />
							View More Projects
						</Button>
					</Link>
				</div>
			
			</div>
		</div>
	)
}

export default ProjectPage