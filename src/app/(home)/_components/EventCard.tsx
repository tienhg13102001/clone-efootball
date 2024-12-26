'use client'
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image"
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
  const screenSize = useScreenSize();
  const isMobile =
    screenSize === "xs" || screenSize === "sm";
  const isTablet = screenSize === "md" || screenSize === "lg"
  const isLapTop = screenSize === "2xl"
  return (
    <div className="w-full pt-[13px] bg-black">
      <div className="container max-w-[1000px] 3xl:max-w-[1250px] mx-auto">
        <div className='pt-6 mb-[76px] bg-[url("/images/02-box-patterns.webp")] bg-contain bg-center bg-no-repeat rounded-3x'>
          <div className="flex flex-col items-centerl relative">
            <div className="flex flex-col items-center text-xl lg:text-5xl 3xl:text-[66px] lg:leading-[76px]">
              <div className="font-GmarketSans text-center font-medium mt-36 md:mt-[167px]">
                e풋볼컵 생방송 관람 인증샷 올리고
                <p className="font-bold text-[#d8f700]">친구랑 맨체스터로 여행 가자!</p>
              </div>
              <Image src={"/images/02-all-img.png"} alt="" width={isLapTop ? 693 : 983} height={558} className="mt-2 md:mt-[65px] mb-[180px] md:mb-[175px] object-contain" />
            </div>
            <Image
              src={"/images/do-01-airplane.webp"}
              alt=""
              width={isMobile ? 350 : isTablet ? 600 : 1010}
              height={258}
              className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 lg:-translate-y-1/2 object-contain"
            />
          </div>
        </div>
        {/*  */}
        <div className='pt-6 mb-[76px] max-w-[1250px] bg-[#131313] bg-[url("/images/03-box-patterns.webp")] bg-cover bg-center bg-no-repeat mx-auto flex flex-col items-center rounded-3xl relative'>
          <p className="mt-[92px] mb-[37px] text-4xl lg:text-[50px]/[1] font-bold">EVENT 01</p>
          <div className="flex flex-col items-center text-lg lg:text-3xl 3xl:text-[48px] 3xl:leading-[55px] -tracking-[0.8]">
            <p className="font-GmarketSans text-center font-medium ">
              감스트 X 이상호 팀 배틀 e풋볼을 기다리며
              <br />
              <span className="font-bold text-[#d8f700]">나만의 개성 있는 기대 영상 및 인증샷 올리기!</span>
            </p>
            <div className="mt-[67px] mb-[58px] grid lg:grid-cols-4 grid-cols-2 gap-4 3xl:gap-6">
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
                      <Image src={video.profileImage} alt="" width={isMobile ? 29 : 39} height={isMobile ? 39 : 49} className="object-contain" />
                      <p className="text-base lg:text-xl">{video.username}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <Image src={"/images/03-logo.webp"} alt="" width={isMobile ? 200 : 281} height={34} className="object-contain" />
            <div className="text-center text-base lg:text-[28.5px]/[1.33] mt-[14px] mb-[109px]">
              <p className="font-light">나만의 특별한 응원법! 이 경기장의 패셔니스타는 바로나!</p>
              <p className="font-light">응원할 때 먹으면 두 배 즐거워지는 먹방 노하우!</p>
              <p className="font-bold">특별한 응원 영상 인증과 함께 다양하고 푸짐한 혜택도 팡팡!</p>
            </div>
          </div>
          <Image
            src={"/images/do-02-trophy.webp"}
            alt=""
            width={isMobile ? 223 : 423}
            height={isMobile ? 306 : 606}
            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </div>
        {/*  */}
        <div className='pt-6 max-w-[1250px] bg-[#131313] bg-[url("/images/04-box-patterns.webp")] bg-cover bg-center mx-auto flex flex-col items-center rounded-3xl relative'>
          <p className="mt-[92px] mb-[37px] text-4xl lg:text-[50px]/[1] font-bold">EVENT 02</p>
          <div className="flex flex-col items-center text-4xl lg:text-[48px] tracking-[0.8]">
            <div className="font-GmarketSans text-center font-medium text-lg lg:text-[40px]/[48px]">
              <p>정정당당 e풋볼 올스타즈 본방 시청하며</p>
              <p className="text-[#d8f700] font-bold">응원 영상 및 인증샷 올리기!</p>
              <p className="text-[#8c8c8c] text-sm lg:text-2xl/[48px]">대회 생방송 : 1월 25일 숲(SOOP) & 유튜브 라이브</p>
            </div>
            <Image src={"/images/04-img.webp"} alt="" width={isLapTop ? 637 : 787} height={715} className="mt-[79px] mb-[140px] object-contain" />
          </div>
          <Image
            src={"/images/do-03-ball.webp"}
            alt=""
            width={isMobile ? 202 : 287}
            height={isMobile ? 200 : 285}
            className="absolute top-0 left-0 -translate-x-2/3 object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default EventCard
