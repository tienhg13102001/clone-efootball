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
    <div className="container mx-auto max-w-[1000px] 3xl:max-w-[1250px]">
      <div className="relative flex w-full flex-col items-center rounded-3xl bg-[#2039E9]">
        <div className="z-10 flex flex-col items-center text-lg lg:text-5xl lg:leading-[76px] 3xl:text-[66px]">
          <div className="text-md mt-20 text-center font-GmarketSans font-medium md:mt-[147px] 2xl:text-5xl 3xl:text-6xl">
            정정당당 e풋볼 올스타즈 이벤트 참여하고
            <p className="font-bold text-[#d8f700]">김민재 응원하러 가자!</p>
          </div>
          <Image
            src={"/images/Untitled-1.webp"}
            alt=""
            width={isLapTop ? 693 : 983}
            height={558}
            className="mb-8 mt-2 object-contain md:mb-16 md:mt-[60.5px]"
          />
        </div>
        <Image
          src={"/images/do-01-airplane.webp"}
          alt=""
          width={isMobile ? 350 : isTablet ? 600 : 819}
          height={226}
          className="absolute left-0 top-0 z-0 -translate-x-2/3 -translate-y-1/3 object-contain"
        />
        <Image
          src={"/images/02-particles.webp"}
          alt=""
          width={1178}
          height={402}
          className="absolute z-0 w-full px-9 pt-6"
        />
        <div className="absolute bottom-0 z-0 h-1/6 w-full rounded-b-3xl bg-[#111274]"></div>
      </div>
      {/*  */}
      <div className="relative my-5 flex flex-col items-center xl:my-[44px]">
        <Image
          src={"/images/event-subtitle-2.webp"}
          alt="03-box-pattern"
          width={1175}
          height={119}
        />
        <p className="absolute top-1/2 mt-[2px] -translate-y-1/2 text-sm font-bold text-black md:text-3xl xl:mt-2 xl:text-[46px]/[1em] 2xl:text-[42px]/[1em]">
          이벤트 1, 2, 3 중 <span className="text-[#253ce8]">하나만</span> 참여해도 당첨 가능!
        </p>
      </div>
      {/*  */}
      <div className="relative z-10 mx-auto mb-[60px] flex max-w-[1250px] flex-col items-center rounded-3xl bg-[#2039E9]">
        <p className="mb-5 mt-10 text-3xl font-extrabold md:text-4xl lg:text-[50px]/[1] xl:mb-[28px] xl:mt-[70px]">
          EVENT 01
        </p>
        <div className="z-20 flex flex-col items-center text-sm xxs:text-base md:text-lg lg:text-3xl 3xl:text-[40px] 3xl:leading-[48px] 3xl:-tracking-[0.8px]">
          <p className="text-center font-GmarketSans font-medium">
            감스트 X 이상호 팀 배틀을 기다리며
            <br />
            <span className="font-extrabold text-[#d8f700]">
              나만의 개성 있는 방법으로 친구들에게 알리기!
            </span>
          </p>
          <span className="text-md bg-[#d8f700] px-5 font-semibold text-black xl:mt-[25px] xl:text-[34px]/[1.2] xl:leading-[48px] xl:tracking-[-1.36px]">
            영상, 인증샷, 캡쳐 이미지 참여 가능
          </span>
          <div className="mb-[58px] mt-[67px] grid grid-cols-2 gap-4 max-md:px-5 lg:grid-cols-4 3xl:gap-6">
            {VIDEO_CARDS.map((video, index) => {
              return (
                <div key={index} className="flex flex-col gap-[24px]">
                  <div className="relative">
                    <Image
                      src={video.videoBG}
                      alt=""
                      width={isMobile ? 188 : isLapTop ? 200 : 258}
                      height={408}
                    />
                    <Image
                      src="/images/03-playbutton.webp"
                      alt=""
                      width={39}
                      height={49}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
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
          <div className="mb-[109px] mt-[14px] text-center text-xs xxs:text-sm md:text-base lg:text-[28.5px]/[1.33] 3xl:text-[40px] 3xl:leading-[44.5px]">
            <p className="font-light">e풋볼 올스타즈 경기를 알리는 나만의 유형은?</p>
            <p className="font-bold"> 나만의 유형을 인증하면 다양하고 푸짐한 혜택이 팡팡!</p>
          </div>
        </div>
        <Image
          src={"/images/03-box-patterns.webp"}
          alt="03-box-pattern"
          width={1250}
          height={1111}
          className="absolute z-0 h-full w-full rounded-3xl"
        />
        <Image
          src={"/images/do-02-trophy.webp"}
          alt=""
          width={isMobile ? 223 : 423}
          height={isMobile ? 306 : 606}
          className="absolute right-0 top-0 z-10 -translate-y-[15%] translate-x-[60%] object-contain"
        />
        <Image
          src={"/images/bg-light-01.webp"}
          alt=""
          width={1167}
          height={2703}
          className="absolute left-3/4 top-0 z-0 object-contain"
        />
      </div>
      {/*  */}
      <div className="relative mx-auto mb-[60px] flex h-[700px] max-w-[1250px] flex-col items-center justify-center rounded-3xl bg-[#2039E9] md:h-[800px] md:justify-start lg:h-[900px] 3xl:h-[1042px]">
        <p className="mb-5 text-3xl font-extrabold md:mt-10 md:text-4xl lg:text-[50px]/[1] xl:mb-[28px] xl:mt-[73px]">
          EVENT 02
        </p>
        <div className="z-20 flex w-full flex-col items-center text-4xl tracking-[1.2] lg:text-[48px]">
          <div className="text-center font-GmarketSans text-base font-medium xxs:text-lg lg:text-[40px]/[48px]">
            <p> 앱 설치하고 즐겁게 플레이하면서</p>
            <p className="font-extrabold text-[#d8f700]">스크린샷 인증하자!</p>
          </div>
          <Image
            src={"/images/04-phone.webp"}
            alt=""
            width={isMobile ? 337 : isLapTop ? 537 : 951}
            height={isMobile ? 216 : isLapTop ? 316 : 416}
            className="mt-5 object-contain xl:mt-[51px]"
          />
          <p className="text-center text-xl font-medium xl:text-[50px]/[1.2em] xl:leading-[60px] 3xl:-translate-y-9">
            eFootball™에서 <br />
            새로운 축구 게임을 경험해 보십시오!
          </p>
          <div className="flex gap-[10px] md:translate-y-3 2xl:translate-y-5 3xl:-translate-y-3">
            <Link
              href="https://play.google.com/store/apps/details?id=jp.konami.pesam&hl=vi&pli=1"
              target="_blank"
            >
              <Image
                src="/images/04-but-android.png"
                alt="android"
                width={isMobile ? 120 : isTablet ? 200 : 294}
                height={64}
                className="object-contain"
              />
            </Link>
            <Link href="https://apps.apple.com/us/app/efootball/id1117270703" target="_blank">
              <Image
                src="/images/04-but-ios.png"
                alt="android"
                width={isMobile ? 120 : isTablet ? 200 : 294}
                height={64}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
        <Image
          src={"/images/04-box-patterns.webp"}
          alt="03-box-pattern"
          width={1250}
          height={931}
          className="absolute bottom-0 z-0 rounded-3xl object-contain"
        />
        <Image
          src={"/images/do-03-ball.webp"}
          alt=""
          width={isMobile ? 202 : 433}
          height={isMobile ? 200 : 442}
          className="absolute left-0 top-0 -translate-x-3/4 object-contain"
        />
        <Image
          src={"/images/bg-light-02.webp"}
          alt=""
          width={906}
          height={2744}
          className="absolute -bottom-80 right-full z-0 scale-[200%] object-contain"
        />
      </div>
      {/*  */}
      <div className="relative mx-auto mt-[60px] flex max-w-[1250px] flex-col items-center rounded-3xl bg-[#2039E9] 3xl:h-[1290px]">
        <p className="mb-5 mt-10 text-3xl font-extrabold md:text-4xl lg:text-[50px]/[1] xl:mb-[28px] xl:mt-[72px]">
          EVENT 03
        </p>
        <div className="z-10 flex flex-col items-center text-4xl tracking-[0.8] lg:text-[48px]">
          <div className="text-center font-GmarketSans text-base font-medium xxs:text-lg lg:text-[42px]/[48px]">
            <p>정정당당 e풋볼 올스타즈 본방 시청하며</p>
            <div className="flex items-start justify-center font-extrabold tracking-[-0.41] text-[#d8f700]">
              응원 영상 및 인증샷 올리기!
              <span className="relative ml-2 rounded-full bg-[#d8f700] px-2 py-[1px] text-xs font-bold text-black xl:px-4 xl:pb-1 xl:pt-2 xl:text-[20px]/[1]">
                <p className="relative z-10">캡쳐도가능!</p>
                <div
                  className="absolute -bottom-1 left-2 z-0 h-3 w-3 -rotate-45 bg-[#d8f700] xl:h-6 xl:w-7"
                  style={{
                    clipPath: "polygon(200% 0, 0 100%, 100% 100%)",
                  }}
                ></div>
              </span>
            </div>

            <p className="text-xs font-medium text-[#cacaca] md:text-sm lg:text-2xl/[48px]">
              대회 생방송 : 1월 25일 숲(SOOP) & 유튜브 라이브
            </p>
          </div>
          <Image
            src={"/images/04-img.webp"}
            alt=""
            width={isMobile ? 337 : isLapTop ? 637 : 787}
            height={isMobile ? 615 : 715}
            className="mb-[140px] mt-[79px] object-contain"
          />
        </div>
        <Image
          src={"/images/do-06-gloves.webp"}
          alt=""
          width={isMobile ? 202 : 639}
          height={isMobile ? 200 : 792}
          className="absolute right-0 z-10 translate-x-2/3 object-contain max-md:bottom-1 xl:top-0 xl:translate-y-1/3"
        />
        <Image
          src={"/images/05-box-patterns.webp"}
          alt="03-box-pattern"
          width={1250}
          height={1290}
          className="absolute bottom-0 z-0 rounded-3xl"
        />
      </div>
      {/*  */}
      <div className="relative mt-5 flex flex-col items-center xl:mt-[65px]">
        <Image
          src={"/images/event-subtitle-2.webp"}
          alt="03-box-pattern"
          width={1175}
          height={119}
        />
        <p className="absolute top-1/2 mt-[2px] -translate-y-1/2 text-sm font-extrabold text-black xl:mt-2 xl:text-[46px]/[1em] 2xl:text-[42px]/[1em] 3xl:text-[50px]/[1em]">
          이벤트 1, 2, 3 중 <span className="text-[#253ce8]">하나만</span> 참여해도 당첨 가능!
        </p>
      </div>
    </div>
  )
}

export default EventCard
