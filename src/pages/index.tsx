import React from 'react'
import { useSession } from 'next-auth/react'
import UILoader from '@/components/UILoader'
import LoginPage from './auth/login'

const Home = () => {
  const { status } = useSession()

  const renderView = () => {
    if (status === 'loading') {
      return <UILoader />
    } else if (status === 'unauthenticated') {
      return <LoginPage />
    } else {
      return <>Admin Page</>
    }
  }

  return <>{renderView()}</>
}

export default Home
