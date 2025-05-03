import React from 'react'
import TestingCompent from './TestingCompent'
import Header from '../../layout/dashboard/header/Header'

const PassengerDashboard = ({
  profileImage,
  firstName,
  lastName
}) => {

  return (
    <div>
      <TestingCompent/>
       <Header/>
    </div>
  )
}

export default PassengerDashboard