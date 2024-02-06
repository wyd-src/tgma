import React, { SetStateAction, useEffect } from 'react'
import tw from 'twin.macro'
import { ProfileIcon, StarIcon } from '~/assets/icons'
import { useCallback, useState } from 'react'
import { getProfile } from '~/services/api/profile'
import { observer } from 'mobx-react-lite'
import { useStore } from '~/stores'
import { IProfile } from '~/types/profile'

const ProfileDetails = observer(function ProfileDetails() {
  const { user } = useStore()
  const [profile, setProfile] = useState<IProfile>({})

  const fetchProfile = useCallback(async () => {
    await getProfile({ tgData: user.queryId }).then((res: { data: SetStateAction<IProfile> }) => {
      if (res) {
        setProfile(res.data)
      }
    })
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [])

  const fullName = `${profile?.first_name} ${profile?.last_name}`

  return (
    <div tw="flex gap-3">
      <span tw="w-[44px] h-[44px] bg-secondary-bg-color rounded-full flex items-center justify-center">
        {profile.photo_url ? (
          <img src={profile.photo_url} />
        ) : (
          <ProfileIcon tw="fill-button-text-color" />
        )}
      </span>
      <div tw="flex flex-col gap-1">
        <span tw="text-sm text-text-color">{fullName}</span>
        <span tw="flex items-center text-xs text-subtitle-text-color">
          <StarIcon tw="fill-rate" />
          &nbsp;5.0
        </span>
      </div>
    </div>
  )
})

export default ProfileDetails
