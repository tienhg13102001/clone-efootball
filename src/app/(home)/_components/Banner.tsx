"use client"
import Image from "next/image"

const Banner = () => {
  return (
    <div className="mt-32 xl:mt-[701px] mb-[62px] flex flex-col items-center relative">
      <Image src={"/images/main-title.webp"} alt="main-title" width={633} height={357} className="absolute -top-12 xl:-top-24 w-1/2 xl:w-[633px]"/>
      <Image src={"/images/caster.webp"} alt="caster" width={1493} height={748} />
    </div>
  )
}

export default Banner

{
  /* <div className="w-full bg-black bg-[url(/images/main-bg.webp)] bg-contain bg-no-repeat bg-center lg:h-[575px] xl:h-[720px] 2xl:h-[860px] 3xl:h-[1077px]">
<div className="mx-auto lg:pt-96 pb-[100px] xxs:pb-[110px] xs:pb-[130px] md:pb-[250px] lg:pb-[298px] flex flex-col items-center">
  <div className="flex flex-col items-center relative drop-shadow-2xl">
    <div className="absolute transform translate-y-[55px] md:translate-y-[145px] lg:-translate-y-[200px] xl:-translate-y-[220px] 3xl:-translate-y-[10px] z-10 space-y-0 lg:space-y-3">
      <p className="text-center font-GmarketSans font-bold text-[10px] md:text-sm lg:text-lg xl:text-[35px] drop-shadow-3xl">25.01.04 ~ 25.01.26</p>
      <p className="px-2 md:px-4 pt-1 md:pt-2 font-tenada text-xs md:text-lg lg:text-2xl xl:text-4xl text-center bg-gradient-to-l from-[#034230] to-[#00942d] shadow-2xl">
        감스트 X 이상호 팀배틀
      </p>
    </div>

    <Image src={"/images/main-title.webp"} alt=";" width={isMobile ? 181 : isTablet ? 321 : 621}
      height={isMobile ? 56 : 312} className="drop-shadow-2xl drop object-contain translate-y-[85px] md:translate-y-[180px] lg:-translate-y-[130px] xl:-translate-y-[190px] 3xl:translate-y-10" />
    <p className="font-GmarketSans font-bold text-[#fdd23b] text-sm lg:text-3xl xl:text-[44px] italic drop-shadow-2xl shadow-pink-700 translate-y-[85px] md:translate-y-[180px] lg:-translate-y-[130px] xl:-translate-y-[190px] 3xl:translate-y-10">
      eFootballAll stars!
    </p>

    <Image
      src={"/images/soccer-ball.webp"}
      alt=";"
      width={504}
      height={340}
      className="absolute top-0 md:top-10 lg:top-5 left-[40%] md:left-[5%] xl:left-0 -translate-x-[150px] translate-y-[40px] lg:-translate-y-[250px] xl:-translate-y-[300px] 3xl:-translate-y-28"
    />
  </div>
</div>
</div> */
}
