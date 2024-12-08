import React from 'react'
import Image from 'next/image'
const Card = ({position ,image, name} : any) => {
  return (
    <div className='w-[312px] h-[382px] bg-white flex flex-col justify-center items-center'>
        <div>
            <Image src={image} alt='' width={100} height={100} quality={100} className='w-[250px] bg-cover h-[250px]'/>
        </div>
        <div className='flex flex-col justify-center items-center mt-3'>
            <p>{name}</p>
            <p className='text-[15px] text-[#333333]'>{position}</p>
        </div>
    </div>
  )
}

export default Card