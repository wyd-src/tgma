import React from 'react'
import { EditIcon, MapIcon, RecycleIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { IActivityCardProps } from './HomeActivityItem'
import ActionBookmark from './HomeActivityItemActionBookmark'
import ActionRate from './HomeActivityItemActionRate'

const OptionalAction = ({ activity, from, onEdit }) => {
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
      <span tw="bg-destructive-text-color-5 rounded-[10px] w-[40px] h-[40px] flex items-center justify-center">
        <RecycleIcon tw="fill-destructive-text-color" />
      </span>
    </div>
  )
}

const FeedAction = () => {
  return (
    <div tw="flex gap-2.5">
      <ActionBookmark />
      <ActionRate />
    </div>
  )
}

const ItemAction: React.FC<IActivityCardProps> = ({ activity, from, onEdit }) => {
  return (
    <div tw="flex w-full text-sm justify-between mt-1">
      <button tw="bg-link-color-5 rounded-[10px] p-2.5 pl-3 flex items-center justify-center text-link-color">
        <MapIcon tw="fill-link-color" /> &nbsp; Get Location
      </button>
      {from === 'bookmark' || from === 'profile' ? (
        <OptionalAction activity={activity} from={from} onEdit={onEdit} />
      ) : (
        <FeedAction />
      )}
    </div>
  )
}

export default ItemAction
