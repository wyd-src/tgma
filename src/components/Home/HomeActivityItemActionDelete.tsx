import React, { SetStateAction, useCallback } from 'react'
import { RecycleIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { IActivity, IActivityResult } from '~/types/activity'
import { deleteActivity } from '~/services/api/profile'
import { useStore } from '~/stores'
import { observer } from 'mobx-react-lite'
import WebApp from '@twa-dev/sdk'

const ActionDelete = observer(function ActionDelete({
  activity,
  activities,
  setActivities,
}: {
  activity: IActivity
  activities: IActivityResult
  setActivities: (activity: IActivityResult) => void
}) {
  const { user } = useStore()

  const onButtonClick = async (buttonId: string) => {
    if (buttonId === 'cancel') return
    await deleteActivity({ tgData: user.queryId, activityId: activity.id }).then(
      (res: { data: SetStateAction<IActivity> }) => {
        if (res) {
          setActivities({
            ...activities,
            items: activities.items.filter((item) => item.id !== activity.id),
          })
        }
      }
    )
  }

  const handleDelete = useCallback(() => {
    WebApp.showPopup(
      {
        title: 'Bookmark',
        message: `Do you want to Remove this activity?`,
        buttons: [
          {
            id: 'Confirm',
            type: 'destructive',
            text: 'Confirm',
          },
          {
            id: 'cancel',
            type: 'cancel',
          },
        ],
      },
      onButtonClick
    )
  }, [])

  return (
    <span
      tw="bg-destructive-text-color-5 rounded-[10px] w-[40px] h-[40px] flex items-center justify-center"
      onClick={handleDelete}
    >
      <RecycleIcon tw="fill-destructive-text-color" />
    </span>
  )
})

export default ActionDelete
