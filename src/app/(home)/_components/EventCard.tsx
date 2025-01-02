"use client"
import useScreenSize from "@/hooks/useScreenSize"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const EventCard = () => {
  const VIDEO_CARDS = [
    {
      videoBG: "/images/03-videobg-01.webp",
      profileImage: "/images/03-video-profile-01.webp",
      username: "hongchi1104",
    },
    {
      videoBG: "/images/03-videobg-02.webp",
      profileImage: "/images/03-video-profile-02.webp",
      username: "master_min_",
    },
    {
      videoBG: "/images/03-videobg-03.webp",
      profileImage: "/images/03-video-profile-03.webp",
      username: "taskaevaa",
    },
    {
      videoBG: "/images/03-videobg-04.webp",
      profileImage: "/images/03-video-profile-04.webp",
      username: "kusf_uza",
    },
  ]
  const screenSize = useScreenSize()
  const isMobile = screenSize === "xs" || screenSize === "sm"
  const isTablet = screenSize === "md" || screenSize === "lg"
  const isLapTop = screenSize === "2xl"
  return (
    <div className="container max-w-[1000px] 3xl:max-w-[1250px] mx-auto">
      <div className=" bg-[#2039E9] rounded-3xl w-full relative flex flex-col items-center">
        <div className="z-10 flex flex-col items-center text-lg lg:text-5xl 3xl:text-[66px] lg:leading-[76px]">
          <div className="font-GmarketSans text-center font-medium mt-20 md:mt-[147px] text-md 2xl:text-5xl 3xl:text-6xl">
            정정당당 e풋볼 올스타즈 이벤트 참여하고
            <p className="font-bold text-[#d8f700]">김민재 응원하러 가자!</p>
          </div>
          <Image
            src={"/images/Untitled-1.webp"}
            alt=""
            width={isLapTop ? 693 : 983}
            height={558}
            className="mt-2 md:mt-[60px] mb-8 md:mb-16 object-contain"
          />
        </div>
        <Image
          src={"/images/do-01-airplane.webp"}
          alt=""
          width={isMobile ? 350 : isTablet ? 600 : 819}
          height={226}
          className="absolute z-0 top-0 left-0 -translate-x-2/3 -translate-y-1/3 object-contain"
        />
        <Image
          src={"/images/02-particles.webp"}
          alt=""
          width={1178}
          height={402}
          className="z-0 absolute w-full px-9 pt-6"
        />
        <div className="z-0 bg-[#111274] absolute w-full bottom-0 rounded-b-3xl h-1/6"></div>
      </div>
      {/*  */}
      <div className="my-5 xl:my-[44px] flex flex-col items-center relative">
        <Image src={"/images/event-subtitle-2.webp"} alt="03-box-pattern" width={1175} height={119} />
        <p className="text-sm xl:text-[46px]/[1em] 2xl:text-[42px]/[1em] mt-[2px] xl:mt-2 font-bold absolute top-1/2 -translate-y-1/2 text-black">
          이벤트 1, 2, 3 중 <span className="text-[#253ce8]">하나만</span> 참여해도 당첨 가능!
        </p>
      </div>
      {/*  */}
      <div className="mb-[60px] max-w-[1250px] bg-[#2039E9] mx-auto flex flex-col items-center rounded-3xl relative z-10">
        <p className="mt-10 xl:mt-[92px] mb-5 xl:mb-[28px] text-3xl md:text-4xl lg:text-[50px]/[1] font-bold">EVENT 01</p>
        <div className="flex flex-col items-center text-sm xxs:text-base md:text-lg lg:text-3xl 3xl:text-[40px] 3xl:leading-[44px] z-20">
          <p className="font-GmarketSans text-center font-semibold">
            감스트 X 이상호 팀 배틀을 기다리며
            <br />
            <span className="font-bold text-[#d8f700] ">나만의 개성 있는 방법으로 친구들에게 알리기!</span>
          </p>
          <span className="text-md px-5 pt-1 pb-1 mt-3 xl:mt-[25px] xl:text-[38px]/[1.2] font-semibold bg-[#d8f700] text-black">
            영상, 인증샷, 캡쳐 이미지 참여 가능
          </span>
          <div className="max-md:px-5 mt-[67px] mb-[58px] grid lg:grid-cols-4 grid-cols-2 gap-4 3xl:gap-6">
            {VIDEO_CARDS.map((video, index) => {
              return (
                <div key={index} className="flex flex-col gap-[24px]">
                  <div className="relative">
                    <Image src={video.videoBG} alt="" width={isMobile ? 188 : isLapTop ? 200 : 258} height={408} />
                    <Image
                      src="/images/03-playbutton.webp"
                      alt=""
                      width={39}
                      height={49}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-[18px]">
                    <Image
                      src={video.profileImage}
                      alt=""
                      width={isMobile ? 29 : 39}
                      height={isMobile ? 39 : 49}
                      className="object-contain"
                    />
                    <p className="text-base lg:text-xl">{video.username}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <Image
            src={"/images/03-logo.webp"}
            alt=""
            width={isMobile ? 200 : 281}
            height={34}
            className="object-contain"
          />
          <div className="text-center text-xs xxs:text-sm md:text-base lg:text-[28.5px]/[1.33] 3xl:text-[40px] mt-[14px] mb-[109px]">
            <p className="font-light">e풋볼 올스타즈 경기를 알리는 나만의 유형은?
            </p>
            <p className="font-bold"> 나만의 유형을 인증하면 다양하고 푸짐한 혜택이 팡팡!</p>
          </div>
        </div>
        <Image
          src={"/images/03-box-patterns.webp"}
          alt="03-box-pattern"
          width={1250}
          height={1111}
          className="absolute w-full h-full z-0 rounded-3xl"
        />
        <Image
          src={"/images/do-02-trophy.webp"}
          alt=""
          width={isMobile ? 223 : 423}
          height={isMobile ? 306 : 606}
          className="z-10 absolute top-0 right-0 translate-x-[60%] -translate-y-[15%]  object-contain"
        />
        <Image
          src={"/images/bg-light-01.webp"}
          alt=""
          width={1167}
          height={2703}
          className="z-0 absolute top-0 left-3/4  object-contain"
        />
      </div>
      {/*  */}
      <div className="mb-[60px] max-w-[1250px] bg-[#2039E9] mx-auto flex flex-col items-center rounded-3xl relative">
        <p className="mt-10 xl:mt-[92px] mb-5 xl:mb-[28px] text-3xl md:text-4xl lg:text-[50px]/[1] font-bold">EVENT 02</p>
        <div className="flex flex-col items-center text-4xl lg:text-[48px] tracking-[1.2] z-20 w-full">
          <div className="font-GmarketSans text-center font-medium text-base xxs:text-lg lg:text-[40px]/[48px]">
            <p> 앱 설치하고 즐겁게 플레이하면서</p>
            <p className="text-[#d8f700] font-bold">스크린샷 인증하자!</p>
          </div>
          <Image
            src={"/images/04-phone.webp"}
            alt=""
            width={isLapTop ? 637 : 951}
            height={715}
            className="mt-5 xl:mt-[79px] object-contain"
          />
          <div className="text-xl text-center xl:text-[50px]/[1.2em] font-medium">
            <p>eFootball™에서</p>
            <p>새로운 축구 게임을 경험해 보십시오!</p>
          </div>
          <Link href="https://play.google.com/store/apps/details?id=jp.konami.pesam&hl=vi&pli=1" target="_blank" className="text-base xl:text-[28px]/[1em] font-extrabold mt-[31px] mb-[100px] px-10 xl:px-[167px] py-3 xl:pt-4 xl:pb-5 bg-[#D9F700] text-black">
            다운로드 하러가기
          </Link>
        </div>
        <Image
          src={"/images/04-box-patterns.webp"}
          alt="03-box-pattern"
          width={1250}
          height={1111}
          className="absolute w-full h-full z-0 rounded-3xl"
        />
        <Image
          src={"/images/do-03-ball.webp"}
          alt=""
          width={isMobile ? 202 : 433}
          height={isMobile ? 200 : 442}
          className="absolute top-0 left-0 -translate-x-3/4 object-contain"
        />
        <Image
          src={"/images/bg-light-02.webp"}
          alt=""
          width={906}
          height={2744}
          className="z-0 absolute -bottom-80 right-full object-contain scale-[200%]"
        />
      </div>
      {/*  */}
      <div className="max-w-[1250px] bg-[#2039E9] mx-auto flex flex-col items-center rounded-3xl relative">
        <p className="mt-10 xl:mt-[72px] mb-5 xl:mb-[28px] text-3xl md:text-4xl lg:text-[50px]/[1] font-bold">EVENT 03</p>
        <div className="flex flex-col items-center text-4xl lg:text-[48px] tracking-[0.8] z-10">
          <div className="font-GmarketSans text-center font-medium text-base xxs:text-lg lg:text-[42px]/[48px]">
            <p>정정당당 e풋볼 올스타즈 본방 시청하며</p>
            <div className="text-[#d8f700] font-bold flex justify-center tracking-[-0.41] items-start">
              응원 영상 및 인증샷 올리기!
              <span className="text-xs relative font-bold xl:text-[20px]/[1] text-black ml-2 px-2 xl:px-4 py-[1px] xl:pt-2 xl:pb-1 bg-[#d8f700] rounded-full">
                <p className="relative z-10">캡쳐도가능!</p>
                <div
                  className="absolute z-0 -bottom-1 left-2 w-3 h-3 xl:w-7 xl:h-6 bg-[#d8f700] -rotate-45"
                  style={{
                    clipPath: "polygon(200% 0, 0 100%, 100% 100%)",
                  }}
                ></div>
              </span>
            </div>

            <p className="text-[#cacaca] text-xs md:text-sm lg:text-2xl/[48px]">
              대회 생방송 : 1월 25일 숲(SOOP) & 유튜브 라이브
            </p>
          </div>
          <Image
            src={"/images/04-img.webp"}
            alt=""
            width={isLapTop ? 637 : 787}
            height={715}
            className="mt-[79px] mb-[140px] object-contain"
          />
        </div>
        <Image
          src={"/images/do-06-gloves.webp"}
          alt=""
          width={isMobile ? 202 : 639}
          height={isMobile ? 200 : 792}
          className="absolute max-md:bottom-1 xl:top-0 right-0  xl:translate-y-1/3 translate-x-2/3 z-10 object-contain"
        />
        <Image
          src={"/images/05-box-patterns.webp"}
          alt="03-box-pattern"
          width={1250}
          height={1111}
          className="absolute w-full h-full z-0 rounded-3xl"
        />
      </div>
      {/*  */}
      <div className="my-5 xl:my-[44px] flex flex-col items-center relative">
        <Image src={"/images/event-subtitle-2.webp"} alt="03-box-pattern" width={1175} height={119} />
        <p className="text-sm xl:text-[46px]/[1em] 2xl:text-[42px]/[1em] 3xl:text-[50px]/[1em] mt-[2px] xl:mt-2 font-bold absolute top-1/2 -translate-y-1/2 text-black">
          이벤트 1, 2, 3 중 <span className="text-[#253ce8]">하나만</span> 참여해도 당첨 가능!
        </p>
      </div>
    </div>
  )
}

export default EventCard
