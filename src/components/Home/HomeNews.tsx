import React from 'react'
import tw from 'twin.macro'
import { ArrowIcon } from '~/assets/icons'

export interface INews {
  title: string
  link: string
  image: string
}

const HomeNews: React.FC = () => {
  const news: INews[] = [
    {
      title: 'Enable refreshing by joining to our channel',
      link: '',
      image: '/src/assets/images/news-1.png',
    },
    {
      title: 'Enable refreshing by joining to our channel',
      link: '',
      image: '/src/assets/images/news-2.png',
    },
    {
      title: 'Enable refreshing by joining to our channel',
      link: '',
      image: '',
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
          tw="flex w-full text-text-color gap-4 min-h-[100px] text-sm border-[1px] border-secondary-bg-color rounded-[8px] p-4"
        >
          <div tw="flex flex-col w-full gap-1 justify-between">
            <span>{n.title}</span>
            <button tw="text-button-color flex gap-1.5 items-center">
              Details <ArrowIcon tw="-rotate-90 stroke-button-color stroke-1" />
            </button>
          </div>
          {n.image && <img src={n.image} alt={n.title} tw="h-[50px] w-[45px]" />}
        </div>
      ))}
    </div>
  )
}

export default HomeNews
