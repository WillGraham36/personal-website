"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import wave1 from "../../public/wave1.svg";
import wave2 from "../../public/wave2.svg";
import wave3 from "../../public/wave3.svg";
import wave4 from "../../public/wave4.svg";
import wave5 from "../../public/wave5.svg";
import wave6 from "../../public/wave6.svg";
import wave7 from "../../public/wave7.svg";
import Image from 'next/legacy/image';

const HomePage = () => {
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }}
        className='h-full block relative z-10 bg-[#121619]'
    >
        {/* ******** Layered Waves ******** */}
      <ParallaxLayer offset={0} speed={1.0}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={wave1} alt="waves" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={wave2} alt="waves" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.7}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={wave3} alt="waves" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.6}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={wave4} alt="waves" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={wave5} alt="waves" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={wave6} alt="waves" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="w-full h-full absolute bg-repeat-x">
            <Image src={wave7} alt="waves" layout="fill" objectFit="cover" />
        </div>
      </ParallaxLayer>
      
      {/* ******** END Layered Waves ******** */}

      <ParallaxLayer offset={0} speed={0.5}>
        <div className='w-full h-full'></div>
        <div className='w-full h-full text-white border-white border-2'>
            HELLLOOOO
        </div>
      </ParallaxLayer>

    </Parallax>

  )
}

export default HomePage