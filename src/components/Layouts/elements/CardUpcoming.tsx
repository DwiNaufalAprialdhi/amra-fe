import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardUpcomingProps = {
      hashtag: number
      date: string
      link: string
      image: string
      status: string
      title: string
      category: string
}

export default function CardUpcoming(props: CardUpcomingProps) {
      return (
            <>
                  <div className='w-full grid grid-cols-10 lg:items-center items-start lg:gap-[50px] gap-[14px]'>
                        {/* Left */}
                        <div className='w-full col-span-3 flex flex-col lg:items-end lg:justify-end items-start justify-start'>
                              <h2 className='font-medium lg:text-[48px] lg:leading-[48px] text-[32px] leading-[32px] text-slate-800'>
                                    #{props.hashtag}
                              </h2>
                              <h2 className='font-normal lg:text-sm text-xs text-slate-600'>
                                    {props.date}
                              </h2>
                        </div>
                        {/* Right */}
                        <Link href="#" className='w-full col-span-7 flex lg:flex-row flex-col lg:items-center items-start gap-[14px] group'>
                              {/* Image */}
                              <div className='w-full lg:max-w-[200px] max-w-none h-full lg:max-h-[100px] md:max-h-[200px] max-h-[100px] rounded-[10px] overflow-hidden'>
                                    <Image
                                          src={props.image}
                                          alt="Upcoming"
                                          width={200} height={100}
                                          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
                                    />
                              </div>
                              {/* Text */}
                              <div className='lg:w-max w-full flex flex-col gap-y-1'>
                                    <h2 className='font-semibold lg:text-sm text-xs text-theme-orange'>
                                          {props.status}
                                    </h2>
                                    <h2 className='font-medium lg:text-base text-sm line-clamp-1'>
                                          {props.title}
                                    </h2>
                                    <h2 className='font-normal lg:text-sm text-xs text-slate-600'>
                                          {props.category}
                                    </h2>
                              </div>
                        </Link>
                  </div>
            </>
      )
}
