import Image from 'next/image'
import React from 'react'

type PesertaProps = {
      avatar1: string
      avatar2: string
      avatar3: string
}

export default function Peserta(props: PesertaProps) {
      return (
            <>
                  <div className='w-max h-max flex items-center justify-start'>
                        <div className='w-[32px] h-[32px] rounded-full overflow-hidden flex items-center justify-center z-[1]'>
                              <Image
                                    src={props.avatar1}
                                    alt='group'
                                    width={32} height={32}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        <div className='w-[32px] h-[32px] rounded-full overflow-hidden flex items-center justify-center z-[2] -translate-x-2'>
                              <Image
                                    src={props.avatar2}
                                    alt='group'
                                    width={32} height={32}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        <div className='w-[32px] h-[32px] rounded-full overflow-hidden flex items-center justify-center z-[3] -translate-x-4'>
                              <Image
                                    src={props.avatar3}
                                    alt='group'
                                    width={32} height={32}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                  </div>
            </>
      )
}
