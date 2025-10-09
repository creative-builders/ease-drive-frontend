import { isToday, isYesterday, format, formatDistanceToNow } from "date-fns";
import Notification from "../../../assets/images/notification-backgroud.png";

function groupNotifications(notifications) {
  return notifications.reduce((groups, note) => {
    let groupKey;

    if (isToday(note.date)) {
      groupKey = "Today";
    } else if (isYesterday(note.date)) {
      groupKey = "Yesterday";
    } else {
      groupKey = format(note.date, "MMMM dd"); // e.g. "July 25"
    }

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(note);
    return groups;
  }, {});
}

function formatNotificationTime(date) {
  if (isToday(date)) {
    return formatDistanceToNow(date, { addSuffix: true }); // e.g. "3 minutes ago"
  }
  return format(date, "dd MMM yyyy | hh:mm a");
}

export default function Notifications({ notifications = [] }) {
  const grouped = groupNotifications(notifications);
  const hasNotifications = notifications.length > 0;

  return (
    <div className="flex h-[79px] md:h-[799px] px-1 py-1 md:p-2 flex-col gap-2 md:gap-4 flex-shrink-0 rounded-lg bg-white self-stretch md:self-auto">
      {hasNotifications ? (
        Object.keys(grouped).map((group) => (
          <div key={group} className="mb-6 flex flex-col h-fit w-full px-2 py-3">
            <h3 className="text-xs md:text-base leading-normal not-italic font-semibold mb-2">{group}</h3>
            {grouped[group].map((note) => (
              <div key={note.id} className="h-fit md:h-[90px] flex items-start flex-shrink-0 gap-1 md:gap-2 p-4">
                <div className="w-[50px] h-[51px] flex justify-center items-center bg-white rounded-full">
                  {note.profilePic}
                </div>

                <div>
                  <p className="font-semibold text-[#9C9C9C] text-[10px] md:text-sm not-italic leading-normal">{note.type}</p>
                  <p className="text-[#000] text-[10px] md:text-sm not-italic font-medium leading-normal">{note.message}</p>
                  <span className="text-[#4B5563] text-[8px] md:text-xs not-italic font-medium leading-normal">
                    {formatNotificationTime(note.date)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center w-full self-center py-20">
          <img
            src={Notification}
            alt="No notifications"
            className="w-full object-cover h-full mb-4"
          />
          <p className="text-[#B0B0B0] text-center text-xs md:text-lg not-italic font-medium leading-normal">Your Notifications would appear here!</p>
        </div>
      )}
    </div>
  );
}
