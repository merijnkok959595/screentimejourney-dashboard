'use client';
import React from 'react';

const PaymentIconsImage: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`payment-icons flex items-center gap-3 ${className}`}>
      {/* Using public domain / widely available payment icons */}
      
      {/* Visa */}
      <div className="payment-icon bg-white rounded border border-gray-200 px-2 py-1 h-8 flex items-center justify-center min-w-[48px]">
        <img 
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCA0MCAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjQyOCAxLjVMMTQuODEyIDExLjVIMTcuMTI4TDE4Ljc0NCAxLjVIMTYuNDI4WiIgZmlsbD0iIzE0MzFCMyIvPgo8cGF0aCBkPSJNMjguMDYgMS41Qy0uNzIgMC0xLjIgMC4zNjctMS40NCAwLjg2N0wyMS4yMiAxMS41SDIzLjU2TDI0LjM4IDkuMTMzSDI3LjI2TDI3LjUgMTEuNUgyOS41NkwyNy41IDEuNUgyOC4wNlpNMjUuNjIgNi45OTlIMjMuOTJMMjUuMzggM0wyNS42MiA2Ljk5OVoiIGZpbGw9IiMxNDMxQjMiLz4KPHA8cGF0aCBkPSJNMTAuNTYgMS41TDguNDIgNy4xMzNMOC4wNiA1LjE2N0M3Ljc0IDMuOTMzIDYuNjYgMi42NjcgNS4zNCAyTDcuNTQgMTEuNUg5Ljk0TDEzLjAyIDEuNUgxMC41NloiIGZpbGw9IiMxNDMxQjMiLz4KPHA8cGF0aCBkPSJNNC4wNiAxLjVIMC4xNkwwIDEuNzY3QzQuNzYgMi44MzMgOC4xIDUuNTY3IDkuNDQgOS4zTDcuOTQgMi4yNjdDNy42NCAxLjM2NyA2Ljk0IDEuNDMzIDUuOTggMS41SDQuMDZaIiBmaWxsPSIjMTQzMUIzIi8+Cjwvc3ZnPgo="
          alt="Visa" 
          className="h-3 w-auto"
        />
      </div>

      {/* Mastercard */}
      <div className="payment-icon bg-white rounded border border-gray-200 px-2 py-1 h-8 flex items-center justify-center min-w-[48px]">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-red-500"></div>
          <div className="w-5 h-5 rounded-full bg-yellow-500 -ml-3"></div>
        </div>
      </div>

      {/* American Express */}
      <div className="payment-icon bg-blue-600 rounded border border-gray-200 px-2 py-1 h-8 flex items-center justify-center min-w-[48px]">
        <span className="text-white text-xs font-bold">AMEX</span>
      </div>

      {/* Discover */}
      <div className="payment-icon bg-orange-500 rounded border border-gray-200 px-2 py-1 h-8 flex items-center justify-center min-w-[48px]">
        <span className="text-white text-xs font-bold">DISC</span>
      </div>

      {/* PayPal */}
      <div className="payment-icon bg-blue-500 rounded border border-gray-200 px-2 py-1 h-8 flex items-center justify-center min-w-[48px]">
        <span className="text-white text-xs font-bold">PayPal</span>
      </div>

      {/* Apple Pay */}
      <div className="payment-icon bg-black rounded border border-gray-200 px-2 py-1 h-8 flex items-center justify-center min-w-[48px]">
        <span className="text-white text-xs">🍎 Pay</span>
      </div>

      {/* Google Pay */}
      <div className="payment-icon bg-white rounded border border-gray-200 px-2 py-1 h-8 flex items-center justify-center min-w-[48px]">
        <span className="text-gray-700 text-xs font-medium">G Pay</span>
      </div>

      {/* SSL/Security Badge */}
      <div className="payment-icon bg-green-500 rounded border border-gray-200 px-2 py-1 h-8 flex items-center justify-center min-w-[48px]">
        <span className="text-white text-xs">🔒 SSL</span>
      </div>
    </div>
  );
};

export default PaymentIconsImage;