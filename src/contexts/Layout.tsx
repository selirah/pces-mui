import React, { useState, createContext, useEffect } from 'react'
import { LayoutT, LayoutContextT } from '@/types/Common'

export const LayoutContext = createContext<LayoutContextT | null>(null)

type PropsT = {
  children: React.ReactNode
}

export const LayoutContextProvider: React.FC<PropsT> = ({ children }) => {
  const [layout, setLayout] = useState<LayoutT>('laptop')
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleLayout = () => {
    if (window.innerWidth >= 320 && window.innerWidth <= 480) {
      setLayout('mobile')
    } else if (window.innerWidth >= 481 && window.innerWidth <= 768) {
      setLayout('tablet')
    } else if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
      setLayout('laptop')
    } else if (window.innerWidth > 1024) {
      setLayout('desktop')
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleLayout)
    }
    return () => {
      window.removeEventListener('resize', handleLayout)
    }
  }, [])

  const onSetOpenDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <LayoutContext.Provider value={{ layout, onSetOpenDrawer, openDrawer }}>
      {children}
    </LayoutContext.Provider>
  )
}
