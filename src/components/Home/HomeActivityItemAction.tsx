import React, { useEffect, useRef, useState } from 'react'
import { EditIcon, MapIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import ActionBookmark from './HomeActivityItemActionBookmark'
import ActionRate from './HomeActivityItemActionRate'
import { IActivity, IActivityCardProps } from '~/types/activity'
import ActionDelete from './HomeActivityItemActionDelete'
import { observer } from 'mobx-react-lite'
import { useStore } from '~/stores'
import lang from '~/lang/lang.json'

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

const ItemAction = observer(function ItemAction({
  activity,
  activities,
  from,
  onEdit,
  setActivities,
}: IActivityCardProps) {
  const { general } = useStore()
  const [width, setWidth] = useState(0)
  const language = general.language
  const locationRef = useRef(null)

  useEffect(() => {
    setWidth(locationRef.current?.clientWidth + 24)
  }, [locationRef.current])

  return (
    <div tw="flex w-full text-sm justify-between mt-1">
      <button tw="relative flex items-center justify-center w-max text-link-color">
        <span
          tw="rounded-[10px] w-full h-[40px] bg-button-color opacity-5 flex items-center justify-center"
          css={[
            css`
              width: ${width}px;
            `,
          ]}
        ></span>
        <span
          tw="flex absolute w-max items-center"
          css={[!width && tw`invisible`]}
          ref={locationRef}
        >
          <MapIcon tw=" fill-link-color" /> &nbsp; {lang.get_location[language]}
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
})

export default ItemAction
