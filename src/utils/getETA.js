
const etaCache = new Map();


function generateCacheKey(origin, destination) {
  return `${origin.lon},${origin.lat}|${destination.long},${destination.lat}`;
}


function formatETA(seconds) {
  const totalSeconds = Math.round(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  const parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (remainingSeconds > 0 || parts.length === 0) {
    parts.push(`${remainingSeconds}s`);
  }

  return parts.join(' ');
}


function validateCoordinates(origin, destination) {
  if (!origin || !destination) {
    throw new Error('Origin and destination are required');
  }
  
  const coords = [origin.lon, origin.lat, destination.long, destination.lat];
  if (coords.some(coord => coord == null || isNaN(coord))) {
    throw new Error('Invalid coordinates provided');
  }
}


export async function getETA(origin, destination) {
  const API_URL = "https://api.openrouteservice.org/v2/directions/driving-car";
  const AUTH_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFjZWI4MDMwNTI5NTQyMTA5NmI5N2JjYzY2OTk1ZGYzIiwiaCI6Im11cm11cjY0In0=";

  try {
    // Input validation
    validateCoordinates(origin, destination);

    // Check cache first
    const cacheKey = generateCacheKey(origin, destination);
    const cachedResult = etaCache.get(cacheKey);
    
    if (cachedResult && (Date.now() - cachedResult.timestamp < 5 * 60 * 1000)) { // 5 minute cache
      return cachedResult.data;
    }

    // Prepare request payload
    const requestBody = {
      coordinates: [
        [origin.lon, origin.lat],
        [destination.long, destination.lat],
      ],
    };

    // Make API request with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": AUTH_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const route = data.routes?.[0];
    
    if (!route) {
      throw new Error("No route found in API response");
    }

    const { duration: durationSec, distance: distanceMeters } = route.summary;

    // Calculate results
    const result = {
      etaSeconds: Math.round(durationSec),
      etaMinutes: Math.round(durationSec / 60),
      distanceKm: (distanceMeters / 1000).toFixed(2),
      formattedETA: formatETA(durationSec),
    };

    // Cache the result
    etaCache.set(cacheKey, {
      data: result,
      timestamp: Date.now()
    });

    // Clean up old cache entries (optional - can be called periodically)
    if (etaCache.size > 100) {
      cleanupCache();
    }

    return result;

  } catch (error) {
    console.error("Error fetching ETA:", error);
    
    // Return fallback or re-throw based on your error handling strategy
    return {
      etaSeconds: 0,
      etaMinutes: 0,
      distanceKm: "0.00",
      formattedETA:null,
      error: error.message
    };
  }
}

/**
 * Clean up old cache entries
 */
function cleanupCache() {
  const now = Date.now();
  const maxAge = 30 * 60 * 1000; // 30 minutes
  
  for (const [key, value] of etaCache.entries()) {
    if (now - value.timestamp > maxAge) {
      etaCache.delete(key);
    }
  }
}


export function clearETACache() {
  etaCache.clear();
}


export function getCacheStats() {
  return {
    size: etaCache.size,
    keys: Array.from(etaCache.keys())
  };
}