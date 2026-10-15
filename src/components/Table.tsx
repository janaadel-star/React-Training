// @ts-nocheck
import React from 'react';

export default function Table({ columns, data, striped = false }) {
  return (
    <table style={{ width: 'auto', borderCollapse: 'collapse', margin: '0 auto' }}>
      <thead>
        <tr style={{ backgroundColor: '#f1f5f9' }}>
          {columns.map((col, index) => (
            <th key={index} style={{ 
              border: '1px solid #0f274e', // الخطوط الداخلية بلون #0f274e
              padding: '10px 20px', 
              textAlign: 'left',
              color: '#0f274e',
              fontWeight: 'bold'
            }}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} style={{ backgroundColor: striped && rowIndex % 2 === 1 ? '#f8fafc' : '#ffffff' }}>
            {Object.values(row).map((val, valIndex) => (
              <td key={valIndex} style={{ 
                border: '1px solid #0f274e', // الخطوط الفاصلة بين البيانات بنفس اللون
                padding: '10px 20px',
                color: '#334155'
              }}>
                {String(val)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}