type Company = {
  id: number
  name: string
  tin: string
  created_at: string
  updated_at: string
}

export type MeTypes = {
  id: number
  name: string
  phone: string
  phone_verified_at: boolean | null
  company_id: number
  created_at: string
  updated_at: string
  company: Company
}
