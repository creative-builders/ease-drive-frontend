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
      {/* <TestingCompent/> */}
       <Header/>
      <div><p>Checking</p></div>
      <h3>Hi {firstName} {lastName}</h3>
      <img className='inline-block h-40 w-40' src={profileImage} alt="profile image" />
    </div>
  )
}

export default PassengerDashboard