import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import SpeedDialLayout from './SpeedDialLayout'
import Footer from './Footer'
import { Box } from '@mui/material'

type PropsT = {
  pageTitle: string
  children: React.ReactNode
}

const AdminLayout: React.FC<PropsT> = (props) => {
  const { pageTitle, children } = props
  return (
    <>
      <Head>
        <title> PCES Payment Platform | {pageTitle} </title>
      </Head>
      <Navbar pageTitle={pageTitle} />
      <Sidenav />
      <Box
        pt={{ xs: '16px', sm: '16px', md: '32px', lg: '32px' }}
        px={{ xs: '16px', sm: '16px', md: '56px', lg: '56px' }}
      >
        {children}
      </Box>
      <SpeedDialLayout />
      <Footer />
    </>
  )
}

export default AdminLayout
