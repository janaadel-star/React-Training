// @ts-nocheck
import React from 'react';

export default function Card({ title, description, image, children }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white max-w-sm mb-4">
      {image && <img src={image} alt={title || 'Card image'} className="w-full h-40 object-cover rounded mb-3" />}
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      {description && <p className="text-gray-600 mb-3">{description}</p>}
      {children && <div className="mt-3 border-t pt-2">{children}</div>}
    </div>
  );
}