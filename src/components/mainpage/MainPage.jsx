import { useState } from 'react';
import Header from "../../layout/dashboard/header/Header";
import LocationPopUp from "../../components/location/LocationPopUp";
import PickRide from '../PickRide';
import PickRideSecond from '../PickRideSecond';

export default function MainPage() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className='min-h-screen w-full bg-[url(/MapMain.png)]'>
            <Header />

            {/* Show popup only when isOpen is true */}
            {isOpen && <LocationPopUp close={setIsOpen} setSelected={setSelectedOption} />}

            {!isOpen && (
                selectedOption === null ? (
                    <PickRide selected={selectedOption} setSelected={setSelectedOption} />
                ) : (
                    <PickRideSecond selected={selectedOption} setSelected={setSelectedOption} />
                )
            )}
        </div>
    );
}
