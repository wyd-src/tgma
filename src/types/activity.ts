export interface IActivityResult {
  items: IActivity[]
  total: number
  limit: number
  offset: number
}
export interface IActivity {
  id: string
  title: string
  description: string
  bookmark: boolean
  category: string
  rate: number
  suggested: string
  location: string
}

export interface IActivityCardProps {
  activity: IActivity
  activities?: IActivityResult
  from?: string
  onEdit?: (activity: IActivity) => void
  setActivities?: (activity: IActivityResult) => void
}
