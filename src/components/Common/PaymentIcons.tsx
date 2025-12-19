'use client';
import React from 'react';

const PaymentIcons: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`payment-icons flex items-center justify-center gap-3 ${className}`}>
      {/* Visa */}
      <div className="payment-icon bg-white rounded border border-gray-200 p-2 h-8 flex items-center justify-center">
        <svg width="32" height="11" viewBox="0 0 32 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.354 9.646l1.846-8.292H16.492l-1.846 8.292h-2.292zM23.546 1.646c-.738-.292-1.892-.608-3.323-.608-3.669 0-6.246 1.954-6.269 4.754-.023 2.069 1.846 3.231 3.254 3.915 1.446.708 1.938 1.169 1.938 1.8-.023.977-1.169 1.415-2.246 1.415-1.508 0-2.315-.223-3.569-.776l-.492-.223-.523 3.231c.877.4 2.477.754 4.146.777 3.9 0 6.431-1.923 6.477-4.923.023-1.646-.985-2.892-3.131-3.923-1.292-.677-2.092-1.123-2.092-1.8 0-.6.677-1.246 2.131-1.246 1.215-.023 2.092.246 2.777.531l.331.154.554-3.077zM29.831 1.354c-.554 0-.969.154-1.215.723l-4.277 9.569h3.9s.631-1.754.777-2.131c.423 0 4.169.015 4.708.015.108.477.438 2.115.438 2.115h3.446L31.954 1.354h-2.123zm.338 5.815c.308-.823.146-.892 1.485-4.023l.838 4.023h-2.323zM10.092 1.354L6.415 7.515 6.046 5.6c-.623-2.115-2.546-4.415-4.7-5.546l2.069 9.592H7.315l5.869-8.292h-3.092z" fill="#1434CB"/>
          <path d="M2.646 1.354H.054L0 1.646c4.615 1.177 7.677 4.038 8.946 7.477l-1.292-5.846c-.223-.892-.869-.923-1.677-.923H2.646z" fill="#1434CB"/>
        </svg>
      </div>

      {/* Mastercard */}
      <div className="payment-icon bg-white rounded border border-gray-200 p-2 h-8 flex items-center justify-center">
        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="#EB001B"/>
          <circle cx="16" cy="10" r="10" fill="#F79E1B"/>
          <path d="M13 16.5c-2.4-1.9-2.4-4.1 0-6.5 2.4 1.9 2.4 4.1 0 6.5z" fill="#FF5F00"/>
        </svg>
      </div>

      {/* American Express */}
      <div className="payment-icon bg-white rounded border border-gray-200 p-2 h-8 flex items-center justify-center">
        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="20" rx="2" fill="#006FCF"/>
          <path d="M6.5 7h-2l-.5 1.5L3.5 7h-2l1.8 3-1.8 3h2l.5-1.5L4.5 13h2l-1.8-3L6.5 7zm4.5 6V7h3.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-2v3h-1.5zm1.5-4.5V8h1.5c.3 0 .5.2.5.5s-.2.5-.5.5H12.5zm7 4.5V7h3.5c.8 0 1.5.7 1.5 1.5 0 .5-.3 1-.7 1.3.4.2.7.8.7 1.3 0 .8-.7 1.5-1.5 1.5H19.5zm1.5-3.5V8h1.5c.3 0 .5.2.5.5s-.2.5-.5.5H21zm0 2V11h1.5c.3 0 .5.2.5.5s-.2.5-.5.5H21zm7-2.5V7h3v1.5h-1.5V10h1.5v1.5h-1.5V13H28V7h-3v6h1.5z" fill="white"/>
        </svg>
      </div>

      {/* Discover */}
      <div className="payment-icon bg-white rounded border border-gray-200 p-2 h-8 flex items-center justify-center">
        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="20" rx="2" fill="#FF6000"/>
          <path d="M16 20c8.8 0 16-7.2 16-16S24.8-12 16-12 0 3.2 0 12s7.2 8 16 8z" fill="#FF6000"/>
          <path d="M5 7v6h1.5c1.4 0 2.5-1.1 2.5-2.5v-1c0-1.4-1.1-2.5-2.5-2.5H5zm1.5 4.5H6.5V8.5H6.5c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm4-4.5V13h1.5V7H10.5zm3 0l1 3 1-3h1.5l-2 6h-1l-2-6h1.5zm6 0c1.4 0 2.5 1.1 2.5 2.5v1c0 1.4-1.1 2.5-2.5 2.5h-1.5V7h1.5zm0 4.5c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1h-1v3h1z" fill="white"/>
        </svg>
      </div>

      {/* PayPal */}
      <div className="payment-icon bg-white rounded border border-gray-200 p-2 h-8 flex items-center justify-center">
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.554 6.4c-.477 2.82-2.104 3.54-4.632 3.54H13.31a.664.664 0 0 0-.658.558l-.7 4.432a.354.354 0 0 1-.35.3h-2.25a.4.4 0 0 1-.395-.463l2.094-13.257a.8.8 0 0 1 .79-.67h6.316c1.84 0 3.098.38 3.741 1.13.495.578.655 1.384.497 2.43z" fill="#003087"/>
          <path d="M8.613 6.4c-.477 2.82-2.104 3.54-4.632 3.54H2.369a.664.664 0 0 0-.658.558L.911 14.93a.354.354 0 0 1-.35.3H.311a.4.4 0 0 1-.395-.463L1.01 1.51A.8.8 0 0 1 1.8.84h6.316c1.84 0 3.098.38 3.741 1.13.495.578.655 1.384.497 2.43z" fill="#0070BA"/>
          <path d="M15.316 11.55c1.84 0 3.098-.38 3.741-1.13.495-.578.655-1.384.497-2.43-.477-2.82-2.104-3.54-4.632-3.54H13.31a.664.664 0 0 0-.658.558l-.7 4.432a.354.354 0 0 1-.35.3h-2.25a.4.4 0 0 1-.395-.463l.7-4.432c.064-.405.421-.705.832-.705h1.612c2.528 0 4.155.72 4.632 3.54.158-1.046-.002-1.852-.497-2.43z" fill="#009CDE"/>
        </svg>
      </div>

      {/* Apple Pay */}
      <div className="payment-icon bg-white rounded border border-gray-200 p-2 h-8 flex items-center justify-center">
        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.93 5.3c-.72.85-1.9 1.52-3.05 1.42-.14-1.17.42-2.42 1.1-3.18.7-.8 1.9-1.48 2.9-1.54.13 1.2-.3 2.4-1 3.3zm1.1 1.8c-1.6-.1-3 .9-3.8.9-.8 0-2-.86-3.3-.84-1.7.03-3.3.99-4.1 2.5-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.5 1.3-.05 1.8-.8 3.4-.8 1.5 0 2 .8 3.4.77 1.4-.02 2.2-1.2 3-2.4.9-1.4 1.3-2.8 1.3-2.9-.03-.01-2.5-.95-2.5-3.8-.03-2.4 1.9-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8z" fill="#000"/>
          <path d="M19.5 5.5h2.3c1.2 0 2.1.9 2.1 2.2s-.9 2.2-2.1 2.2h-1.8v2.6h-.5V5.5zm.5 4h1.7c.9 0 1.6-.7 1.6-1.7s-.7-1.7-1.6-1.7h-1.7v3.4zm6.5-1.3c1.3 0 2.3 1 2.3 2.4s-1 2.4-2.3 2.4-2.3-1-2.3-2.4 1-2.4 2.3-2.4zm0 .4c-1.1 0-1.8.9-1.8 2s.7 2 1.8 2 1.8-.9 1.8-2-.7-2-1.8-2zm3.5-4.1h.5l2.4 5.5 2.4-5.5h.5l-2.7 6.1h-.4l-2.7-6.1z" fill="#000"/>
        </svg>
      </div>

      {/* Google Pay */}
      <div className="payment-icon bg-white rounded border border-gray-200 p-2 h-8 flex items-center justify-center">
        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1 8.4v3.2h5.1c-.2 1.1-.8 2-1.7 2.6l2.7 2.1c1.6-1.5 2.5-3.7 2.5-6.3 0-.6-.1-1.2-.2-1.8H16.1z" fill="#4285F4"/>
          <path d="M8.8 11.8l-.6.5-2.1 1.6C7.4 16.2 9.6 17.5 12.4 17.5c2.3 0 4.3-.8 5.7-2.1L15.4 13c-.8.5-1.8.8-3 .8-2.3 0-4.2-1.5-4.9-3.6z" fill="#34A853"/>
          <path d="M6.1 6.4C5.8 7.2 5.6 8.1 5.6 9s.2 1.8.5 2.6l3.2-2.5c-.1-.4-.2-.8-.2-1.3s.1-.9.2-1.3L6.1 6.4z" fill="#FBBC05"/>
          <path d="M12.4 3.6c1.3 0 2.4.4 3.3 1.3L18 2.6C16.4 1.1 14.3.5 12.4.5 9.6.5 7.4 1.8 6.1 4.1l3.2 2.5c.7-2.1 2.6-3.6 4.9-3.6z" fill="#EA4335"/>
        </svg>
      </div>
    </div>
  );
};

export default PaymentIcons;