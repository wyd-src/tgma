import React from 'react'
import { EditIcon, MapIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import ActionBookmark from './HomeActivityItemActionBookmark'
import ActionRate from './HomeActivityItemActionRate'
import { IActivity, IActivityCardProps } from '~/types/activity'
import ActionDelete from './HomeActivityItemActionDelete'

const OptionalAction: React.FC<IActivityCardProps> = ({
  activity,
  activities,
  from,
  onEdit,
  setActivities,
}) => {
  return (
    <div tw="flex gap-2">
      {from === 'profile' && (
        <button tw="relative" onClick={() => onEdit(activity)}>
          <span tw="rounded-[10px] w-[40px] h-[40px] bg-button-color opacity-5 flex items-center justify-center transition-all"></span>
          <EditIcon tw="absolute top-[8px] left-[8px] fill-button-color" />
        </button>
      )}
      <ActionDelete activity={activity} activities={activities} setActivities={setActivities} />
    </div>
  )
}

const FeedAction = ({ activity, from }: { activity: IActivity; from: string }) => {
  return (
    <div tw="flex gap-2.5">
      <ActionBookmark activity={activity} />
      {from !== 'bookmark' && <ActionRate activityId={activity.id} vote={activity.rate} />}
    </div>
  )
}

const ItemAction: React.FC<IActivityCardProps> = ({
  activity,
  activities,
  from,
  onEdit,
  setActivities,
}) => {
  return (
    <div tw="flex w-full text-sm justify-between mt-1">
      <button tw="relative flex items-center justify-center text-link-color">
        <span tw="rounded-[10px] w-[128px] h-[40px]  bg-button-color opacity-5 flex items-center justify-center transition-all"></span>
        <span tw="flex absolute w-max items-center">
          <MapIcon tw=" fill-link-color" /> &nbsp; Get Location
        </span>
      </button>
      {from === 'profile' ? (
        <OptionalAction
          activity={activity}
          activities={activities}
          from={from}
          onEdit={onEdit}
          setActivities={setActivities}
        />
      ) : (
        <FeedAction activity={activity} from={from} />
      )}
    </div>
  )
}

export default ItemAction
