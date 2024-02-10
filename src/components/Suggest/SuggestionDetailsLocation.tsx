import WebApp from '@twa-dev/sdk'
import { SetStateAction, useCallback } from 'react'
import tw, { css } from 'twin.macro'
import { MapIcon } from '~/assets/icons'
import Arrow from '~/assets/icons/Arrow'
import { IActivityParams, createUpdateActivity } from '~/services/api/activities'
import { useStore } from '~/stores'
import { IActivity } from '~/types/activity'

export default function SuggestionDetailsLocation({
  suggestionItem = {},
  isEdit,
  onEditFinish,
}: {
  suggestionItem: IActivityParams
  isEdit: boolean
  onEditFinish?: () => void
}) {
  const { user, general } = useStore()
  const onButtonClick = async (buttonId: string) => {
    if (buttonId === 'cancel') return
    const method = isEdit ? 'update' : 'create'
    await createUpdateActivity({ tgData: user.queryId, params: suggestionItem, method }).then(
      (res: { data: SetStateAction<IActivity> }) => {
        if (res) {
          general.setPage('profile')
          onEditFinish()
        }
      }
    )
  }

  const handleActivity = useCallback(() => {
    const method = isEdit ? 'update' : 'create'
    WebApp.showPopup(
      {
        title: `${method.slice(0, 1).toUpperCase()}${method.slice(1)} Activity`,
        message: `Do you want to ${method} this activity?`,
        buttons: [
          {
            id: 'Confirm',
            type: 'default',
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
    <div tw="flex flex-col gap-3 text-section-header-text-color text-sm">
      <span tw="font-semibold">Location</span>
      <span>
        If the activity requires location, you can send it in the chat in the next step, otherwise
        you can skip and save the activity
      </span>
      <div tw="flex flex-col gap-4 mt-3">
        <button tw="text-link-color bg-link-color-5 gap-1 px-4 h-[40px] text-sm flex items-center justify-center rounded-[10px] self-end font-medium">
          <MapIcon tw="mr-3 fill-link-color" />
          Send Location&nbsp; <Arrow tw="stroke-link-color -rotate-90" />
        </button>
        <button
          tw="text-link-color bg-link-color-5 gap-1 px-4 h-[40px] text-sm flex items-center justify-center rounded-[10px] self-end font-medium"
          onClick={handleActivity}
        >
          Save Activity Without Location&nbsp; <Arrow tw="stroke-link-color -rotate-90" />
        </button>
      </div>
    </div>
  )
}
