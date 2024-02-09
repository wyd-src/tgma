import React, { SetStateAction, useCallback, useEffect, useState } from 'react'
import { RefreshIcon } from '~/assets/icons/'
import tw from 'twin.macro'
import HomeActivityItem from './HomeActivityItem'
import { getFeed } from '~/services/api/activities'
import { useStore } from '~/stores'
import { observer } from 'mobx-react-lite'
import { IActivity } from '~/types/activity'
import NoResult from '../Base/NoResult'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const HomeActivity = observer(function HomeActivity() {
  const [activities, setActivities] = useState<IActivity[]>([])
  const { user } = useStore()
  const [loading, setLoading] = useState<boolean>(false)

  const fetchActivites = useCallback(async (onClick = false) => {
    setLoading(onClick)
    await getFeed({ tgData: user.queryId }).then((res: { data: SetStateAction<IActivity[]> }) => {
      if (res) {
        setActivities(res.data)
        setLoading(false)
      }
    })
  }, [])

  useEffect(() => {
    fetchActivites()
  }, [])

  return (
    <div tw="flex flex-col py-5 px-4">
      <div tw="flex justify-between w-full text-sm mb-3">
        <span tw="text-section-header-text-color font-semibold">Today’s Activity Suggestion</span>
        <span onClick={() => fetchActivites(true)}>
          <RefreshIcon
            tw="relative left-1"
            css={[loading && tw`animate-spin duration-1000 ease-in-out`]}
          />
        </span>
      </div>
      {activities?.map((item, index) => (
        <div key={item.id} tw="flex flex-col">
          <HomeActivityItem activity={item} />
          {index !== activities.length - 1 && (
            <span tw="bg-secondary-bg-color h-[1px] my-5 w-full"></span>
          )}
        </div>
      ))}
      {!activities.length && <NoResult text="There are no suggestions available" />}
    </div>
  )
})

export default HomeActivity
