import React, { SetStateAction, useCallback, useState } from 'react'
import { BookmarkIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { useStore } from '~/stores'
import { observer } from 'mobx-react-lite'
import { updateBookmark } from '~/services/api/profile'
import { IActivity } from '~/types/activity'
import WebApp from '@twa-dev/sdk'

const ActionBookmark = observer(function ActionBookmark({ activity }: { activity: IActivity }) {
  const { user } = useStore()
  const [bookmark, setBookmark] = useState<boolean>(activity.bookmark)

  const onButtonClick = async (buttonId: string) => {
    if (buttonId === 'cancel') return
    const action = bookmark ? 'unbookmark' : 'bookmark'
    await updateBookmark({ tgData: user.queryId, activityId: activity.id, action }).then(
      (res: { data: SetStateAction<IActivity> }) => {
        if (res) {
          setBookmark(!bookmark)
        }
      }
    )
  }

  const handleBookmark = useCallback(() => {
    const action = bookmark ? 'unbookmark' : 'bookmark'
    WebApp.showPopup(
      {
        title: 'Bookmark',
        message: `Do you want to ${action} this activity?`,
        buttons: [
          {
            id: 'Confirm',
            type: bookmark ? 'destructive' : 'default',
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
  }, [bookmark])
  return (
    <button
      tw="rounded-[10px] w-[40px] h-[40px] flex items-center justify-center"
      css={[bookmark ? tw`bg-button-color` : tw`bg-link-color-5`]}
      onClick={handleBookmark}
    >
      <BookmarkIcon css={[bookmark ? tw`stroke-text-color` : tw`stroke-link-color`]} />
    </button>
  )
})

export default ActionBookmark
