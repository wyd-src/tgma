import React, { useEffect, useRef, useState } from 'react'
import { ArrowIcon, CinemaIcon, RestaurantIcon, ShopIcon, StarIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { IActivityCardProps } from '~/types/activity'
import ItemAction from './HomeActivityItemAction'
import { CSSTransition } from 'react-transition-group'
import { observer } from 'mobx-react-lite'
import { useStore } from '~/stores'
import lang from '~/lang/lang.json'

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
  useEffect(() => {
    setShowDetails(isExpanded === activity.id)
  }, [isExpanded])

  const suggestedName = activity?.user?.first_name ?? activity?.user?.last_name
  const avgRate = (activity?.sum_of_votes / activity?.number_of_votes).toFixed(1)
  return (
    <div tw="flex flex-col gap-2 text-sm">
      <div
        tw="flex w-full justify-between"
        onClick={() => {
          setShowDetails(!showDetails), setIsExpanded(activity.id)
        }}
      >
        <div tw="flex gap-3">
          <span
            tw="rounded-full w-[44px] h-[44px] flex items-center justify-center"
            css={[iconBgColor[activity.category]]}
          >
            {activityIcon[activity.category]}
          </span>
          <div tw="flex flex-col">
            <div tw="flex  gap-2">
              <span tw="text-sm text-text-color font-semibold w-max text-ellipsis">
                {activity.title}
              </span>
              <span tw="flex text-subtitle-text-color h-max items-center relative bottom-[1px] text-xs">
                <StarIcon tw="fill-rate" />
                &nbsp;{parseFloat(avgRate) ? avgRate : 'n/a'}
              </span>
            </div>
            <span tw="text-subtitle-text-color">{activity.category}</span>
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
