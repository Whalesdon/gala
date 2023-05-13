import Image from 'next/image';
import React, { FC } from 'react'
import {GoUnmute} from 'react-icons/go'


interface MenuProps {
  
}

const Menu: FC<MenuProps> = ({  }) => {
  return (
    <div>
     <div id="coming-soon-container" className="bg-black" data-v-32c065f4="">
        <div className="video-overlay" data-v-32c065f4="">
            <div className="overlay-text flex flex-col" data-v-32c065f4="">
           <Image src='/mute.png' alt='h' width={10} height={10}/>
            </div>
        </div>
        <div id="wrapper" data-v-32c065f4=""></div>
        <video src="/movie.mp4" autoPlay playsInline loop muted  className="fs-vid w-full" />
            
     </div>
    </div>
  )
}



export default Menu;