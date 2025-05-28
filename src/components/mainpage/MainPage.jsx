
import { useState } from 'react';
import LocationPopUp from "../../components/location/LocationPopUp";
import PickRide from '../PickRide';
import PickRideSecond from '../PickRideSecond';

export default function MainPage() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(true);
    const [popupActionType, setPopupActionType] = useState(null); // NEW state to track how popup was closed


    console.log(selectedOption)

    return (
        <div className='h-fit w-full bg-[url(/MapMain.png)] overflow-y-hidden'>

            {/* Show popup only when isOpen is true */}
            { isOpen  &&  (
               <LocationPopUp 
                close={setIsOpen} 
                setSelected={setSelectedOption} 
                setPopupActionType={setPopupActionType}
               />
            )}

            {/* When popup closes, decide what to show based on popupActionType */}
            {!isOpen && (
                popupActionType === 'cancel' ? (
                    <PickRide 
                    selected={selectedOption} 
                    setSelected={setSelectedOption}
                     />
                ) : (
                    <PickRideSecond 
                    selected={selectedOption} 
                    setSelected={setSelectedOption}
                    initialPickUpValue = {"Onitsha Enugu Road, Enugu"}
                    />
                )
            )}
        </div>
    );
}
