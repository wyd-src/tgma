import React, { useState, useEffect } from 'react'
import {
  ArrowIcon,
  BookmarkIcon,
  CheckIcon,
  CinemaIcon,
  EditIcon,
  MapIcon,
  RecycleIcon,
  RestaurantIcon,
  ShopIcon,
  StarIcon,
} from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { Activity } from './HomeActivity'

interface ActivityCardProps {
  activity: Activity
}

const ItemAction = ({ activity, from, onEdit }) => {
  const [showRating, setShowRating] = useState<boolean>(false)
  const [rate, setRate] = useState<number>(-1)
  const [bookmark, setBookmark] = useState<boolean>(false)
  const rates = [false, false, false, false, false]
  return (
    <div tw="flex w-full text-sm justify-between mt-1">
      <button tw="bg-link-color-5 rounded-[10px] p-2.5 pl-3 flex items-center justify-center text-link-color">
        <MapIcon tw="fill-link-color" /> &nbsp; Get Location
      </button>
      {from === 'bookmark' || from === 'profile' ? (
        <div tw="flex gap-2">
          {from === 'profile' && (
            <span
              tw="bg-button-color-5 rounded-[10px] w-[40px] h-[40px] flex items-center justify-center"
              onClick={() => onEdit(activity)}
            >
              <EditIcon tw="fill-button-color" />
            </span>
          )}
          <span tw="bg-destructive-text-color-5 rounded-[10px] w-[40px] h-[40px] flex items-center justify-center">
            <RecycleIcon tw="fill-destructive-text-color" />
          </span>
        </div>
      ) : (
        <div tw="flex gap-2.5">
          <button
            tw="bg-link-color-5 rounded-[10px] w-[40px] h-[40px] flex items-center justify-center"
            onClick={() => setBookmark(!bookmark)}
          >
            <BookmarkIcon css={[bookmark ? tw`fill-link-color` : tw`stroke-link-color`]} />
          </button>
          {showRating ? (
            <div tw="flex items-center">
              {rates.map((x: boolean, index: number) => (
                <span key={index} onClick={() => setRate(index)}>
                  <StarIcon
                    tw="fill-secondary-bg-color h-[30px] w-[30px]"
                    css={[rate >= index && tw`fill-rate`]}
                  />
                </span>
              ))}
            </div>
          ) : (
            <button
              tw="bg-link-color-5 rounded-[10px] w-[40px] h-[40px] flex items-center justify-center"
              onClick={() => setShowRating(true)}
            >
              <CheckIcon tw="stroke-link-color" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

const HomeActivityItem: React.FC<ActivityCardProps> = ({ activity, from = '', onEdit }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const activityIcon = {
    food: <RestaurantIcon tw="text-button-text-color" />,
    shop: <ShopIcon tw="text-button-text-color" />,
    cinema: <CinemaIcon tw="text-button-text-color" />,
  }
  const iconBgColor = {
    food: tw`bg-restaurant`,
    shop: tw`bg-shopping`,
    cinema: tw`bg-cinema`,
  }
  return (
    <div tw="flex flex-col gap-2 text-sm">
      <div tw="flex w-full justify-between">
        <div tw="flex gap-3">
          <span
            tw="rounded-full w-[44px] h-[44px] flex items-center justify-center"
            css={[iconBgColor[activity.key]]}
          >
            {activityIcon[activity.key]}
          </span>
          <div tw="flex gap-2">
            <div tw="flex flex-col text-sm">
              <span tw="text-text-color font-semibold max-w-[140px] text-ellipsis">
                {activity.title}
              </span>
              <span tw="text-subtitle-text-color">{activity.category}</span>
            </div>
            <span tw="flex text-subtitle-text-color h-max items-center relative bottom-[2px]">
              <StarIcon tw="fill-rate" />
              &nbsp;{activity.rate}
            </span>
          </div>
        </div>
        <button
          tw="flex items-center h-max justify-center gap-2 text-link-color"
          onClick={() => setShowDetails(!showDetails)}
        >
          Details
          <span>
            <ArrowIcon tw="stroke-link-color stroke-[1.5]" />
          </span>
        </button>
      </div>
      {showDetails && (
        <>
          <p tw="text-section-header-text-color transition-all duration-75 ease-in-out">
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
