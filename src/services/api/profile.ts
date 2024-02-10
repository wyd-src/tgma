/* eslint-disable no-ex-assign */
/* eslint-disable no-self-assign */
import { baseAxios } from '../initialize'

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

const updateActivity = async ({ tgData, activityId }: { tgData: string; activityId: string }) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = '/activities/' + activityId + '/'
  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      headers: {
        'tg-data': tgData,
      },
      method: 'PUT',
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

const deleteActivity = async ({ tgData, activityId }: { tgData: string; activityId: number }) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = '/activities/' + activityId + '/'
  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      headers: {
        'tg-data': tgData,
      },
      method: 'DELETE',
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
  activityId,
  action,
}: {
  tgData: string
  activityId: number
  action: TBookmarkAction
}) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = '/activities/' + activityId + '/' + action + '/'
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

const updateVote = async ({
  tgData,
  activityId,
  rate,
}: {
  tgData: string
  activityId: string
  rate: number
}) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = '/activities/' + activityId + '/vote/'
  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      headers: {
        'tg-data': tgData,
      },
      method: 'POST',
      url,
      data: { vote: rate },
    })
    data = response.status === 200 ? true : false
  } catch (error: any) {
    error = error
  } finally {
    loading = false
  }
  return { data, error, loading }
}

export {
  getProfile,
  getMyActivities,
  updateActivity,
  deleteActivity,
  updateBookmark,
  getBookmarks,
  updateVote,
}
