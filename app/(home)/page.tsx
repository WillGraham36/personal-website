"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import peak1 from "../../public/peak1.svg";
import peak2 from "../../public/peak2.svg";
import peak3 from "../../public/peak3.svg";
import peak4 from "../../public/peak4.svg";
import peak5 from "../../public/peak5.svg";
import peak6 from "../../public/peak6.svg";
import peak7 from "../../public/peak7.svg";

import Image from 'next/legacy/image';
import Navbar from '../../components/Navbar';
import Header from './_components/Header';
import TechStack from '@/components/TechStack';
import ExperienceAndEducation from '@/components/Experience';
import Projects from '../projects/_components/Projects';


const HomePage = () => {
  let numPages = 2.15;
  if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 320) {
      numPages = 3.95;
    } else if (screenWidth <= 375) {
      numPages = 3.65;
    } else if (screenWidth <= 425) {
      numPages = 3.40;
    } else if (screenWidth <= 640) {
      numPages = 3.25;
    } else if (screenWidth <= 768) {
      numPages = 2.80;
    } else if (screenWidth <= 1024) {
      numPages = 2.25;
    } else if (screenWidth <= 1280) {
      numPages = 2.25;
    } else if (screenWidth <= 1536) {
      numPages = 2.05;
    } else {
      numPages = 2.15;
    }
  }
    return (
      <Parallax pages={numPages} className='bg-main'>
          
          {/* ******** Layered Peaks ******** */}

          <ParallaxLayer offset={0} speed={1.0}>
                  <Image src={peak1} alt="peaks" layout="fill" objectFit="cover" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.9}>
                  <Image src={peak2} alt="peaks" layout="fill" objectFit="cover" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.8}>
                  <Image src={peak3} alt="peaks" layout="fill" objectFit="cover" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}></ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.7}>
                  <Image src={peak4} alt="peaks" layout="fill" objectFit="cover" className='z-20' />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
                  <Image src={peak5} alt="peaks" layout="fill" objectFit="cover" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
                  <Image src={peak6} alt="peaks" layout="fill" objectFit="cover" />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.5}>
                  <Image src={peak7} alt="peaks" layout="fill" objectFit="cover" />
          </ParallaxLayer>

          {/* ******** END Layered Peaks ******** */}


          <ParallaxLayer offset={0} speed={0.5} >
            <div className='h-full'>
              <Navbar />
              <Header/>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='w-full h-1/2 flex items-center border-8 border-main -mt-1'>
                <TechStack />
              </div>
              <ExperienceAndEducation />
              <Projects />
            </div>
          </ParallaxLayer>
          
      </Parallax> 
    )
}

export default HomePage