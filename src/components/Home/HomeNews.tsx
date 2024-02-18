import { observer } from 'mobx-react-lite'
import React from 'react'
import tw, { css } from 'twin.macro'
import { ArrowIcon, ChannelIcon } from '~/assets/icons'
import { useStore } from '~/stores'
import lang from '~/lang/lang.json'
export interface INews {
  title: string
  link: string
  Icon: JSX.Element
}

const HomeNews = observer(function HomeNews() {
  const { general } = useStore()
  const language = general.language
  const news: INews[] = [
    {
      title: lang.news_text[language],
      link: '',
      pic: <ChannelIcon tw="ml-[5px]" />,
    },
  ]

  return (
    <div tw="flex flex-col py-5 px-4 gap-2.5">
      <div tw="flex justify-between w-full text-sm">
        <span tw="text-section-header-text-color font-semibold">{lang.news[language]}</span>
      </div>
      {news.map((n, index) => (
        <div
          key={index}
          tw="flex w-full text-text-color h-max text-sm border-[1px] border-secondary-bg-color rounded-[8px] p-4"
        >
          <div tw="flex flex-col w-full " css={[n.Icon ? tw`gap-3` : tw`gap-[3px]`]}>
            <span dangerouslySetInnerHTML={{ __html: n.title }}></span>
            <button tw="text-button-color flex gap-1.5 items-center">
              {lang.details[language]} <ArrowIcon tw="-rotate-90 stroke-button-color stroke-1" />
            </button>
          </div>
          <img src="/telegram.png" tw="w-[40px] h-[40px]" />
        </div>
      ))}
    </div>
  )
})

export default HomeNews
