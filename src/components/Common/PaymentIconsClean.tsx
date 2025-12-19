'use client';
import React from 'react';

const PaymentIconsClean: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`payment-icons flex items-center gap-2 ${className}`}>
      {/* Visa - Official colors and styling */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-3 py-1.5 h-8 flex items-center justify-center min-w-[50px] shadow-sm">
        <div className="text-blue-700 font-bold text-sm tracking-wider">VISA</div>
      </div>

      {/* Mastercard - Official colors */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-3 py-1.5 h-8 flex items-center justify-center min-w-[50px] shadow-sm">
        <div className="flex items-center gap-0.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 -ml-1.5"></div>
        </div>
      </div>

      {/* American Express - Official styling */}
      <div className="payment-icon bg-blue-600 border border-gray-200 rounded px-3 py-1.5 h-8 flex items-center justify-center min-w-[50px] shadow-sm">
        <div className="text-white font-bold text-xs">AMEX</div>
      </div>

      {/* PayPal - Clean and recognizable */}
      <div className="payment-icon bg-blue-500 border border-gray-200 rounded px-3 py-1.5 h-8 flex items-center justify-center min-w-[50px] shadow-sm">
        <div className="text-white font-semibold text-xs">PayPal</div>
      </div>

      {/* Apple Pay - Elegant black */}
      <div className="payment-icon bg-black border border-gray-200 rounded px-3 py-1.5 h-8 flex items-center justify-center min-w-[50px] shadow-sm">
        <div className="text-white text-xs font-medium flex items-center gap-1">
          <span>🍎</span>
          <span>Pay</span>
        </div>
      </div>

      {/* Google Pay - Clean Google styling */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-3 py-1.5 h-8 flex items-center justify-center min-w-[50px] shadow-sm">
        <div className="text-gray-700 text-xs font-medium">G Pay</div>
      </div>

      {/* Security Badge */}
      <div className="payment-icon bg-green-50 border border-green-200 rounded px-3 py-1.5 h-8 flex items-center justify-center min-w-[50px] shadow-sm">
        <div className="text-green-700 text-xs font-medium flex items-center gap-1">
          <span>🔒</span>
          <span>SSL</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentIconsClean;