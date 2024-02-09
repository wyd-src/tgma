/* eslint-disable no-ex-assign */
/* eslint-disable no-self-assign */
import { baseAxios } from '../initialize'

export interface IActivityParams {
  id?: string
  title: string
  category: string
  description: string
}

const getFeed = async ({ tgData }: { tgData: string }) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = '/feed/'
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

const createUpdateActivity = async ({
  tgData,
  params,
  method,
}: {
  tgData: string
  params: IActivityParams
  method: 'create' | 'update'
}) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = '/activities/' + (method === 'create' ? '' : params.id + '/')
  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      headers: {
        'tg-data': tgData,
      },
      method: method === 'create' ? 'POST' : 'PUT',
      url,
      data: params,
    })
    data = response.data
  } catch (error: any) {
    error = error
  } finally {
    loading = false
  }
  return { data, error, loading }
}

export { getFeed, createUpdateActivity }
