import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import HelpIcon from '@mui/icons-material/HelpOutline'
import SupportIcon from '@mui/icons-material/SupportAgentOutlined'
import InboxIcon from '@mui/icons-material/InboxOutlined'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalkOutlined'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswerOutlined'

const SpeedDialLayout = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon icon={<HelpIcon />} />}
    >
      <SpeedDialAction icon={<SupportIcon />} tooltipTitle="Support" />
      <SpeedDialAction icon={<InboxIcon />} tooltipTitle="Suggestion Box" />
      <SpeedDialAction icon={<PhoneInTalkIcon />} tooltipTitle="Contact Us" />
      <SpeedDialAction icon={<QuestionAnswerIcon />} tooltipTitle="FAQs" />
    </SpeedDial>
  )
}

export default SpeedDialLayout
