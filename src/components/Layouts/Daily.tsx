import React from 'react'
import ItemDaily from './elements/ItemDaily'
import Link from 'next/link'
import Icon from '../Icon/Icon'
import Image from 'next/image'

export default function Daily() {
      return (
            <>
                  <main className='w-full h-auto lg:mb-[200px] mb-[180px] relative z-[2]'>
                        <section className='container_section grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[50px] gap-6'>
                              {/* Left */}
                              <div data-aos="fade-right" className='w-full h-max col-span-1 relative'>
                                    {/* Images Phone */}
                                    <div className='w-full md:h-[507px] h-[298px] overflow-hidden'>
                                          <Image
                                                src={'/assets/ornament/phone.svg'}
                                                alt={'phone'}
                                                width={619} height={507}
                                                className='w-full h-full object-contain'
                                          />
                                    </div>
                                    {/* Ornament Progress */}
                                    <div className='md:w-[206px] w-[100px] h-auto absolute top-[57px] right-[50px] bounce1'>
                                          <Image
                                                src={'/assets/ornament/progress.svg'}
                                                alt={'phone'}
                                                width={619} height={507}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    {/* Ornament Chart */}
                                    <div className='md:w-[240px] w-[140px] h-auto absolute bottom-[153px] left-[35px] bounce2'>
                                          <Image
                                                src={'/assets/ornament/chart.svg'}
                                                alt={'phone'}
                                                width={619} height={507}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    {/* Ornament Checklist */}
                                    <div className='lg:w-[206px] w-[100px] h-auto absolute bottom-[20px] right-[75px] bounce3'>
                                          <Image
                                                src={'/assets/ornament/checklist.svg'}
                                                alt={'phone'}
                                                width={619} height={507}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className='w-full h-max col-span-1 flex flex-col'>
                                    <h2 className='font-baloo w-full font-bold lg:text-[48px] text-[24px] lg:leading-[48px] leading-[24px] mb-2'>
                                          Isi Semua Amalan Harianmu
                                    </h2>
                                    <p className='font-normal lg:text-base text-sm text-slate-600 lg:mb-[50px] mb-6'>
                                          Jangan sampai ketinggalan kesempatan untuk mendapat pahala berkali lipat dari setiap amalanmu selama bulan Ramadan. Pantau dan isi amalan harianmu sekarang.
                                    </p>
                                    <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-[50px] gap-6 lg:mb-[50px] mb-6'>
                                          <div className='w-full col-span-1 flex flex-col gap-6'>
                                                <ItemDaily title={'Qiyamul Lail'} />
                                                <ItemDaily title={'Sholat Dhuha'} />
                                                <ItemDaily title={'Sholat Rawatib'} />
                                                <ItemDaily title={'Tadarus/Qirotul Quran'} />
                                                <ItemDaily title={'Sholat Wajib Berjamaah'} />
                                                <ItemDaily title={'Dan Amal-amal lainnya'} className='lg:hidden' />
                                          </div>
                                          <div className='hidden w-full col-span-1 lg:flex flex-col gap-6'>
                                                <ItemDaily title={'Dzikir Pagi'} />
                                                <ItemDaily title={'Dzikir Petang'} />
                                                <ItemDaily title={'Sholat Sunnah '} />
                                                <ItemDaily title={'Tadarus/Qirotul Quran'} />
                                                <ItemDaily title={'Sholat Wajib Berjamaah'} />
                                          </div>
                                    </div>
                                    <div className='w-full flex lg:flex-row flex-col gap-6'>
                                          <Link href="#" className='lg:w-max w-full h-max lg:py-[15px] py-3 lg:px-[30px] px-5 rounded-full flex items-center justify-center gap-x-2 bg-theme-orange font-medium lg:text-sm text-xs hover:bg-opacity-80 duration-200 text-slate-50'>
                                                Isi Amalan Harianmu
                                                <Icon.pen className='lg:w-4 lg:h-4 w-3 h-3' />
                                          </Link>
                                          <Link href='#' className='lg:w-max w-full h-max lg:py-4 py-3 lg:px-[30px] px-4 flex items-center justify-center bg-transparent border rounded-full border-slate-400 text-slate-600 font-semibold lg:text-sm text-xs'>
                                                Ingin beramal lebih? Sedekah disini!
                                          </Link>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
