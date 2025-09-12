import UserAvatar from "../../../assets/icons/UserAvatar";
import { NotificationsPage } from "../../../uI/NotificationPage";

export const Notification = () => {
  const notifications = [
    {
      id: 1,
      type: "Upcoming Scheduled Trip",
      profilePic: <UserAvatar />,
      message: "Pickup at 9:00AM – Faculty of Engineering → Oggie Market",
      date: new Date()
    },
    {
      id: 2,
      type: "Earnings Update",
      profilePic: <UserAvatar />,
      message: "₦300 from your last trip has been added to your wallet.",
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    },
    {
      id: 3,
      type: "Earnings Update",
      profilePic: <UserAvatar />,
      message: "₦300 from your last trip has been added to your wallet.",
      date: new Date(2024, 6, 17, 21, 45)
    },
    {
      id: 4,
      type: "Ride Cancelled",
      profilePic: <UserAvatar />,
      message: "Your upcoming ride from Bello Hostel has been cancelled.",
      date: new Date(2024, 5, 16, 21, 45),
    },
  ];

  return (
    <div className=" gap-5 items-center justify-center md:p-10 lg:bg-[#f2f5f6] relative">
      <h2 className="font-semibold text-lg md:text-[28px] leading-normal not-italic text-center md:text-left ml-5 md:ml-0 mt-5 md:mt-0">Notifications</h2>
      <NotificationsPage notifications={notifications} />
    </div>
  );
}

