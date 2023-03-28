import NextAuth, { NextAuthOptions } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import Credentials from 'next-auth/providers/credentials'

const providers = [
  Credentials({
    name: 'Two Factor Authentication',
    credentials: {
      username: {},
      password: {}
    },

    async authorize(credentials) {
      try {
        const payload: Record<string, string> = credentials
        const data = payload && JSON.parse(payload.data)
        if (data) {
          return data
        } else {
          return null
        }
      } catch (error) {
        throw new Error(error)
      }
    }
  })
]

const callbacks = {
  redirect({ baseUrl }) {
    return baseUrl
  },
  async signIn({ user }) {
    return user
  },
  async jwt({ token, user }) {
    if (user) {
      token.accessToken = user.token
      token.user = user
      token.email = user.email
      token.name = user.name
    }
    return token
  },
  async session({ session, token }: { session; token }) {
    session.accessToken = token.accessToken
    session.user = token.user
    session.email = token.email
    session.name = token.name
    return session
  }
}

const options: NextAuthOptions = {
  providers,
  callbacks,
  pages: {
    error: '/auth/error',
    signIn: '/auth/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 60 // 30 minutes
  },
  jwt: {
    secret: '1g9BVIJWkrQkLUwTW67bjgDX7Abj3CX58RYZ5BOIUM4'
  },
  secret: '1g9BVIJWkrQkLUwTW67bjgDX7Abj3CX58RYZ5BOIUM4',
  debug: true
}

const request = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)

export default request
