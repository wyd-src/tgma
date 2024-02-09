import React from 'react'
import { HomeIcon, BookmarkIcon, AddIcon, ProfileIcon } from '~/assets/icons'
import tw, { css } from 'twin.macro'
import { useStore } from '~/stores'
import { TPage } from '~/stores/GeneralStore'
import { observer } from 'mobx-react-lite'

const Header = observer(function Header() {
  const { general } = useStore()
  const items = [
    {
      title: 'Home',
      key: 'home',
      Icon: <HomeIcon />,
    },
    {
      title: 'Suggest',
      key: 'suggest',
      Icon: <AddIcon />,
    },
    {
      title: 'Bookmarks',
      key: 'bookmarks',
      Icon: <BookmarkIcon tw="fill-button-text-color" />,
    },

    {
      title: 'Profile',
      key: 'profile',
      Icon: <ProfileIcon />,
    },
  ] as {
    title: string
    key: TPage
    Icon: JSX.Element
  }[]

  return (
    <div tw="flex flex-col">
      <div tw="flex w-full justify-evenly items-center pt-5 px-2 font-semibold text-button-color">
        {items.map((x) => (
          <div
            key={x.key}
            tw="flex flex-col items-center justify-center gap-1 rounded-[1px] w-[70px] pb-5 border-b-2 border-transparent"
            css={[general.currentPage === x.key && tw`border-b-2 border-button-color`]}
            onClick={() => general.setPage(x.key)}
          >
            <span tw="flex justify-center items-center rounded-full bg-button-color text-sm w-[34px] h-[34px]">
              {x.Icon}
            </span>
            <span tw="text-sm">{x.title}</span>
          </div>
        ))}
      </div>
      <span tw="bg-secondary-bg-color h-0.5"></span>
    </div>
  )
})

export default Header
