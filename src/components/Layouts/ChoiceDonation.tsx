import React from 'react'
import Icon from '../Icon/Icon'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CardChoiceDonation from './elements/CardChoiceDonation';

export default function ChoiceDonation() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden lg:mb-[124px] mb-[50px] relative z-[2]'>
                        {/* Heading */}
                        <section data-aos="fade-up" className='container_section flex items-center justify-between lg:mb-[30px] mb-6'>
                              <h2 className='font-baloo font-medium lg:text-[24px] text-base text-slate-50'>
                                    Pilihan donasi terfavorit
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
                                                slidesPerView: 1.2,
                                                spaceBetween: 20,
                                          },
                                          320: {
                                                slidesPerView: 1.2,
                                                spaceBetween: 20,
                                          },
                                          640: {
                                                slidesPerView: 2,
                                                spaceBetween: 24,
                                          },
                                          768: {
                                                slidesPerView: 2,
                                                spaceBetween: 24,
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
                                    modules={[Pagination]}
                                    className="tranding-swiper w-full col-span-1"
                              >
                                    {Array.from({ length: 7 }).map((_, idx) => (
                                          <SwiperSlide className='pb-10' key={idx}>
                                                <CardChoiceDonation
                                                      link={'#'}
                                                      image={'/assets/images/donation-1.jpg'}
                                                      logo={'/assets/logo/donation.svg'}
                                                      name={'Donation'}
                                                      time={'12 Day left'}
                                                      title={'Bantu Ifthar untuk Saudara Kita yang Membutuhkan'}
                                                      collected={30000}
                                                      target={100000}
                                                      amount={'Rp. 150.000.000'}
                                                />
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                        </section>
                  </main>
            </>
      )
}
