export interface IProfile {
  id: number
  first_name: string
  last_name: string
  telegram_id: number
  is_bot: boolean
  username: string
  language_code: string
  added_to_attachment_menu: boolean
  allows_write_to_pm: boolean
  is_premium: boolean
  photo_url: string
  auth_date: number
}
