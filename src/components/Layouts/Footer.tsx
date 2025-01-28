import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from '../Icon/Icon'

export default function Footer() {
      return (
            <>
                  <footer data-aos="fade-up" className='w-full h-auto overflow-hidden lg:rounded-t-[16px] rounded-t-[16px] lg:py-[142px] py-[50px] lg:px-[100px] px-5 bg-[#1A0F00] relative z-[2]'>
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
                        {/* Content */}
                        <section className='container_section flex flex-col items-center justify-center relative z-[2]'>
                              <h2 className='w-full md:max-w-[600px] max-w-none font-baloo font-bold lg:text-[32px] lg:leading-[32px] text-[24px] leading-[24px] text-slate-50 text-center lg:mb-[50px] mb-6'>
                                    Gabung Amazing Ramadan & Mulai Amalan Harianmu Sekarang
                              </h2>
                              <Link href="#" className='w-max h-max lg:py-[15px] py-3 lg:px-[30px] px-5 rounded-full flex items-center justify-center gap-x-2 bg-theme-orange font-medium lg:text-sm text-xs hover:bg-opacity-80 duration-200 text-slate-50'>
                                    Gabung Sekarang
                              </Link>
                              <div className='w-full grid grid-cols-10 gap-6 lg:mt-[50px] mt-6'>
                                    {/* Left */}
                                    <div className='w-full lg:col-span-6 col-span-10 flex flex-col lg:items-start lg:justify-start items-center justify-center lg:gap-[50px] gap-3 order-2 lg:order-1'>
                                          <div className='flex items-center gap-x-6 lg:mx-0 mx-auto'>
                                                <Link href='#' className='lg:w-[32px] w-[22px] lg:h-[32px] h-[22px] rounded-full bg-transparent border border-slate-200 flex items-center justify-center lg:hover:-translate-y-[2px] duration-300'>
                                                      <Icon.instagram className='lg:w-[16px] w-[12px] lg:h-[16px] h-[12px] text-slate-50' />
                                                </Link>
                                                <Link href='#' className='lg:w-[32px] w-[22px] lg:h-[32px] h-[22px] rounded-full bg-transparent border border-slate-200 flex items-center justify-center lg:hover:-translate-y-[2px] duration-300'>
                                                      <Icon.facebook className='lg:w-[16px] w-[12px] lg:h-[16px] h-[12px] text-slate-50' />
                                                </Link>
                                                <Link href='#' className='lg:w-[32px] w-[22px] lg:h-[32px] h-[22px] rounded-full bg-transparent border border-slate-200 flex items-center justify-center lg:hover:-translate-y-[2px] duration-300'>
                                                      <Icon.tiktok className='lg:w-[16px] w-[12px] lg:h-[16px] h-[12px] text-slate-50' />
                                                </Link>
                                                <Link href='#' className='lg:w-[32px] w-[22px] lg:h-[32px] h-[22px] rounded-full bg-transparent border border-slate-200 flex items-center justify-center lg:hover:-translate-y-[2px] duration-300'>
                                                      <Icon.threads className='lg:w-[16px] w-[12px] lg:h-[16px] h-[12px] text-slate-50' />
                                                </Link>
                                          </div>
                                          <h2 className='font-normal lg:text-[15px] text-xs text-[#94A3B8] lg:text-start text-center'>
                                                Copyright © Amazing Ramadan 2025, all rights reserved
                                          </h2>
                                    </div>
                                    {/* Right */}
                                    <div className='w-full lg:col-span-4 col-span-10 grid grid-cols-3 lg:gap-6 gap-1 lg:my-0 my-[20px] order-1 lg:order-2'>
                                          <div className='w-full col-span-1 flex flex-col lg:gap-[14px] gap-3 items-center justify-center lg:items-start lg:justify-start'>
                                                <h2 className='font-bold lg:text-[20px] text-base text-slate-50'>
                                                      Company
                                                </h2>
                                                <Link href={"#"} className='block font-medium lg:text-base text-sm hover:opacity-50 duration-200 text-slate-50'>
                                                      About
                                                </Link>
                                                <Link href={"#"} className='block font-medium lg:text-base text-sm hover:opacity-50 duration-200 text-slate-50'>
                                                      Benefits
                                                </Link>
                                                <Link href={"#"} className='block font-medium lg:text-base text-sm hover:opacity-50 duration-200 text-slate-50'>
                                                      Project
                                                </Link>
                                          </div>
                                          <div className='w-full col-span-1 flex flex-col lg:gap-[14px] gap-3 items-center justify-center lg:items-start lg:justify-start'>
                                                <h2 className='font-bold lg:text-[20px] text-base text-slate-50'>
                                                      Support
                                                </h2>
                                                <Link href={"#"} className='block font-medium lg:text-base text-sm hover:opacity-50 duration-200 text-slate-50'>
                                                      Help
                                                </Link>
                                                <Link href={"#"} className='block font-medium lg:text-base text-sm hover:opacity-50 duration-200 text-slate-50'>
                                                      Finance
                                                </Link>
                                                <Link href={"#"} className='block font-medium lg:text-base text-sm hover:opacity-50 duration-200 text-slate-50'>
                                                      Website
                                                </Link>
                                                <Link href={"#"} className='block font-medium lg:text-base text-sm hover:opacity-50 duration-200 text-slate-50'>
                                                      Pricing
                                                </Link>
                                          </div>
                                          <div className='w-full col-span-1 flex flex-col lg:gap-[14px] gap-3 items-center justify-center lg:items-start lg:justify-start'>
                                                <h2 className='font-bold lg:text-[20px] text-base text-slate-50'>
                                                      Information
                                                </h2>
                                                <Link href={"#"} className='block font-medium lg:text-base text-sm hover:opacity-50 duration-200 text-slate-50'>
                                                      Blog
                                                </Link>
                                                <Link href={"#"} className='block font-medium lg:text-base text-sm hover:opacity-50 duration-200 text-slate-50'>
                                                      Contact
                                                </Link>
                                                <Link href={"#"} className='block font-medium lg:text-base text-sm hover:opacity-50 duration-200 text-slate-50'>
                                                      Faqs
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </footer>
            </>
      )
}
