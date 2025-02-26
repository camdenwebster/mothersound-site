import React from 'react';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 ml-1">
              Learn more
            </a>
          </p>
          <button
            onClick={onAccept}
            className="whitespace-nowrap bg-gray-900 dark:bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;