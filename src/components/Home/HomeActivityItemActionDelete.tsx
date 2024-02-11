import React, { SetStateAction, useCallback } from 'react'
import { RecycleIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { IActivity, IActivityResult } from '~/types/activity'
import { deleteActivity } from '~/services/api/profile'
import { useStore } from '~/stores'
import { observer } from 'mobx-react-lite'
import WebApp from '@twa-dev/sdk'
import lang from '~/lang/lang.json'

const ActionDelete = observer(function ActionDelete({
  activity,
  activities,
  setActivities,
}: {
  activity: IActivity
  activities: IActivityResult
  setActivities: (activity: IActivityResult) => void
}) {
  const { user, general } = useStore()
  const language = general.language

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
        title: lang.delete_activity_popup_title[language],
        message: lang.delete_activity_popup_text[language],
        buttons: [
          {
            id: 'delete',
            type: 'destructive',
            text: lang.delete[language],
          },
          {
            id: 'cancel',
            type: 'default',
            text: lang.cancel[language],
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
