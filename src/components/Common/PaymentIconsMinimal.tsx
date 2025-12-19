'use client';
import React from 'react';

const PaymentIconsMinimal: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`payment-icons-minimal flex items-center gap-1.5 ${className}`}>
      {/* Visa */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-2 py-1 h-6 flex items-center justify-center min-w-[36px]">
        <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.1 1L8.9 7h1.4l1.2-6H10.1zM16.4 1c-.4 0-.7.2-.8.5L13.3 7h1.5l.6-1.7h1.9l.2 1.7h1.3L17.8 1h-1.4zm.2 3.4h-1.2l1-2.6.2 2.6zM6.1 1L4.7 5.2 4.4 3.6c-.2-.8-.9-1.7-1.7-2.1L4.1 7h1.6l2.4-6H6.1zM2.4 1H0l0 .2c1.7.4 2.9 1.5 3.3 2.8L2.4 1z" fill="#1A1F71"/>
        </svg>
      </div>

      {/* Mastercard */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-2 py-1 h-6 flex items-center justify-center min-w-[36px]">
        <div className="flex items-center gap-0">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 -ml-1.5"></div>
        </div>
      </div>

      {/* American Express */}
      <div className="payment-icon bg-blue-600 border border-gray-200 rounded px-2 py-1 h-6 flex items-center justify-center min-w-[36px]">
        <div className="text-white font-bold text-xs">AE</div>
      </div>

      {/* Discover */}
      <div className="payment-icon bg-orange-500 border border-gray-200 rounded px-2 py-1 h-6 flex items-center justify-center min-w-[36px]">
        <div className="text-white font-bold text-xs">D</div>
      </div>

      {/* Apple Pay */}
      <div className="payment-icon bg-black border border-gray-200 rounded px-2 py-1 h-6 flex items-center justify-center min-w-[36px]">
        <svg width="16" height="6" viewBox="0 0 16 6" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.2 2.4c-.3.4-.8.6-1.3.6-.1-.5.2-1 .5-1.3.3-.3.8-.6 1.2-.6.1.5-.1 1-.4 1.3zm.5.8c-.7-.1-1.3.4-1.6.4-.3 0-.8-.4-1.4-.4-.7 0-1.4.4-1.8 1-.8 1.3-.2 3.2.5 4.3.4.5.8 1.1 1.3 1.1.5 0 .7-.3 1.4-.3.7 0 .9.3 1.4.3.6 0 .9-.5 1.2-.9.4-.6.5-1.1.5-1.2v0c-1-.4-1-1.6-.1-1.9-.5-.6-1.2-.7-1.4-.7z"/>
        </svg>
      </div>

      {/* Google Pay */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-2 py-1 h-6 flex items-center justify-center min-w-[36px]">
        <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 2.4v1.2h2c-.1.4-.3.7-.6.9l1 .8c.6-.5.9-1.3.9-2.2 0-.2 0-.5-.1-.7H7z" fill="#4285F4"/>
          <path d="M3.9 3.4l-.2.2-.8.5c.5 1 1.4 1.7 2.6 1.7.8 0 1.5-.3 2-.8l-1-.8c-.3.2-.7.3-1 .3-.8 0-1.5-.5-1.6-1.1z" fill="#34A853"/>
          <path d="M2.9 1.8c-.1.2-.2.5-.2.7s.1.5.2.7l1.2-.7c0-.1-.1-.3-.1-.4s0-.3.1-.4L2.9 1.8z" fill="#FBBC05"/>
          <path d="M5.5 1.4c.5 0 .9.1 1.2.4l.9-.9C7 .5 6.3.2 5.5.2c-1.2 0-2.2.6-2.8 1.4l1.2.7c.3-.7.9-1.1 1.6-1.1z" fill="#EA4335"/>
        </svg>
      </div>

      {/* PayPal */}
      <div className="payment-icon bg-blue-500 border border-gray-200 rounded px-2 py-1 h-6 flex items-center justify-center min-w-[36px]">
        <div className="text-white font-bold text-xs">PP</div>
      </div>

      {/* Generic Credit Card */}
      <div className="payment-icon bg-gray-700 border border-gray-200 rounded px-2 py-1 h-6 flex items-center justify-center min-w-[36px]">
        <svg width="14" height="10" viewBox="0 0 14 10" fill="white" xmlns="http://www.w3.org/2000/svg">
          <rect width="14" height="10" rx="1" fill="currentColor"/>
          <rect x="1" y="3" width="12" height="1" fill="white"/>
          <rect x="1" y="6" width="4" height="1" fill="white"/>
        </svg>
      </div>

      {/* Security Badge */}
      <div className="payment-icon bg-green-500 border border-green-400 rounded px-2 py-1 h-6 flex items-center justify-center min-w-[36px]">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0L2 1v2.5c0 1.9 1.3 3.7 3 4.5 1.7-.8 3-2.6 3-4.5V1L5 0z"/>
          <path d="M4 6L3 5l.7-.7L4 4.6 6.3 2l.7.7L4 6z" fill="#10B981"/>
        </svg>
      </div>
    </div>
  );
};

export default PaymentIconsMinimal;