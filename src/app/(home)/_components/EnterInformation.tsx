"use client"
import useScreenSize from "@/hooks/useScreenSize"
import { useFirestoreUsers } from "@/services/useFirestoreUsers"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

interface FormData {
  name: string
  phoneNumber: string
  email: string
  website: string
  condition?: boolean
}

const EnterInformation = ({ ref }: { ref: (el: HTMLDivElement | null) => void }) => {
  const { register, handleSubmit } = useForm<FormData>()
  const { pushUser } = useFirestoreUsers()
  const [showModal, setShowModal] = useState(false)

  const onSubmit = async (data: FormData) => {
    try {
      if (!data.condition) {
        toast.error("Please agree to the terms and conditions")
        return
      }
      delete data.condition
      const response = await pushUser({
        ...data,
        role: 0,
        postStatus: false,
        applycationStats: false,
        informationConsent: true,
        createdAt: new Date(),
      })
      if (response) {
        setShowModal(true)
      }
    } catch (error) {
      console.error("Error when push user data:", error)
      toast.error("Error when push user data")
    }
  }

  const screenSize = useScreenSize()
  const isMobile = screenSize === "xs" || screenSize === "sm" || screenSize === "md"

  function timeoutToCloseModal() {
    setTimeout(() => {
      setShowModal(false)
    }, 3000)
  }

  useEffect(() => {
    if (showModal) {
      timeoutToCloseModal()
    }
  }, [showModal])

  return (
    <div className="relative w-full" ref={ref}>
      <Image
        src={"/images/information/do-05-shoes.webp"}
        alt=""
        width={isMobile ? 300 : 680}
        height={710}
        className="absolute bottom-full right-full z-50 hidden translate-y-1/2 object-contain 3xl:block"
      />
      <div className="container mx-auto max-w-[1250px]">
        <div className="mt-4 flex flex-col items-center">
          <div className="relative mb-[39px]">
            <Image src="/images/participate/05-titlebox.webp" alt="" width={110} height={52} />
            <p className="absolute left-[33%] top-1 text-[32px] font-extrabold text-[#1a1a1a]">
              03
            </p>
          </div>
          <p className="mb-[47px] text-center text-3xl font-extrabold text-white lg:text-[40px] lg:leading-[53px] lg:-tracking-[0.8px]">
            신청자 정보를 <br />
            입력해 주세요!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-[18px]">
            <input
              type="text"
              placeholder="성함"
              {...register("name", {
                // required: true, maxLength: 80
              })}
              className="px-[60px] py-4 text-center text-lg text-[#b3b3b3] outline-none lg:px-[120px] lg:py-6 lg:text-2xl"
            />
            {/* <input
                type="text"
                placeholder='생년월일'
                {...register("birthDate",)}
                className='text-center text-lg lg:text-2xl text-[#b3b3b3] py-4 lg:py-6 px-[60px] lg:px-[120px] outline-none'
              /> */}

            <input
              type="tel"
              placeholder="연락처"
              {...register("phoneNumber", {
                // required: "전화번호는 필수입니다",
                // pattern: {
                //   value: /^01[0-9]{1}-?[0-9]{3,4}-?[0-9]{4}$/,
                //   message: "유효하지 않은 전화번호입니다"
                // },
                // maxLength: {
                //   value: 13,
                //   message: "전화번호는 13자리를 초과할 수 없습니다"
                // }
              })}
              className="px-[60px] py-4 text-center text-lg text-[#b3b3b3] outline-none lg:px-[120px] lg:py-6 lg:text-2xl"
            />
            <input
              type="text"
              placeholder="이메일"
              {...register("email", {
                // required: "이메일은 필수입니다",
                // pattern: {
                //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                //   message: "유효하지 않은 이메일 주소입니다"
                // }
              })}
              className="px-[60px] py-4 text-center text-lg text-[#b3b3b3] outline-none lg:px-[120px] lg:py-6 lg:text-2xl"
            />
            <input
              type="url"
              placeholder="URL"
              {...register("website", {
                // required: "URL을 입력해 주세요",
                // pattern: {
                //   value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                //   message: "유효하지 않은 URL입니다"
                // }
              })}
              className="px-[60px] py-4 text-center text-lg text-[#b3b3b3] outline-none lg:px-[120px] lg:py-6 lg:text-2xl"
            />
            <div className="flex items-center gap-5">
              <input type="checkbox" {...register("condition")} className="h-5 w-5 lg:h-6 lg:w-6" />
              <p className="text-lg text-[#8c8c8c] lg:text-2xl">
                개인정보 이용 및 수집에 동의합니다.
              </p>
            </div>
            <button
              className="mb-[100px] mt-10 hover:opacity-90 lg:mb-[207px] lg:mt-12"
              type="submit"
            >
              <Image
                src="/images/participate/07-but.webp"
                alt="numberbox-1"
                width={isMobile ? 300 : 560}
                height={70}
                className="object-contain"
              />
            </button>
          </form>
          {showModal && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1e9d] bg-opacity-50"
              onClick={() => setShowModal(false)}
            >
              <div
                className="border-2 border-black bg-white px-16 pb-4 pt-8 text-center shadow-lg md:px-36"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="mb-4 text-2xl font-bold text-black">이벤트 응모 완료! </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EnterInformation
