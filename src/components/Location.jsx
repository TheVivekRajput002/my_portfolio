import { useState } from 'react';
import { MapPin, Loader2, CheckCircle, Send } from 'lucide-react';

export default function LocationEmailSender() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const sendLocationEmail = async () => {
    setStatus('loading');
    setMessage('');

    if (!navigator.geolocation) {
      setStatus('error');
      setMessage('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date().toISOString()
        };

        try {
          // Get address from coordinates
          const geoResponse = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}&zoom=18&addressdetails=1`,
            {
              headers: {
                'User-Agent': 'LocationSender/1.0'
              }
            }
          );

          if (!geoResponse.ok) {
            throw new Error('Failed to fetch address');
          }

          const geoData = await geoResponse.json();
          
          const locationData = {
            coordinates: coords,
            address: {
              display: geoData.display_name,
              city: geoData.address.city || geoData.address.town || geoData.address.village,
              state: geoData.address.state,
              country: geoData.address.country,
              postcode: geoData.address.postcode,
              road: geoData.address.road,
              suburb: geoData.address.suburb
            }
          };

          // Format email content
          const emailSubject = 'Location Data Shared';
          const emailBody = `
Location Data
=============

Timestamp: ${new Date(coords.timestamp).toLocaleString()}

Coordinates:
- Latitude: ${coords.latitude}
- Longitude: ${coords.longitude}
- Accuracy: ±${coords.accuracy.toFixed(0)} meters

Google Maps Link:
https://www.google.com/maps?q=${coords.latitude},${coords.longitude}

Address Details:
${locationData.address.road ? `- Street: ${locationData.address.road}` : ''}
${locationData.address.suburb ? `- Area: ${locationData.address.suburb}` : ''}
${locationData.address.city ? `- City: ${locationData.address.city}` : ''}
${locationData.address.state ? `- State: ${locationData.address.state}` : ''}
${locationData.address.postcode ? `- Postal Code: ${locationData.address.postcode}` : ''}
${locationData.address.country ? `- Country: ${locationData.address.country}` : ''}

Full Address:
${locationData.address.display}
          `.trim();

          // Use Web3Forms API to send email
          const formData = new FormData();
          formData.append('access_key', '49577ea2-c74f-43fe-a2b7-b2ba5190ccf2'); // Get free key from web3forms.com
          formData.append('subject', emailSubject);
          formData.append('message', emailBody);
          formData.append('from_name', 'Location Tracker');
          
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
          });

          const result = await response.json();

          if (result.success) {
            setStatus('success');
            setMessage('Location sent to your email successfully!');
            
            setTimeout(() => {
              setStatus('idle');
              setMessage('');
            }, 3000);
          } else {
            throw new Error('Failed to send email');
          }

        } catch (err) {
          setStatus('error');
          setMessage(err.message || 'Failed to send location');
        }
      },
      (err) => {
        setStatus('error');
        setMessage(err.message);
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <div className={`p-4 rounded-full ${
            status === 'success' ? 'bg-green-100' : 
            status === 'error' ? 'bg-red-100' : 
            'bg-blue-100'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="w-8 h-8 text-green-600" />
            ) : status === 'loading' ? (
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            ) : (
              <MapPin className="w-8 h-8 text-blue-600" />
            )}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Share Location via Email
        </h2>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Send your current location directly to your email
        </p>
        
        <button
          onClick={sendLocationEmail}
          disabled={status === 'loading'}
          className={`w-full font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 disabled:transform-none ${
            status === 'success' 
              ? 'bg-green-600 hover:bg-green-700' 
              : status === 'error'
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400'
          } text-white`}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Email...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Email Sent!
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Location to Email
            </>
          )}
        </button>

        {message && (
          <div className={`mt-6 p-4 rounded-lg border-l-4 ${
            status === 'error' 
              ? 'bg-red-50 border-red-500' 
              : 'bg-green-50 border-green-500'
          }`}>
            <p className={`text-sm ${
              status === 'error' ? 'text-red-800' : 'text-green-800'
            }`}>
              {message}
            </p>
          </div>
        )}

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 text-center">
            📧 Location data will be sent to your email with coordinates and a Google Maps link
          </p>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-800 text-center">
            ⚠️ Replace 'YOUR_WEB3FORMS_ACCESS_KEY' in the code with your free API key from <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">web3forms.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}