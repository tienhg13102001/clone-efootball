import Image from "next/image"
import Banner from "./_components/Banner"
import EventCard from "./_components/EventCard"
import ParticipateEvent from "./_components/ParticipateEvent"

const EventPage = () => {
  return (
    <div className="relative flex w-screen flex-col overflow-x-hidden bg-[#14189E]">
      {/* <HeaderEventPage /> */}
      <Image
        src={"/images/main-bg.webp"}
        alt="main-bg"
        width={1920}
        height={1881}
        className="absolute -left-2 -right-2 -top-5 z-0 w-full scale-105 object-cover"
      />
      <div className="relative w-full text-white z-10">
        <Banner />
        <EventCard />
        <ParticipateEvent />
      </div>
      <Image
        src={"/images/information/08-rights-bg.webp"}
        alt=""
        width={1920}
        height={1313}
        className="absolute -left-2 -right-2 bottom-0 z-0 w-full object-cover opacity-50"
      />
      {/* <FooterEventPage /> */}
    </div>
  )
}

export default EventPage
