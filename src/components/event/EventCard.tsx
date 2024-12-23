import Image from "next/image"
import React from "react"

const EventCard = () => {
  return (
    <div className="w-full pt-[13px] bg-black bg-contain bg-center">
      <div className='pt-6 mb-[76px] max-w-[1250px] bg-[#131313] bg-[url("/images/02-box-patterns.webp")] bg-cover bg-center mx-auto flex flex-col items-center rounded-3xl relative'>
        <div className="flex flex-col items-center text-[66px]">
          <div className="font-GmarketSans text-center font-medium mt-[167px]">
            e풋볼컵 생방송 관람 인증샷 올리고
            <p className="font-bold text-[#d8f700]">친구랑 맨체스터로 여행 가자!</p>
          </div>
          <Image src={"/images/02-all-img.png"} alt="" width={983} height={558} className="mt-[65px] mb-[175px]" />
        </div>
        <Image
          src={"/images/do-01-airplane.webp"}
          alt=""
          width={1010}
          height={258}
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/*  */}
      <div className='pt-6 mb-[76px] max-w-[1250px] bg-[#131313] bg-[url("/images/03-box-patterns.webp")] bg-cover bg-center mx-auto flex flex-col items-center rounded-3xl relative'>
        <p className="mt-[92px] mb-[37px] text-[50px]/[1] font-bold">EVENT 01</p>
        <div className="flex flex-col items-center text-[48px] tracking-[0.8]">
          <p className="font-GmarketSans text-center font-medium ">
            감스트 X 이상호 팀 배틀 e풋볼을 기다리며
            <br />
            <span className="font-bold text-[#d8f700]">나만의 개성 있는 기대 영상 및 인증샷 올리기!</span>
          </p>
          <div className="mt-[67px] mb-[58px] flex gap-[24px]">
            <div className="flex flex-col gap-[24px]">
              <div className="relative">
                <Image src={"/images/03-videobg-01.webp"} alt="" width={258} height={408} />
                <Image
                  src={"/images/03-playbutton.webp"}
                  alt=""
                  width={39}
                  height={49}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="flex items-center gap-[18px]">
                <Image src={"/images/03-video-profile-01.webp"} alt="" width={39} height={49} />
                <p className="text-xl">hongchi1104</p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="relative">
                <Image src={"/images/03-videobg-01.webp"} alt="" width={258} height={408} />
                <Image
                  src={"/images/03-playbutton.webp"}
                  alt=""
                  width={39}
                  height={49}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="flex items-center gap-[18px]">
                <Image src={"/images/03-video-profile-01.webp"} alt="" width={39} height={49} />
                <p className="text-xl">hongchi1104</p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="relative">
                <Image src={"/images/03-videobg-01.webp"} alt="" width={258} height={408} />
                <Image
                  src={"/images/03-playbutton.webp"}
                  alt=""
                  width={39}
                  height={49}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="flex items-center gap-[18px]">
                <Image src={"/images/03-video-profile-01.webp"} alt="" width={39} height={49} />
                <p className="text-xl">hongchi1104</p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="relative">
                <Image src={"/images/03-videobg-01.webp"} alt="" width={258} height={408} />
                <Image
                  src={"/images/03-playbutton.webp"}
                  alt=""
                  width={39}
                  height={49}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="flex items-center gap-[18px]">
                <Image src={"/images/03-video-profile-01.webp"} alt="" width={39} height={49} />
                <p className="text-xl">hongchi1104</p>
              </div>
            </div>
          </div>
          <Image src={"/images/03-logo.webp"} alt="" width={281} height={34} />
          <div className="text-center text-[28.5px]/[1.33] mt-[14px] mb-[109px]">
            <p>나만의 특별한 응원법! 이 경기장의 패셔니스타는 바로나!</p>
            <p>응원할 때 먹으면 두 배 즐거워지는 먹방 노하우!</p>
            <p className="font-bold">특별한 응원 영상 인증과 함께 다양하고 푸짐한 혜택도 팡팡!</p>
          </div>
        </div>
        <Image
          src={"/images/do-02-trophy.webp"}
          alt=""
          width={423}
          height={606}
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/*  */}
      <div className='pt-6 max-w-[1250px] bg-[#131313] bg-[url("/images/04-box-patterns.webp")] bg-cover bg-center mx-auto flex flex-col items-center rounded-3xl relative'>
        <p className="mt-[92px] mb-[37px] text-[50px]/[1] font-bold">EVENT 02</p>
        <div className="flex flex-col items-center text-[48px] tracking-[0.8]">
          <p className="font-GmarketSans text-center font-medium text-[40px]/[48px]">
            <p>정정당당 e풋볼 올스타즈 본방 시청하며</p>
            <p className="text-[#d8f700] font-bold">응원 영상 및 인증샷 올리기!</p>
            <p className="text-[#8c8c8c] text-2xl/[48px]">대회 생방송 : 1월 25일 숲(SOOP) & 유튜브 라이브</p>
          </p>
          <Image src={"/images/04-img.webp"} alt="" width={787} height={715} className="mt-[79px] mb-[140px]"/>
        
        </div>
        <Image
          src={"/images/do-03-ball.webp"}
          alt=""
          width={287}
          height={285}
          className="absolute top-0 left-0 -translate-x-2/3"
        />
      </div>
    </div>
  )
}

export default EventCard
