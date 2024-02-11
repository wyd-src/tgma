import React, { SetStateAction, useCallback, useEffect, useState } from 'react'
import { RefreshIcon } from '~/assets/icons/'
import tw from 'twin.macro'
import HomeActivityItem from './HomeActivityItem'
import { getFeed } from '~/services/api/activities'
import { useStore } from '~/stores'
import { observer } from 'mobx-react-lite'
import { IActivity } from '~/types/activity'
import NoResult from '../Base/NoResult'
import ActivitySkeleton from '../Base/Skeleton/ActivitySkeleton'
import lang from '~/lang/lang.json'

const HomeActivity = observer(function HomeActivity() {
  const { user, general } = useStore()
  const [activities, setActivities] = useState<IActivity[]>([])
  const [isExpanded, setIsExpanded] = useState<number>(0)
  const [refreshLoading, setRefreshLoading] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const language = general.language

  const fetchActivites = useCallback(async (onClick = false) => {
    setRefreshLoading(onClick)
    setLoading(true)
    await getFeed({ tgData: user.queryId, onRefresh: onClick })
      .then((res: { data: SetStateAction<IActivity[]> }) => {
        if (res) {
          setActivities(res.data)
          setIsExpanded(res.data[0]?.id || 0)
          setRefreshLoading(false)
          setLoading(false)
        }
      })
      .catch((error: any) => {
        setLoading(false)
        setRefreshLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchActivites()
  }, [])

  return (
    <div tw="flex flex-col py-5 px-4">
      <div tw="flex justify-between w-full text-sm mb-3 items-center">
        <span tw="text-section-header-text-color font-semibold">
          {lang.today_activity[language]}
        </span>
        <button tw="relative" onClick={() => fetchActivites(true)}>
          <span tw="rounded-[10px] w-[40px] h-[40px] bg-button-color opacity-5 flex items-center justify-center transition-all"></span>
          <RefreshIcon
            tw="absolute top-[8px] left-[8px] stroke-button-color"
            css={[refreshLoading && tw`animate-spin duration-1000 ease-in-out`]}
          />
        </button>
      </div>
      {loading ? (
        <ActivitySkeleton count={3} />
      ) : (
        <>
          {activities?.map((item, index) => (
            <div key={item.id} tw="flex flex-col">
              <HomeActivityItem
                activity={item}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
              />
              {index !== activities.length - 1 && (
                <span tw="bg-secondary-bg-color h-[1px] my-5 w-full"></span>
              )}
            </div>
          ))}
          {!activities.length && <NoResult text={lang.no_suggestion[language]} />}
        </>
      )}
    </div>
  )
})

export default HomeActivity
