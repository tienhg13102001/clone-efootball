'use client'
import useScreenSize from '@/hooks/useScreenSize';
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  website: string;
  condition?: boolean;
}

const EnterInformation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setShowModal(true);
  };

  const screenSize = useScreenSize();
  const isMobile =
    screenSize === "xs" || screenSize === "sm" || screenSize === "md";

  return (
    <div className='w-full bg-black min-h-screen bg-[url("/images/information/08-rights-bg.webp")] bg-no-repeat bg-contain h-[300px] lg:h-[1100px]'>
      <div className='container max-w-[1250px] mx-auto relative'>
        <Image
          src={"/images/information/do-05-shoes.webp"}
          alt=""
          width={isMobile ? 300 : 680}
          height={710}
          className="absolute top-20 left-0 -translate-x-[650px] object-contain z-50 hidden 3xl:block"
        />
        <div className='flex flex-col items-center pt-20 lg:pt-0'>
          <div className='relative mb-[39px]'>
            <Image src='/images/participate/05-titlebox.webp' alt='' width={110} height={52} />
            <p className='absolute top-1 left-[33%] text-[#1a1a1a] text-[32px] font-bold'>03</p>
          </div>
          <p className='text-white text-3xl lg:text-[40px] font-bold mb-[35px] lg:leading-[53px] lg:-tracking-[0.8px]'>신청자 정보를 <br />
            입력해 주세요!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-[18px]'>
            <input
              type="text"
              placeholder="성함"
              {...register("name", { required: true, maxLength: 80 })}
              className='text-center text-lg lg:text-2xl text-[#b3b3b3] py-4 lg:py-6 px-[60px] lg:px-[120px] outline-none'
            />
            <input
              type="text"
              placeholder='생년월일'
              {...register("birthday",)}
              className='text-center text-lg lg:text-2xl text-[#b3b3b3] py-4 lg:py-6 px-[60px] lg:px-[120px] outline-none'
            />

            <input
              type="tel"
              placeholder="연락처"
              {...register("phone", {
                required: "전화번호는 필수입니다",
                pattern: {
                  value: /^01[0-9]{1}-?[0-9]{3,4}-?[0-9]{4}$/,
                  message: "유효하지 않은 전화번호입니다"
                },
                maxLength: {
                  value: 13,
                  message: "전화번호는 13자리를 초과할 수 없습니다"
                }
              })}
              className='text-center text-lg lg:text-2xl text-[#b3b3b3] py-4 lg:py-6 px-[60px] lg:px-[120px] outline-none'
            />
            <input
              type="text"
              placeholder="이메일"
              {...register("email", {
                required: "이메일은 필수입니다",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "유효하지 않은 이메일 주소입니다"
                }
              })}
              className='text-center text-lg lg:text-2xl text-[#b3b3b3] py-4 lg:py-6 px-[60px] lg:px-[120px] outline-none'
            />
            <input
              type="url"
              placeholder="URL"
              {...register("website", {
                required: "URL을 입력해 주세요",
                pattern: {
                  value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: "유효하지 않은 URL입니다"
                }
              })}
              className='text-center text-lg lg:text-2xl text-[#b3b3b3] py-4 lg:py-6 px-[60px] lg:px-[120px] outline-none'
            />
            <div className='flex items-center gap-5 mt-6'>
              <input
                type="checkbox"
                {...register("condition", { required: "개인정보 이용 및 수집 동의는 필수입니다." })}
                className='lg:w-6 lg:h-6 w-5 h-5'
              />
              <p className='text-[#8c8c8c] text-lg lg:text-2xl'>개인정보 이용 및 수집에 동의합니다.</p>
            </div>
            <button className='mt-10 lg:mt-16 hover:opacity-90' type="submit">
              <Image
                src='/images/participate/07-but.webp'
                alt='numberbox-1'
                width={isMobile ? 300 : 560}
                height={70}
                className='object-contain'
              />
            </button>
          </form>
          {showModal && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50' onClick={() => setShowModal(false)}  >
              <div className='bg-white py-8 px-16 md:px-36 shadow-lg text-center border-2 border-black' onClick={(e) => e.stopPropagation()} >
                <p className='text-2xl text-black font-bold mb-4'>이벤트 응모 완료! <br />
                  감사합니다</p>
                <p className='text-xl text-black font-bold mt-2'>(Complete!)</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EnterInformation
