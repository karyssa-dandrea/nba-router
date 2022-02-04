import React from 'react';

export default function Form({ selected, setSelected, species }) {
  return (
    <div>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {species.map((spec) => (
          <option value={spec} key={spec}>
            {spec}
          </option>
        ))}
      </select>
    </div>
  );
}
