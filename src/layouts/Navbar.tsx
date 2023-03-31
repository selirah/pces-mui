import React, { useState, useContext } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Menu,
  MenuItem,
  Chip,
  Avatar,
  Tooltip,
  Divider,
  ListItemIcon
} from '@mui/material'
import { LayoutContext } from '@/contexts/Layout'
import LanguageSwitcher from '@/controllers/LanguageSwitcher'
import { useIntl } from 'react-intl'
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add'
import LogoutIcon from '@mui/icons-material/Logout'

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
          <Stack spacing={1} direction="column" px={2} py={1}>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              Joey Inc.
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              jdoe@acme.com
            </Typography>
          </Stack>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            {intl.formatMessage({ defaultMessage: 'Settings' })}
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            {intl.formatMessage({ defaultMessage: 'Profile' })}
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AddIcon fontSize="small" />
            </ListItemIcon>
            {intl.formatMessage({ defaultMessage: 'Add a Business' })}
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            {intl.formatMessage({ defaultMessage: 'Sign out' })}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
