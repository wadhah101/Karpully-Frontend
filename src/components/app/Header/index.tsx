import React from 'react'
import StatelessHeader from './StatelessHeader'

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <StatelessHeader
      text={{ white: true }}
      background={{ transparent: true }}
    />
  )
}
