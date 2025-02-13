export type LoginValue = {
  phone: string
  password: string
  remember_me: boolean
}

export type UserType = {
  name: string
  phone: string
}

export type UserCredentials = {
  access_token: string
  message: string
  token_type: string
  user: UserType
}
