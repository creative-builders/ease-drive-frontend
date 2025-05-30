

import BookingsCard from "./BookingsCard";



const ViewBookings = () =>{

    const obj = {
        Upcoming: "currently there's no upcoming",
        Completed: "Sorry no completed",
        Canelled: "here are the canelled",
    }
    
    return(
        <div className="relative">

            <BookingsCard tabResponses={obj}/>

        </div>
    )
}
export default ViewBookings