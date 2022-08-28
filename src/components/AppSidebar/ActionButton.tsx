import React, { MouseEventHandler } from 'react'
import { SvgIcon, Button } from '@mui/material'
import { Icon as FeatherIcon } from 'react-feather'

export interface ActionButtonProps {
  disabled?: boolean
  handler: MouseEventHandler
  icon: FeatherIcon
  label: string
  text: string
}

export const ActionButton: React.FunctionComponent<ActionButtonProps> = (
  props
) => {
  return (
    <div>
      <Button startIcon={<SvgIcon component={props.icon} />}>Hehe</Button>
    </div>
  )
}
