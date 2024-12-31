import Image from "next/image"
import Banner from "./_components/Banner"
import EventCard from "./_components/EventCard"
import ParticipateEvent from "./_components/ParticipateEvent"

const EventPage = () => {
  return (
    <div className="flex flex-col relative w-screen overflow-x-hidden bg-[#14189E]">
      {/* <HeaderEventPage /> */}
      <Image src={"/images/main-bg.webp"} alt="main-bg" width={1920} height={1881} className="absolute -top-5 -left-2 -right-2 z-0 scale-105 object-cover w-full"/>
      <div className="w-full text-white">
        <Banner />
        <EventCard />
        <ParticipateEvent />
      </div>
      {/* <FooterEventPage /> */}
    </div>
  )
}

export default EventPage
