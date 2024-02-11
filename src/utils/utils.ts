import { TLanguage } from '~/stores/GeneralStore'
import { IUser } from '~/types/activity'

export const deserializeParams = (queryString: string) => {
  const params = new URLSearchParams(queryString)

  const deserializedData = {} as {
    auth_date: string
    hash: string
    query_id: string
    user: IUser
  }

  for (const [key, value] of params.entries()) {
    try {
      deserializedData[key] = JSON.parse(value)
    } catch {
      deserializedData[key] = value
    }
  }
  return deserializedData
}
