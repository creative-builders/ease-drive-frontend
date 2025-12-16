import React from 'react'
import { ChooseDestination } from './ChooseDestination'
import { SelectRide } from './SelectRide'

export const CreateRideSection = ({
onFocus,
onBlur,
handleSubmit,
isLoading,
}) => {
  return (
   <>
    <ChooseDestination
     onFocus={onFocus}
     onBlur={onBlur} 
     />
    <SelectRide
    handleSubmit={handleSubmit}
    isLoading={isLoading}
          />
   </>
  )
}
