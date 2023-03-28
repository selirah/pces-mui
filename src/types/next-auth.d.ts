// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  type Session = {
    accessToken: string
    user: {
      token: string
      expires: ISODateString
      username: string
      name: string
      phoneNumber: string
      emailAddress: string
      isBusiness: boolean
      userId: number
      roles: Array<string>
    }
  }
}
