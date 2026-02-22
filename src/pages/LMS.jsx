import { useEffect } from 'react';

export default function LMS() {
  useEffect(() => {
    window.location.href = 'https://lms.flickxafrica.com'; // this is a demo LMS link
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Redirecting to LMS...</h2>
      </div>
    </div>
  );
}
