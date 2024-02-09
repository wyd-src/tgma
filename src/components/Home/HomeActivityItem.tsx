import React, { useState } from 'react'
import { ArrowIcon, CinemaIcon, RestaurantIcon, ShopIcon, StarIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { IActivityCardProps } from '~/types/activity'
import ItemAction from './HomeActivityItemAction'

const HomeActivityItem: React.FC<IActivityCardProps> = ({
  activity,
  activities,
  from = '',
  onEdit,
  setActivities,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const activityIcon = {
    Restaurant: <RestaurantIcon tw="text-button-text-color" />,
    Shopping: <ShopIcon tw="text-button-text-color" />,
    cinema: <CinemaIcon tw="text-button-text-color" />,
  }
  const iconBgColor = {
    Restaurant: tw`bg-restaurant`,
    Shopping: tw`bg-shopping`,
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
            <ArrowIcon
              tw="stroke-link-color stroke-[1.5]"
              css={[
                showDetails
                  ? css`
                      transform: rotate(180deg);
                      transition: transform 0.3s ease-in-out;
                    `
                  : css`
                      transform: rotate(0deg);
                      transition: transform 0.3s ease-in-out;
                    `,
              ]}
            />
          </span>
        </button>
      </div>
      {activity.description.length && !showDetails && (
        <p tw="text-text-color">
          {activity.description.slice(0, 100)}
          {activity.description.length > 100 && '...'}
        </p>
      )}
      {showDetails && (
        <div
          css={[
            css`
              transition: all 0.3s ease-in-out;
              max-height: 1000px;
            `,
          ]}
        >
          <p tw="text-text-color" onClick={() => setShowDetails(!showDetails)}>
            {activity.description}
          </p>
          <span tw="text-subtitle-text-color text-xs">Suggested by {activity.suggested}</span>
          <ItemAction
            activity={activity}
            activities={activities}
            from={from}
            onEdit={onEdit}
            setActivities={setActivities}
          />
        </div>
      )}
    </div>
  )
}

export default HomeActivityItem
