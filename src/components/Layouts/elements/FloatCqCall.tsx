import Icon from '@/components/Icon/Icon'
import Image from 'next/image'
import React from 'react'

export default function FloatCqCall() {
      return (
            <>
                  <div className='w-full lg:h-[380px] h-[350px] overflow-hidden rounded-[24px]'>
                        <Image
                              src='/assets/images/cqcall-1.jpg'
                              alt='cq-call'
                              width={543}
                              height={380}
                              className='w-full h-full object-cover'
                        />
                  </div>
                  {/* Float 1 */}
                  <div className='absolute lg:-top-5 lg:-left-5 -top-5 left-1 lg:w-[60px] w-[55px] lg:h-[60px] h-[55px] rounded-full bg-white/80 shadow-sm backdrop-blur-sm flex items-center justify-center z-[1] bounce1'>
                        <Icon.whatsapp className='w-[30px] h-[30px]' />
                  </div>
                  {/* Float 2 */}
                  <div className='absolute lg:-top-10 lg:left-12 -top-5 left-16 lg:w-[80px] lg:h-[80px] w-[75px] h-[75px] rounded-full bg-white/80 shadow-sm backdrop-blur-sm flex items-center justify-center z-[1] bounce2'>
                        <Icon.zoom className='w-[40px] h-[40px]' />
                  </div>
                  {/* Float 3 */}
                  <div className='absolute lg:top-10 lg:left-5 top-12 left-3 lg:w-[60px] w-[55px] lg:h-[60px] h-[55px] rounded-full bg-white/80 shadow-sm backdrop-blur-sm flex items-center justify-center z-[1] bounce3'>
                        <Icon.gmeet className='w-[30px] h-[30px]' />
                  </div>
                  {/* Float Box */}
                  <div className='absolute -bottom-[50px] left-[50%] -translate-x-[50%] w-max h-max lg:p-[14px] p-[10px] bg-[#F1F5F9]/80 lg:rounded-[10px] rounded-[10px] backdrop-blur-sm flex items-center lg:gap-6 gap-4 bounce4'>
                        <div className='lg:w-[75px] lg:h-[75px] w-[40px] h-[40px] overflow-hidden'>
                              <Image
                                    src='/assets/logo/cqcall.svg'
                                    alt='cq-call'
                                    width={75} height={75}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        <div className='w-full lg:max-w-[212px] max-w-[200px] flex flex-col gap-y-1'>
                              <h2 className='font-baloo font-bold lg:text-[20px] text-base'>
                                    Bimbingan Online
                              </h2>
                              <h2 className='font-normal lg:text-sm text-xs text-slate-600 leading-normal'>
                                    Bimbingan online Cinta Quran Call dengan berbagai macam platform
                              </h2>
                        </div>
                  </div>
            </>
      )
}
