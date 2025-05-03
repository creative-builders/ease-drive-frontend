import React from 'react'

import UpComingCard from "./UpComingCard";


const UpComingDisplay = () =>{

    const obj = {
        Upcoming: "currently there's no upcoming",
        Completed: "Sorry no completed",
        Canelled: "here are the canelled",
    }
    
    return(
        <div className="relative">

            <UpComingCard tabResponses={obj}/>

        </div>
    )
}
export default UpComingDisplay