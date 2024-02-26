import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowIcon,
  ArtIcon,
  GameIcon,
  NightlifeIcon,
  OthersIcon,
  OutdoorIcon,
  RestaurantIcon,
  ShopIcon,
  SportsIcon,
  StarIcon,
  WellnessIcon,
} from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { IActivityCardProps } from '~/types/activity'
import ItemAction from './HomeActivityItemAction'
import { CSSTransition } from 'react-transition-group'
import { observer } from 'mobx-react-lite'
import { useStore } from '~/stores'
import lang from '~/lang/lang.json'
import { CATEGORIES } from '~/utils/constants'

const IconConverter = (category: string) => {
  const Icon = {
    'Food and Drink': {
      Icon: <RestaurantIcon tw="text-button-text-color" />,
      bgColor: tw`bg-restaurant`,
    },
    shopping: { Icon: <ShopIcon tw="text-button-text-color" />, bgColor: tw`bg-shopping` },
    nightlife: { Icon: <NightlifeIcon tw="text-button-text-color" />, bgColor: tw`bg-nightlife` },
    outdoor: { Icon: <OutdoorIcon tw="text-button-text-color" />, bgColor: tw`bg-outdoor` },
    'art and culture': { Icon: <ArtIcon tw="text-button-text-color" />, bgColor: tw`bg-art` },
    sports: { Icon: <SportsIcon tw="text-button-text-color" />, bgColor: tw`bg-sport` },
    games: { Icon: <GameIcon tw="text-button-text-color" />, bgColor: tw`bg-game` },
    'wellness and spa': {
      Icon: <WellnessIcon tw="text-button-text-color" />,
      bgColor: tw`bg-wellness`,
    },
    other: { Icon: <OthersIcon tw="text-button-text-color" />, bgColor: tw`bg-other` },
  }
  return Icon[category]
}

const HomeActivityItem = observer(function HomeActivityItem({
  activity,
  activities,
  isExpanded,
  from = '',
  onEdit,
  setActivities,
  setIsExpanded,
}: IActivityCardProps) {
  const { general } = useStore()
  const [showDetails, setShowDetails] = useState<boolean>(isExpanded === activity.id)
  const language = general.language
  const nodeRef = useRef(null)
  const activityIcon = {}
  CATEGORIES.forEach((category) => {
    activityIcon[category] = IconConverter(category)
  })
  useEffect(() => {
    setShowDetails(isExpanded === activity.id)
  }, [isExpanded])

  const suggestedName = activity?.user?.first_name ?? activity?.user?.last_name
  const avgRate = (activity?.sum_of_votes / activity?.number_of_votes).toFixed(1)
  return (
    <div tw="flex flex-col gap-2 text-sm">
      <div
        tw="flex w-full justify-between gap-1.5"
        onClick={() => {
          setShowDetails(!showDetails), setIsExpanded && setIsExpanded(activity.id)
        }}
      >
        <div tw="flex gap-3">
          <span
            tw="rounded-full w-[44px] h-[44px] flex items-center justify-center"
            css={[activityIcon[activity.category]?.bgColor]}
          >
            {activityIcon[activity.category]?.Icon}
          </span>
          <div tw="flex flex-col">
            <div tw="flex gap-2">
              <span tw="text-sm text-text-color text-justify font-semibold max-w-[165px] flex-wrap">
                {activity.title}
              </span>
              <span tw="flex text-subtitle-text-color h-max items-center text-xs">
                <StarIcon tw="fill-rate" />
                &nbsp;{parseFloat(avgRate) ? avgRate : 'n/a'}
              </span>
            </div>
            <span tw="text-subtitle-text-color">{lang?.[activity.category]?.[language]}</span>
          </div>
        </div>
        <button tw="flex items-center h-max justify-center gap-2 text-link-color">
          {lang.details[language]}
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
        <p tw="text-text-color" onClick={() => setShowDetails(!showDetails)}>
          {activity.description}
        </p>
      )}

      <CSSTransition
        in={showDetails}
        nodeRef={nodeRef}
        timeout={500}
        classNames="vertical"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div ref={nodeRef}>
          <span tw="text-subtitle-text-color text-xs">
            {lang.suggested_by[language]} {suggestedName}
          </span>
          <ItemAction
            activity={activity}
            activities={activities}
            from={from}
            onEdit={onEdit}
            setActivities={setActivities}
          />
        </div>
      </CSSTransition>
    </div>
  )
})

export default HomeActivityItem
