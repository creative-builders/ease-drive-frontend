import React, { useState } from 'react'
import { InfoCard } from './InfoCard';
import { EarningsIcon } from "../../../assets/icons/dashboard/EarningsIcon"
import CustomButton from "../../CustomButton"
import { DashboardEarningChart } from './EarningsChart';
import { AccountCenter } from './AccountCenter';
import { Filter } from '../Filter';
import { TripsPage } from './TripsTable';
import {data} from "./tripData"


export const Earnings = () => {
    return (
        <div className="py-2.5 relative  h-full inline-flex flex-col lg:justify-start lg:items-start justify-center items-center">
            <div className="inline-flex justify-start items-start ">
                <div className="lg:w-[563px] w-[100%] m-auto font-poppins inline-flex flex-col lg:justify-start lg:items-start gap-4">
                    <div className='flex lg:gap-2 gap-3'>
                        <InfoCard title="Current Balance" InfoIcon={EarningsIcon} value={"5,200"} footer={{text:"Earnings this month", value:"2.3"} } />
                        <InfoCard title="Total Earnings" InfoIcon={EarningsIcon} value={"85,200"} footer={{text:"Since account activation", value:"3.2" }}/>
                    </div>


                    <div className='flex lg:gap-2 gap-2 justify-start items-start lg:flex-row flex-col'>
                        <AccountCenter  />
                        <DashboardEarningChart />
                    </div>

                    <div className=" lg:h-[528px] lg:w-[1000px] h-[403px] w-[380px]
                        flex flex-col justify-start ">
                        <TripsPage tripData={data}  />

                    </div>
                </div>
            </div>


          
        </div>

    )
}
