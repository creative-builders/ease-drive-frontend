
export default function DriverNotifications() {
  return (
    <div className="bg-white shadow rounded-lg p-4 border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-[#000] text-2xl not-italic leading-normal">Notifications</h2>
        <a href="#" className="text-[#2ABD45] text-sm text-right not-italic font-semibold leading-normal">View all</a>
      </div>
      <div className="space-y-4">
        <div className="bg-green-50 p-3 rounded">
          <p className="font-medium">Upcoming Scheduled Trip</p>
          <p className="text-xs text-gray-600">Pickup at 9:00AM – Faculty of Engineering → Ogige Market</p>
          <p className="text-xs text-gray-400">3 minutes ago</p>
        </div>
        <div>
          <p className="font-medium">Earnings Update</p>
          <p className="text-xs text-gray-600">₦300 from your last trip has been added to your wallet.</p>
          <p className="text-xs text-gray-400">17 July 2024 | 09:45 PM</p>
        </div>
        <div>
          <p className="font-medium">Ride Accepted</p>
          <p className="text-xs text-gray-600">Bello has accepted your ride offer.</p>
          <p className="text-xs text-gray-400">17 July 2024 | 09:45 PM</p>
        </div>
        <div>
          <p className="font-medium">Ride Cancelled</p>
          <p className="text-xs text-gray-600">Your upcoming ride has been cancelled.</p>
          <p className="text-xs text-gray-400">17 July 2024 | 09:45 PM</p>
        </div>
      </div>
    </div>
  );
}
