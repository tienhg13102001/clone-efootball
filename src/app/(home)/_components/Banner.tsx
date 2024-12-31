"use client"
import Image from "next/image"

const Banner = () => {
  return (
    <div className="mt-32 xl:mt-[701px] mb-[62px] flex flex-col items-center relative">
      <Image
        src={"/images/main-title.webp"}
        alt="main-title"
        width={633}
        height={357}
        className="absolute -top-12 xl:-top-24 w-1/2 xl:w-[633px]"
      />
      <Image src={"/images/caster.webp"} alt="caster" width={1493} height={748} />
    </div>
  )
}

export default Banner
