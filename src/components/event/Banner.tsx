'use client'
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image"
import React from "react"

const Banner = () => {
  const screenSize = useScreenSize();
  const isMobile =
    screenSize === "xs" || screenSize === "sm" || screenSize === "md";
  return (
    <div className="w-full bg-black bg-[url(/images/main-bg.webp)] bg-contain bg-no-repeat bg-center 3xl:h-[1077px]">
      <div className="mx-auto pt-48 lg:pt-96 pb-20 lg:pb-[298px] flex flex-col items-center">
        <div className="flex flex-col items-center relative drop-shadow-2xl">
          <div className="absolute transform -translate-y-[90px] lg:-translate-y-[60px] z-10">
            <p className="text-center font-GmarketSans font-bold text-sm lg:text-[35px] drop-shadow-3xl">25.01.04 ~ 25.01.26</p>
            <p className="px-4 pt-2 font-tenada text-lg lg:text-4xl bg-gradient-to-l from-[#034230] to-[#00942d] shadow-2xl">
              감스트 X 이상호 팀배틀
            </p>
          </div>
          <Image src={"/images/main-title.webp"} alt=";" width={isMobile ? 221 : 621} height={isMobile ? 56 : 312} className="drop-shadow-2xl drop object-contain -translate-y-[35px]" />
          <p className="font-GmarketSans font-bold text-[#fdd23b] text-xl lg:text-[44px] italic drop-shadow-2xl shadow-pink-700 -translate-y-[35px]">
            eFootballAll stars!
          </p>
          <Image
            src={"/images/soccer-ball.png"}
            alt=";"
            width={504}
            height={340}
            className="absolute top-6 lg:top-0 left-[40%] lg:left-0 -translate-x-[200px] -translate-y-[150px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
