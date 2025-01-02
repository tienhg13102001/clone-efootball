"use client"
import useScreenSize from "@/hooks/useScreenSize"
import Image from "next/image"
import React, { useState } from "react"
import EnterInformation from "./EnterInformation"

const ParticipateEvent = () => {
  const screenSize = useScreenSize()
  const isMobile = screenSize === "xs" || screenSize === "sm"
  const isTablet = screenSize === "md" || screenSize === "lg"
  const isLapTop = screenSize === "2xl"

  const [enterInfoElement, setEnterInfoElement] = useState<HTMLDivElement | null>(null)

  const handleScroll = () => {
    enterInfoElement?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="container w-full max-w-[1000px] 3xl:max-w-[1250px]">
      <div className="relative">
        <Image
          src={"/images/information/do-04-con.webp"}
          alt=""
          width={isMobile ? 300 : 417}
          height={615}
          className="absolute left-full top-1/2 z-50 hidden -translate-y-full translate-x-1/3 object-contain 3xl:block"
        />
        {/* Event Card 1 */}
        <div className="py-28 lg:py-[135px]">
          <h3 className="mb-10 text-center text-4xl font-extrabold text-[#d8f700] lg:mb-[88px] lg:text-[64px]">
            이벤트 참여방법
          </h3>
          <section className="flex flex-col items-center">
            <div className="relative mb-[39px]">
              <Image src="/images/participate/05-titlebox.webp" alt="" width={110} height={52} />
              <p className="absolute left-[33%] top-1 text-[32px] font-extrabold text-[#1a1a1a]">
                01
              </p>
            </div>
            <p className="mb-[30px] text-center text-2xl font-extrabold text-white lg:text-[40px] lg:leading-[50px] lg:-tracking-[0.8px]">
              나만의 개성 있는 정정당당 e풋볼 올스타즈
              <br />
              <span className="text-[#d8f700]">기대 영상</span>을 올려주세요!
            </p>
            <p className="text-xs font-medium text-[#a7a7a7] lg:text-2xl">
              *경기 응원 영상과 관람 영상 모두 올리면 당첨 확률은 업업업!
            </p>

            <div className="relative my-[50px] shadow-xl">
              <Image
                src="/images/participate/05-all-box.webp"
                alt=""
                width={1250}
                height={566}
                className="object-contain"
              />
              <div className="absolute left-[58%] top-10 xs:top-12 md:top-24 lg:top-28 3xl:top-32">
                <p className="mb-4 text-xs font-extrabold text-white xs:text-sm md:text-2xl lg:mb-[50px] lg:text-3xl lg:-tracking-[0.8px] 3xl:text-[40px] 3xl:leading-[52px]">
                  사전 응원 영상 이벤트 <br />
                  참여 방법
                </p>
                <div className="mb-3 flex items-start gap-2 md:gap-3 lg:mb-[40px]">
                  <Image
                    src="/images/participate/05-numberbox-1.webp"
                    alt="numberbox-1"
                    width={isMobile ? 10 : isTablet ? 15 : isLapTop ? 20 : 30}
                    height={isMobile ? 10 : isTablet ? 15 : isLapTop ? 20 : 30}
                    className="object-contain"
                  />
                  <p className="text-[8px] font-medium text-white md:text-lg lg:-translate-y-2 lg:text-2xl 3xl:text-[28px] 3xl:leading-[40px]">
                    유튜브 숏츠, 인스타, 틱톡에
                    <br />
                    <span className="font-extrabold text-[#d8f700]">
                      세로용 영상 or 이미지
                    </span>{" "}
                    업로드하기
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <Image
                    src="/images/participate/05-numberbox-2.webp"
                    alt="numberbox-2"
                    width={isMobile ? 10 : isTablet ? 15 : isLapTop ? 20 : 30}
                    height={isMobile ? 10 : isTablet ? 15 : isLapTop ? 20 : 30}
                    className="object-contain"
                  />
                  <p className="text-[8px] font-medium text-white md:text-lg lg:-translate-y-2 lg:text-2xl 3xl:text-[28px] 3xl:leading-[40px]">
                    <span className="font-extrabold text-[#d8f700]">URL을 복사</span>하고 <br />
                    아래에 입력하여 업로드하기
                  </p>
                </div>
              </div>
            </div>
            <button className="hover:opacity-80" onClick={handleScroll}>
              <Image
                src="/images/participate/05-but.webp"
                alt="05-but"
                width={isMobile ? 300 : 560}
                height={70}
                className="object-contain"
              />
            </button>
          </section>
          {/* Event Card 2 */}
          <section className="mt-20 flex flex-col items-center lg:mt-14">
            <div className="relative my-[50px]">
              <Image src="/images/participate/05-titlebox.webp" alt="" width={110} height={52} />
              <p className="absolute left-[33%] top-1 text-[32px] font-extrabold text-[#1a1a1a]">
                02
              </p>
            </div>
            <p className="mb-4 text-center text-2xl font-bold text-white lg:mb-[30px] lg:text-[40px] lg:leading-[50px] lg:-tracking-[0.8px]">
              e풋볼컵을 관람하는
              <br />
              <span className="text-[#d8f700]">인증 영상</span>을 올려주세요!
            </p>
            <p className="text-[8px] font-medium text-[#a8a8a8] xs:text-[10px] lg:text-xl 3xl:text-2xl">
              SOOP 방송과 함께 인증샷, 방송 관람 영상 등 e풋볼 경기와 함께는 영상을 업로드해 주세요!
            </p>

            <div className="relative my-[50px] shadow-xl">
              <Image
                src="/images/participate/06-all-box.webp"
                alt=""
                width={1250}
                height={566}
                className="object-contain"
              />
              <div className="absolute left-[58%] top-8 xxs:top-9 xs:top-10 md:top-20 lg:top-24 3xl:top-28">
                <p className="mb-3 text-xs font-extrabold text-white xs:text-sm md:text-3xl lg:mb-8 lg:text-4xl lg:-tracking-[0.8px] 3xl:text-[40px] 3xl:leading-[52px]">
                  관람 인증 이벤트 <br />
                  참여 방법
                </p>
                <div className="mb-2 flex items-start gap-2 md:gap-3 lg:mb-8">
                  <Image
                    src="/images/participate/05-numberbox-1.webp"
                    alt="numberbox-1"
                    width={isMobile ? 10 : isTablet ? 15 : isLapTop ? 20 : 30}
                    height={isMobile ? 10 : isTablet ? 15 : isLapTop ? 20 : 30}
                    className="object-contain"
                  />
                  <p className="-translate-y-0.5 text-[8px] font-medium text-white md:text-base lg:-translate-y-1 lg:text-xl 3xl:-translate-y-2 3xl:text-[28px] 3xl:leading-[40px]">
                    SOOP 방송 시청 화면과 <br />
                    응원하는 모습
                    <span className="font-extrabold text-[#d8f700]"> 캡쳐하기</span>
                  </p>
                </div>
                <div className="mb-2 flex items-start gap-2 md:gap-3 lg:mb-8">
                  <Image
                    src="/images/participate/05-numberbox-2.webp"
                    alt="numberbox-2"
                    width={isMobile ? 10 : isTablet ? 15 : isLapTop ? 20 : 30}
                    height={isMobile ? 10 : isTablet ? 15 : isLapTop ? 20 : 30}
                    className="object-contain"
                  />
                  <p className="-translate-y-0.5 text-[8px] font-medium text-white md:text-base lg:-translate-y-1 lg:text-xl 3xl:-translate-y-2 3xl:text-[28px] 3xl:leading-[40px]">
                    유튜브 숏츠, 인스타, 틱톡에 <br />
                    <span className="font-extrabold text-[#d8f700]">
                      세로용 영상 or 이미지
                    </span>{" "}
                    업로드하기
                  </p>
                </div>

                <div className="flex items-start gap-2 md:gap-3">
                  <Image
                    src="/images/participate/06-numberbox-3.webp"
                    alt="numberbox-3"
                    width={isMobile ? 10 : isTablet ? 15 : isLapTop ? 20 : 30}
                    height={isMobile ? 10 : isTablet ? 15 : isLapTop ? 20 : 30}
                    className="object-contain"
                  />
                  <p className="text-[8px] font-medium text-white md:text-base lg:text-xl 3xl:text-[28px]">
                    <span className="font-extrabold text-[#d8f700]">URL을 복사</span>하여 업로드하기
                  </p>
                </div>
              </div>
            </div>
            <button className="hover:opacity-90" onClick={handleScroll}>
              <Image
                src="/images/participate/05-but.webp"
                alt="05-but"
                width={isMobile ? 300 : 560}
                height={70}
                className="object-contain"
              />
            </button>
          </section>
        </div>
        <EnterInformation ref={(el) => setEnterInfoElement(el)} />
      </div>
    </div>
  )
}

export default ParticipateEvent
