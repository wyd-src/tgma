import tw from 'twin.macro'
import lang from '~/lang/lang.json'
import { observer } from 'mobx-react-lite'
import { useStore } from '~/stores'
import { SetStateAction, useCallback } from 'react'
import WebApp from '@twa-dev/sdk'
import { setLocation } from '~/services/api/profile'
import { IProfile } from '~/types/profile'

const HomeActivityLocationAccess = observer(function HomeActivityLocationAccess() {
  const { user, general } = useStore()
  const language = general.language

  const onButtonClick = (buttonId: string) => {
    if (buttonId === 'cancel') return
    WebApp.close()
  }

  const locationPopup = useCallback(() => {
    WebApp.showPopup(
      {
        title: 'Share Location',
        message: lang.location_suggestion_confirm_popup_text[language],
        buttons: [
          {
            id: 'ok',
            type: 'default',
            text: lang.ok[language],
          },
        ],
      },
      onButtonClick
    )
  }, [])

  const handleLocation = useCallback(async () => {
    await setLocation({ tgData: user.queryId }).then((res: { data: SetStateAction<IProfile> }) => {
      if (res) {
        locationPopup()
      }
    })
  }, [])

  return (
    <div tw="flex flex-col relative h-[300px] items-center justify-center gap-2.5">
      <span tw="absolute bg-button-color opacity-5 rounded-[10px] w-full h-full z-0"></span>
      <img src="/location-access.png" width="135px" />
      <div tw="flex flex-col items-center justify-center gap-1 text-text-color">
        <span tw="font-bold">{lang.share_location[language]}</span>
        <p
          tw="self-center flex text-center text-sm [line-height: 120%]"
          dangerouslySetInnerHTML={{ __html: lang.share_location_text[language] }}
        ></p>
      </div>
      <button
        tw="bg-button-color text-button-text-color z-10 mt-[5px] w-[180px] text-sm font-medium rounded-[10px] py-2.5"
        onClick={handleLocation}
      >
        {lang.send_location[language]}
      </button>
    </div>
  )
})

export default HomeActivityLocationAccess
