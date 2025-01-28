import Banner from '@/components/Layouts/Banner'
import ChoiceDonation from '@/components/Layouts/ChoiceDonation'
import CintaquranCall from '@/components/Layouts/CintaquranCall'
import Daily from '@/components/Layouts/Daily'
import Donation from '@/components/Layouts/Donation'
import Footer from '@/components/Layouts/Footer'
import Hero from '@/components/Layouts/Hero'
import LeaderBoard from '@/components/Layouts/LeaderBoard'
import Navbar from '@/components/Layouts/Navbar'
import Tranding from '@/components/Layouts/Tranding'
import Upcoming from '@/components/Layouts/Upcoming'
import UpcomingEvent from '@/components/Layouts/UpcomingEvent'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function index() {
  return (
    <>
      <Head>
        <title> Amazing Ramadhan </title>
      </Head>
      <Navbar />
      <div className='w-full h-auto lg:rounded-b-[50px] rounded-b-[20px] bg-[#1A0F00] overflow-hidden relative'>
        {/* Ornament */}
        <div className='w-full h-full absolute top-0 inset-0 z-[1] zoomIn'>
          <Image
            src={"/assets/ornament/finger.svg"}
            alt='ornament'
            width={1441}
            height={1978}
            className='w-full h-full object-cover'
          />
        </div>
        <Hero />
        <Tranding />
        <ChoiceDonation />
      </div>
      <div className='w-full h-auto bg-white overflow-hidden relative'>
        {/* Ornament */}
        <div className='w-full h-full absolute top-0 inset-0 z-[1] opacity-50'>
          <Image
            src={"/assets/ornament/finger.svg"}
            alt='ornament'
            width={1441}
            height={1978}
            className='w-full h-full object-cover grayscale'
          />
        </div>
        <Upcoming />
        <CintaquranCall />
        <Daily />
        <Banner />
        <LeaderBoard />
        <UpcomingEvent />
        <Donation />
        <Footer />
      </div>
    </>
  )
}
