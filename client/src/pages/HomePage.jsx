import React from 'react'
import AppLayout from '../components/AppLayout'

const HomePage = () => {
  return (
    <div>Home</div>
  )
}

export default React.memo(AppLayout(HomePage))