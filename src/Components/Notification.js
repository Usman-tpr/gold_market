import React, { useState, useEffect } from 'react';

const Notification = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000); // Close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-yellow-500 text-black text-center px-10 py-4 rounded-lg shadow-lg">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
