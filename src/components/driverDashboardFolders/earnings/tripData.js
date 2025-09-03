  const today = new Date();
const formattedToday = today.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export const data = [
  // Today’s trips
  { date: formattedToday, pickup: "Central Park", dropoff: "Downtown", status: "Pending", earnings: "₦1,200" },
  { date: formattedToday, pickup: "Airport", dropoff: "Hotel Plaza", status: "Paid", earnings: "₦2,000" },
  { date: formattedToday, pickup: "Bus Station", dropoff: "Mall", status: "Cancelled", earnings: "₦2,500" },

  // Same week (within 7 days)
  { date: "28 August 2025", pickup: "UNN Gate", dropoff: "Ogige Market", status: "Paid", earnings: "₦2,000" },
  { date: "30 August 2025", pickup: "Zik Hostel", dropoff: "Main Campus", status: "Paid", earnings: "₦2,400" },

  // Same month (September 2025)
  { date: "05 September 2025", pickup: "Ikeja", dropoff: "Town", status: "Paid", earnings: "₦1,800" },
  { date: "15 September 2025", pickup: "Main Campus", dropoff: "Zik Hostel", status: "Paid", earnings: "₦1,000" },

  // Same year (different months in 2025)
  { date: "12 January 2025", pickup: "Town", dropoff: "Hilltop", status: "Paid", earnings: "₦2,000" },
  { date: "20 March 2025", pickup: "Bello Hostel", dropoff: "SUB", status: "Pending", earnings: "₦1,200" },
  { date: "10 May 2025", pickup: "Central Station", dropoff: "Harbor", status: "Paid", earnings: "₦3,000" },
  { date: "25 June 2025", pickup: "Ogige Market", dropoff: "Main Campus", status: "Cancelled", earnings: "₦2,200" },
  { date: "12 July 2025", pickup: "Airport", dropoff: "City Center", status: "Paid", earnings: "₦3,500" },

  // Previous year (2024)
  { date: "10 December 2024", pickup: "Market Square", dropoff: "Mall", status: "Paid", earnings: "₦2,800" },
  { date: "05 November 2024", pickup: "Bus Terminal", dropoff: "Hotel", status: "Cancelled", earnings: "₦1,500" },
];