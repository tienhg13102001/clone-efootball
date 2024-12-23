import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full bg-black bg-[url(/images/main-bg.webp)] bg-contain bg-center'>
      <div className=' max-w-[1250px] mx-auto pt-80 pb-[298px] flex flex-col items-center'>
        <div className='flex flex-col items-center relative drop-shadow-2xl'>
          <div className='absolute transform -translate-y-[60px] z-10'>
            <p className='text-center font-GmarketSans font-bold text-[35px] drop-shadow-3xl'>25.01.04 ~ 25.01.26</p>
            <p className='px-4 pt-2 font-tenada text-4xl bg-gradient-to-l from-[#034230] to-[#00942d] shadow-2xl'>
              감스트 X 이상호 팀배틀
            </p>
          </div>
          <Image src={"/images/main-title.webp"} alt=';' width={621} height={312} className='drop-shadow-2xl drop' />
          <p className='font-GmarketSans font-bold text-[#fdd23b] text-[44px] italic drop-shadow-2xl shadow-pink-700'>eFootballAll stars!</p>
        </div>
      </div>
    </div >
  )
}

export default Banner