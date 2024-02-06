import React, { useState } from 'react'
import { ArrowIcon, CinemaIcon, RestaurantIcon, ShopIcon, StarIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { IActivity } from '~/types/activity'
import ItemAction from './HomeActivityItemAction'

export interface IActivityCardProps {
  activity: IActivity
  from?: string
  onEdit?: (activity: IActivity) => void
}

const HomeActivityItem: React.FC<IActivityCardProps> = ({ activity, from = '', onEdit }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const activityIcon = {
    Restaurant: <RestaurantIcon tw="text-button-text-color" />,
    shop: <ShopIcon tw="text-button-text-color" />,
    cinema: <CinemaIcon tw="text-button-text-color" />,
  }
  const iconBgColor = {
    Restaurant: tw`bg-restaurant`,
    shop: tw`bg-shopping`,
    cinema: tw`bg-cinema`,
  }
  return (
    <div tw="flex flex-col gap-2 text-sm">
      <div tw="flex w-full justify-between" onClick={() => setShowDetails(!showDetails)}>
        <div tw="flex gap-3">
          <span
            tw="rounded-full w-[44px] h-[44px] flex items-center justify-center"
            css={[iconBgColor[activity.category]]}
          >
            {activityIcon[activity.category]}
          </span>
          <div tw="flex flex-col">
            <div tw="flex text-sm gap-2">
              <span tw="text-text-color font-semibold w-max text-ellipsis">{activity.title}</span>
              <span tw="flex text-subtitle-text-color h-max items-center relative bottom-[1px]">
                <StarIcon tw="fill-rate" />
                &nbsp;{activity.rate}
              </span>
            </div>
            <span tw="text-subtitle-text-color">{activity.category}</span>
          </div>
        </div>
        <button tw="flex items-center h-max justify-center gap-2 text-link-color">
          Details
          <span>
            <ArrowIcon tw="stroke-link-color stroke-[1.5]" />
          </span>
        </button>
      </div>
      {showDetails && (
        <>
          <p
            tw="text-text-color transition-all duration-75 ease-in-out"
            onClick={() => setShowDetails(!showDetails)}
          >
            {activity.description}
          </p>
          <span tw="text-subtitle-text-color text-xs">Suggested by {activity.suggested}</span>
          <ItemAction activity={activity} from={from} onEdit={onEdit} />
        </>
      )}
    </div>
  )
}

export default HomeActivityItem
