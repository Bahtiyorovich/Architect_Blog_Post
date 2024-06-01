import { Typography } from '@material-tailwind/react'
import React from 'react'
import ServiceCard from '../components/serviceCard'

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-x-16 h-screen py-80 w-full bg-gray-50'>
      <Typography  className='w-1/2 uppercase text-center text-sm mb-4 font-semibold text-teal-600'>Services</Typography>
      <Typography variant='h2' className='w-[35%] text-center text-black'>This is My Expertise, The Services I'll Provide My Clients</Typography>
      <div className='flex items-center justify-center gap-x-8 mt-8'>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
      </div>
    </div>
  )
}

export default Services