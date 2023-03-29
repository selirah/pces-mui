import React from 'react'
import { Box, Typography, Container } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        bottom: 0
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex', my: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 400,
              color: 'text.secondary'
            }}
            gutterBottom
          >
            Copyright PCES &copy; {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
