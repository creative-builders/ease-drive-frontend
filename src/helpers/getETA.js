export async function getETA(origin, destination, apiKey) {
  const url = "https://api.openrouteservice.org/v2/directions/driving-car";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": process.env.OPENROUTESERVICE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coordinates: [
          [origin.lon, origin.lat],
          [destination.lon, destination.lat],
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();

    // Extract duration (seconds) and distance (meters)
    const route = data.routes?.[0];
    if (!route) throw new Error("No route found");

    const durationSec = route.summary.duration;
    const distanceMeters = route.summary.distance;

    // Convert to more readable format
    const durationMinutes = Math.round(durationSec / 60);
    const distanceKm = (distanceMeters / 1000).toFixed(2);

    return {
      etaSeconds: durationSec,
      etaMinutes: durationMinutes,
      distanceKm,
    };
  } catch (error) {
    console.error("Error fetching ETA:", error);
    return null;
  }
}
