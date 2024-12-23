import Image from 'next/image'
import React from 'react'



const EventCard = () => {
  return (
    <div className='w-full bg-black bg-contain bg-center'>
      <div className='pt-6 max-w-[1250px] bg-[#131313] mx-auto flex flex-col items-center'>
        <div className='flex flex-col items-center text-[64px]'>
          <p className='font-GmarketSans text-center'>e풋볼컵 생방송 관람 인증샷 올리고 <br />
            <span>친구랑 맨체스터로 여행 가자!</span></p>
          <Image src={"/images/02-all-img.png"} alt='' width={983} height={558}  className='mt-[65px]'/>
        </div>
      </div>
    </div>
  )
}

export default EventCard