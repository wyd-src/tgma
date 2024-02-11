import { TLanguage } from '~/stores/GeneralStore'

export interface IActivityResult {
  items: IActivity[]
  total: number
  limit: number
  offset: number
}
export interface IUser {
  id: number
  first_name: string
  last_name: string
  language_code: TLanguage
}
export interface IActivity {
  id: number
  title: string
  description: string
  category: string
  number_of_votes: number
  sum_of_votes: number
  number_of_bookmarks: number
  is_bookmarked: boolean
  rate: number
  user: IUser
}

export interface IActivityCardProps {
  activity: IActivity
  activities?: IActivityResult
  isExpanded?: number
  from?: string
  onEdit?: (activity: IActivity) => void
  setActivities?: (activity: IActivityResult) => void
  setIsExpanded?: (number: number) => void
}
