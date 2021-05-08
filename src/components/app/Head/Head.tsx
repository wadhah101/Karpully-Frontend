import React from 'react'
import useRefreshToken from 'src/utils/apollo/useRefreshToken'
import useQueryDetector from '@utils/app/useQueryDetector'

const AppHead: React.FC = () => {
  useRefreshToken()
  useQueryDetector()

  return null
}

export default AppHead
