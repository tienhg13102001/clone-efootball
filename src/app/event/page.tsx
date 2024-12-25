import React from 'react'
import Banner from './_components/Banner'
import EventCard from './_components/EventCard'
import ParticipateEvent from './_components/ParticipateEvent'
import EnterInformation from './_components/EnterInformation'


const EventPage = () => {
  return (
    <div className='w-full bg-white text-white'>
      <Banner />
      <EventCard />
      <ParticipateEvent />
      <EnterInformation />
    </div>
  )
}

export default EventPage