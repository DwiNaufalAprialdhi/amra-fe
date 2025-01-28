import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Banner() {
      return (
            <>
                  <main className='w-full h-auto relative z-[2] lg:mb-[60px] mb-[50px]'>
                        <section className='container_section'>
                              <div data-aos="fade-up" className='w-full h-auto lg:p-[50px] p-6 flex flex-col relative rounded-[16px] bg-[#2D1D03]'>
                                    {/* Ornament */}
                                    <div className='absolute top-0 left-0 w-full h-full overflow-hidden rounded-[16px] z-[1]'>
                                          <Image
                                                src='/assets/ornament/finger-banner.svg'
                                                alt='ornament'
                                                width={1240}
                                                height={308}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    {/* Ornament Box */}
                                    <div className='hidden lg:block w-[280px] h-auto absolute -top-[50px] right-[60px] z-[2]'>
                                          <Image
                                                src='/assets/ornament/box.svg'
                                                alt='ornament'
                                                width={303}
                                                height={303}
                                                className='w-full h-auto object-cover'
                                          />
                                    </div>
                                    {/* Ornament Box */}
                                    <div className='block lg:hidden w-[250px] h-auto absolute -top-[50px] left-1/2 -translate-x-1/2 z-[2]'>
                                          <Image
                                                src='/assets/ornament/box.svg'
                                                alt='ornament'
                                                width={303}
                                                height={303}
                                                className='w-full h-auto object-cover'
                                          />
                                    </div>
                                    {/* Text & Button */}
                                    <div className='w-full lg:max-w-[620px] max-w-none flex flex-col relative lg:py-0 pt-[240px] z-[3]'>
                                          <h2 className='font-baloo w-full font-bold lg:text-[48px] text-[24px] lg:leading-[48px] leading-[24px] mb-2 text-slate-50 lg:text-start text-center'>
                                                Sudah Sedekah Hari Ini?
                                          </h2>
                                          <p className='font-normal lg:text-base text-sm text-slate-200 lg:mb-[50px] mb-6 lg:text-start text-center'>
                                                Jangan sampai ketinggalan kesempatan untuk mendapat pahala berkali lipat dari setiap amalanmu selama bulan Ramadan.
                                          </p>
                                          <Link href="#" className='w-max h-max lg:py-[15px] py-3 lg:px-[30px] px-5 rounded-full flex items-center justify-center gap-x-2 bg-theme-orange font-medium lg:text-sm text-xs hover:bg-opacity-80 duration-200 text-slate-50 lg:mx-0 mx-auto'>
                                                Sedekah Sekarang
                                          </Link>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
