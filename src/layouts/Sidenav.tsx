import React, { useContext } from 'react'
import { LayoutContext } from '@/contexts/Layout'
import { Drawer, Box, Typography } from '@mui/material'

const Sidenav = () => {
  const { openDrawer, onSetOpenDrawer } = useContext(LayoutContext)

  return (
    <Drawer anchor="left" open={openDrawer} onClose={onSetOpenDrawer}>
      <Box p={2} width="250px" role="presentation"></Box>
    </Drawer>
  )
}

export default Sidenav
