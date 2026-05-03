import React from 'react';

export default function WhatsAppButton() {
  const number = '916382405660'; /* replace with +91XXXXXXXXXX */

  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-50 group"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping" />

      {/* Button circle */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:scale-110 transition-transform duration-200 text-xl font-bold">
        W
      </span>

      {/* Tooltip */}
      <span className="absolute right-16 bottom-3 bg-[#1A2A3A] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
