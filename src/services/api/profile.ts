/* eslint-disable no-ex-assign */
/* eslint-disable no-self-assign */
import { baseAxios } from '../initialize'

export interface IActivityParams {
  title: string
  category: string
  description: string
}

export type TBookmarkAction = 'bookmark' | 'unbookmark'

const getProfile = async ({ tgData }: { tgData: string }) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = '/profile/'
  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      headers: {
        'tg-data': tgData,
      },
      method: 'GET',
      url,
    })
    data = response.data
  } catch (error: any) {
    error = error
  } finally {
    loading = false
  }
  return { data, error, loading }
}

const getMyActivities = async ({ tgData }: { tgData: string }) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = '/activities/'
  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      headers: {
        'tg-data': tgData,
      },
      method: 'GET',
      url,
    })
    data = response.data
  } catch (error: any) {
    error = error
  } finally {
    loading = false
  }
  return { data, error, loading }
}

const getBookmarks = async ({ tgData }: { tgData: string }) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = '/bookmarks/'
  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      headers: {
        'tg-data': tgData,
      },
      method: 'GET',
      url,
    })
    data = response.data
  } catch (error: any) {
    error = error
  } finally {
    loading = false
  }
  return { data, error, loading }
}

const updateBookmark = async ({
  tgData,
  acitvityId,
  action,
}: {
  tgData: string
  acitvityId: string
  action: TBookmarkAction
}) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = '/activities/' + acitvityId + '/' + action + '/'
  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      headers: {
        'tg-data': tgData,
      },
      method: 'POST',
      url,
    })
    data = response.data
  } catch (error: any) {
    error = error
  } finally {
    loading = false
  }
  return { data, error, loading }
}

export { getProfile, getMyActivities, updateBookmark, getBookmarks }
