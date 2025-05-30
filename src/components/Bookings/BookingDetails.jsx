import icon from "/locatinIcon.svg"

const BookingDetails = ({ username, location, time, status })=>{

  const statusColor =
    status === "cancelled"
      ? "text-red-500"
      : status === "completed"
      ? "text-green-600"
      : "text-black";

    return(
      <div className="h-16 rounded-lg top-4 flex items-center bottom-4 gap-2 p-2 bg-white justify-between border border-green-500">
         <article className="h-full w-40 flex flex-col items-start justify-around rounded-lg">
           <p className="font-[poppins] font-medium text-sm text-[#414141]">{username}</p>
            <p className="flex gap-1">
                <img src={icon} alt="" />
                <span className="font-[poppins] font-medium text-[12px] text-[#B8B8B8]">{location}</span>
            </p>
         </article>
         {/* Time text color reflects the status */}
        <p className={`font-[poppins] font-medium text-[12px] ${statusColor}`}>
         {time}
        </p>
      </div>
    )
}
export default BookingDetails