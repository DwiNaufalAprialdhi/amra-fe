import React from 'react'
import Icon from '../Icon/Icon'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Peserta from './elements/Peserta';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Hero() {
      useEffect(() => {
            AOS.init({
                  duration: 1000, // Animation duration in milliseconds
                  once: true, // Whether animation should happen only once - while scrolling down
            });
      }, []);
      return (
            <>
                  <section className='container_section lg:pt-[170px] pt-[100px] lg:mb-[110px] mb-[100px] relative z-[2]'>
                        <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:items-center gap-[50px]'>
                              {/* Left */}
                              <div data-aos="fade-right" className='w-full col-span-1 flex flex-col lg:items-start lg:justify-start items-center justify-center lg:order-1 order-2'>
                                    <div className='w-full flex lg:flex-row flex-wrap items-center lg:justify-start justify-center mb-[14px] lg:mb-0'>
                                          <Peserta
                                                avatar1={'/assets/images/peserta-1.svg'}
                                                avatar2={'/assets/images/peserta-2.svg'}
                                                avatar3={'/assets/images/peserta-3.svg'}
                                          />
                                          <div className='w-max h-max py-[5px] px-[10px] rounded-full bg-[#7A2500]/50'>
                                                <h2 className='font-normal lg:text-[20px] text-sm text-slate-50'>
                                                      100rb++
                                                </h2>
                                          </div>
                                          <h2 className='font-normal lg:text-[20px] text-sm text-slate-50 ml-[14px]'>
                                                Peserta
                                          </h2>
                                    </div>
                                    <h2 className='font-baloo lg:text-start text-center font-bold lg:text-[64px] text-[48px] lg:leading-[70px] leading-[50px] mb-[14px] text-slate-50'>
                                          Amazing <span className='bg-clip-text text-transparent bg-gradient-to-r from-theme-orange to-theme-red'>Ramadan</span> Pulang Dengan Bahagia
                                    </h2>
                                    <p className='font-medium lg:text-start text-center lg:text-base text-sm lg:mb-[50px] mb-6 text-slate-50'>
                                          Lorem ipsum dolor sit amet consectetur. Consequat dictum convallis nisi integer. Proin congue ut felis est donec vitae. Varius elit varius aliquet in. Ut nulla nisi id enim morbi sit eget.
                                    </p>
                                    <div className='flex items-center gap-x-[14px]'>
                                          <button className='w-max h-max lg:py-[15px] py-3 lg:px-[30px] px-5 rounded-full flex items-center justify-center bg-theme-orange font-medium lg:text-sm text-xs hover:bg-opacity-80 duration-200 text-slate-50'>
                                                Daftar Sekarang - Gratis
                                          </button>
                                          <button className='w-max h-max lg:py-[15px] py-3 lg:px-[30px] px-5 rounded-full flex items-center justify-center gap-x-2 bg-transparent font-medium lg:text-sm text-xs hover:bg-opacity-80 duration-200 group text-slate-50'>
                                                <Icon.play className='w-[32px] h-[32px] group-hover:rotate-180 duration-500' />
                                                Tonton Video
                                          </button>
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos="fade-left" className='w-full h-max col-span-1 grid grid-cols-1 relative lg:order-2 order-1'>
                                    {/* Shadow */}
                                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:left-[60%] lg:-translate-x-0 lg:scale-[1000%] scale-[700%] box-shadow z-[1] opacity-90'></div>
                                    <Swiper
                                          autoplay={{
                                                delay: 3500,
                                                disableOnInteraction: false,
                                                reverseDirection: true, // Tambahkan ini untuk autoplay mundur
                                          }}
                                          loop={true}
                                          cardsEffect={{
                                                slideShadows: false,
                                          }}
                                          effect={'cards'}
                                          modules={[EffectCards, Autoplay]}
                                          className="hero-swiper w-full lg:max-w-[384px] md:max-w-[300px] max-w-[270px] mx-auto lg:translate-x-16 translate-x-0 col-span-1 relative z-[2] px-5 lg:px-0"
                                    >
                                          <SwiperSlide className='w-max'>
                                                <Link href={"#"} className='w-full block lg:h-[487px] h-[381px] rounded-[8px] overflow-hidden'>
                                                      <Image
                                                            src='/assets/images/kajian-1.svg'
                                                            alt='kajian'
                                                            width={384} height={487}
                                                            className='w-full h-full object-cover'
                                                      />
                                                </Link>
                                          </SwiperSlide>
                                          <SwiperSlide className='w-max'>
                                                <Link href={"#"} className='w-full block lg:h-[487px] h-[381px] rounded-[8px] overflow-hidden'>
                                                      <Image
                                                            src='/assets/images/kajian-2.svg'
                                                            alt='kajian'
                                                            width={384} height={487}
                                                            className='w-full h-full object-cover'
                                                      />
                                                </Link>
                                          </SwiperSlide>
                                          <SwiperSlide className='w-max'>
                                                <Link href={"#"} className='w-full block lg:h-[487px] h-[381px] rounded-[8px] overflow-hidden'>
                                                      <Image
                                                            src='/assets/images/kajian-3.svg'
                                                            alt='kajian'
                                                            width={384} height={487}
                                                            className='w-full h-full object-cover'
                                                      />
                                                </Link>
                                          </SwiperSlide>
                                    </Swiper>
                              </div>
                        </div>
                  </section>
            </>
      )
}
