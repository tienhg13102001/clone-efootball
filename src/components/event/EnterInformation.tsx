'use client'
import useScreenSize from '@/hooks/useScreenSize';
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  phone: string;
  email: string;
  condition?: boolean;
}

const EnterInformation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);
  console.log(errors);

  const screenSize = useScreenSize();
  const isMobile =
    screenSize === "xs" || screenSize === "sm" || screenSize === "md";

  return (
    <div className='w-full bg-black min-h-screen bg-[url("/images/information/08-rights-bg.webp")] bg-no-repeat bg-contain h-[300px] lg:h-[1100px]'>
      <div className='container max-w-[1250px] mx-auto'>
        <div className='flex flex-col items-center pt-20 lg:pt-0'>
          <div className='relative mb-[39px]'>
            <Image src='/images/participate/05-titlebox.webp' alt='' width={110} height={52} />
            <p className='absolute top-1 left-[33%] text-[#1a1a1a] text-[32px] font-bold'>03</p>
          </div>
          <p className='text-white text-3xl lg:text-[40px] font-bold mb-[35px]'>신청자 정보를 <br />
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
            <div className='flex gap-5 mt-6'>
              <input
                type="checkbox"
                {...register("condition")}
                className='lg:w-6 lg:h-6 w-4 h-4'
              />
              <p className='text-[#8c8c8c] text-lg lg:text-2xl'>개인정보 이용 및 수집에 동의합니다.</p>
            </div>
            <button className='mt-10 lg:mt-16' type="submit">
              <Image
                src='/images/participate/05-but.webp'
                alt='numberbox-1'
                width={isMobile ? 300 : 560}
                height={70}
                className='object-contain'
              />
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default EnterInformation
