import React from 'react';

export default function Card({ title, description, image, children }) {
  return (
    <div>
      {image && <img src={image} alt={title} />}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}