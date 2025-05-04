
import TestingCompent from './TestingCompent'
import Header from '../../layout/dashboard/header/Header'

const PassengerDashboard = ({
  profileImage,
  firstName,
  lastName
}) => {

  return (
    <div>
       <Header/>
       <TestingCompent/>
    </div>
  )
}

export default PassengerDashboard