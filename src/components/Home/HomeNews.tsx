import React from 'react'
import tw, { css } from 'twin.macro'
import { ArrowIcon, ChannelIcon, NewsIcon } from '~/assets/icons'

export interface INews {
  title: string
  link: string
  Icon: any
}

const HomeNews: React.FC = () => {
  const news: INews[] = [
    {
      title: 'Enable refreshing by joining to <br> our channel',
      link: '',
      Icon: <ChannelIcon />,
    },
    {
      title: 'Enable refreshing by joining to <br> our channel',
      link: '',
      Icon: <NewsIcon />,
    },
    {
      title: 'Enable refreshing by joining to our channel',
      link: '',
      Icon: '',
    },
  ]

  return (
    <div tw="flex flex-col py-5 px-4 gap-2.5">
      <div tw="flex justify-between w-full text-sm">
        <span tw="text-section-header-text-color font-semibold">News</span>
      </div>
      {news.map((n, index) => (
        <div
          key={index}
          tw="flex w-full text-text-color h-max text-sm border-[1px] border-secondary-bg-color rounded-[8px] p-4"
        >
          <div tw="flex flex-col w-full " css={[n.Icon ? tw`gap-3` : tw`gap-[3px]`]}>
            <span dangerouslySetInnerHTML={{ __html: n.title }}></span>
            <button tw="text-button-color flex gap-1.5 items-center">
              Details <ArrowIcon tw="-rotate-90 stroke-button-color stroke-1" />
            </button>
          </div>
          {n.Icon && n.Icon}
        </div>
      ))}
    </div>
  )
}

export default HomeNews
