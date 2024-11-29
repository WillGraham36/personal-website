import Card from "./Card";

type Props = {
  isProjectPage?: boolean;
}
const Projects = (props: Props) => {


    return (
      <div className='flex items-center justify-center w-full h-full'>
        <div className='w-full h-full max-w-6xl p-4'>
          { !props.isProjectPage && <div className='flex flex-col gap-1'>
            <h1 className='text-primary text-4xl font-medium'>Personal Projects</h1>
            <p className='text-neutral-500'>
              I have worked on many different projects to improve my skills and learn new technologies
            </p>
          </div>}
          <div className="mt-4 w-full flex justify-center">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card 
                title="Echo Spot" 
                description="An anonymous social media app for college students to interact with others in their area" 
                image="/projects/echoSpotCover.png"
                githubLink="https://github.com/WillGraham36/echo-spot"
                websiteLink="https://echo-spot.vercel.app/"
                techList={['Next.js', 'MongoDB', 'Express.js']}
              />
              <Card 
                title="Caprice" 
                description="Full stack Notion clone, allowing users to organize their files and ideas" 
                image="/projects/capriceCover.png"
                githubLink="https://github.com/WillGraham36/caprice-notion-clone"
                websiteLink="https://caprice-note-taking-app.vercel.app/preview/j57adsq9adw5br39mtnswsmy0x6xxrkv"
                techList={['Next.js', 'ConvexDB', 'TailwindCSS', 'React']}
              />
              <Card 
                title="Spotify Artist Playlist Creator" 
                description="Flask app that creates a playlist of an entire artist's discography on Spotify" 
                image="/projects/spotifyArtistCreatorCover.png"
                githubLink="https://github.com/WillGraham36/Spotify-Artist-Playlist-Creator"
                techList={['Python', 'Flask', 'Spotify API']}
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Projects