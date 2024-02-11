import React, { SetStateAction, useCallback, useState } from 'react'
import { BookmarkIcon } from '~/assets/icons/'
import tw, { css } from 'twin.macro'
import { useStore } from '~/stores'
import { observer } from 'mobx-react-lite'
import { updateBookmark } from '~/services/api/profile'
import { IActivity } from '~/types/activity'
import WebApp from '@twa-dev/sdk'
import lang from '~/lang/lang.json'

const ActionBookmark = observer(function ActionBookmark({ activity }: { activity: IActivity }) {
  const { user, general } = useStore()
  const language = general.language
  const [bookmark, setBookmark] = useState<boolean>(activity.is_bookmarked)

  const onButtonClick = async (buttonId: string) => {
    if (buttonId === 'cancel') return
    bookmarkAction()
  }

  const bookmarkAction = useCallback(async () => {
    const action = bookmark ? 'unbookmark' : 'bookmark'
    await updateBookmark({ tgData: user.queryId, activityId: activity.id, action }).then(
      (res: { data: SetStateAction<IActivity> }) => {
        if (res) {
          setBookmark(!bookmark)
        }
      }
    )
  }, [bookmark])

  const handleBookmark = useCallback(() => {
    WebApp.showPopup(
      {
        title: 'Saved',
        message: lang.saved_popup_text[language],
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
  }, [bookmark])

  return (
    <button
      tw="relative"
      onClick={general.currentPage === 'home' ? bookmarkAction : handleBookmark}
    >
      <span
        tw="rounded-[10px] w-[40px] h-[40px] bg-button-color  flex items-center justify-center transition-all"
        css={[!bookmark && tw`opacity-5`]}
      ></span>
      <BookmarkIcon
        tw="absolute top-[8px] right-[8px]"
        css={[bookmark ? tw`fill-button-text-color` : tw`stroke-link-color`]}
      />
    </button>
  )
})

export default ActionBookmark
