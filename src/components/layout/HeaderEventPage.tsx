import Image from 'next/image'
import React from 'react'


const HeaderEventPage = () => {
  return (
    <div className='top-0 left-0 right-0 fixed z-50 px-8 py-5 flex justify-between items-start'>
      <Image src={"/images/football-logo.webp"} alt='ok' width={139} height={139} />
      <div className='flex items-center text-white gap-10'>
        <div>
          <Image src={"/images/menu-logo.webp"} alt='ok' width={79} height={72} />
        </div>
        <div className='text-[22px] font-semibold'>이벤트</div>
        <div  className='text-[22px] font-semibold'>참여방법</div>
        <div  className='text-[22px] font-semibold'>갤러리</div>
      </div>
      <Image src={"/images/konami-logo.webp"} alt='ok' width={170} height={34} />
    </div>
  )
}

export default HeaderEventPage