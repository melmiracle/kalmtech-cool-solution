"use client";

import { useState } from "react";

export default function MessengerButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      {hovered && (
        <div className="bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-xl shadow-lg whitespace-nowrap animate-fade-in">
          Chat with us on Messenger
        </div>
      )}

      {/* Button */}
      <a
        href="https://m.me/kalmtechcoolsolution"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on Facebook Messenger"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-2xl"
        style={{
          background: "#1877F2",
        }}
      >
        <MessengerIcon />
      </a>
    </div>
  );
}

function MessengerIcon() {
  return (
    <svg
      className="w-7 h-7 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.91.252 1.875.387 2.869.387 5.523 0 10-4.145 10-9.259S17.523 2 12 2zm1.043 12.467l-2.548-2.718-4.97 2.718 5.467-5.797 2.607 2.718 4.912-2.718-5.468 5.797z" />
    </svg>
  );
}
