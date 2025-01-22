import React from 'react';
import BookNowButton from './Button';
import { useState } from 'react';



const BookingForm = () => {
  const [selectedTripType, setSelectedTripType] = useState(null);

  const handleTripTypeChange = (event) => {
    setSelectedTripType(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };


  return (
    <div className='bg-gray-300 p-10 m-28 rounded-xl'>
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-start p-1">
            <input type="radio" name="tripType" value="oneWay" defaultChecked onChange={handleTripTypeChange} />
            <label htmlFor="oneWay" className={`px-2 py-1 rounded-md ${selectedTripType === 'oneWay' ? 'bg-white' : ''
            }`}>One way</label>
            <input type="radio" name="tripType" value="returnTrip" onChange={handleTripTypeChange}/>
            <label htmlFor="returnTrip" className={`px-2 py-1 rounded-md ${selectedTripType === 'returnTrip' ? 'bg-white' : ''
            }`}>Return trip</label>
          </div>

          <div className='flex flex-row gap-10 text-lg bg-white p-4 items-start '>
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="from">From</label>
              <select name="from" id="from" className='bg-gray-300 p-1'>
                <option value="default" disabled selected>Enter your location</option>
                <option value="">Odenigwe</option>
                <option value="">Hilltop</option>
                <option value="">Behind Flat</option>
                <option value="">First Gate</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="to">To</label>
              <select name="to" id="to" className='bg-gray-300 p-1'>
                <option value="" disabled selected>Enter your location</option>
                <option value="">Odenigwe</option>
                <option value="">Hilltop</option>
                <option value="">Behind Flat</option>
                <option value="">First Gate</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="departure">Departure</label>
              <input type="date" id="departure" className='bg-gray-300 p-1'/>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="rides">Rides</label>
              <select id="rides" className='bg-gray-300 p-1' >
                <option value="" disabled selected>Select the type of Ride</option>
                <option value="car">Bike</option>
                <option value="bus">Taxi</option>
                <option value="train">Bus</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="passengers">Passengers</label>
              <select id="passengers" className='bg-gray-300 px-10 py-1'>
                <option value="1">1</option>
                <option value="2" >2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>
            </div>
          </div>
          <div className='ml-auto mt-2'>
            <BookNowButton />
          </div>
        </div>
      </form>
    </div>
)};

export default BookingForm;