import React from 'react';

export default function Table({ columns, data, striped = false }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={striped && rowIndex % 2 === 1 ? 'striped' : ''}>
            {Object.values(row).map((val, valIndex) => (
              <td key={valIndex}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}