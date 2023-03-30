import React from 'react'
import AdminLayout from '@/layouts/AdminLayout'
import { useIntl } from 'react-intl'

const DashboardPage = () => {
  const intl = useIntl()

  return (
    <AdminLayout pageTitle={intl.formatMessage({ defaultMessage: 'Dashboard' })}>
      This is the dashboard
    </AdminLayout>
  )
}

export default DashboardPage
