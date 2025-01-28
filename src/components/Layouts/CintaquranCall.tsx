import Link from 'next/link'
import React from 'react'
import FloatCqCall from './elements/FloatCqCall'

export default function CintaquranCall() {
      return (
            <>
                  <main className='w-full h-auto lg:mb-[150px] mb-[50px] relative z-[2]'>
                        <section className='container_section grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[50px] gap-[65px]'>
                              {/* Left */}
                              <div data-aos="fade-right" className='w-full h-max col-span-1 flex flex-col items-start justify-start order-2 lg:order-1'>
                                    <h2 className='font-baloo w-full font-bold lg:text-[48px] text-[24px] lg:leading-[48px] leading-[24px] mb-2'>
                                          Bimbingan Belajar Quran Bersama Cinta Quran
                                    </h2>
                                    <p className='font-normal lg:text-base text-sm text-slate-600 lg:mb-[50px] mb-6'>
                                          Pelajari cara membaca dan menghafal Al-Quran dengan pendekatan yang nyaman, menyenangkan, dan interaktif, seperti berdiskusi dengan sahabat terbaik.
                                    </p>
                                    <Link href='#' className='w-max h-max lg:py-4 py-3 lg:px-[30px] px-4 flex items-center justify-center bg-transparent border rounded-full border-slate-400 text-slate-600 font-semibold lg:text-sm text-xs'>
                                          Bimbingan Cinta Quran Call
                                    </Link>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className='w-full h-max col-span-1 relative order-1 lg:order-2'>
                                    <FloatCqCall />
                              </div>
                        </section>
                  </main>
            </>
      )
}
