import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Icon from '../Icon/Icon';
import Image from 'next/image';

export default function LeaderBoard() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative z-[2] lg:mb-[150px] mb-[50px]'>
                        <section className='container_section flex flex-col'>
                              {/* Head Title */}
                              <div data-aos="fade-up" className='flex flex-col lg:items-start lg:justify-start items-center justify-center gap-y-2 mb-6'>
                                    <h2 className='font-baloo font-semibold lg:text-[24px] lg:leading-[24px] text-base leading-4 capitalize lg:text-start text-center'>
                                          LEADERBOARD
                                    </h2>
                                    <p className='font-normal lg:text-base text-sm text-slate-600 lg:text-start text-center'>
                                          Peringkat donasi terbanyak selama periode Ramadan 2025
                                    </p>
                              </div>
                              {/* Podium */}
                              <div data-aos="fade-up" className='w-full grid grid-cols-1 mb-6'>
                                    <Swiper
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 2.3,
                                                      spaceBetween: 14,
                                                },
                                                320: {
                                                      slidesPerView: 2.3,
                                                      spaceBetween: 14,
                                                },
                                                640: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 14,
                                                },
                                                768: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 14,
                                                },
                                                1024: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 24,
                                                },
                                                1280: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          className="w-full col-span-1"
                                    >
                                          <SwiperSlide className='pt-[30px]'>
                                                <div className='w-full h-auto flex flex-col relative bg-gradient-to-b from-transparent to-[#FFE26D] rounded-[16px] py-[50px] px-6 pb-6'>
                                                      {/* Icon */}
                                                      <div className='w-max h-max absolute -top-[30px] left-1/2 -translate-x-1/2'>
                                                            <Icon.champion className='w-[60px] h-[60px]' />
                                                      </div>
                                                      {/* Peserta */}
                                                      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-2 lg:mb-[50px] mb-6">
                                                            <div className='w-[32px] h-[32px] rounded-full overflow-hidden'>
                                                                  <Image
                                                                        src='/assets/images/peserta-1.svg'
                                                                        alt='avatar'
                                                                        width={32} height={32}
                                                                        className='w-full h-full object-cover'
                                                                  />
                                                            </div>
                                                            <h2 className='font-semibold lg:text-[24px] text-base'>
                                                                  Alpha
                                                            </h2>
                                                      </div>
                                                      {/* Update & Jumlah */}
                                                      <div className='w-full grid lg:grid-cols-2 grid-cols-1'>
                                                            <div className='hidden w-full col-span-1 lg:flex flex-col gap-y-1'>
                                                                  <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                                        Update
                                                                  </h2>
                                                                  <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                                        14/01/2025, 20:22:00
                                                                  </h2>
                                                            </div>
                                                            <div className='w-full col-span-1 flex flex-col lg:items-end lg:justify-end items-center justify-center gap-y-1'>
                                                                  <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                                        Jumlah
                                                                  </h2>
                                                                  <h2 className='font-medium lg:text-base text-xs text-slate-600'>
                                                                        Rp. 250.000.000
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide className='pt-[30px]'>
                                                <div className='w-full h-auto flex flex-col relative bg-gradient-to-b from-transparent to-[#E9E9E9] rounded-[16px] py-[50px] px-6 pb-6'>
                                                      {/* Icon */}
                                                      <div className='w-max h-max absolute -top-[30px] left-1/2 -translate-x-1/2'>
                                                            <Icon.runnerup className='w-[60px] h-[60px]' />
                                                      </div>
                                                      {/* Peserta */}
                                                      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-2 lg:mb-[50px] mb-6">
                                                            <div className='w-[32px] h-[32px] rounded-full overflow-hidden'>
                                                                  <Image
                                                                        src='/assets/images/peserta-2.svg'
                                                                        alt='avatar'
                                                                        width={32} height={32}
                                                                        className='w-full h-full object-cover'
                                                                  />
                                                            </div>
                                                            <h2 className='font-semibold lg:text-[24px] text-base'>
                                                                  Joy
                                                            </h2>
                                                      </div>
                                                      {/* Update & Jumlah */}
                                                      <div className='w-full grid lg:grid-cols-2 grid-cols-1'>
                                                            <div className='hidden w-full col-span-1 lg:flex flex-col gap-y-1'>
                                                                  <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                                        Update
                                                                  </h2>
                                                                  <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                                        14/01/2025, 20:22:00
                                                                  </h2>
                                                            </div>
                                                            <div className='w-full col-span-1 flex flex-col lg:items-end lg:justify-end items-center justify-center gap-y-1'>
                                                                  <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                                        Jumlah
                                                                  </h2>
                                                                  <h2 className='font-medium lg:text-base text-xs text-slate-600'>
                                                                        Rp. 100.000.000
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide className='pt-[30px]'>
                                                <div className='w-full h-auto flex flex-col relative bg-gradient-to-b from-transparent to-[#FFDBB0] rounded-[16px] py-[50px] px-6 pb-6'>
                                                      {/* Icon */}
                                                      <div className='w-max h-max absolute -top-[30px] left-1/2 -translate-x-1/2'>
                                                            <Icon.third className='w-[60px] h-[60px]' />
                                                      </div>
                                                      {/* Peserta */}
                                                      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-2 lg:mb-[50px] mb-6">
                                                            <div className='w-[32px] h-[32px] rounded-full overflow-hidden'>
                                                                  <Image
                                                                        src='/assets/images/peserta-3.svg'
                                                                        alt='avatar'
                                                                        width={32} height={32}
                                                                        className='w-full h-full object-cover'
                                                                  />
                                                            </div>
                                                            <h2 className='font-semibold lg:text-[24px] text-base'>
                                                                  Harith
                                                            </h2>
                                                      </div>
                                                      {/* Update & Jumlah */}
                                                      <div className='w-full grid lg:grid-cols-2 grid-cols-1'>
                                                            <div className='hidden w-full col-span-1 lg:flex flex-col gap-y-1'>
                                                                  <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                                        Update
                                                                  </h2>
                                                                  <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                                        14/01/2025, 20:22:00
                                                                  </h2>
                                                            </div>
                                                            <div className='w-full col-span-1 flex flex-col lg:items-end lg:justify-end items-center justify-center gap-y-1'>
                                                                  <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                                        Jumlah
                                                                  </h2>
                                                                  <h2 className='font-medium lg:text-base text-xs text-slate-600'>
                                                                        Rp. 24.000.000
                                                                  </h2>
                                                            </div>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    </Swiper>
                              </div>
                              {/* Leaderboard */}
                              <div className='w-full h-auto flex flex-col gap-[14px]'>
                                    {/* Head */}
                                    <div data-aos="fade-up" className='w-full grid lg:grid-cols-3 grid-cols-2 bg-slate-200 lg:rounded-[16px] rounded-[10px] p-5'>
                                          <div className='w-full col-span-1 grid grid-cols-2'>
                                                <h2 className='lg:ml-[55px] ml-0 w-full col-span-1 font-normal lg:text-base text-sm text-slate-600'>
                                                      Nama
                                                </h2>
                                          </div>
                                          <div className='hidden lg:block w-full col-span-1'>
                                                <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                      Update
                                                </h2>
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                      Jumlah
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Row */}
                                    <div data-aos="fade-up" className='w-full grid lg:grid-cols-3 grid-cols-2 items-center bg-slate-100 lg:rounded-[16px] rounded-[10px] p-5'>
                                          <div className='w-full col-span-1 flex items-center lg:gap-x-6 gap-x-[14px]'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-slate-200 flex items-center justify-center'>
                                                      <h2 className='font-normal lg:text-base text-sm text-slate-800'>
                                                            4
                                                      </h2>
                                                </div>
                                                <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                      Dwi Naufal
                                                </h2>
                                          </div>
                                          <div className='hidden lg:block w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      14/01/2025, 20:22:00
                                                </h2>
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      Rp. 20.000.000
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Row */}
                                    <div data-aos="fade-up" className='w-full grid lg:grid-cols-3 grid-cols-2 items-center bg-slate-100 lg:rounded-[16px] rounded-[10px] p-5'>
                                          <div className='w-full col-span-1 flex items-center lg:gap-x-6 gap-x-[14px]'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-slate-200 flex items-center justify-center'>
                                                      <h2 className='font-normal lg:text-base text-sm text-slate-800'>
                                                            5
                                                      </h2>
                                                </div>
                                                <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                      Dwi Naufal
                                                </h2>
                                          </div>
                                          <div className='hidden lg:block w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      14/01/2025, 20:22:00
                                                </h2>
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      Rp. 20.000.000
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Row */}
                                    <div data-aos="fade-up" className='w-full grid lg:grid-cols-3 grid-cols-2 items-center bg-slate-100 lg:rounded-[16px] rounded-[10px] p-5'>
                                          <div className='w-full col-span-1 flex items-center lg:gap-x-6 gap-x-[14px]'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-slate-200 flex items-center justify-center'>
                                                      <h2 className='font-normal lg:text-base text-sm text-slate-800'>
                                                            6
                                                      </h2>
                                                </div>
                                                <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                      Dwi Naufal
                                                </h2>
                                          </div>
                                          <div className='hidden lg:block w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      14/01/2025, 20:22:00
                                                </h2>
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      Rp. 20.000.000
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Row */}
                                    <div data-aos="fade-up" className='w-full grid lg:grid-cols-3 grid-cols-2 items-center bg-slate-100 lg:rounded-[16px] rounded-[10px] p-5'>
                                          <div className='w-full col-span-1 flex items-center lg:gap-x-6 gap-x-[14px]'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-slate-200 flex items-center justify-center'>
                                                      <h2 className='font-normal lg:text-base text-sm text-slate-800'>
                                                            7
                                                      </h2>
                                                </div>
                                                <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                      Dwi Naufal
                                                </h2>
                                          </div>
                                          <div className='hidden lg:block w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      14/01/2025, 20:22:00
                                                </h2>
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      Rp. 20.000.000
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Row */}
                                    <div data-aos="fade-up" className='w-full grid lg:grid-cols-3 grid-cols-2 items-center bg-slate-100 lg:rounded-[16px] rounded-[10px] p-5'>
                                          <div className='w-full col-span-1 flex items-center lg:gap-x-6 gap-x-[14px]'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-slate-200 flex items-center justify-center'>
                                                      <h2 className='font-normal lg:text-base text-sm text-slate-800'>
                                                            8
                                                      </h2>
                                                </div>
                                                <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                      Dwi Naufal
                                                </h2>
                                          </div>
                                          <div className='hidden lg:block w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      14/01/2025, 20:22:00
                                                </h2>
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      Rp. 20.000.000
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Row */}
                                    <div data-aos="fade-up" className='w-full grid lg:grid-cols-3 grid-cols-2 items-center bg-slate-100 lg:rounded-[16px] rounded-[10px] p-5'>
                                          <div className='w-full col-span-1 flex items-center lg:gap-x-6 gap-x-[14px]'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-slate-200 flex items-center justify-center'>
                                                      <h2 className='font-normal lg:text-base text-sm text-slate-800'>
                                                            9
                                                      </h2>
                                                </div>
                                                <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                      Dwi Naufal
                                                </h2>
                                          </div>
                                          <div className='hidden lg:block w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      14/01/2025, 20:22:00
                                                </h2>
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      Rp. 20.000.000
                                                </h2>
                                          </div>
                                    </div>
                                    {/* Row */}
                                    <div data-aos="fade-up" className='w-full grid lg:grid-cols-3 grid-cols-2 items-center bg-slate-100 lg:rounded-[16px] rounded-[10px] p-5'>
                                          <div className='w-full col-span-1 flex items-center lg:gap-x-6 gap-x-[14px]'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-slate-200 flex items-center justify-center'>
                                                      <h2 className='font-normal lg:text-base text-sm text-slate-800'>
                                                            10
                                                      </h2>
                                                </div>
                                                <h2 className='font-normal lg:text-base text-sm text-slate-600'>
                                                      Dwi Naufal
                                                </h2>
                                          </div>
                                          <div className='hidden lg:block w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      14/01/2025, 20:22:00
                                                </h2>
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <h2 className='font-medium lg:text-base text-sm text-slate-600'>
                                                      Rp. 20.000.000
                                                </h2>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
