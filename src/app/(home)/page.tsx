import Banner from './_components/Banner'
import EventCard from './_components/EventCard'
import ParticipateEvent from './_components/ParticipateEvent'


const EventPage = () => {
  return (
    <div className='flex flex-col w-screen overflow-x-hidden bg-[#1b1e9d]'>
      {/* <HeaderEventPage /> */}
      <div className='w-full text-white'>
        <Banner />
        <EventCard />
        <ParticipateEvent />
      </div>
      {/* <FooterEventPage /> */}
    </div>
  )
}

export default EventPage