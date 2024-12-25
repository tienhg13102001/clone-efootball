import React from 'react'
import Banner from './_components/Banner'
import EventCard from './_components/EventCard'
import ParticipateEvent from './_components/ParticipateEvent'
import EnterInformation from './_components/EnterInformation'
import HeaderEventPage from '@/components/layout/HeaderEventPage'
import FooterEventPage from '@/components/layout/FooterEventPage'


const EventPage = () => {
  return (
    <div className='flex flex-col w-screen overflow-x-hidden bg-black'>
      <HeaderEventPage />
      <div className='w-full bg-white text-white'>
        <Banner />
        <EventCard />
        <ParticipateEvent />
        <EnterInformation />
      </div>
      <FooterEventPage />
    </div>
  )
}

export default EventPage