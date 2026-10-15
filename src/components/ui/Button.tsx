// @ts-nocheck
import React from 'react';

export default function Button({ text, variant = 'primary', onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: '#0f274e', 
        color: '#ffffff',           
        padding: '10px 10px',
        border: 'none',
        borderRadius: '50px',
        fontSize: '1rem',
        fontWeight: '400',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'background-color 0.2s'
      }}
    >
      {text}
    </button>
  );
}