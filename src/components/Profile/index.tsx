import React, { SetStateAction, useEffect } from 'react'
import tw from 'twin.macro'
import HomeActivityItem from '../Home/HomeActivityItem'
import { useCallback, useState } from 'react'
import SuggestionDetails from '../Suggest/SuggestionDetails'
import { IActivity, IActivityResult } from '~/types/activity'
import { getMyActivities } from '~/services/api/profile'
import { observer } from 'mobx-react-lite'
import { useStore } from '~/stores'
import { INITIAL_ACTIVITY_RESULT } from '~/utils/constants'
import ProfileDetails from './ProfileDetails'

const Profile = observer(function Profile() {
  const { user } = useStore()
  const [activities, setActivities] = useState<IActivityResult>(INITIAL_ACTIVITY_RESULT)
  const [edit, setEdit] = useState<IActivity>({})

  const fetchMyActivites = useCallback(async () => {
    await getMyActivities({ tgData: user.queryId }).then(
      (res: { data: SetStateAction<IActivityResult> }) => {
        if (res) {
          setActivities(res.data)
        }
      }
    )
  }, [])

  useEffect(() => {
    fetchMyActivites()
  }, [])

  const onEdit = useCallback(
    (activity: IActivity) => {
      setEdit(activity)
    },
    [edit]
  )
  return (
    <div tw="flex flex-col p-4">
      {Object.keys(edit).length > 0 ? (
        <SuggestionDetails suggestion={edit} />
      ) : (
        <>
          <ProfileDetails />
          <span tw="h-[1px] w-full bg-secondary-bg-color my-5"></span>
          <span tw="text-sm font-semibold text-section-header-text-color mb-2.5">
            My Suggestions
          </span>
          {activities.items.map((item, index) => (
            <div key={item.id} tw="flex flex-col">
              <HomeActivityItem activity={item} from="profile" onEdit={onEdit} />
              {index !== activities.items.length - 1 && (
                <span tw="bg-secondary-bg-color h-[1px] my-5 w-full"></span>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  )
})

export default Profile
