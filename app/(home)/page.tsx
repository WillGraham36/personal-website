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
import ContactMe from './_components/ContactMe';

const HomePage = () => {
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }}
        className='h-full block relative z-10 bg-main'
    >
        {/* ******** Layered Peaks ******** */}
      <ParallaxLayer offset={0} speed={1.0}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={peak1} alt="peaks" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.9}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={peak2} alt="peaks" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={peak3} alt="peaks" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>


      <ParallaxLayer offset={0} speed={0.3}>
        <div className='w-full h-full'>
          <Header />
        </div>
      </ParallaxLayer>


      <ParallaxLayer offset={0} speed={0.7}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={peak4} alt="peaks" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={peak5} alt="peaks" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={peak6} alt="peaks" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={peak7} alt="peaks" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      
      {/* ******** Layered Peaks ******** */}

      <ParallaxLayer offset={0} speed={0.5}>
        <div className='w-full h-full'>
          <Navbar/>
        </div>
        <div className='w-full h-[50%]'>
          <ContactMe/>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        <p className='border-2 h-full text-white'>Hi</p>
      </ParallaxLayer>
    </Parallax>
  )
}

export default HomePage