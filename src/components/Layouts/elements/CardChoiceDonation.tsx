import Icon from '@/components/Icon/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Progress from './Progress'

type CardChoiceDonationProps = {
      link: string;
      image: string;
      logo: string;
      name: string;
      time: string;
      title: string;
      collected: number;
      target: number;
      amount: string;
}

export default function CardChoiceDonation(props: CardChoiceDonationProps) {
      return (
            <>
                  <Link href={props.link} className='w-full flex flex-col bg-black lg:rounded-[16px] rounded-[8px] overflow-hidden group'>
                        {/* Image */}
                        <div className='w-full h-[300px] overflow-hidden lg:rounded-[16px] rounded-[8px]'>
                              <Image
                                    src={props.image}
                                    alt={'Donation'}
                                    width={395} height={300}
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                              />
                        </div>
                        {/* Body */}
                        <div className='w-full flex flex-col py-6 px-[14px]'>
                              {/* Profile & Time */}
                              <div className='w-full flex items-center justify-between mb-[14px]'>
                                    <div className='w-max flex items-center gap-x-2'>
                                          <div className='w-5 h-5 overflow-hidden rounded-full'>
                                                <Image
                                                      src={props.logo}
                                                      alt={'Logo'}
                                                      width={20} height={20}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                          <h2 className='font-normal lg:text-sm text-xs text-slate-50'>
                                                {props.name}
                                          </h2>
                                          <Icon.verified className='w-4 h-4' />
                                    </div>
                                    <h2 className='font-normal llg:text-sm text-xs text-slate-200'>
                                          {props.time}
                                    </h2>
                              </div>
                              {/* Title */}
                              <h2 className='font-medium lg:text-[20px] text-base leading-normal line-clamp-2 text-slate-50 mb-6'>
                                    {props.title}
                              </h2>
                              {/* Progress */}
                              <Progress collected={props.collected} target={props.target} />

                              {/* Amount */}
                              <h2 className='font-medium lg:text-base text-sm text-slate-50'>
                                    {props.amount}
                              </h2>

                        </div>
                  </Link>
            </>
      )
}
