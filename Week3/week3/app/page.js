import Buttontest from '@/components/Buttontest'
import { CalendarDemo } from '@/components/Calender'
import { CardWithForm } from '@/components/Card'
import { CarouselOrientation } from '@/components/Carousel'
import { MenubarDemo } from '@/components/Menubar'
import { Calendar } from '@/components/ui/calendar'

import { Carousel } from '@/components/ui/carousel'

import React from 'react'



const page = () => {
  
  return (
    <>
      <MenubarDemo/>
      <Buttontest/>
      <CalendarDemo/>
      <CarouselOrientation/>
      <CardWithForm/>

    </>
  )
}

export default page
