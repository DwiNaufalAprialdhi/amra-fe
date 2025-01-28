import Link from 'next/link'
import React from 'react'
import CardUpcoming from './elements/CardUpcoming'

export default function Upcoming() {
      return (
            <>
                  <main className='w-full h-auto lg:my-[150px] my-[50px] overflow-hidden relative z-[2]'>
                        <section className='container_section grid lg:grid-cols-2 grid-cols-1 lg:gap-[50px] gap-6'>
                              {/* Left */}
                              <div data-aos="fade-right" className='w-full h-max col-span-1 flex flex-col lg:items-start lg:justify-start items-center justify-center'>
                                    <h2 className='font-baloo w-full max-w-[300px] font-bold lg:text-[48px] text-[24px] lg:leading-[48px] leading-[24px] lg:text-start text-center mb-2'>
                                          Upcoming Events
                                    </h2>
                                    <p className='font-normal lg:text-base text-sm text-slate-600 lg:text-start text-center lg:mb-[50px] mb-6'>
                                          Rangkuman event yang sedang berjalan dan yang akan datang. Jangan sampai ketinggala semua event dan program di Amazing Ramadan.
                                    </p>
                                    <Link href='#' className='w-max h-max lg:mx-0 mx-auto lg:py-4 py-3 lg:px-[30px] px-4 flex items-center justify-center bg-transparent border rounded-full border-slate-400 text-slate-600 font-semibold lg:text-sm text-xs'>
                                          Lihat Semua Event
                                    </Link>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className='w-full col-span-1 flex flex-col gap-y-6'>
                                    <CardUpcoming
                                          hashtag={5}
                                          date={'14 Maret 2025'}
                                          link={'#'}
                                          image={'/assets/images/upcoming-1.svg'}
                                          status={'online'}
                                          title={'Hidangan Ramadhan untuk Anak Yatim Piatu'}
                                          category={'Ramadan Series'}
                                    />
                                    <CardUpcoming
                                          hashtag={6}
                                          date={'14 Maret 2025'}
                                          link={'#'}
                                          image={'/assets/images/upcoming-1.svg'}
                                          status={'online'}
                                          title={'Hidangan Ramadhan untuk Anak Yatim Piatu'}
                                          category={'Ramadan Series'}
                                    />
                                    <CardUpcoming
                                          hashtag={7}
                                          date={'14 Maret 2025'}
                                          link={'#'}
                                          image={'/assets/images/upcoming-1.svg'}
                                          status={'online'}
                                          title={'Hidangan Ramadhan untuk Anak Yatim Piatu'}
                                          category={'Ramadan Series'}
                                    />
                                    <CardUpcoming
                                          hashtag={8}
                                          date={'14 Maret 2025'}
                                          link={'#'}
                                          image={'/assets/images/upcoming-1.svg'}
                                          status={'online'}
                                          title={'Hidangan Ramadhan untuk Anak Yatim Piatu'}
                                          category={'Ramadan Series'}
                                    />
                              </div>
                        </section>
                  </main>
            </>
      )
}
