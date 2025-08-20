import React from 'react'

import CustomButton from '../CustomButton'
import {DateIcon} from '../../assets/icons/DateIcon'
import {ClockIcon} from '../../assets/icons/ClockIcon'

import { BiArrowBack } from 'react-icons/bi'

export const RideRequestDetails = () => {
  return (
    <div className="w-[478px] h-[820px] px-5 py-2.5 bg-white inline-flex flex-col justify-start items-center gap-4">
    <div className="self-stretch h-11 inline-flex justify-start items-center">
        <div className="w-10 h-10 px-1 py-[3px] bg-white rounded-[32px] flex justify-center items-center gap-1 overflow-hidden">
            <div className="w-6 h-6 relative">
                <BiArrowBack className="w-6 h-6 text-black" />
            </div>
        </div>
        <div className="w-96 text-center justify-start text-black text-lg font-semibold font-['Inter']">Passenger Details</div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-center gap-12">
        <div className="self-stretch flex flex-col justify-start items-center gap-11">
            <div className="self-stretch flex flex-col justify-start items-center gap-4">
                <div className="flex flex-col justify-start items-center gap-1">
                    <img className="w-24 h-24 relative rounded-[50px]" src="https://randomuser.me/api/portraits/women/44.jpg" />
                    <div className="justify-start text-black text-base font-semibold font-['Inter']">John Ndubuisi Chukwuemeka</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-14 px-4 bg-neutral-200 rounded-lg inline-flex justify-start items-center gap-10 overflow-hidden">
                        <div className="w-64 justify-start text-Primary-950 text-base font-medium font-['Inter']">Trip Details</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                        <div className="self-stretch inline-flex justify-between items-start gap-14">
                            <div className="w-28 justify-start text-black text-base font-semibold font-['Inter']">Date</div>
                            <div className="w-56 text-right justify-end text-black text-base font-normal font-['Inter']">9:00Am, 7th July</div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-start gap-14">
                            <div className="justify-start text-black text-base font-semibold font-['Inter']">Pick Up location</div>
                            <div className="text-right justify-end text-black text-base font-normal font-['Inter']">Queens hostel, UNN Enugu state.</div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-start gap-14">
                            <div className="w-28 justify-start text-left text-black text-base font-semibold font-['Inter']">Destination</div>
                            <div className="text-right justify-end text-black text-base font-normal font-['Inter']">Aloha cafe, 23 marrison hoste.</div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-center gap-14">
                            <div className="w-28 justify-start text-black text-base font-semibold font-['Inter']">Trip Type</div>
                            <div className="w-56 text-right justify-end text-black text-base font-normal font-['Inter']">Drop-off</div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-start gap-14">
                            <div className="w-28 justify-start text-black text-base font-semibold font-['Inter']">Luggage</div>
                            <div className="w-56 text-right justify-end text-black text-base font-normal font-['Inter']">Yes</div>
                        </div>
                        <div className="self-stretch flex flex-col justify-center items-center gap-1">
                            <div className="self-stretch text-center justify-start text-neutral-600 text-xs font-medium font-['Inter']">Click Single Image to view</div>
                            <div className="inline-flex justify-start items-center gap-1">
                                <img className="w-24 h-24 rounded" src="https://randomuser.me/api/portraits/women/44.jpg" />
                                <img className="w-24 h-24 rounded" src="https://randomuser.me/api/portraits/women/44.jpg" />
                                <img className="w-24 h-24 rounded" src="https://randomuser.me/api/portraits/women/44.jpg" />
                                <img className="w-24 h-24 rounded" src="https://randomuser.me/api/portraits/women/44.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch h-14 px-4 bg-primary-50 rounded-2xl inline-flex justify-start items-center gap-56 overflow-hidden">
                        <div className="justify-start text-Primary-950 text-base font-medium font-['Inter']">Schedule Details</div>
                    </div>
                    <div className="inline-flex justify-start items-center gap-4">
                        <div className="flex justify-center items-center gap-1">
                            <div className="w-4 h-4 relative">
                                <ClockIcon className="-mt-[1px]" />
                            </div>
                            <div className="justify-start text-black text-sm font-normal font-['Inter']">08:15 AM</div>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <div className="w-4 h-4 relative">
                                <DateIcon className="-mt-[2px]" />
                            </div>
                            <div className="justify-start text-black text-sm font-normal font-['Inter']">Date: Jun 24, 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-4">
            <div className="flex-1 h-14 px-4 bg-Primary-700 rounded-2xl flex justify-center items-center gap-2 overflow-hidden">
                <CustomButton name="Accept Ride and Enter Amount"  extendedStyles="w-full p-3 lg:p-4 rounded-lg"/>

            </div>
        </div>
    </div>
</div>
  )
}
