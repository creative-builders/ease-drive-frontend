export async function getETA(origin, destination) {
  const url = "https://api.openrouteservice.org/v2/directions/driving-car";
   const authKey = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFjZWI4MDMwNTI5NTQyMTA5NmI5N2JjYzY2OTk1ZGYzIiwiaCI6Im11cm11cjY0In0="

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: authKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coordinates: [
          [origin.lon, origin.lat],
          [destination.long, destination.lat],
        ],
      }),
    });

    if (!response.ok) throw new Error(`Request failed: ${response.status}`);

    const data = await response.json();

    const route = data.routes?.[0];
    if (!route) throw new Error("No route found");

    const durationSec = route.summary.duration;
    const distanceMeters = route.summary.distance;

    // Convert to human-readable ETA
    const totalSeconds = Math.round(durationSec);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let formattedETA = "";
    if (hours > 0) formattedETA += `${hours}h `;
    if (minutes > 0) formattedETA += `${minutes}m `;
    if (seconds > 0) formattedETA += `${seconds}s`;
    formattedETA = formattedETA.trim() ;

    const distanceKm = (distanceMeters / 1000).toFixed(2);

    return {
      etaSeconds: durationSec,
      etaMinutes: Math.round(durationSec / 60),
      distanceKm,
      formattedETA, // <-- added readable ETA
    };
  } catch (error) {
    console.error("Error fetching ETA:", error);
    return null;
  }
}
