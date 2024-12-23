import FooterEventPage from '@/components/layout/FooterEventPage'
import HeaderEventPage from '@/components/layout/HeaderEventPage'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col w-screen bg-black'>
      <HeaderEventPage />
      {children}
      <FooterEventPage />
    </div>
  )
}

export default layout