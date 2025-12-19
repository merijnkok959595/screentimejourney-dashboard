'use client';
import React from 'react';

const PaymentIconsCDN: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`payment-icons flex items-center gap-2 ${className}`}>
      {/* Using Iconify CDN for professional payment icons */}
      
      {/* Visa */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-2 py-1.5 h-8 flex items-center justify-center min-w-[44px] shadow-sm">
        <img 
          src="https://api.iconify.design/logos:visa.svg" 
          alt="Visa" 
          className="h-4 w-auto"
          loading="lazy"
        />
      </div>

      {/* Mastercard */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-2 py-1.5 h-8 flex items-center justify-center min-w-[44px] shadow-sm">
        <img 
          src="https://api.iconify.design/logos:mastercard.svg" 
          alt="Mastercard" 
          className="h-4 w-auto"
          loading="lazy"
        />
      </div>

      {/* American Express */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-2 py-1.5 h-8 flex items-center justify-center min-w-[44px] shadow-sm">
        <img 
          src="https://api.iconify.design/logos:amex.svg" 
          alt="American Express" 
          className="h-4 w-auto"
          loading="lazy"
        />
      </div>

      {/* PayPal */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-2 py-1.5 h-8 flex items-center justify-center min-w-[44px] shadow-sm">
        <img 
          src="https://api.iconify.design/logos:paypal.svg" 
          alt="PayPal" 
          className="h-4 w-auto"
          loading="lazy"
        />
      </div>

      {/* Apple Pay */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-2 py-1.5 h-8 flex items-center justify-center min-w-[44px] shadow-sm">
        <img 
          src="https://api.iconify.design/simple-icons:applepay.svg?color=%23000" 
          alt="Apple Pay" 
          className="h-4 w-auto"
          loading="lazy"
        />
      </div>

      {/* Google Pay */}
      <div className="payment-icon bg-white border border-gray-200 rounded px-2 py-1.5 h-8 flex items-center justify-center min-w-[44px] shadow-sm">
        <img 
          src="https://api.iconify.design/simple-icons:googlepay.svg?color=%234285f4" 
          alt="Google Pay" 
          className="h-4 w-auto"
          loading="lazy"
        />
      </div>

      {/* Security Badge */}
      <div className="payment-icon bg-green-50 border border-green-200 rounded px-2 py-1.5 h-8 flex items-center justify-center min-w-[44px] shadow-sm">
        <div className="text-green-600 text-xs font-medium">🔒 SSL</div>
      </div>
    </div>
  );
};

export default PaymentIconsCDN;