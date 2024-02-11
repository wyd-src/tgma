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
import NoResult from '../Base/NoResult'
import ActivitySkeleton from '../Base/Skeleton/ActivitySkeleton'
import lang from '~/lang/lang.json'

const Profile = observer(function Profile() {
  const { user, general } = useStore()
  const [activities, setActivities] = useState<IActivityResult>(INITIAL_ACTIVITY_RESULT)
  const [edit, setEdit] = useState<IActivity>({})
  const [loading, setLoading] = useState<boolean>(true)

  const language = general.language

  const fetchMyActivites = useCallback(async () => {
    setLoading(true)
    await getMyActivities({ tgData: user.queryId })
      .then((res: { data: SetStateAction<IActivityResult> }) => {
        if (res) {
          setActivities(res.data)
          setLoading(false)
        }
      })
      .catch((error: any) => {
        setLoading(false)
      })
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

  const onEditFinish = useCallback(() => {
    setEdit({})
    fetchMyActivites()
  }, [edit])

  return (
    <div tw="flex flex-col p-4">
      {Object.keys(edit).length > 0 ? (
        <SuggestionDetails suggestion={edit} onEditFinish={onEditFinish} />
      ) : (
        <>
          <ProfileDetails />
          <span tw="h-[1px] w-full bg-secondary-bg-color my-5"></span>
          <span tw="text-sm font-semibold text-section-header-text-color mb-2.5">
            {lang.my_suggestion[language]}
          </span>
          {loading ? (
            <ActivitySkeleton count={2} />
          ) : (
            <>
              {activities.items.map((item, index) => (
                <div key={item.id} tw="flex flex-col">
                  <HomeActivityItem
                    activity={item}
                    activities={activities}
                    from="profile"
                    onEdit={onEdit}
                    setActivities={setActivities}
                  />
                  {index !== activities.items.length - 1 && (
                    <span tw="bg-secondary-bg-color h-[1px] my-5 w-full"></span>
                  )}
                </div>
              ))}
              {!activities.total && <NoResult text={lang.no_suggestion[language]} />}
            </>
          )}
        </>
      )}
    </div>
  )
})

export default Profile
