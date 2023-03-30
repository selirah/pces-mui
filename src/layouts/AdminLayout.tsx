import React from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import Footer from './Footer'
import Head from 'next/head'
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
      <Footer />
    </>
  )
}

export default AdminLayout
