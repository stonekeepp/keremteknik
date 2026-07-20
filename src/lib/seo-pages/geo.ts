import { SITE } from "@/lib/services/site";

const EARTH_RADIUS_KM = 6371;

/** Verified against Google Maps listing for Uygar Sk. No:8 A, Alibeyköy */
export const BUSINESS_LOCATION_VERIFIED = true;

export function isBusinessLocationVerified(): boolean {
  return BUSINESS_LOCATION_VERIFIED;
}

export function haversineDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(EARTH_RADIUS_KM * c * 10) / 10;
}

export function getBusinessCoordinates(): { latitude: number; longitude: number } {
  return {
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  };
}

export function computeDistanceFromBusiness(
  latitude: number,
  longitude: number,
): { distanceKm: number; distanceLabel: string } | null {
  if (!isBusinessLocationVerified()) {
    return null;
  }
  const business = getBusinessCoordinates();
  const distanceKm = haversineDistanceKm(
    business.latitude,
    business.longitude,
    latitude,
    longitude,
  );
  return {
    distanceKm,
    distanceLabel: `Yaklaşık ${distanceKm} km (kuş uçuşu)`,
  };
}
