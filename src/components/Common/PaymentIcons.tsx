'use client';
import React from 'react';

const PaymentIcons: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`payment-icons flex items-center gap-2 ${className}`}>
      {/* Visa */}
      <div className="payment-icon bg-white rounded border border-gray-200 px-3 py-2 h-8 flex items-center justify-center min-w-[50px]">
        <svg width="32" height="10" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3 1.2L11.8 8.8h1.9l1.5-7.6h-1.9zM21.8 1.2c-.6 0-1 .3-1.2.7L16.9 8.8h2l.8-2.2h2.5l.2 2.2h1.8L23.6 1.2h-1.8zm.3 4.5h-1.6l1.3-3.5.3 3.5zM8.1 1.2L6.2 6.5 5.9 4.8c-.3-1.1-1.2-2.3-2.3-2.9L5.4 8.8h2.1l3.1-7.6H8.1zM3.2 1.2H.1l0 .2c2.3.6 3.8 2 4.4 3.7L3.2 1.2z" fill="#1A1F71"/>
        </svg>
      </div>

      {/* Mastercard */}
      <div className="payment-icon bg-white rounded border border-gray-200 px-3 py-2 h-8 flex items-center justify-center min-w-[50px]">
        <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="9" r="9" fill="#EB001B"/>
          <circle cx="19" cy="9" r="9" fill="#F79E1B"/>
          <path d="M15 2.7c1.9 1.4 1.9 5.2 0 6.6-1.9-1.4-1.9-5.2 0-6.6z" fill="#FF5F00"/>
        </svg>
      </div>

      {/* American Express */}
      <div className="payment-icon bg-white rounded border border-gray-200 px-3 py-2 h-8 flex items-center justify-center min-w-[50px]">
        <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="18" rx="2" fill="#006FCF"/>
          <path d="M6.5 5.5h-2L4 7.5 3.5 5.5h-2L3 9l-1.5 3h2L4 10.5l.5 1.5h2L5 9l1.5-3.5z" fill="white"/>
          <path d="M10 12V5.5h2.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H11V12H10zm1.5-4V6.5H13c.3 0 .5.2.5.5s-.2.5-.5.5h-1.5z" fill="white"/>
          <path d="M16.5 5.5V12H20V10.5h-2V9h2V7.5h-2V7h2.5V5.5h-3.5z" fill="white"/>
          <path d="M22.5 5.5L24 9l1.5-3.5h1.5L24.5 12h-1L21 5.5h1.5z" fill="white"/>
        </svg>
      </div>

      {/* PayPal */}
      <div className="payment-icon bg-white rounded border border-gray-200 px-3 py-2 h-8 flex items-center justify-center min-w-[50px]">
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.8 2h4.6c2.4 0 4.2 1.5 3.9 3.8-.4 2.8-2.1 3.7-4.7 3.7H8.8L7.9 16H5.7L6.8 2z" fill="#003087"/>
          <path d="M11.3 5.8h4.6c2.4 0 4.2 1.5 3.9 3.8-.4 2.8-2.1 3.7-4.7 3.7h-1.8l-.9 2.7h-2.2l1.1-10.2z" fill="#0070BA"/>
          <path d="M15.8 9.6h4.6c2.4 0 4.2 1.5 3.9 3.8-.2 1.8-1.3 3.1-3.1 3.5h-3.6l-.8-7.3z" fill="#009CDE"/>
        </svg>
      </div>

      {/* Apple Pay */}
      <div className="payment-icon bg-black rounded border border-gray-200 px-3 py-2 h-8 flex items-center justify-center min-w-[50px]">
        <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 3.2c-.4.5-1 .8-1.6.8-.1-.6.2-1.3.6-1.7.4-.4 1-.8 1.5-.8.1.6-.2 1.3-.5 1.7zm.6 1c-.9-.1-1.6.5-2 .5-.4 0-1-.5-1.7-.5-.9 0-1.7.5-2.2 1.3-.9 1.6-.2 4 .7 5.3.4.6.9 1.3 1.6 1.3.7 0 .9-.4 1.8-.4.8 0 1.1.4 1.8.4.7 0 1.2-.6 1.6-1.2.5-.7.7-1.4.7-1.5v-.1c-1.3-.5-1.3-2-.1-2.4-.6-.8-1.5-.9-1.8-.9z" fill="white"/>
          <path d="M12 2.8h1.2c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1h-1v1.3h-.2V2.8zm.2 2h1c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-1v1.8zm3.3-.7c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm0 .2c-.6 0-.9.4-.9 1s.3 1 .9 1 .9-.4.9-1-.3-1-.9-1zm2.8-2h.2l1.2 2.8 1.2-2.8h.2l-1.4 3.1h-.2L17.3 2.3z" fill="white"/>
        </svg>
      </div>

      {/* Google Pay */}
      <div className="payment-icon bg-white rounded border border-gray-200 px-3 py-2 h-8 flex items-center justify-center min-w-[50px]">
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 4.8v1.8h2.9c-.1.6-.4 1.1-.9 1.4l1.5 1.2c.9-.8 1.4-2 1.4-3.4 0-.3 0-.7-.1-1h-4.8z" fill="#4285F4"/>
          <path d="M5.8 6.8l-.3.3-1.2.9C5.2 9.3 6.7 10.2 8.5 10.2c1.3 0 2.4-.4 3.2-1.2l-1.5-1.2c-.5.3-1.1.5-1.7.5-1.3 0-2.4-.9-2.7-2.1z" fill="#34A853"/>
          <path d="M4.3 3.6c-.2.4-.3.9-.3 1.4s.1 1 .3 1.4l1.8-1.4c0-.2-.1-.5-.1-.7s0-.5.1-.7L4.3 3.6z" fill="#FBBC05"/>
          <path d="M8.5 2.8c.7 0 1.4.2 1.9.7l1.4-1.4C10.9 1.3 9.8.8 8.5.8c-1.8 0-3.3.9-4.2 2.2l1.8 1.4c.4-1.2 1.5-2 2.7-2z" fill="#EA4335"/>
        </svg>
      </div>

      {/* Generic secure payment badge */}
      <div className="payment-icon bg-gray-50 rounded border border-gray-200 px-2 py-2 h-8 flex items-center justify-center min-w-[40px]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1L3 3v4c0 3.1 2.1 6 5 6.9.9-.3 1.7-.8 2.4-1.4.7-.6 1.3-1.4 1.6-2.2.3-.8.5-1.7.5-2.6V3L8 1z" fill="#10B981"/>
          <path d="M7 9.5L5.5 8l1-1L7 7.5 9.5 5l1 1L7 9.5z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default PaymentIcons;