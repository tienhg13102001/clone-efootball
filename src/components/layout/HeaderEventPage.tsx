'use client'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import Menu from './Menu';
import Link from 'next/link';

const HeaderEventPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onChangeMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <div className='top-0 left-0 right-0 fixed z-50 px-8 py-5 flex justify-between lg:items-start item-center'>
      <Image src={"/images/football-logo.webp"} alt='logo' width={100} height={100} className='lg:block hidden' />


      <div className='hidden md:flex items-center text-white gap-10'>
        <Image src={"/images/menu-logo.webp"} alt='logo' width={79} height={72} />
        <div className='text-[22px] font-semibold'>이벤트</div>
        <div className='text-[22px] font-semibold'>참여방법</div>
        <div className='text-[22px] font-semibold'>갤러리</div>
      </div>

      <div className='md:hidden flex items-center'>
        <Menu
          isOpen={isMenuOpen}
          onChangeMobileMenu={onChangeMobileMenu}
        />
      </div>

      {isMenuOpen && (
        <div className='absolute top-full left-0 w-full h-screen bg-white flex flex-col whitespace-nowrap px-3 py-2.5 md:hidden'>
          <Link href="#" className='py-2 text-[22px] text-[#158145] border-b border-b-[#158145]' >이벤트</Link>
          <Link href="#" className='py-2 text-[22px] text-[#158145] border-b border-b-[#158145]' >참여방법</Link>
          <Link href="#" className='py-2 text-[22px] text-[#158145] border-b border-b-[#158145]' >갤러리</Link>
        </div>
      )}

      <Image src={"/images/konami-logo.webp"} alt='konami' width={170} height={24} className='object-contain mt-2' />
    </div>
  )
}

export default HeaderEventPage
