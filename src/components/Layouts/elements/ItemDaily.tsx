import Icon from '@/components/Icon/Icon'
import React from 'react'

type ItemDailyProps = {
      title: string
      className?: string
}

export default function ItemDaily(props: ItemDailyProps) {
      return (
            <>
                  <div className={`flex items-center lg:gap-x-[14px] gap-x-2 ${props.className}`}>
                        <div className='w-[48px] h-[48px] bg-[#7A2500]/20 rounded-full overflow-hidden flex items-center justify-center'>
                              <Icon.twoStars className='w-[32px] h-[32px]' />
                        </div>
                        <h2 className='font-medium lg:text-[18px] text-sm'>
                              {props.title}
                        </h2>
                  </div>
            </>
      )
}
