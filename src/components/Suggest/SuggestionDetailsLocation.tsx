import WebApp from '@twa-dev/sdk'
import { SetStateAction, useCallback, useRef } from 'react'
import tw, { css } from 'twin.macro'
import { MapIcon } from '~/assets/icons'
import Arrow from '~/assets/icons/Arrow'
import { IActivityParams, createUpdateActivity } from '~/services/api/activities'
import { useStore } from '~/stores'
import { IActivity } from '~/types/activity'
import lang from '~/lang/lang.json'
import { observer } from 'mobx-react-lite'

const SuggestionDetailsLocation = observer(function SuggestionDetailsLocation({
  suggestionItem = {},
  isEdit,
  onEditFinish,
}: {
  suggestionItem: IActivityParams
  isEdit: boolean
  onEditFinish?: () => void
}) {
  const { user, general } = useStore()
  const sendLocation = useRef(null)
  const sendWithoutLocation = useRef(null)
  const language = general.language
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
    const message =
      method === 'update'
        ? lang.update_activity_popup_text[language]
        : lang.create_activity_popup_text[language]
    const title =
      method === 'update'
        ? lang.update_activity_popup_title[language]
        : lang.create_activity_popup_title[language]
    WebApp.showPopup(
      {
        title,
        message,
        buttons: [
          {
            id: 'Confirm',
            type: 'default',
            text: lang.confirm[language],
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
    <div tw="flex flex-col gap-3 text-section-header-text-color text-sm">
      <span tw="font-semibold">{lang.location[language]}</span>
      <span>{lang.location_select_description[language]}</span>
      <div tw="flex flex-col gap-4 mt-3">
        <button tw="relative text-link-color text-sm flex justify-center items-center self-end font-medium">
          <span
            tw="bg-link-color opacity-5 h-[40px] rounded-[10px]"
            css={[
              css`
                width: ${sendLocation?.current?.clientWidth + 24}px;
              `,
            ]}
          ></span>
          <span ref={sendLocation} tw="flex absolute w-max items-center">
            <MapIcon tw="mr-3 fill-link-color" />
            {lang.send_location[language]}&nbsp; <Arrow tw="stroke-link-color -rotate-90" />
          </span>
        </button>
        <button
          tw="relative text-link-color text-sm flex justify-center items-center self-end font-medium"
          onClick={handleActivity}
        >
          <span
            tw="bg-link-color opacity-5 h-[40px] rounded-[10px]"
            css={[
              css`
                width: ${sendWithoutLocation?.current?.clientWidth + 24}px;
              `,
            ]}
          ></span>
          <span ref={sendWithoutLocation} tw="flex absolute w-max items-center">
            {lang.send_without_location[language]}&nbsp; <Arrow tw="stroke-link-color -rotate-90" />
          </span>
        </button>
      </div>
    </div>
  )
})

export default SuggestionDetailsLocation
