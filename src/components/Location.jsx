import { useState } from 'react';
import { MapPin, Loader2 } from 'lucide-react';

export default function LocationPredictor() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestLocation = async () => {
    setLoading(true);
    setError(null);
    setAddress(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy
        };
        setLocation(coords);

        // Reverse geocoding to get address from coordinates
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}&zoom=18&addressdetails=1`,
            {
              headers: {
                'User-Agent': 'LocationPredictor/1.0'
              }
            }
          );

          if (!response.ok) {
            throw new Error('Failed to fetch address');
          }

          const data = await response.json();
          setAddress({
            display: data.display_name,
            city: data.address.city || data.address.town || data.address.village,
            state: data.address.state,
            country: data.address.country,
            postcode: data.address.postcode,
            road: data.address.road,
            suburb: data.address.suburb
          });
        } catch (err) {
          setError('Could not determine address from coordinates');
        }

        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <MapPin className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Location Predictor
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Get your coordinates and discover your location
        </p>
        
        <button
          onClick={requestLocation}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 disabled:transform-none"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Detecting Location...
            </>
          ) : (
            <>
              <MapPin className="w-5 h-5" />
              Detect My Location
            </>
          )}
        </button>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <p className="text-red-800 text-sm">
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}

        {location && (
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">
                📍 Coordinates
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-600">Latitude</p>
                  <p className="font-mono font-semibold text-gray-800">
                    {location.latitude.toFixed(6)}°
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Longitude</p>
                  <p className="font-mono font-semibold text-gray-800">
                    {location.longitude.toFixed(6)}°
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-600">Accuracy</p>
                  <p className="font-semibold text-gray-800">
                    ±{location.accuracy.toFixed(0)} meters
                  </p>
                </div>
              </div>
            </div>

            {address && (
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <h3 className="font-bold text-green-900 mb-3 text-lg">
                  🏠 Predicted Location
                </h3>
                <div className="space-y-2 text-sm">
                  {address.road && (
                    <div>
                      <span className="text-gray-600">Street: </span>
                      <span className="font-semibold text-gray-800">{address.road}</span>
                    </div>
                  )}
                  {address.suburb && (
                    <div>
                      <span className="text-gray-600">Area: </span>
                      <span className="font-semibold text-gray-800">{address.suburb}</span>
                    </div>
                  )}
                  {address.city && (
                    <div>
                      <span className="text-gray-600">City: </span>
                      <span className="font-semibold text-gray-800">{address.city}</span>
                    </div>
                  )}
                  {address.state && (
                    <div>
                      <span className="text-gray-600">State: </span>
                      <span className="font-semibold text-gray-800">{address.state}</span>
                    </div>
                  )}
                  {address.postcode && (
                    <div>
                      <span className="text-gray-600">Postal Code: </span>
                      <span className="font-semibold text-gray-800">{address.postcode}</span>
                    </div>
                  )}
                  {address.country && (
                    <div>
                      <span className="text-gray-600">Country: </span>
                      <span className="font-semibold text-gray-800">{address.country}</span>
                    </div>
                  )}
                  <div className="mt-3 pt-3 border-t border-green-200">
                    <p className="text-gray-600 text-xs">Full Address:</p>
                    <p className="text-gray-800 mt-1">{address.display}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}