import React, { useState, useContext } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Chip,
  Box,
  Avatar,
  Tooltip,
  Divider,
  ListItemIcon
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import PersonAdd from '@mui/icons-material/PersonAdd'
import { LayoutContext } from '@/contexts/Layout'
import LanguageSwitcher from '@/controllers/LanguageSwitcher'
import { useIntl } from 'react-intl'

type PropsT = {
  pageTitle: string
}

const Navbar: React.FC<PropsT> = ({ pageTitle }) => {
  const { onSetOpenDrawer } = useContext(LayoutContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const intl = useIntl()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="side navigation toggler"
          onClick={onSetOpenDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1, fontWeight: 300 }}>
          {pageTitle}
        </Typography>
        <Stack direction="row" spacing={4} alignItems="center">
          <Chip label="Test Mode" color="warning" variant="outlined" />
          <LanguageSwitcher />
          <Tooltip title={intl.formatMessage({ defaultMessage: 'Account settings' })}>
            <IconButton
              id="profile-button"
              onClick={handleClick}
              aria-controls={open ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                variant="circular"
                role="img"
                alt="logged user name initials"
                sx={{ bgcolor: 'default.main', width: 32, height: 32 }}
              >
                <Typography variant="caption">JD</Typography>
              </Avatar>
            </IconButton>
          </Tooltip>
        </Stack>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'profile-button'
          }}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
              }
            }
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
