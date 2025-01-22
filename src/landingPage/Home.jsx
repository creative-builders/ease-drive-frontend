import React from 'react'
import Footer from './Footer'
import BookingForm from './BookingForm'


const Home = () => {
  return (
    <div className='text-center uppercase border border-red-900 p-4'>
      Welcome to Ease Drive
      <p>this is how we started</p>


      <BookingForm/>
      <Footer/>
    </div>
  )
}

export default Home