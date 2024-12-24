import Image from 'next/image'
import React from 'react'

const ParticipateEvent = () => {
  return (
    <div className='w-full bg-black py-[135px] min-h-screen'>
      <div className='container max-w-[1250px] mx-auto'>
        {/* Event Card 1 */}
        <section className='flex flex-col items-center'>
          <h3 className='text-[#158145] text-[64px] font-bold mb-[88px]'>이벤트 참여방법</h3>
          <div className='relative mb-[39px]'>
            <Image src='/images/participate/05-titlebox.webp' alt='' width={110} height={52} />
            <p className='absolute top-1 left-[33%] text-[#1a1a1a] text-[32px] font-bold'>01</p>
          </div>
          <p className='text-white text-[40px] font-bold mb-[35px]'>나만의 개성 있는 e풋볼컵<br />
            <span className='text-[#d8f700]'>응원 영상</span>을 올려주세요!</p>
          <p className='text-[#8c8c8c] text-2xl'>*경기 응원 영상과 관람 영상 모두 올리면 당첨 확률은 업업업!</p>

          <div className='mt-[73px] relative'>
            <Image src='/images/participate/05-all-box.webp' alt='' width={1250} height={566} className='object-contain' />
            <div className='absolute top-20 left-[58%]'>
              <p className='text-white text-[40px] font-bold mb-[69px]'>사전 응원 영상 이벤트 <br />
                참여 방법</p>
              <div className='flex gap-3 items-start mb-[53px]'>
                <Image src='/images/participate/05-numberbox-1.webp' alt='numberbox-1' width={30} height={30} className='object-contain' />
                <p className='text-white text-[28px] font-bold -translate-y-2'>유튜브 숏츠, 인스타, 틱톡에
                  <br />
                  <span className='text-[#d8f700]'>세로용 영상</span>을 업로드하기</p>
              </div>
              <div className='flex gap-3 items-start'>
                <Image src='/images/participate/05-numberbox-2.webp' alt='numberbox-2' width={30} height={30} className='object-contain' />
                <p className='text-white text-[28px] font-bold mb-[35px] -translate-y-2'><span className='text-[#d8f700]'>URL을 복사</span>하고 <br />
                  아래에 입력하여 업로드하기</p>
              </div>
            </div>
          </div>
          <button className='mt-20'>
            <Image src='/images/participate/05-but.webp' alt='05-but' width={560} height={70} className='object-contain' />
          </button>
        </section>
        {/* Event Card 2 */}
        <section className='flex flex-col items-center mt-[135px]'>
          <div className='relative mb-[39px]'>
            <Image src='/images/participate/05-titlebox.webp' alt='' width={110} height={52} />
            <p className='absolute top-1 left-[33%] text-[#1a1a1a] text-[32px] font-bold'>02</p>
          </div>
          <p className='text-white text-[40px] font-bold mb-[35px]'>나만의 개성 있는 e풋볼컵<br />
            <span className='text-[#d8f700]'>응원 영상</span>을 올려주세요!</p>
          <p className='text-[#8c8c8c] text-2xl'>*경기 응원 영상과 관람 영상 모두 올리면 당첨 확률은 업업업!</p>

          <div className='mt-[73px] relative'>
            <Image src='/images/participate/06-all-box.webp' alt='' width={1250} height={566} className='object-contain' />
            <div className='absolute top-16 left-[58%]'>
              <p className='text-white text-[40px] font-bold mb-10'>관람 인증 이벤트 <br />
                참여 방법</p>
              <div className='flex gap-3 items-start mb-10'>
                <Image src='/images/participate/05-numberbox-1.webp' alt='numberbox-1' width={30} height={30} className='object-contain' />
                <p className='text-white text-[28px] font-medium -translate-y-2'>SOOP 방송 시청 화면과 <br />
                  응원하는 모습
                  <span className='text-[#d8f700]'>캡쳐하기</span></p>
              </div>
              <div className='flex gap-3 items-start mb-10'>
                <Image src='/images/participate/05-numberbox-2.webp' alt='numberbox-2' width={30} height={30} className='object-contain' />
                <p className='text-white text-[28px] font-medium -translate-y-2'>유튜브 숏츠, 인스타, 틱톡에 <br />
                  <span className='text-[#d8f700]'>세로용 영상</span>을 업로드하기</p>
              </div>

              <div className='flex gap-3 items-start'>
                <Image src='/images/participate/06-numberbox-3.webp' alt='numberbox-3' width={30} height={30} className='object-contain' />
                <p className='text-white text-[28px] font-medium -translate-y-2'>
                  <span className='text-[#d8f700]'>URL을 복사</span>하여 업로드하기</p>
              </div>
            </div>


          </div>
          <button className='mt-10'>
            <Image src='/images/participate/05-but.webp' alt='05-but' width={560} height={70} className='object-contain' />
          </button>
        </section>
      </div>
    </div>
  )
}

export default ParticipateEvent