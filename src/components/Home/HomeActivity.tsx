import React from 'react'
import { RefreshIcon } from '~/assets/icons/'
import tw from 'twin.macro'
import HomeActivityItem from './HomeActivityItem'

export interface Activity {
  key: string
  title: string
  description: string
  category: string
  rate: number
  suggested: string
  location: string
}

const HomeActivity: React.FC = () => {
  const activities: Activity[] = [
    {
      key: 'food',
      title: 'Zula Burgur',
      description:
        'A cozy dining haven offering a fusion of local and international cuisines, where each dish tells a story of flavor and tradition, crafted with the freshest ingredients and a touch of home-cooked warmth',
      category: 'Restaurant',
      rate: 4.5,
      suggested: 'Angelina',
      location: 'test',
    },
    {
      key: 'shop',
      title: 'Metropol AVM',
      description:
        'A captivating escape into the world of film, where cutting-edge technology meets',
      category: 'Shopping',
      rate: 4.2,
      suggested: 'Akbar',
      location: 'test',
    },
    {
      key: 'cinema',
      title: 'Akasya Cinemaximum',
      description:
        'A captivating escape into the world of film, where cutting-edge technology meets compelling storytelling in a comfortable, immersive viewing environment.',
      category: 'Cinema',
      rate: 5.0,
      suggested: 'Ehsan',
      location: 'test',
    },
  ]

  return (
    <div tw="flex flex-col py-5 px-4">
      <div tw="flex justify-between w-full text-sm mb-3">
        <span tw="text-section-header-text-color font-semibold">Today’s Activity Suggestion</span>
        <RefreshIcon tw="relative left-1" />
      </div>
      {activities.map((activity, index) => (
        <div key={activity.key} tw="flex flex-col">
          <HomeActivityItem activity={activity} />
          {index !== activities.length - 1 && (
            <span tw="bg-secondary-bg-color h-[1px] my-5 w-full"></span>
          )}
        </div>
      ))}
    </div>
  )
}

export default HomeActivity
