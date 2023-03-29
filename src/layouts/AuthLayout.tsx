import React from 'react'
import Head from 'next/head'
import { Box, Typography, Grid } from '@mui/material'
import LanguageSwitcher from '@/controllers/LanguageSwitcher'
import { useIntl } from 'react-intl'
import Logo from './logo.svg'
import Footer from './Footer'

type PropsT = {
  title: string
  children: React.ReactNode
}

const AuthLayout: React.FC<PropsT> = ({ children, title }) => {
  const intl = useIntl()

  return (
    <Box sx={{ minHeight: '100%' }}>
      <Head>
        <title>PCES Payment | {title}</title>
      </Head>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} component="section">
        <LanguageSwitcher />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        component="section"
      >
        <Box
          sx={{
            marginTop: {
              xs: '20px',
              sm: '50px',
              md: '50px',
              lg: '50px'
            },
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
          role="img"
          aria-label="PCES Payment Platform Logo"
        >
          <Logo />
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 300,
            color: 'secondary.main',
            marginTop: {
              xs: '20px',
              sm: '50px',
              md: '50px',
              lg: '50px'
            },
            textAlign: 'center'
          }}
          gutterBottom
        >
          {intl.formatMessage({ defaultMessage: 'Welcome to PCES Payment Merchant Portal' })}
        </Typography>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8} md={3} lg={3}>
            {children}
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </Box>
  )
}

export default AuthLayout
