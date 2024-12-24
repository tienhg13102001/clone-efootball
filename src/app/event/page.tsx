import Banner from '@/components/event/Banner'
import EnterInformation from '@/components/event/EnterInformation'
import EventCard from '@/components/event/EventCard'
import ParticipateEvent from '@/components/event/ParticipateEvent'
import React from 'react'


const EventPage = () => {
  return (
    <div className='w-full bg-white'>
      <Banner />
      <EventCard />
      <ParticipateEvent />
      <EnterInformation />
    </div>
  )
}

export default EventPage