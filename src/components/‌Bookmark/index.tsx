import tw from 'twin.macro'
import HomeActivityItem from '../Home/HomeActivityItem'
import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '~/stores'
import { getBookmarks } from '~/services/api/profile'
import { INITIAL_ACTIVITY_RESULT } from '~/utils/constants'
import NoResult from '../Base/NoResult'
import { IActivityResult } from '~/types/activity'
const Bookmark = observer(function Bookmark() {
  const [bookmarks, setBookmarks] = useState<IActivityResult>(INITIAL_ACTIVITY_RESULT)

  const { user } = useStore()

  const fetchBookmarks = useCallback(async () => {
    await getBookmarks({ tgData: user.queryId }).then(
      (res: { data: SetStateAction<IActivityResult> }) => {
        if (res) {
          setBookmarks(res.data)
        }
      }
    )
  }, [])

  useEffect(() => {
    fetchBookmarks()
  }, [])

  return (
    <div tw="flex flex-col py-5 px-4">
      {bookmarks.items.map((item, index) => (
        <div key={item.id} tw="flex flex-col">
          <HomeActivityItem activity={item} from="bookmark" />
          {index !== bookmarks.items.length - 1 && (
            <span tw="bg-secondary-bg-color h-[1px] my-5 w-full"></span>
          )}
        </div>
      ))}
      {!bookmarks.total && <NoResult text="There are no bookmarks saved" />}
    </div>
  )
})
export default Bookmark
