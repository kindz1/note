import { ActionButton } from '@/components/AppSidebar/ActionButton'
import React from 'react'
import { Plus } from 'react-feather'
import { LabelText } from '@/resources/LabelText'
import { Box } from '@mui/material'

export const AppSidebar: React.FunctionComponent = () => {
  return (
    <Box
      component="aside"
      sx={{
        backgroundColor: 'sidebar.main',
        color: 'font.light',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid red',
        height: '100%',
        overflow: 'hidden',
        zIndex: 3,
        '&:hover': {
          overflowY: 'auto',
        },
      }}
      className="app-sidebar"
    >
      <ActionButton
        handler={() => {}}
        icon={Plus}
        label={LabelText.CREATE_NEW_NOTE}
        text={LabelText.NEW_NOTE}
      />
    </Box>
  )
}
