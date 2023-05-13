import Image from 'next/image';
import React, { FC } from 'react'

interface ProductProps {
  
}

const Product: FC<ProductProps> = ({  }) => {
  return (
    <div className="w-full gala-mission bg-[#010308]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full flex-grow md:p-10 lg:p-36 mt-10 lg:mt-0">
            <div className="w-1/2 py-4">
                <Image src="/anim-logo.gif" alt="Gala" style={{maxHeight: 120}} width={500} height={500} className="lg:pr-[50px]"/>
                </div>
                <div className="w-1/2">
                    <div className="text-white mx-auto text-2xl lg:text-4xl lg:text-left lg:border-t-0 text-center font-normal block border-t lg:border-l border-blue-500 lg:pl-[50px] py-4 leading-10">Entertainment<br/>that empowers.
                    </div>
                    </div>
            
    </div>
    </div>
  )
}

export default Product;