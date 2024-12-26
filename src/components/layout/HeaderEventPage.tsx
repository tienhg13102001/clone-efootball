'use client'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import Menu from './Menu';
import Link from 'next/link';
import useScreenSize from '@/hooks/useScreenSize';
import { cn } from '@/utils/classnames';

const HeaderEventPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const onChangeMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const screenSize = useScreenSize();
  const isMobile =
    screenSize === "xs" || screenSize === "sm" || screenSize === "md" || screenSize === "lg";

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <header className={cn('top-0 left-0 right-0 fixed z-50', {
      'backdrop-blur-sm shadow-md bg-white/10 transition ease-in-out': isScrolled,
    })}>
      <div className='container max-w-[1920px] mx-auto'>
        <nav className='py-5 flex justify-between lg:items-start item-center'>
          <Link href="event" className='lg:block hidden'>
            <Image src={"/images/football-logo.webp"} alt='logo' width={100} height={100} />
          </Link>


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
              <Image src={"/images/football-logo.webp"} alt='logo' width={70} height={70} className='block lg:hidden mt-5 self-center' />
            </div>
          )}

          <Image src={"/images/konami-logo.webp"} alt='konami' width={isMobile ? 100 : 170} height={24} className='object-contain mt-2' />
        </nav>
      </div>
    </header>

  )
}

export default HeaderEventPage
