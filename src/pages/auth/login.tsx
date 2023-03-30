import React, { useState } from 'react'
import AuthLayout from '@/layouts/AuthLayout'
import {
  Container,
  TextField,
  Stack,
  InputAdornment,
  IconButton,
  Box,
  Typography,
  Link
} from '@mui/material'
import { useIntl } from 'react-intl'
import { LoginT } from '@/types/Auth'
import { useFormik } from 'formik'
import { loginVal } from '@/validation-schema/auth'
import { Visibility, VisibilityOff, Login } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import useRecaptcha from '@/hooks/useRecaptcha'
import { SuccessResponse, ErrorResponse } from '@/types/Axios'
import { onAxiosError } from '@/utils/common'

const LoginPage = () => {
  const intl = useIntl()
  const initialValues: LoginT = {
    username: '',
    password: ''
  }
  const [showPassword, setShowPassword] = useState(false)
  const [expired, ref, displayRecaptcha] = useRecaptcha()

  const onSubmit = async (values: LoginT) => {
    const recaptchaValue: string = await ref.current.executeAsync()
    if (recaptchaValue && !expired) {
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginVal(intl),
    onSubmit: (values) => {
      onSubmit(values)
    }
  })

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <AuthLayout title="Login">
      <Container maxWidth="lg" sx={{ marginTop: '50px' }}>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={2}>
            <TextField
              fullWidth
              variant="outlined"
              label={intl.formatMessage({ defaultMessage: 'Username' })}
              size="medium"
              placeholder={intl.formatMessage({ defaultMessage: 'Enter your username' })}
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              role="textbox"
              aria-placeholder={intl.formatMessage({ defaultMessage: 'Enter your username' })}
              aria-label={intl.formatMessage({ defaultMessage: 'Username' })}
            />
            <TextField
              fullWidth
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              size="medium"
              label={intl.formatMessage({ defaultMessage: 'Password' })}
              placeholder={intl.formatMessage({ defaultMessage: 'Enter your password' })}
              id="password"
              name="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              role="textbox"
              aria-placeholder={intl.formatMessage({ defaultMessage: 'Enter your password' })}
              aria-label={intl.formatMessage({ defaultMessage: 'Password' })}
            />
            <Box display="flex" justifyContent="flex-end">
              <Typography variant="body2">
                <Link
                  href="/auth/forgotten-password"
                  color="primary"
                  underline="none"
                  role="link"
                  aria-label={intl.formatMessage({
                    defaultMessage: 'Link to forgotten password page'
                  })}
                >
                  {intl.formatMessage({ defaultMessage: 'Forgotten password?' })}
                </Link>
              </Typography>
            </Box>
            <LoadingButton
              variant="contained"
              size="large"
              type="submit"
              loading={false}
              loadingPosition="start"
              startIcon={<Login />}
            >
              {intl.formatMessage({ defaultMessage: 'Sign in' })}
            </LoadingButton>
            <Box display="flex" justifyContent="center">
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 300,
                  color: 'text.secondary',
                  marginTop: {
                    xs: '10px',
                    sm: '50px',
                    md: '50px',
                    lg: '50px'
                  },
                  textAlign: 'center'
                }}
              >
                {intl.formatMessage({ defaultMessage: 'Not yet a merchant?' })}{' '}
                <Link
                  href="https://www.arakapay.com/auth/register"
                  target="_blank"
                  color="primary"
                  underline="none"
                  role="link"
                  aria-label="Link to forgotten password page"
                >
                  {intl.formatMessage({ defaultMessage: 'Sign up' })}
                </Link>
              </Typography>
            </Box>
          </Stack>
        </form>
        {displayRecaptcha()}
      </Container>
    </AuthLayout>
  )
}

export default LoginPage
