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
  category: string
  rate: number
  suggested: string
  location: string
}
