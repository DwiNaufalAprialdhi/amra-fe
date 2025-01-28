import Link from 'next/link'
import React from 'react'
import Icon from '../Icon/Icon'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CardTranding from './elements/CardTranding';

export default function Tranding() {
      return (
            <>
                  <main className='w-full h-auto lg:mb-[100px] mb-[50px] overflow-hidden relative z-[2]'>
                        {/* Heading */}
                        <section data-aos="fade-up" className='container_section flex items-center justify-between lg:mb-[30px] mb-6'>
                              <h2 className='font-baloo font-medium lg:text-[24px] text-base text-slate-50'>
                                    Trending Now
                              </h2>
                              <Link href={"#"} className='flex items-center gap-x-2 group'>
                                    <h2 className='font-baloo font-medium lg:text-base text-sm text-slate-50'>
                                          See More
                                    </h2>
                                    <Icon.arrowRight className='lg:w-[24px] lg:h-[24px] w-4 h-4 text-slate-50 group-hover:-translate-x-[2px] duration-300' />
                              </Link>
                        </section>
                        {/* Body */}
                        <section data-aos="fade-up" className='container_section_slider grid grid-cols-1'>
                              <Swiper
                                    loop={true}
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                          clickable: true,
                                    }}
                                    breakpoints={{
                                          0: {
                                                slidesPerView: 1.6,
                                                spaceBetween: 20,
                                          },
                                          320: {
                                                slidesPerView: 1.6,
                                                spaceBetween: 20,
                                          },
                                          640: {
                                                slidesPerView: 3,
                                                spaceBetween: 24,
                                          },
                                          768: {
                                                slidesPerView: 3,
                                                spaceBetween: 24,
                                          },
                                          1024: {
                                                slidesPerView: 5,
                                                spaceBetween: 24,
                                          },
                                          1280: {
                                                slidesPerView: 5,
                                                spaceBetween: 24,
                                          },
                                    }}
                                    modules={[Pagination]}
                                    className="tranding-swiper w-full col-span-1"
                              >
                                    {Array.from({ length: 7 }).map((_, idx) => (
                                          <SwiperSlide className='pb-10' key={idx}>
                                                <CardTranding
                                                      link={'#'}
                                                      image={'/assets/images/kajian-1.svg'}
                                                      title={'Inspiring Ramadhan Series 2025 untuk Keluarga Bahagia'}
                                                      category={'Ramadan Series'}
                                                />
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                        </section>
                  </main>
            </>
      )
}
