
import { useState } from "react";
import { isToday, isYesterday, format, formatDistanceToNow } from "date-fns";
import { UserIcon } from "../../assets/icons/UserIcon";

export default function DriverNotifications() {
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  // Example notifications array
  const notifications = [
    {
      id: 1,
      type: "Upcoming Scheduled Trip",
      message: "Pickup at 9:00AM – Faculty of Engineering → Ogige Market",
      image: <UserIcon />,
      date: new Date()
    },
    {
      id: 2,
      type: "Earnings Update",
      message: "₦300 from your last trip has been added to your wallet.",
      image: <UserIcon />,
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      id: 3,
      type: "Ride Accepted",
      message: "Bello has accepted your ride offer.",
      image: <UserIcon />,
      date: new Date(2024, 6, 17, 21, 45)
    },
  ];

  // Group notifications by Today / Yesterday / Date
  function groupNotifications(list) {
    return list.reduce((groups, note) => {
      let key;
      if (isToday(note.date)) {
        key = "Today";
      } else if (isYesterday(note.date)) {
        key = "Yesterday";
      } else {
        key = format(note.date, "MMMM dd");
      }
      if (!groups[key]) groups[key] = [];
      groups[key].push(note);
      return groups;
    }, {});
  }

  // Format time for display
  function formatTime(date) {
    if (isToday(date)) {
      return formatDistanceToNow(date, { addSuffix: true });
    }
    return format(date, "dd MMM yyyy | hh:mm a");
  }

  const grouped = groupNotifications(notifications);
  const hasNotifications = notifications.length > 0;

  return (
    <div className="bg-white shadow rounded-lg p-4 border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-[#000] text-[14px] md:text-2xl">Notifications</h2>
        
        <Link className="text-[#2ABD45] text-sm font-semibold" to={'/dashboard/notifications'}>View all</Link>
      </div>

      {hasNotifications ? (
        Object.keys(grouped).map((group) => (
          <div key={group} className="mb-6">
            <h3 className="text-xs md:text-base font-semibold mb-2">{group}</h3>
            {grouped[group].map((note) => (
            <div 
              key={note.id}
              onClick={() => setSelectedNoteId(note.id)}
              className={`p-3 rounded-2xl flex cursor-pointer transition-colors w-full ${
                selectedNoteId === note.id ? "bg-green-50" : "hover:bg-gray-50"
              }`}
            >
             
              <div className="h-[50px] w-[51px] rounded-full flex items-center justify-center bg-white">
                <UserIcon className="text-[#333333]" />
              </div>

              <div className="flex flex-col space-y-2 w-full">
                
                  <div
                    
                  >
                    <p className="font-semibold text-[10px] md:text-sm not-italic leading-normal text-[#9C9C9C]">{note.type}</p>
                    <p className="font-medium text-[10px] md:text-sm not-italic leading-normal text-[#000]">{note.message}</p>
                    <p className="text-xs font-medium text-[10px] md:text-sm not-italic leading-normal text-[#4B5563]">{formatTime(note.date)}</p>
                  </div>
              </div>
            </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">No notifications yet</p>
      )}
    </div>
  );
}
