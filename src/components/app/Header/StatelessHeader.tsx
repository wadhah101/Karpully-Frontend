import React from 'react'

interface IStatelessHeaderProps {
  text: { white: boolean }
  background: { transparent: boolean }
}

const StatelessHeader: React.FC<IStatelessHeaderProps> = () => {
  return <header> </header>
}

export default StatelessHeader
