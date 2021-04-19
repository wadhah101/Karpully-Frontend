import React from 'react'
import StatelessHeader from './StatelessHeader'

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <div className="mb-10">
      <StatelessHeader
        text={{ white: true }}
        background={{ transparent: true }}
      />
    </div>
  )
}
