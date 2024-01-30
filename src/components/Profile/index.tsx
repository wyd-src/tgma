import React from 'react'
import tw from 'twin.macro'
import { ProfileIcon, StarIcon } from '~/assets/icons'
import { Activity } from '../Home/HomeActivity'
import HomeActivityItem from '../Home/HomeActivityItem'
import { useCallback, useState } from 'react'
import SuggestionDetails from '../Suggest/SuggestionDetails'

const ProfileDetails = () => {
  return (
    <div tw="flex gap-3">
      <span tw="w-[44px] h-[44px] bg-secondary-bg-color rounded-full flex items-center justify-center">
        <ProfileIcon tw="fill-button-text-color" />
      </span>
      <div tw="flex flex-col gap-1">
        <span tw="text-sm text-text-color">Ehsan Nouri</span>
        <span tw="flex items-center text-xs text-subtitle-text-color">
          <StarIcon tw="fill-rate" />
          &nbsp;5.0
        </span>
      </div>
    </div>
  )
}
export default function Profile() {
  const [edit, setEdit] = useState<Activity>({})
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

  const onEdit = useCallback(
    (activity: Activity) => {
      setEdit(activity)
    },
    [edit]
  )
  return (
    <div tw="flex flex-col p-4">
      {Object.keys(edit).length > 0 ? (
        <SuggestionDetails suggestion={edit} />
      ) : (
        <>
          <ProfileDetails />
          <span tw="h-[1px] w-full bg-secondary-bg-color my-5"></span>
          <span tw="text-sm font-semibold text-section-header-text-color mb-2.5">
            My Suggestions
          </span>
          {activities.map((activity, index) => (
            <div key={activity.key} tw="flex flex-col">
              <HomeActivityItem activity={activity} from="profile" onEdit={onEdit} />
              {index !== activities.length - 1 && (
                <span tw="bg-secondary-bg-color h-[1px] my-5 w-full"></span>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  )
}
