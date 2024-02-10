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
        <span
          tw="bg-button-color-5 rounded-[10px] w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => onEdit(activity)}
        >
          <EditIcon tw="fill-button-color" />
        </span>
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
      <button tw="bg-link-color-5 rounded-[10px] p-2.5 pl-3 flex items-center justify-center text-link-color">
        <MapIcon tw="fill-link-color" /> &nbsp; Get Location
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
