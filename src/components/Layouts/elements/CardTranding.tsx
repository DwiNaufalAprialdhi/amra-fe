import Icon from '@/components/Icon/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardTrandingProps = {
      link: string;
      image: string;
      title: string;
      category: string;
}

export default function CardTranding(props: CardTrandingProps) {
      return (
            <>
                  <Link href={props.link} className='w-full flex flex-col lg:rounded-[10px] rounded-[8px] overflow-hidden group'>
                        {/* Image */}
                        <div className='w-full h-[269px] lg:rounded-[10px] rounded-[8px] overflow-hidden relative'>
                              <div className='absolute top-0 left-0 w-full h-full bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500'>
                                    <div className='w-max h-max py-[5px] px-[10px] rounded-full bg-transparent border border-slate-50 flex items-center gap-x-2'>
                                          <h2 className='font-medium lg:text-sm text-xs text-slate-50'>
                                                Lihat Detail Event
                                          </h2>
                                          <Icon.detail className="lg:w-4 lg:h-4 w-3 h-3 text-slate-50" />
                                    </div>
                              </div>
                              <Image
                                    src={props.image}
                                    alt='tranding'
                                    width={224} height={269}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        {/* Text */}
                        <div className='flex flex-col gap-y-1 mt-[14px]'>
                              <h2 className='font-medium lg:text-base text-sm text-slate-50 line-clamp-1'>
                                    {props.title}
                              </h2>
                              <h4 className='font-normal lg:text-sm text-xs text-slate-200 line-clamp-1'>
                                    {props.category}
                              </h4>
                        </div>
                  </Link>
            </>
      )
}
