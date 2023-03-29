import React from 'react'
import { Box, CircularProgress } from '@mui/material'

type PropsT = {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit'
  size?: string | number
}

const UILoader: React.FC<PropsT> = ({ color, size }) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
    >
      <CircularProgress color={color ?? 'primary'} size={size} />
    </Box>
  )
}

export default UILoader
