import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  onCoordinatesChange?: (lat: number | null, lng: number | null) => void;
}

interface Suggestion {
  display_name: string;
  lat: string;
  lon: string;
}

export function LocationInput({
  value,
  onChange,
  onCoordinatesChange,
}: LocationInputProps) {
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Debounce input search
  useEffect(() => {
    if (!searchQuery) return;
    const delay = setTimeout(() => {
      handleSearch(searchQuery);
    }, 500); // 500ms debounce to reduce API calls
    return () => clearTimeout(delay);
  }, [searchQuery]);

  const getLocation = async () => {
    setIsGettingLocation(true);
    setLocationError(null);

    try {
      if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by your browser");
      }

      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            resolve,
            (error) => {
              switch (error.code) {
                case error.PERMISSION_DENIED:
                  reject(
                    new Error(
                      "Kindly allow location access in your browser settings"
                    )
                  );
                  break;
                case error.POSITION_UNAVAILABLE:
                  reject(new Error("Location request timed out"));
                  break;
                default:
                  reject(new Error("An unknown error occurred"));
              }
            },
            {
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0,
            }
          );
        }
      );

      const { latitude, longitude } = position.coords;
      console.log("Current Location:", latitude, longitude);

      onCoordinatesChange?.(latitude, longitude);
      onChange(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
    } catch (error) {
      console.error("Location error:", error);
      setLocationError(
        error instanceof Error
          ? error.message
          : "Your location cannot be detected"
      );
    } finally {
      setIsGettingLocation(false);
    }
  };

  const handleSearch = async (query: string) => {
    if (!query) return;

    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: { q: query, format: "json", addressdetails: 1, limit: 5 },
        }
      );
      console.log("API Response:", response.data);

      setSuggestions(response.data);
    } catch (error) {
      console.error("Search error:", error);
      setLocationError("Failed to fetch location suggestions");
    }
  };

  return (
    <div className="space-y-2">
      <label
        className="block text-sm font-medium text-zinc-400"
        htmlFor="location"
      >
        Location
      </label>
      <div className="relative">
        <input
          type="text"
          id="location"
          autoComplete="street-address"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setSearchQuery(e.target.value);
          }}
          placeholder="Enter location or use pin"
          className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 pl-4 pr-12 py-3.5 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
        />

        {/* Display Address Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border border-gray-300 w-full z-10 mt-1 rounded-md shadow-lg">
            {suggestions.map((place, index) => (
              <li
                key={index}
                onClick={() => {
                  const lat = parseFloat(place.lat);
                  const lon = parseFloat(place.lon);
                  console.log(
                    "Selected Suggestion:",
                    place.display_name,
                    lat,
                    lon
                  );

                  onChange(place.display_name);
                  onCoordinatesChange?.(
                    isNaN(lat) ? null : lat,
                    isNaN(lon) ? null : lon
                  );
                  setSuggestions([]);
                }}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {place.display_name}
              </li>
            ))}
          </ul>
        )}

        <button
          type="button"
          onClick={getLocation}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isGettingLocation}
          title="Get Current Location"
        >
          {isGettingLocation ? (
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </button>
      </div>

      {locationError && (
        <p className="text-sm text-red-400 flex items-center gap-2">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          {locationError}
        </p>
      )}
    </div>
  );
}
