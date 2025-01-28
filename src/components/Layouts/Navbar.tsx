/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Icon from '../Icon/Icon'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
      const [isVisible, setIsVisible] = useState(true);
      const [lastScrollY, setLastScrollY] = useState(0);

      const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                  // Scroll ke bawah
                  setIsVisible(false);
            } else {
                  // Scroll ke atas
                  setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
      };

      useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, [lastScrollY]);

      useEffect(() => {
            AOS.init({
                  duration: 1000, // Animation duration in milliseconds
                  once: true, // Whether animation should happen only once - while scrolling down
            });
      }, []);

      return (
            <>
                  {/* Desktop */}
                  <nav data-aos="fade-down" className='hidden lg:block fixed w-full z-50 top-0 left-0 right-0 pt-5'>
                        <section className='container_section h-max rounded-full bg-black/80 backdrop-blur-sm grid grid-cols-2 p-[10px]'>
                              {/* Left */}
                              <div className='w-full col-span-1 flex items-center'>
                                    <Link href='/' className='w-[140px] h-max'>
                                          <Image
                                                src='/assets/logo/amazingramadan.svg'
                                                alt='logo'
                                                width={140} height={60}
                                                className='w-full h-auto object-cover'
                                          />
                                    </Link>
                                    <div className='flex items-center gap-x-[30px]'>
                                          <Link href='/' className='font-normal text-slate-50 text-sm hover:text-opacity-50 duration-200'>
                                                Home
                                          </Link>
                                          <Link href='#' className='font-normal text-slate-50 text-sm hover:text-opacity-50 duration-200'>
                                                Event
                                          </Link>
                                          <Link href='#' className='font-normal text-slate-50 text-sm hover:text-opacity-50 duration-200'>
                                                Donasi
                                          </Link>
                                          <Link href='#' className='font-normal text-slate-50 text-sm hover:text-opacity-50 duration-200'>
                                                Amal Harian
                                          </Link>
                                    </div>
                              </div>
                              {/* Right */}
                              <div className="w-full col-span-1 flex items-end justify-end gap-x-[14px]">
                                    <button className='w-[46px] h-[46px] rounded-full bg-[#2D1D03] flex items-center justify-center hover:bg-opacity-40 duration-200'>
                                          <Icon.search className='w-6 h-6 text-slate-50' />
                                    </button>
                                    <button className='w-max h-max py-[15px] px-[30px] rounded-full flex items-center justify-center bg-[#2D1D03] font-medium text-sm hover:bg-opacity-40 duration-200 text-slate-50'>
                                          Masuk
                                    </button>
                                    <button className='w-max h-max py-[15px] px-[30px] rounded-full flex items-center justify-center bg-theme-orange font-medium text-sm hover:bg-opacity-80 duration-200 text-slate-50'>
                                          Daftar Akun
                                    </button>
                              </div>
                        </section>
                  </nav>
                  {/* Mobile Top */}
                  <nav className='lg:hidden fixed w-full z-50 top-0 left-0 right-0 bg-[#2D1D03] backdrop-blur-sm'>
                        <section className='w-full md:max-w-[696px] max-w-none mx-auto py-[14px] md:px-0 px-5'>
                              {/* Search */}
                              <div className='w-full relative'>
                                    {/* Icon */}
                                    <div className='w-max h-max absolute top-1/2 -translate-y-1/2 left-[10px]'>
                                          <Icon.search className='w-6 h-6 text-slate-50' />
                                    </div>
                                    {/* Input */}
                                    <input type="text" className='w-full rounded-full outline-none py-[10px] pr-[10px] pl-10 bg-black/80 font-normal text-base' placeholder='Pencarian...' />
                              </div>
                        </section>
                  </nav>
                  {/* Mobile Bottom */}
                  <nav
                        className={`lg:hidden fixed w-full z-50 bottom-0 left-0 right-0 px-5 pb-5 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                              }`}
                  >
                        <section className="w-full h-max md:max-w-[696px] max-w-none mx-auto bg-white rounded-full grid grid-cols-5 gap-2 py-[10px] px-[14px] shadow-sm border border-[#2D1D03]/5">
                              <Link
                                    href="/"
                                    className="w-full col-span-1 flex flex-col items-center justify-center gap-y-2"
                              >
                                    <Icon.home className="w-6 h-6 mobile:w-5 mobile:h-5 text-slate-800" />
                                    <h2 className="font-normal text-[10px] mobile:text-[7px] text-center text-slate-800">Home</h2>
                              </Link>
                              <Link
                                    href="/"
                                    className="w-full col-span-1 flex flex-col items-center justify-center gap-y-2"
                              >
                                    <Icon.ticket className="w-6 h-6 mobile:w-5 mobile:h-5 text-slate-400" />
                                    <h2 className="font-normal text-[10px] mobile:text-[7px] text-center text-slate-400">Event</h2>
                              </Link>
                              <Link
                                    href="/"
                                    className="w-full col-span-1 flex flex-col items-center justify-center gap-y-2"
                              >
                                    <Icon.handHeart className="w-6 h-6 mobile:w-5 mobile:h-5 text-slate-400" />
                                    <h2 className="font-normal text-[10px] mobile:text-[7px] text-center text-slate-400">Donasi</h2>
                              </Link>
                              <Link
                                    href="/"
                                    className="w-full col-span-1 flex flex-col items-center justify-center gap-y-2"
                              >
                                    <Icon.calendar className="w-6 h-6 mobile:w-5 mobile:h-5 text-slate-400" />
                                    <h2 className="font-normal text-[10px] mobile:text-[7px] text-center text-slate-400">
                                          Amal Harian
                                    </h2>
                              </Link>
                              <Link
                                    href="/"
                                    className="w-full col-span-1 flex flex-col items-center justify-center gap-y-2"
                              >
                                    <Icon.account className="w-6 h-6 mobile:w-5 mobile:h-5 text-slate-400" />
                                    <h2 className="font-normal text-[10px] mobile:text-[7px] text-center text-slate-400">Akun</h2>
                              </Link>
                        </section>
                  </nav>
            </>
      )
}
